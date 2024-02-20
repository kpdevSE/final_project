import Footer from "@/app/components/footer";
import VendorNavigationPanel from "@/app/components/vendor-navigation";
import VendorComments from "@/app/components/vendorcomments";
import {PrismaClient} from "@prisma/client";
import Image from "next/image";
import {CgProfile} from "react-icons/cg";
import {FaMobileAlt} from "react-icons/fa";
import {IoLocation} from "react-icons/io5";
import {MdAttachEmail} from "react-icons/md";
import RelatedVendorevents from "../../related-vendors-events/page";

const prisma = new PrismaClient();

export default async function SingleEvent({params})
{
  const eventz = await prisma.eventz.findFirst({
    where: {
      id: params.id,
    },
  });

  return (
    <div>
      <div className="w-[85%] mx-auto h-full">
        <VendorNavigationPanel />
        <div className="w-[100%] lg:w-[100%] mx-auto h-full  md:flex-col lg:flex md:w-[75%] relative top-24">
          <p className="text-2xl">
            Category type:-{" "}
            <strong className="text-sky-700 font-semibold">
              {eventz.option}
            </strong>
          </p>
          <div className="flex justify-between items-start w-full gap-5 flex-col lg:flex-row md:flex-col mt-5">
            <div className="lg:w-[50%] md:w-full w-full">
              <Image
                src={eventz.imageUrl}
                width={550}
                height={500}
                alt=""
                className="w-[100%] rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-5 lg:w-[50%] w-full">
              <h1 className="lg:text-6xl text-3xl font-semibold md:text-4xl">
                {eventz.comapany}
              </h1>
              <p className="leading-relaxed mt-10">{eventz.description}</p>
              <div className="mt-10 flex flex-col gap-5">
                <div className="flex items-center justify-start gap-2">
                  <MdAttachEmail className="text-xl" />
                  <p>{eventz.email}</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <IoLocation className="text-xl" />
                  <p>{eventz.address}</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <CgProfile className="text-xl" />
                  <p>{eventz.firstName + " " + eventz.lastName}</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <FaMobileAlt className="text-xl" />
                  <p>{eventz.number}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <VendorComments id={eventz.id} />
          </div>
        </div>
        <div className="mt-10">
          <p className="text-2xl font-semibold mt-36">Related Events ...</p>
          <RelatedVendorevents />
        </div>

      </div>
      <Footer />
    </div>
  );
}
