"use client";
import AdminNavigationPanel from "@/app/components/admin-navigation";
import { axisClasses } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const data = [
  { value: 5, label: "A" },
  { value: 10, label: "B" },
  { value: 15, label: "C" },
  { value: 20, label: "D" },
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

export default function AdminDashboard() {
  const dummyAdminCredentials = {
    username: "kpdev",
    email: "kanishkapasindu6@gmail.com",
    password: "kpdev",
  };
  return (
    <div className="w-[85%] mx-auto h-full">
      <AdminNavigationPanel />
      <div className="mt-10">Hey..{dummyAdminCredentials.username}</div>

      <div className="mt-16 flex lg:flex-row md:flex-col flex-col items-center justify-between w-full">
        <div className="w-[60%]">
          <h1>Total Events</h1>
          <p>400 +</p>
        </div>
        <div className="shadow-lg shadow-gray-200 rounded-lg w-[100%] lg:w-[100%] flex lg:flex-row md:flex-col flex-col">
          {/* <BarChart
            series={[
              { data: [3, 4, 1, 6, 5], stack: "A", label: "Series A1" },
              { data: [4, 3, 1, 5, 8], stack: "A", label: "Series A2" },
              { data: [4, 2, 5, 4, 1], stack: "B", label: "Series B1" },
              { data: [2, 8, 1, 3, 1], stack: "B", label: "Series B2" },
              { data: [10, 6, 5, 8, 9], label: "Series C1" },
            ]}
            width={800}
            height={350}
            className="w-full"
          /> */}
          <PieChart
            series={[
              {
                arcLabel: (item) => `${item.label} (${item.value})`,
                arcLabelMinAngle: 45,
                data,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: "white",
                fontWeight: "bold",
              },
            }}
            {...size}
          />
          <BarChart
            className="w-full"
            dataset={dataset}
            xAxis={[{ scaleType: "band", dataKey: "month" }]}
            series={[
              { dataKey: "london", label: "Galle", valueFormatter },
              { dataKey: "paris", label: "Kandy", valueFormatter },
              { dataKey: "newYork", label: "Colombo", valueFormatter },
              { dataKey: "seoul", label: "Jaffna", valueFormatter },
            ]}
            {...chartSetting}
          />
        </div>
      </div>
      <div className="shadow-lg shadow-gray-200 w-[40%] flex items-center justify-center rounded-lg">
        <BarChart
          className="w-full"
          dataset={dataset}
          xAxis={[{ scaleType: "band", dataKey: "month" }]}
          series={[
            { dataKey: "london", label: "Galle", valueFormatter },
            { dataKey: "paris", label: "Kandy", valueFormatter },
            { dataKey: "newYork", label: "Colombo", valueFormatter },
            { dataKey: "seoul", label: "Jaffna", valueFormatter },
          ]}
          {...chartSetting}
        />
      </div>
    </div>
  );
}
