import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

// Images
import Image from "next/image";
import headerImage from "../public/homePage/HdrImg.png";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-gradient-to-l from-[#f1d8f4]">
      {/* <div className="flex items-center justify-center gap-10 w-full h-screen text-[20px] font-semibold">
        // <Link href={"/register"}>Register User</Link>
        // <Link href={"/login"}>Login User</Link>
        // <Link href={"/admin-login"}>Admin Login</Link>
        // <Link href={"/vendor-register"}>Vendro Register</Link>
        // <Image src={logo} />
      </div> */}

      {/* Heading Section */}
      <div className="w-[85%] lg:h-[70vh] h-[60vh] mx-auto ">
        <div className="w-[100%] h-[70vh] flex items-center justify-center lg:pt-[250px] md:pt-5">
          <Image src={headerImage} className="w-full object-cover h-[60vh] " />
        </div>
      </div>
      {/* End OF Heading Section */}

      {/* Our journey Section */}
      <div
        className="w-[55%] h-[40vh] flex items-center justify-center mx-auto text-center lg:mt-12"
        data-aos="fade-right">
        <div>
          <h1 className="text-[50px] font-bold">Our Journey</h1>
          <div className="w-[20%] mx-auto bg-teal-400 rounded-lg h-[5px]"></div>
          <div className="mt-3 p-1">
            <p className="lg:text-2xl md:text-xl text-sm ">
              "Welcome to “EventZ”, your go-to for transforming any occasion
              into an unforgettable experience. Our dedicated team specializes
              in seamless and creative event planning, From weddings to
              corporate gatherings. Let “EventZ” be your trusted partner in
              turning dreams into reality, leaving you free to focus on creating
              cherished, lasting memories."
            </p>
          </div>
        </div>
      </div>
      {/* End OF Our Journey Section */}
    </div>
  );
}
