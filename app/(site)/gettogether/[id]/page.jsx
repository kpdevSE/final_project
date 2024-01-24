import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function SingleEvent({ params }) {
  const eventz = await prisma.eventz.findFirst({
    where: {
      id: params.id,
    },
  });

  console.log(eventz);
  return (
    <div className="w-[85%] mx-auto h-[80vh] relative top-44">
      <h1>Dynamic route</h1>
      <div className="flex justify-between items-center w-full">
        <Image src={eventz.imageUrl} width={300} height={300} alt="" />
      </div>
      <p>{eventz.address}</p>
      <div className="w-36 h-7 mx-auto items-center flex justify-center mt-10">
        <Link
          href={"/gettogether"}
          className="bg-red-300 p-4 rounded-2xl font-semibold shadow-red-500 shadow-lg">
          Go Back
        </Link>
      </div>
    </div>
  );
}
