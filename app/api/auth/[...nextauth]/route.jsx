import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../libs/prismadb";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "kpdev@gmail.com" },
        password: { label: "Password", type: "password" },
        username: { label: "Username", type: "text", placeholder: "kpdev" },
      },

      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          throw new Error("Please enter Email and Password");
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !user?.hashPassword) {
          throw new Error("No User Found");
        }
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashPassword
        );
        if (!passwordMatch) {
          throw new Error("password Incorect");
        }
        return user;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
