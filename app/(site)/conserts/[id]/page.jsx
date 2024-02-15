import CommentsView from "@/app/components/comments-view";
import Footer from "@/app/components/footer";
import ModalComponents from "@/app/components/modal.components";
import Navigation from "@/app/components/navigation.component";
import RatingView from "@/app/components/rating.components";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import RelatedConserts from "../../related-conserts/page";

const prisma = new PrismaClient();

export default async function SingleEvent({ params }) {
  const eventz = await prisma.eventz.findFirst({
    where: {
      id: params.id,
    },
  });

  console.log(eventz);
  return (
    <div>
      <Navigation />
      <div className="w-[85%] mx-auto h-[80vh] relative top-44">
        <div className="flex justify-between items-start w-full md:flex-col flex-col lg:flex-row gap-8">
          <div className="lg:w-[50%] md:w-[100%] w-[100%]">
            <Image
              src={eventz.imageUrl}
              width={300}
              height={300}
              alt=""
              className="w-full"
            />
          </div>
          <div className="lg:w-[45%] flex flex-col gap-3 md:w-[100%] w-[100%]">
            <p className="lg:text-5xl font-semibold  md:text-4xl text-3xl">
              {eventz.comapany}
            </p>

            <p className="lg:text-lg md:text-lg text-md">
              {eventz.description}
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                  />
                </svg>
                <p>{eventz.email}</p>
              </div>

              <div className="flex items-center justify-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <p>{eventz.address}</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <p>{eventz.firstName + " " + eventz.lastName}</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                <p>{eventz.number}</p>
              </div>
              <p className="text-lg font-semibold mt-5">
                Rs: {eventz.price}.00
              </p>
            </div>
            <ModalComponents />
          </div>
        </div>
        <div className="mt-16">
          <RelatedConserts />
        </div>
        <div className="mt-16">
          <RatingView id={eventz.id} />
        </div>
        <div className="mt-16">
          <CommentsView id={eventz.id} />
        </div>
        <div className="w-36 h-7 mx-auto items-center flex justify-center mt-16">
          <Link
            href={"/conserts"}
            className="bg-red-300 p-4 rounded-2xl font-semibold shadow-red-500 shadow-lg">
            Go Back
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
