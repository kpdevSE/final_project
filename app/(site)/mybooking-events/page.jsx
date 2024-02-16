"use client";

import {Dialog, Transition} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {getSession, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {Fragment, useEffect, useState} from "react";
import toast from "react-hot-toast";
import {FaMoneyBillAlt, FaShoppingCart} from "react-icons/fa";
import {FiType} from "react-icons/fi";
import {HiDevicePhoneMobile} from "react-icons/hi2";
import {IoCloseSharp} from "react-icons/io5";
import
{
  MdDriveFileRenameOutline,
  MdMarkEmailRead,
  MdOutlineEmail,
} from "react-icons/md";
import {SlCalender} from "react-icons/sl";
import {TbBrandFramerMotion} from "react-icons/tb";

export default function MyBooking()
{
  const {data: session} = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [booking, setBooking] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchData = async () =>
  {
    try
    {
      const response = await fetch("/api/mybooking");
      if (response.ok)
      {
        const result = await response.json();
        console.log(result);
        if (result && result.bookings)
        {
          setBooking(result.bookings);
          console.log(booking);
        } else
        {
          console.error("Unexpected response format:", result);
        }
      } else
      {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error)
    {
      console.error("Error fetching events:", error);
      toast.error("Unexpected error occurred");
    }
  };
  const handleDelete = async (id) =>
  {
    try
    {
      setLoading(true);
      const response = await fetch(`/api/mybooking/${id}`, {
        method: "DELETE",
      });
      toast.success("event canceled successfully");
      window.location.reload();
      fetchData();
    } catch (error)
    {
      console.error("Unexpected error during delete:", error);
    }
  };

  const userEmailAccount = session?.user?.email;

  const mybooking = booking.filter(
    (booking) => booking.creatorEmail === userEmailAccount
  );
  console.log(mybooking);

  useEffect(() =>
  {
    const securePage = async () =>
    {
      const sessionClient = await getSession();
      if (!sessionClient)
      {
        router.push("/login");
      } else
      {
        setTimeout(() =>
        {
          setLoading(false);
        }, 1100);
      }
    };
    securePage();

    fetchData();
  }, []);
  return (
    <div>
      <div>
        <li
          className="hidden lg:block"
          onClick={() =>
          {
            setOpen(true);
          }}>
          <FaShoppingCart className="w-[30px] h-[30px] hover:text-[#01a2b7]" />
        </li>
      </div>
      <div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full">
                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-2xl">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4"></div>
                      </Transition.Child>
                      <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                        <div className="px-4 sm:px-6 flex items-center justify-between">
                          <Dialog.Title className="font-semibold leading-6 text-gray-900 text-xl">
                            Booking Section
                          </Dialog.Title>
                          <button
                            type="button"
                            className="relative rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setOpen(false)}>
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                          {mybooking.map((e) =>
                          {
                            return (
                              <div
                                key={e.id}
                                className="flex flex-col items-center justify-center gap-2">
                                <div className="w-full h-full p-1 border-2 border-black flex flex-col gap-2 rounded-2xl">
                                  <div className="flex items-center justify-start gap-3 ">
                                    <FiType className="text-2xl" />
                                    <p className="font-semibold">
                                      Event Category:{" "}
                                      <strong className="text-gray-600 text-lg">
                                        {" "}
                                        {e.category}
                                      </strong>
                                    </p>
                                  </div>
                                  <div className="flex items-center justify-start gap-3">
                                    <MdDriveFileRenameOutline className="text-2xl" />
                                    <p className="font-semibold">
                                      Name you given:
                                      <strong className="text-gray-600 text-lg">
                                        {" "}
                                        {e.userName}
                                      </strong>
                                    </p>
                                  </div>
                                  <div className="flex items-center justify-start gap-3">
                                    <MdMarkEmailRead className="text-2xl" />
                                    <p className="font-semibold">
                                      Your Email:
                                      <strong className="text-gray-600 text-lg">
                                        {" "}
                                        {e.creatorEmail}
                                      </strong>
                                    </p>
                                  </div>
                                  <div className="flex items-center justify-start gap-3">
                                    <HiDevicePhoneMobile className="text-2xl" />
                                    <p className="font-semibold">
                                      Your Mobile :
                                      <strong className="text-gray-600 text-lg">
                                        {" "}
                                        {e.mobile}
                                      </strong>
                                    </p>
                                  </div>
                                  <div className="flex items-center justify-start gap-3">
                                    <TbBrandFramerMotion className="text-2xl" />
                                    <p className="font-semibold">
                                      Seller Name :
                                      <strong className="text-gray-600 text-lg">
                                        {" "}
                                        {e.sellerName}
                                      </strong>
                                    </p>
                                  </div>
                                  <div className="flex items-center justify-start gap-3">
                                    <MdOutlineEmail className="text-2xl" />
                                    <p className="font-semibold">
                                      Seller Email :
                                      <strong className="text-gray-600 text-lg">
                                        {" "}
                                        {e.sellerEmail}
                                      </strong>
                                    </p>
                                  </div>

                                  <div className="flex items-center justify-start gap-3">
                                    <SlCalender className="text-2xl" />
                                    <p className="font-semibold">
                                      Event Date :
                                      <strong className="text-gray-600 text-lg">
                                        {" "}
                                        {e.bookingDate}
                                      </strong>
                                    </p>
                                  </div>

                                  <div className="flex items-center justify-start gap-3 ">
                                    <FaMoneyBillAlt className="text-2xl" />
                                    <p className="font-semibold">
                                      Price :
                                      <strong className="text-gray-600 text-lg">
                                        {" "}
                                        Rs.{e.price}
                                      </strong>
                                    </p>
                                  </div>

                                  <button
                                    className="w-[50px] h-[35px] bg-red-500 shadow-lg shadow-red-200 rounded-lg font-semibold text-white flex items-center justify-center gap-3"
                                    onClick={() =>
                                    {
                                      handleDelete(e.id);
                                    }}>
                                    {loading ? (
                                      <span className="loading loading-dots loading-md"></span>
                                    ) : (
                                      <IoCloseSharp className="text-white" />
                                    )}
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
}
