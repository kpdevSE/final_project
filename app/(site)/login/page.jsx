"use client";

import Footer from "@/app/components/footer";
import {signIn} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from "react";
import toast from "react-hot-toast";
import {FaFacebook, FaTwitter} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import logo from "../../../public/logo/logo.png";
import wedding from "../../../public/wedding/weddinghome.jpg";

export default function Login()
{
  const [data, setData] = useState({
    password: "",
    email: "",
  });
  const router = useRouter();

  const logingUser = async (e) =>
  {
    e.preventDefault();

    signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    })
      .then((response) =>
      {
        if (response.ok)
        {
          toast.success("Login Successfully");
          router.push("/dashboard");
        } else
        {
          toast.error("Email or Password is incorrect");
        }
      })
      .catch(() =>
      {
        toast.error("Something went wrong");
      });
  };

  return (
    <div>
      <div className="w-full flex items-center justify-center mt-8">
        <Image alt="" src={logo} />
      </div>
      <div className="w-[85%] mx-auto flex justify-between items-center h-full mt-16 lg:flex-row flex-col gap-8 md:flex-col">
        <div className="lg:w-[50%] md:w-full w-full  flex flex-col items-center justify-start">
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-semibold">Log in to Your Account</h2>
          </div>
          <form
            className="bg-white rounded px-8 pt-6 pb-8 mb-4 w-full"
            onSubmit={logingUser}>
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
                required
                onChange={(e) =>
                  setData({
                    ...data,
                    email: e.target.value,
                  })
                }
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={data.password}
                required
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
              <Link href={"/register"} className="font-semibold text-sky-500">
                Register Here
              </Link>
            </div>
          </form>
          <div className="w-[85%] mx-auto rounded-3xl h-1 bg-slate-600"></div>
          <p className="mt-5">Comming Soon....</p>
          <div className="w-full flex items-center justify-center gap-8 mt-2">
            <FaFacebook className="text-sky-700 text-5xl cursor-wait" />
            <FcGoogle className="text-5xl cursor-wait" />
            <FaTwitter className="text-sky-400 text-5xl cursor-wait" />
          </div>
          <div className="w-full mx-auto flex items-center mt-8 justify-center ">
            <Link href={"/"}>
              <button className="flex items-center justify-center gap-5 w-[200px] h-[50px] bg-cyan-500 shadow-lg shadow-cyan-300 rounded-lg text-white font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-white font-semibold">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Home
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Image alt="" src={wedding} className="rounded-xl" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
