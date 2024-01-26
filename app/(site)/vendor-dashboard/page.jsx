"use client";
import LoadingScreen from "@/app/components/loading.component";
import Chart from "chart.js/auto";
import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../vendor-dashboard/style.module.css";

export default function VendorDahsboard() {
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(new Date());
  const chartRef = useRef(null);
  const data = [12, 19, 3, 5, 2, 3];
  const labels = ["January", "February", "March", "April", "May", "June"];

  const onChange = (newDate) => {
    setDate(newDate);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Data",
              data: data,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [data, labels]);
  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="w-[85%] h-full mx-auto">
          <h1>Vendor Dashboard</h1>
          <div className="w-full flex flex-col lg:flex-row items-center justify-between h-[40vh]">
            <div>
              <Calendar onChange={onChange} value={date} />
            </div>
            <div className="w-[100%] h-full md:w-full lg:w-[65%] flex items-center justify-center">
              <canvas ref={chartRef} className="canva" id="Chart" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
