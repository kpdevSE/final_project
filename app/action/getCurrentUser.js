import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

import prisma from "../libs/prismadb";

export async function getSessison() {
  return getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!currentUser) {
      return null;
    }
    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
    };
  } catch (error) {
    return null;
  }
}
