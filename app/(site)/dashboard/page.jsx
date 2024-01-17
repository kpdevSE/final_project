"use client";
import LoadingScreen from "@/app/components/loading.component";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log(session);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <LoadingScreen />
        </div>
      ) : (
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <h1 className="text-[25px] text-center">Dashboard</h1>
          <p className="text-[50px] text-center">
            Hiii......... {session?.user?.name}
          </p>
          <p className="text-[50px] text-center">
            Hiii......... {session?.user?.email}
          </p>
          {status === "authenticated" ? (
            <button
              onClick={() => {
                signOut();
              }}>
              Log Out
            </button>
          ) : (
            <button
              onClick={() => {
                router.push("/login");
              }}>
              Log In
            </button>
          )}
        </div>
      )}
    </div>
  );
}
