"use client";

import Footer from "@/app/components/footer";
import LoadingScreen from "@/app/components/loading.component";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import get from "../../../public/gettogether/gettogether1.png";
import logo from "../../../public/logo/logo.png";

export default function Registetr() {
  const [data, setData] = useState({
    name: "",
    password: "",
    email: "",
    address: "",
    mobile: "",
    nicNumber: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const router = useRouter();

  const registerUser = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Request failed:", response.status, response.statusText);
      toast.error("Registration Failed");
    } else {
      toast.success("User Registration Successfully");
      router.push("/login");
    }
  };

  return (
    <div className="w-full h-[100%]">
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <div className="w-[85%] flex items-center justify-center mx-auto">
            <Image alt="" src={logo} className="mt-10" />
          </div>

          <div className="w-[85%] flex items-center justify-center mx-auto mt-5">
            <p className="text-2xl">Register for succeed your Eventz</p>
          </div>

          <div className="w-full  flex justify-center items-center h-full lg:flex-row flex-col">
            <div className="w-[85%] flex items-center justify-center mx-auto">
              <Image alt="" src={get} className="mt-10 rounded-2xl" />
            </div>
            <form
              className="rounded-lg px-8 pt-6 pb-8 mb-4 w-[85%] lg:w-[65%] md:w-[72%] mx-auto"
              onSubmit={registerUser}>
              <div className="mb-4">
                <label htmlFor="" className="font-semibold">
                  User Name
                </label>
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="username"
                  type="text"
                  value={data.name}
                  onChange={(e) =>
                    setData({
                      ...data,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="font-semibold">
                  Email
                </label>
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) =>
                    setData({
                      ...data,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="font-semibold">
                  Address
                </label>
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="address"
                  type="address"
                  value={data.address}
                  onChange={(e) =>
                    setData({
                      ...data,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="font-semibold">
                  Mobile Number
                </label>
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="mobile"
                  type="mobile"
                  value={data.mobile}
                  onChange={(e) =>
                    setData({
                      ...data,
                      mobile: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="font-semibold">
                  NIC Number
                </label>
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="nicnumber"
                  type="text"
                  value={data.nicNumber}
                  onChange={(e) =>
                    setData({
                      ...data,
                      nicNumber: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-6">
                <label htmlFor="" className="font-semibold">
                  PassWord
                </label>
                <input
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  id="password"
                  type="password"
                  placeholder="******************"
                  value={data.password}
                  onChange={(e) =>
                    setData({
                      ...data,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit">
                  Sign In
                </button>
                <Link
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href={"/login"}>
                  All ready have a Account?
                </Link>
              </div>
            </form>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
