"use client";
import LoadingScreen from "@/app/components/loading.component";
import {Modal} from "antd";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import toast from "react-hot-toast";

// Images
import Footer from "@/app/components/footer";
import VendorNavigationPanel from "@/app/components/vendor-navigation";
import logo from "../../../public/logo/logo.png";

export default function AdminEvents({params})
{
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const fetchData = async () =>
  {
    try
    {
      setloading(true);
      const response = await fetch("/api/vendors-events-all");

      if (response.ok)
      {
        const result = await response.json();
        setData(result.events);
        console.log(result.events);
        setloading(false);
      } else
      {
        toast.error("Error fetching events");
      }
    } catch (error)
    {
      console.error("Error fetching events:", error);
      toast.error("Unexpected error occurred");
    }
  };

  useEffect(() =>
  {
    fetchData();

  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(data);

  const handleSearch = (query) =>
  {
    const filtered = data.filter((event) =>
      event.option.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleChange = (e) =>
  {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  const handleDelete = async (id) =>
  {
    try
    {
      const response = await fetch(`/api/get-all-events/${id}`, {
        method: "DELETE",
      });
      toast.success("Event Deleted Successfully");
      window.location.reload();
      fetchData();
    } catch (error)
    {
      console.error("Unexpected error during delete:", error);
    }
  };

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <div className="w-[85%] h-full mx-auto relative top-16 ">
            <VendorNavigationPanel />
            <div className="flex items-center justify-between w-[95%] mx-auto">
              <Image src={logo} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                type="btn"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                onClick={() =>
                {
                  setOpen(true);
                }}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>

            <div className="grid place-items-center grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 mt-10">
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
                      href={`/vendor-events/${event.id}`}
                      className="bg-black w-[50px] h-[35px] flex items-center justify-center text-white rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        class="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <Modal
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              width={1000}
              height={1000}>
              <div className="w-full">
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
                      placeholder="Search Your Events Using Events Type......"
                      value={searchQuery}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </form>
              </div>
              <div>
                <div className="grid place-items-center grid-cols-1 mt-9 lg:grid-cols-2 md:grid-cols-1 gap-3">
                  {filteredItems.map((event) => (
                    <div
                      key={event.id}
                      className="w-[300px] flex flex-col gap-2">
                      <div
                        key={event.id}
                        className="w-[300px] flex flex-col gap-2">
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
                        <p className="text-3xl font-semibold">
                          {event.comapany}
                        </p>
                        <div className="text-md">
                          <p>{event.email}</p>
                          <p>{event.address}</p>
                          <p>{event.number}</p>
                        </div>
                        <Link
                          href={`/birthday/${event.id}`}
                          className="bg-black w-[50px] h-[35px] flex items-center justify-center text-white rounded-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Modal>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
