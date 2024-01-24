"use client";
import LoadingScreen from "@/app/components/loading.component";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Images
import Navigation from "@/app/components/navigation.component";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    const securePage = async () => {
      const sessionClient = await getSession();
      if (!sessionClient) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <LoadingScreen />
        </div>
      ) : (
        <div>
          <Navigation />
          <div className="w-[85%] h-full mx-auto flex flex-col justify-center items-center relative top-44">
            <h1 className="text-[25px] text-center">Dashboard</h1>
            <p className="text-[50px] text-center">
              Hiii......... {session?.user?.name}
            </p>
            <p className="text-[50px] text-center">
              Hiii......... {session?.user?.email}
            </p>
            <Link
              href={"/userview-dashboard"}
              className="bg-teal-300 p-4 rounded-2xl font-semibold shadow-teal-500 shadow-lg">
              Watch Events
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
