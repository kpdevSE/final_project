"use client";
import { getSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Images
import Navigation from "@/app/components/navigation.component";
import { useEffect, useState } from "react";
import bdays from "../../../public/bday/bdayhome.jpg";
import live from "../../../public/conserts/liveconsertshome.jpg";
import djs from "../../../public/djs/djhome.jpg";
import get from "../../../public/gettogether/gettogetherhome.jpg";
import weddingImage from "../../../public/wedding/weddinghome.jpg";

export default function UserDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const dummyData = [
    {
      id: "1",
      title: "Weddings",
      link: "/weddiing",
      image: weddingImage,
    },
    {
      id: "2",
      title: "DJ",
      link: "/djs",
      image: djs,
    },
    {
      id: "3",
      title: "Get Together",
      link: "/gettogether",
      image: get,
    },
    {
      id: "4",
      title: "Live Concerts",
      link: "/conserts",
      image: live,
    },
    {
      id: "5",
      title: "Birthdays",
      link: "/birthday",
      image: bdays,
    },
  ];
  useEffect(() => {
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
    <div className="w-full h-full">
      <Navigation />
      <div className="w-[85%] h-full mx-auto relative top-44">
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 w-full h-full gap-3">
          {dummyData.map((e) => {
            return (
              <Link href={e.link}>
                <div
                  className="lg:w-[500px] h-[250px]flex item-center justify-center flex-col rounded-lg shadow-lg shadow-slate-500 w-full relative hover:bg-gradient-to-b hover:from-transparent hover:to-black"
                  key={e.id}>
                  <Image
                    src={e.image}
                    className="w-full h-[350px] rounded-lg object-cover "
                    alt=""
                  />
                  <h1 className="text-center absolute top-5 left-5 text-white text-2xl ">
                    {e.title}
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="w-36 h-7 mx-auto items-center flex justify-center mt-10">
          <Link
            href={"/dashboard"}
            className="bg-red-300 p-4 rounded-2xl font-semibold shadow-red-500 shadow-lg">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
