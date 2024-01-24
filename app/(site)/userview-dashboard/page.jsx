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
    <div className="w-[85%] h-screen mx-auto flex items-center justify-between">
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
  );
}
