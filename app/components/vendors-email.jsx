"use client";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
// Images
import logoImage from "../../public/logo/logo.png";

export default function VendorsEmail() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("/api/vendors-all-get");
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        if (result && result.vendors) {
          setData(result.vendors);
        } else {
          console.error("Unexpected response format:", result);
        }
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Unexpected error occurred");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="mx-auto w-[85%] mt-16">
      <p
        className="relative top-16 cursor-pointer text-blue-600 font-semibold"
        onClick={() => {
          setOpen(true);
        }}>
        Visit Vendors Emails
      </p>

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
                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
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
                          <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                            <Image src={logoImage} />
                          </Dialog.Title>
                          <button
                            type="button"
                            className=" rounded-md text-black-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-white fixed right-10 z-10"
                            onClick={() => setOpen(false)}>
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6 scroll-smooth overflow-y-visible z-0">
                          <div className="flex flex-col items-center justify-center gap-3">
                            {data.map((e) => {
                              return (
                                <div
                                  key={e.id}
                                  className="w-[100%] bg-teal-300 h-full rounded-lg shadow-lg shadow-slate-100 flex flex-col items-center justify-center p-1">
                                  <p className="text-black font-semibold">
                                    {e.email}
                                  </p>
                                  <p className="text-black bg-white rounded-lg p-1 text-sm font-semibold">
                                    {e.option}
                                  </p>
                                  <div className="mt-1">
                                    {e.status === "AVAILABLE" ? (
                                      <div className="w-[100px] p-1 bg-green-400 rounded-[20px] flex items-center justify-center text-white font-semibold text-sm">
                                        <p>Available</p>
                                      </div>
                                    ) : null}
                                    {e.status === "BUSY" ? (
                                      <div className="w-[100px] p-1 bg-yellow-400 rounded-[20px] flex items-center justify-center text-white font-semibold text-sm">
                                        <p>Busy</p>
                                      </div>
                                    ) : null}
                                    {e.status === "NOT_WORKING" ? (
                                      <div className="w-[130px] p-1 bg-red-400 rounded-[20px] flex items-center justify-center text-white font-semibold text-sm">
                                        <p>Unavailable</p>
                                      </div>
                                    ) : null}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
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
