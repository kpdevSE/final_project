import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Link href={"/register"}>Register Here</Link>
      <Link href={"/login"}>Login Here</Link>
    </div>
  );
}
