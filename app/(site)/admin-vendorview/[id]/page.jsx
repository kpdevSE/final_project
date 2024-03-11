import AdminNavigationPanel from "@/app/components/admin-navigation";
import {PrismaClient} from "@prisma/client";
import {CgProfile} from "react-icons/cg";
import {FaMobileAlt, FaRegAddressCard} from "react-icons/fa";
import {MdOutlineDescription, MdOutlineMail} from "react-icons/md";

import Image from "next/image";

const prisma = new PrismaClient();

// Images
import profile from "../../../../public/profile/profile.png";

export default async function SingleEvent({params})
{
  const vendor = await prisma.vendor.findFirst({
    where: {
      id: params.id,
    },
  });

  return (
    <div>

      <div className="w-[85%] mx-auto h-[53vh]">
        <AdminNavigationPanel />
        <div className="w-[100%] lg:w-[100%] mx-auto h-full  md:flex-col lg:flex md:w-[75%] relative top-24">
          <div className="flex justify-between items-start w-full gap-5 flex-col lg:flex-row md:flex-col">
            <div className="lg:w-[50%] md:w-full w-full flex items-center justify-center">
              <Image
                src={profile}
                width={350}
                height={350}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-5 lg:w-[50%] w-full">
              <div className="flex items-center gap-4">
                <CgProfile className="lg:text-6xl text-3xl font-semibold md:text-4xl" />
                <h1 className="lg:text-6xl text-3xl font-semibold md:text-4xl">
                  {vendor.name}
                </h1>
              </div>
              <div>
              </div>
              <div className="flex items-center gap-3 text-xl">
                <MdOutlineDescription />
                <p className="text-md">{vendor.description}</p>
              </div>
              <div className="flex items-center gap-3 text-xl">
                <FaRegAddressCard />
                <p>{vendor.address}</p>
              </div>
              <div className="flex items-center gap-3 text-xl">
                <FaMobileAlt />
                <p>{vendor.mobile}</p>
              </div>
              <div className="flex items-center gap-3 text-xl">
                <MdOutlineMail />
                <p>{vendor.email}</p>
              </div>
              <div className="p-1">
                {vendor.status === "AVAILABLE" ? (
                  <div className="w-[100px] p-1 bg-green-400 rounded-[20px] flex items-center justify-center text-white font-semibold">
                    <p>Available</p>
                  </div>
                ) : null}
                {vendor.status === "BUSY" ? (
                  <div className="w-[100px] p-1 bg-yellow-400 rounded-[20px] flex items-center justify-center text-white font-semibold">
                    <p>Busy</p>
                  </div>
                ) : null}
                {vendor.status === "NOT_WORKING" ? (
                  <div className="w-[130px] p-1 bg-red-400 rounded-[20px] flex items-center justify-center text-white font-semibold">
                    <p>Unavailable</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  );
}
