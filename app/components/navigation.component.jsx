"use client";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

// Images
import Link from "next/link";
import logo from "../../public/logo/logo.png";
// Images
import logoImage from "../../public/logo/logo.png";
// Icons
import { MdDashboard, MdEmojiEvents } from "react-icons/md";
import { RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession() || {};

  console.log(status);
  console.log(session);

  const navigationItems = [
    {
      id: 1,
      item: "Dashboard",
      itemLink: "/dashboard",
    },
    {
      id: 2,
      item: "Events",
      itemLink: "/userview-dashboard",
    },
  ];
  return (
    <div className="w-full h-[10vh] fixed z-10 top-2">
      {/* Desktop Navigation */}
      <div className="w-[85%] h-full mx-auto flex items-center justify-between bg-white rounded-lg shadow-2xl shadow-teal-100">
        {/* Logo Section */}
        <div className="px-2">
          <Image src={logo} />
        </div>
        {/* End OF Logo Section */}
        {/* navList Section */}
        <div className="px-2">
          <ul className="flex items-center justify-center gap-6">
            {navigationItems &&
              navigationItems.map((e) => (
                <Link href={e.itemLink} key={e.id}>
                  <li
                    key={e.id}
                    className="text-lg font-semibold hover:bg-[#01a2b7] p-2 hover:border hover:rounded-lg hover:text-white hidden  lg:block  rounded-lg border border-[#01a2b7] shadow-md shadow-[#8ceaf7]">
                    {e.item}
                  </li>
                </Link>
              ))}
            <div className="hidden lg:block">
              {status === "authenticated" ? (
                <button
                  className="text-lg font-semibold hover:bg-[#01a2b7] p-2 hover:border hover:rounded-lg hover:text-white hidden md:block lg:block  rounded-lg shadow-md shadow-[#8ceaf7]"
                  onClick={() => {
                    signOut();
                    router.push("/");
                  }}>
                  Log Out
                </button>
              ) : (
                <Link href={"/login"} className="font-semibold text-lg">
                  <li className="text-lg font-semibold hover:bg-[#01a2b7] p-2 hover:border hover:rounded-lg hover:text-white hidden md:block lg:block  rounded-lg border-[#01a2b7] border shadow-md shadow-[#8ceaf7]">
                    Log In
                  </li>
                </Link>
              )}
            </div>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 lg:hidden"
                onClick={() => {
                  setOpen(true);
                }}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </li>
            <li>
              <div className="dropdown hidden lg:block">
                <div tabIndex={0} role="button" className="btn m-1 bg-white">
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
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                  <li className="flex flex-col">
                    <p>Hii ..!! </p>
                    <strong className="font-semibold">
                      {session?.user?.name}
                    </strong>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        {/* End of Navlist Section */}
      </div>
      {/* End Of Desktop Navigation */}

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
                      <div className="mt-8 px-4 sm:px-6">
                        <p className="text-lg">
                          Welcome{" "}
                          <strong className="text-sky-500 font-semibold">
                            {session?.user?.name}
                          </strong>{" "}
                          !!!
                        </p>
                      </div>
                      <div className="relative mt-5 flex-1 px-4 sm:px-6 ">
                        <Link href={"/dashboard"}>
                          <div className="flex items-center justify-start gap-3 pl-3 pr-4 hover:bg-black hover:text-white font-bold rounded w-[100%] h-[50px] transform ">
                            <MdDashboard className="w-[30px] h-[30px]" />
                            <p className="text-lg decoration-none">Dashboard</p>
                          </div>
                        </Link>
                        <Link href={"userview-dashboard"}>
                          <div className="flex items-center justify-start gap-3 pl-3 pr-4 hover:bg-black hover:text-white font-bold rounded w-[100%] h-[50px] transform ">
                            <MdEmojiEvents className="w-[30px] h-[30px]" />
                            <p className="text-lg decoration-none">Evnents</p>
                          </div>
                        </Link>
                        <div>
                          {status === "authenticated" ? (
                            <button
                              className="flex items-center justify-start gap-3 pl-3 pr-4 hover:bg-black hover:text-white font-bold rounded w-[100%] h-[50px] transform"
                              onClick={() => {
                                signOut();
                                router.push("/");
                              }}>
                              <RiLogoutBoxLine className="w-[30px] h-[30px]" />
                              Log Out
                            </button>
                          ) : (
                            <Link
                              href={"/login"}
                              className="font-semibold text-lg">
                              <li className="flex items-center justify-start gap-3 pl-3 pr-4 hover:bg-black hover:text-white font-bold rounded w-[100%] h-[50px] transform">
                                <RiLoginBoxLine className="w-[30px] h-[30px]" />
                                Log In
                              </li>
                            </Link>
                          )}
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
  );
}
