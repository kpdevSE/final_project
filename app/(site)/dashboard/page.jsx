"use client";
import LoadingScreen from "@/app/components/loading.component";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

    if (status === "authenticated") {
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
        <div className="w-full">
          <UserHeroSection />
          <h1 className="text-5xl font-semibold text-center">Our Team</h1>
          <Example />

          <div className="w-[85%] mx-auto">
            <div className="w-full h-full mx-auto flex flex-col justify-center items-center ">
              <p className="text-[50px] text-center">
                Hiii......... {session?.user?.name}
              </p>
              <p className="lg:text-[50px] text-center text-[20px]">
                Hiii......... {session?.user?.email}
              </p>
            </div>
          </div>
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
