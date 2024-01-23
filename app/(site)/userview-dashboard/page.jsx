import Link from "next/link";

export default function UserDashboard() {
  const dummyData = [
    {
      id: "1",
      title: "Weddings",
      link: "/weddiing",
    },
    {
      id: "2",
      title: "DJ",
      link: "/djs",
    },
    {
      id: "3",
      title: "Get Together",
      link: "/gettogether",
    },
    {
      id: "4",
      title: "Live Concerts",
      link: "/conserts",
    },
    {
      id: "5",
      title: "Birthdays",
      link: "/birthday",
    },
  ];
  return (
    <div className="w-[85%] h-screen mx-auto flex items-center justify-between">
      {dummyData.map((e) => {
        return (
          <Link href={e.link}>
            <div
              className="w-[200px] h-[200px]  bg-black text-white flex item-center justify-center rounded-lg shadow-lg shadow-slate-500"
              key={e.id}>
              <h1>{e.title}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
