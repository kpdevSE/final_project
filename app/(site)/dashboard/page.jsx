"use client";
import LoadingScreen from "@/app/components/loading.component";
import {motion} from "framer-motion";
import {getSession, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

// Images
import ButtonHover from "@/app/components/buttonhover";
import Ceo from "@/app/components/ceo";
import Footer from "@/app/components/footer";
import Navigation from "@/app/components/navigation.component";
import Example from "@/app/components/ourteam";
import Sponsers from "@/app/components/sponsers";
import UserAboutUs from "@/app/components/user-aboutus";
import UserHeroSection from "@/app/components/user-herosection";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

export default function Dashboard()
{
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const {data: session, status} = useSession();

  useEffect(() =>
  {
    AOS.init({
      duration: 2000,
    });

    const securePage = async () =>
    {
      const sessionClient = await getSession();
      if (!sessionClient)
      {
        router.push("/login");
      } else
      {
        setLoading(false);
      }
    };
    securePage();

    if (status === "authenticated")
    {
      toast.success(`Hey ${session?.user?.name}`);
      toast.success(`Hey ${session?.user?.email}`);
    }
  }, []);

  return (
    <div>
      <Navigation />
      {loading ? (
        <div>
          <LoadingScreen />
        </div>
      ) : (
        <div className="w-full overflow-x-hidden overflow-y-hidden">
          <UserHeroSection />
          <motion.h1
            className="text-5xl font-semibold text-center"
            initial={{y: 500}}
            animate={{y: 0}}
            transition={{duration: 1}}>
            Our Team
          </motion.h1>
          <Example />

          <div className="w-[85%] mx-auto h-full"></div>
          <Sponsers />
          <Ceo />
          <UserAboutUs />
        </div>
      )}

      <ButtonHover />

      <Footer />
    </div>
  );
}
