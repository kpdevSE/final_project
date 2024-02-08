import { getServerSession } from "next-auth";
import { FaHandPointRight } from "react-icons/fa6";
import { authOptions } from "./api/auth/[...nextauth]/route";

// Images
import Image from "next/image";
import Link from "next/link";
import events from "../public/gettogether/get together.png";
import Carousle from "./components/carousel";
import Footer from "./components/footer";
import HomeNavigation from "./components/home-navigation";
import Example from "./components/ourteam";
import Sponsers from "./components/sponsers";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="h-full">
      <HomeNavigation />
      <div className=" relative top-28 h-full">
        <Carousle />

        {/* Our journey Section */}
        <div className="w-[85%] h-full flex flex-col lg:flex-row items-center justify-between mx-auto text-center mt-24 gap-8">
          <div className="flex flex-col gap-10 " data-aos="fade-right">
            <div className="flex flex-col gap-3">
              <h1 className="lg:text-[40px] text-2xl font-bold">
                Events Planing Offerd
              </h1>
              <p>
                We offerd a wide range of event planing services to make your
                special ocasions
                <br />
                unforgetable.From weddings to corperative events. <br />
                our experianced team will handle every detail with precisioon
                and creativity
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="lg:text-[40px] text-2xl font-bold">
                Weddings Planing Services
              </h1>
              <p>
                We offerd a wide range of event planing services to make your
                special ocasions
                <br />
                unforgetable.From weddings to corperative events. <br />
                our experianced team will handle every detail with precisioon
                and creativity
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="lg:text-[40px] text-2xl font-bold">
                Corperate Events Planing
              </h1>
              <p>
                We offerd a wide range of event planing services to make your
                special ocasions
                <br />
                unforgetable.From weddings to corperative events. <br />
                our experianced team will handle every detail with precisioon
                and creativity
              </p>
            </div>
          </div>
          <div className="lg:w-[50%] md:w-full" data-aos="fade-left">
            <Image
              alt=""
              src={events}
              className="w-[500px] md:w-[600px] lg:w-[800px] rounded-3xl"
            />
          </div>
        </div>
        <div className="mt-16" data-aos="fade-down">
          <Example />
        </div>
        {/* Section */}
        <div className="w-[85%] mx-auto mt-28 flex flex-col justify-between lg:flex-row ">
          <div
            className="w-full text-center lg:text-left flex flex-col items-start justify-start gap-10 lg:w-[50%]"
            data-aos="zoom-out">
            <h1 className="text-3xl font-semibold text-center">
              Frequently Asked a Questions
            </h1>
            <p className="text-lg">
              Find Answers to common questions about event planing and the
              booking process
            </p>
            <div className="flex items-center justify-center lg:justify-start w-full">
              <Link href={"/register"}>
                <button className="w-[120px] h-14 border-2 border-black text-black cursor-pointer">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
          <div
            className="flex flex-col gap-8 lg:w-[50%] w-full lg:mt-0 mt-24"
            data-aos="zoom-in-left">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">
                How do i book an event?
              </h1>
              <div className="flex gap-4 items-center">
                <FaHandPointRight className="text-xl" />
                <div className="lg:w-[80%] w-full">
                  <p>
                    To Book An event,simply navigate to the event page, select
                    the desired data and time, and proceed to the checkout to
                    completeyour booking
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                What payement method are accepted?
              </h1>
              <div className="flex gap-4 items-center">
                <FaHandPointRight className="text-xl" />
                <div className="lg:w-[80%] w-full">
                  <p>
                    we accepted Online payment method using allmajor credits
                    cards, including Visa and American Express
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Can i cancel my booking?
              </h1>
              <div className="flex gap-4 items-center">
                <FaHandPointRight className="text-xl" />
                <div className="lg:w-[80%] w-full">
                  <p>
                    before when you are booking a event you must chat with the
                    vendor .if he accepted that date you can holda the event .if
                    he rejected that dat you can't. you can directly connect
                    with the vendor
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Is there a minimum age requirement?
              </h1>
              <div className="flex gap-4 items-center">
                <FaHandPointRight className="text-xl" />
                <div className="lg:w-[80%] w-full">
                  <p>
                    The minimum age requirenment varies depending on the
                    events.please refer to the event details for more
                    infromation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End OF Our Journey Section */}
        <Sponsers />
        <div className="mt-24">
          <Footer />
        </div>
      </div>
    </div>
  );
}
