"use client";

import LoadingScreen from "@/app/components/loading.component";
import Navigation from "@/app/components/navigation.component";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Weddiing() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/weddings");

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
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Navigation />
          <div className="w-[85%] h-full mx-auto relative top-44">
            <form className="lg:w-[40%] mx-auto md:w-[80%] w-[100%]">
              <label
                htmlFor="default-search"
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
            <div className="grid place-items-center grid-cols-1 mt-9 lg:grid-cols-3 gap-3 md:grid-cols-2">
              {data.map((event) => (
                <div key={event.id} className="w-[300px] flex flex-col gap-2">
                  <div className="w-full h-[200px]">
                    <Image
                      src={event.imageUrl}
                      width={300}
                      height={100}
                      alt=""
                      className="w-full rounded-lg h-full"
                    />
                  </div>

                  <p className="text-2xl font-semibold">{event.option}</p>
                  <p className="text-3xl font-semibold">{event.comapany}</p>
                  <div className="text-md">
                    <p>{event.email}</p>
                    <p>{event.address}</p>
                    <p>{event.number}</p>
                  </div>
                  <Link
                    href={`/weddiing/${event.id}`}
                    className="bg-black w-[50px] h-[35px] flex items-center justify-center text-white rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
            <div className="w-36 h-7 mx-auto items-center flex justify-center mt-10">
              <Link
                href={"/userview-dashboard"}
                className="bg-red-300 p-4 rounded-2xl font-semibold shadow-red-500 shadow-lg">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
