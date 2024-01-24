import Image from "next/image";
import Link from "next/link";

// Images
import bdays from "../../../public/bday/bdays.png";
import live from "../../../public/conserts/live.png";
import djs from "../../../public/djs/djs.png";
import get from "../../../public/gettogether/together.png";
import weddingImage from "../../../public/wedding/wedding.png";

export default function UserDashboard() {
  const dummyData = [
    {
      id: "1",
      title: "Weddings",
      link: "/weddiing",
      image: weddingImage,
    },
    {
      id: "2",
      title: "DJ",
      link: "/djs",
      image: djs,
    },
    {
      id: "3",
      title: "Get Together",
      link: "/gettogether",
      image: get,
    },
    {
      id: "4",
      title: "Live Concerts",
      link: "/conserts",
      image: live,
    },
    {
      id: "5",
      title: "Birthdays",
      link: "/birthday",
      image: bdays,
    },
  ];
  return (
    <div className="w-[85%] h-full mx-auto relative top-44">
      <div className="grid place-items-center grid-cols-1 lg:grid-cols-4 gap-8 mt-9 md:grid-cols-2 ">
        {dummyData.map((e) => {
          return (
            <Link href={e.link}>
              <div
                className="w-[200px] h-[250px]flex item-center justify-center flex-col rounded-lg shadow-lg shadow-slate-500"
                key={e.id}>
                <Image src={e.image} className="w-[200px] h-[200px] " alt="" />
                <h1 className="text-center">{e.title}</h1>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="w-36 h-7 mx-auto items-center flex justify-center mt-10">
        <Link
          href={"/dashboard"}
          className="bg-red-300 p-4 rounded-2xl font-semibold shadow-red-500 shadow-lg">
          Go Back
        </Link>
      </div>
    </div>
  );
}
