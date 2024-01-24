import { PrismaClient } from "@prisma/client";
import Image from "next/image";

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
    </div>
  );
}
