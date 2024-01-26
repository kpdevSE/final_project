"use client";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

// Images
import logoImage from "../../public/logo/logo.png";

// Icons
import {
  MdDashboard,
  MdEmojiEvents,
  MdEventNote,
  MdOutlinePreview,
} from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";

export default function AdminNavigationPanel() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 "
        onClick={() => {
          setOpen(true);
        }}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
      <div>
        {/* Mobile Navigation */}
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
                            className="relative rounded-md text-black-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setOpen(false)}>
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="relative mt-16 flex-1 px-4 sm:px-6 justify-start ">
                          <ul className="flex flex-col gap-5">
                            <Link href={"/admin-dashboard"}>
                              <div className="flex items-center justify-start gap-3 pl-3 pr-4 hover:bg-black hover:text-white font-bold rounded w-[100%] h-[50px] transform ">
                                <MdDashboard className="w-[30px] h-[30px]" />
                                <li className="text-lg">Dashboard</li>
                              </div>
                            </Link>
                            <Link href={"/admin-add-event"}>
                              <div className="flex items-center justify-start gap-3 pl-3 pr-4 hover:bg-black hover:text-white font-bold rounded w-[100%] h-[50px] transform ">
                                <MdEventNote className="w-[30px] h-[30px]" />
                                <li className="text-lg">Add a Event</li>
                              </div>
                            </Link>
                            <Link href={"/admin-events"}>
                              <div className="flex items-center justify-start gap-3 pl-3 pr-4 hover:bg-black hover:text-white font-bold rounded w-[100%] h-[50px] transform ">
                                <MdEmojiEvents className="w-[30px] h-[30px]" />
                                <li className="text-lg">All Events</li>
                              </div>
                            </Link>
                            <Link href={"/admin-vendorview"}>
                              <div className="flex items-center justify-start gap-3 pl-3 pr-4 hover:bg-black hover:text-white font-bold rounded w-[100%] h-[50px] transform ">
                                <MdOutlinePreview className="w-[30px] h-[30px]" />
                                <li className="text-lg">Vendors View</li>
                              </div>
                            </Link>
                            <Link href={"/admin-login"} className="text-lg">
                              <div className="flex items-center justify-start gap-3 pl-3 pr-4 hover:bg-black hover:text-white font-bold rounded w-[100%] h-[50px] transform ">
                                <RiLogoutBoxLine className="w-[30px] h-[30px]" />
                                Logout
                              </div>
                            </Link>
                          </ul>
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
      {/*End of Mobile Navigation */}
    </div>
  );
}
