"use client";
import AdminNavigationPanel from "@/app/components/admin-navigation";
import LoadingScreen from "@/app/components/loading.component";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AdminEvents({ params }) {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/get-all-events");

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

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/get-all-events/${id}`, {
        method: "DELETE",
      });
      toast.success("Event Deleted Successfully");
      window.location.reload();
      fetchData();
    } catch (error) {
      console.error("Unexpected error during delete:", error);
    }
  };

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <AdminNavigationPanel />
          <div className="w-[85%] h-full mx-auto relative top-44 ">
            <div className="grid place-items-center grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
              {data.map((event) => (
                <div
                  key={event.id}
                  className="flex flex-col gap-2 bg-red-100 rounded-lg shadow-lg shadow-red-200 w-[300px]">
                  <div className="w-full h-[200px]">
                    <Image
                      src={event.imageUrl}
                      width={300}
                      height={100}
                      alt=""
                      className="w-full rounded-lg h-full"
                    />
                  </div>

                  <div className="p-2">
                    <h1 className="text-2xl font-semibold">{event.option}</h1>
                    <div className="w-full">
                      <h1 className="text-3xl font-semibold">
                        {event.comapany}
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-md ">{event.email}</h1>
                      <h1 className="text-md ">{event.address}</h1>
                      <h1 className="text-md ">{event.number}</h1>
                    </div>
                  </div>

                  <div className="flex items-start justify-between p-2">
                    <Link
                      href={`/admin-events/${event.id}`}
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
                    <button
                      className="w-[50px] h-[35px] bg-red-500 shadow-lg shadow-red-200 rounded-lg font-semibold text-white flex items-center justify-center gap-3"
                      onClick={() => {
                        handleDelete(event.id);
                      }}>
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
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
