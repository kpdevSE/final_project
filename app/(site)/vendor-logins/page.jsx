"use client";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from "react";
import toast from "react-hot-toast";
import loginImage from '../../../public/logo/Group 4.png';
import logo from '../../../public/logo/logo.png';

export default function VendorLogin()
{
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginFunction = async (e) =>
  {
    e.preventDefault();
    const response = await fetch("/api/vendor-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    });

    if (response.ok)
    {
      const data = await response.json();
      console.log(data);
      toast.success("Login Successfully");
      router.push("/vendor-dashboard");
    } else
    {
      toast.error("Login Failed");
    }
  };

  return (
    <div>
      <div className="w-[85%] mx-auto relative top-11" >

        <h2 className="relative top-10 text-4xl">Login</h2>
      </div>

      <div className="flex items-center justify-between w-[85%] h-screen mx-auto flex-col lg:flex-row lg:mt-0 mt-12 gap-6">
        <div className="flex flex-col lg:w-[40%] w-full">
          <div className="flex items-center justify-center relative lg:bottom-24 bottom-0">
            <Image src={logo} alt="" />
          </div>
          <form className=" w-full" onSubmit={loginFunction}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Password
              </label>
            </div>

            <button
              type="submit"
              className="text-white w-full bg-[#515DEF] font-medium  text-sm  sm:w-auto px-5 py-2.5 text-center ">
              Submit
            </button>
          </form>
          <div className="flex items-center justify-center gap-2 mt-8">
            <p>Don't have an Account </p>
            <div >
              <Link href={"/vendor-register"} className="text-sky-500 font-semibold">Register Here</Link>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center bg-red-400 w-full h-[50px] text-white font-semibold">
            <Link href={"/"}>Home</Link>
          </div>
        </div>
        <div className="lg:w-[50%] w-full flex items-center justify-center">
          <Image src={loginImage} alt="" />
        </div>
      </div>

    </div>
  );
}
