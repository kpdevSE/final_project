import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex items-center justify-center gap-10 w-full h-screen text-[20px] font-semibold">
      <Link href={"/register"}>Register User</Link>
      <Link href={"/login"}>Login User</Link>
      <Link href={"/admin-login"}>Admin Login</Link>
      <Link href={"/vendor-register"}>Vendro Register</Link>
    </div>
  );
}
