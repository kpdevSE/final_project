"use client";

import LoadingScreen from "@/app/components/loading.component";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Registetr() {
  const [data, setData] = useState({
    name: "",
    password: "",
    email: "",
    address: "",
    mobile: "",
    nicNumber: "",
    description: "",
    option: "",
    status: "",
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
    const response = await fetch("/api/vendor-register", {
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
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="w-full  flex justify-center items-center h-screen">
          <form
            className=" rounded px-8 pt-6 pb-8 mb-4 w-[55%]"
            onSubmit={registerUser}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={data.name}
                onChange={(e) =>
                  setData({
                    ...data,
                    name: e.target.value,
                  })
                }
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={data.email}
                onChange={(e) =>
                  setData({
                    ...data,
                    email: e.target.value,
                  })
                }
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address">
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="address"
                value={data.address}
                onChange={(e) =>
                  setData({
                    ...data,
                    address: e.target.value,
                  })
                }
                placeholder="address"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="mobile">
                Mobile Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mobile"
                type="mobile"
                value={data.mobile}
                onChange={(e) =>
                  setData({
                    ...data,
                    mobile: e.target.value,
                  })
                }
                placeholder="Mobile"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nic">
                NIC Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nicnumber"
                type="text"
                value={data.nicNumber}
                onChange={(e) =>
                  setData({
                    ...data,
                    nicNumber: e.target.value,
                  })
                }
                placeholder="birthday"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address">
                Address
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="description"
                value={data.description}
                onChange={(e) =>
                  setData({
                    ...data,
                    description: e.target.value,
                  })
                }
                placeholder="I am ....."
              />
            </div>
            <div className="relative z-0 w-full mb-5 group flex justify-center items-center">
              <select
                className="select select-bordered w-full max-w-xs"
                value={data.option}
                onChange={(e) =>
                  setData({
                    ...data,
                    option: e.target.value,
                  })
                }>
                <option>Choose</option>
                <option value="Get Together">Get Togethers</option>
                <option value="Weddings">Weddings</option>
                <option value="Birthday">Birthday Parties</option>
                <option value="Live Conserts">Live Conserts</option>
                <option value="djs">Dj</option>
              </select>
            </div>
            <div className="relative z-0 w-full mb-5 group flex justify-center items-center">
              <label>
                Status:
                <select
                  className="select select-bordered w-full max-w-xs"
                  value={data.status}
                  onChange={(e) =>
                    setData({
                      ...data,
                      status: e.target.value,
                    })
                  }>
                  <option value="" defaultValue>
                    Choose
                  </option>
                  <option value="AVAILABLE">Available</option>
                  <option value="BUSY">Busy</option>
                  <option value="NOT_WORKING">Not Working</option>
                </select>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Sign In
              </button>
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href={"/vendor-logins"}>
                Already Have an Account
              </Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
