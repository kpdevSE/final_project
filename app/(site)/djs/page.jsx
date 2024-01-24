"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Weddiing() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/djs");

      if (response.ok) {
        const result = await response.json();
        setData(result.events);
        console.log(result.events);
      } else {
        toast.error("Error fetching events");
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Unexpected error occurred");
    }
  };
  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);

  return (
    <div className="w-[85%] h-full mx-auto relative top-44">
      <form className="lg:w-[40%] mx-auto md:w-[80%] w-[100%]">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-white"
            placeholder="Search Your Events......"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">
            Search
          </button>
        </div>
      </form>
      <div className="grid place-items-center grid-cols-4 mt-9">
        {data.map((event) => (
          <div key={event.id} className="w-[200px]">
            <Image src={event.imageUrl} width={200} height={100} alt="" />
            <h1 className="text-3xl font-semibold">{event.option}</h1>
            <h1>{event.company}</h1>
            <h1>{event.email}</h1>
            <h1>{event.address}</h1>
            <Link
              href={`/djs/${event.id}`}
              className="bg-black w-[200px] h-[50px] flex items-center justify-center text-white rounded-lg">
              More Information
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
