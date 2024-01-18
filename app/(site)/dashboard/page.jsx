"use client";
import LoadingScreen from "@/app/components/loading.component";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Images
import image from "../../../public/homePage/HdrImg.png";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

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
        <div className="w-full h-[100%] flex flex-col justify-center items-center relative top-[500px]">
          <h1 className="text-[25px] text-center">Dashboard</h1>
          <p className="text-[50px] text-center">
            Hiii......... {session?.user?.name}
          </p>
          <p className="text-[50px] text-center">
            Hiii......... {session?.user?.email}
          </p>
          <Image src={image} data-aos="fade-up" />
          <Image
            src={image}
            data-aos="fade-up"
            className="w-[500px] h-[35vh]"
          />
          <Image
            src={image}
            data-aos="fade-up"
            className="w-[500px] h-[35vh]"
          />
          <Image
            src={image}
            data-aos="fade-up"
            className="w-[500px] h-[35vh]"
          />
          <Image
            src={image}
            data-aos="fade-up"
            className="w-[500px] h-[35vh]"
          />
          <Image
            src={image}
            data-aos="fade-up"
            className="w-[500px] h-[35vh]"
          />
          <Image
            src={image}
            data-aos="fade-up"
            className="w-[500px] h-[35vh]"
          />
          <Image
            src={image}
            data-aos="fade-up"
            className="w-[500px] h-[35vh]"
          />
          <Image
            src={image}
            data-aos="fade-up"
            className="w-[500px] h-[35vh]"
          />
          <Image
            src={image}
            data-aos="fade-up"
            className="w-[500px] h-[35vh]"
          />
          <Image
            src={image}
            data-aos="fade-up"
            className="w-[500px] h-[35vh]"
          />
          <Image
            src={image}
            data-aos="fade-up"
            className="w-[500px] h-[35vh]"
          />
          <Image
            src={image}
            data-aos="fade-up"
            className="w-[500px] h-[35vh]"
          />
          <Image src={image} data-aos="fade-up" />
        </div>
      )}
    </div>
  );
}
