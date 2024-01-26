import AdminNavigationPanel from "@/app/components/admin-navigation";
import { PrismaClient } from "@prisma/client";

import Image from "next/image";

const prisma = new PrismaClient();

// Images
import profile from "../../../../public/profile/profile.png";

export default async function SingleEvent({ params }) {
  const vendor = await prisma.vendor.findFirst({
    where: {
      id: params.id,
    },
  });

  return (
    <div className="w-[85%] mx-auto h-screen">
      <AdminNavigationPanel />
      <div className="w-[100%] lg:w-[100%] mx-auto h-full  md:flex-col lg:flex md:w-[75%] relative top-24">
        <div className="flex justify-between items-start w-full gap-5 flex-col lg:flex-row md:flex-col">
          <div className="lg:w-[50%] md:w-full w-full">
            <Image
              src={profile}
              width={350}
              height={300}
              alt=""
              className="w-[100%]"
            />
          </div>
          <div className="flex flex-col gap-5 lg:w-[50%] w-full">
            <h1 className="lg:text-6xl text-3xl font-semibold md:text-4xl">
              {vendor.name}
            </h1>
            <p className="text-md">{vendor.description}</p>
            <p>{vendor.address}</p>
            <p>{vendor.mobile}</p>
            <p>{vendor.email}</p>
            <p>{vendor.number}</p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
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
            <div className="flex flex-col items-center justify-start lg:flex-row md:flex-row gap-10">
              <button className="w-[200px] h-[50px] bg-amber-400 shadow-lg shadow-amber-200 rounded-lg font-semibold text-white">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
