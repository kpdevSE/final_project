"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-[25px] text-center">Dashboard</h1>
      <p className="text-[50px] text-center">
        Hiii......... {session?.user?.name}
      </p>
      <p className="text-[50px] text-center">
        Hiii......... {session?.user?.email}
      </p>
      <button
        onClick={() => {
          signOut();
          router.push("/regiter");
        }}>
        Log Out
      </button>
    </div>
  );
}
