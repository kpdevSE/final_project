import AdminNavigationPanel from "@/app/components/admin-navigation";
import EventsUpdateModalButton from "@/app/components/eventz-update-modal";
import Footer from "@/app/components/footer";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import AdminRelatedEvents from "../../admin-related-events/page";

const prisma = new PrismaClient();

export default async function SingleEvent({ params }) {
  const eventz = await prisma.eventz.findFirst({
    where: {
      id: params.id,
    },
  });

  return (
    <div>
      <div className="w-[85%] mx-auto h-full">
        <AdminNavigationPanel />
        <div className="w-[100%] lg:w-[100%] mx-auto h-full  md:flex-col lg:flex md:w-[75%] relative top-16">
          <p className="text-2xl font-semibold">
            This Catergory is :-{" "}
            <strong className="text-teal-500">{eventz.option}</strong>
          </p>
          <div className="flex justify-between items-start w-full gap-5 flex-col lg:flex-row md:flex-col mt-10">
            <div className="lg:w-[50%] md:w-full w-full">
              <Image
                src={eventz.imageUrl}
                width={550}
                height={500}
                alt=""
                className="w-[100%] rounded-[30px] shadow-lg shadow-slate-200"
              />
            </div>
            <div className="flex flex-col gap-5 lg:w-[50%] w-full">
              <h1 className="lg:text-6xl text-3xl font-semibold md:text-4xl">
                {eventz.comapany}
              </h1>
              <p>{eventz.address}</p>
              <p>{eventz.description}</p>
              <p>{eventz.email}</p>
              <p>{eventz.firstName + " " + eventz.lastName}</p>
              <p>{eventz.number}</p>
              <p className="text-lg font-semibold">Rs: {eventz.price}.00</p>
              <div className="flex flex-col items-center justify-start lg:flex-row md:flex-row gap-10">
                <EventsUpdateModalButton id={eventz.id} />
              </div>
            </div>
          </div>
        </div>
        <AdminRelatedEvents />

        <div className="mt-10 w-[85%] mx-auto flex items-center justify-center">
          <Link href={"/admin-events"}>
            <button className="p-3 bg-yellow-400 font-semibold rounded-lg shadow-lg shadow-orange-300">
              Go to Events
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
