"use client";
import AdminNavigationPanel from "@/app/components/admin-navigation";
import Footer from "@/app/components/footer";
import {axisClasses} from "@mui/x-charts";
import {BarChart} from "@mui/x-charts/BarChart";
import Image from "next/image";
import {FaArrowUp} from "react-icons/fa";
import
{
  MdEmojiEvents,
  MdOutlineIncompleteCircle,
  MdPending,
} from "react-icons/md";
import {RiMoneyDollarCircleFill} from "react-icons/ri";
import logo from "../../../public/logo/logo.png";

const data = [
  {value: 5, label: "A"},
  {value: 10, label: "B"},
  {value: 15, label: "C"},
  {value: 20, label: "D"},
];

const size = {
  width: 400,
  height: 200,
};

const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: "Jan",
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: "Fev",
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: "Mar",
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: "Apr",
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: "May",
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: "June",
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: "July",
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: "Aug",
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: "Sept",
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: "Oct",
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: "Nov",
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: "Dec",
  },
];

const status = [
  {
    id: "1",
    title: "Total Events",
    count: "250+",
    icon: <MdOutlineIncompleteCircle />,
    iconTwo: <FaArrowUp />,
  },
  {
    id: "2",
    title: "Total Events Completed",
    count: "230+",
    icon: <MdEmojiEvents />,
    iconTwo: <FaArrowUp />,
  },
  {
    id: "3",
    title: "Total Pending Events",
    count: "23+",
    icon: <MdPending />,
    iconTwo: <FaArrowUp />,
  },
  {
    id: "4",
    title: "Total Payment Sharing",
    count: "Rs. 1.000.000.00+",
    icon: <RiMoneyDollarCircleFill />,
    iconTwo: <FaArrowUp />,
  },
];

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};

const valueFormatter = (value) => `${value}mm`;

export default function AdminDashboard()
{
  const dummyAdminCredentials = {
    username: "kpdev",
    email: "kanishkapasindu6@gmail.com",
    password: "kpdev",
  };
  return (
    <div>
      <div className="w-[85%] mx-auto h-full">
        <AdminNavigationPanel />
        <div className="mt-16">
          <Image src={logo} alt="" />
        </div>
        <div className="mt-6 w-full  flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold">Admin Dashboard</h2>

          <p className="text-red-400 text-xl font-semibold">
            Hey..{dummyAdminCredentials.username}
          </p>
        </div>

        <div className="mt-16 flex lg:flex-row md:flex-col flex-col items-center justify-between w-full gap-3 ">
          <div className="lg:w-[50%] w-full h-[250px] bg-gradient-to-l from-red-200 rounded-[25px] flex  items-center justify-center pl-12 p-4 gap-2">
            <div className="text-5xl">
              <MdOutlineIncompleteCircle />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h3 className="text-3xl font-semibold">Total Events</h3>
              <h4 className="text-3xl font-semibold text-red-800">250+</h4>
            </div>
            <div className=" bg-green-400 rounded-2xl text-green-800 font-semibold flex items-center justify-center gap-2 w-[100px] relative top-16 p-1">
              <FaArrowUp />
              <p>Grow</p>
            </div>

            {/* <p>
              In the vibrant journey of our organization, a remarkable number of
              events have been successfully completed, each contributing to our
              collective growth and success.
            </p> */}
          </div>
          <div className="shadow-lg shadow-gray-200 rounded-lg w-[100%] lg:w-[100%] flex lg:flex-row md:flex-col flex-col">
            <BarChart
              className="w-full"
              dataset={dataset}
              xAxis={[{scaleType: "band", dataKey: "month"}]}
              series={[
                {dataKey: "london", label: "Galle", valueFormatter},
                {dataKey: "paris", label: "Kandy", valueFormatter},
                {dataKey: "newYork", label: "Colombo", valueFormatter},
                {dataKey: "seoul", label: "Jaffna", valueFormatter},
              ]}
              {...chartSetting}
            />
          </div>
        </div>
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 place-items-center rounded-lg gap-6 mt-10 ">
          {status.map((e) => (
            <div
              className="lg:w-[100%] w-full h-[250px] bg-gradient-to-r from-orange-200 to-yellow-200 flex  items-center justify-around pl-12 p-4 gap-2 rounded-[25px]"
              key={e.id}>
              <div className="flex  items-center justify-center">
                <div className="text-5xl">{e.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{e.title}</h3>
                  <h4 className="text-xl font-semibold text-sky-900">
                    {e.count}
                  </h4>
                </div>
              </div>

              <div className=" bg-green-400 rounded-2xl text-green-800 font-semibold flex items-center justify-center gap-2 w-[100px] relative top-16 p-1">
                {e.iconTwo}
                <p>Grow</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
