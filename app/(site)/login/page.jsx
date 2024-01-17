"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Login() {
  const [data, setData] = useState({
    password: "",
    email: "",
  });
  const router = useRouter();

  const logingUser = async (e) => {
    e.preventDefault();
    signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Login Successfully");
          router.push("/dashboard");
        } else {
          toast.error("Email or Password is incorrect");
        }
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="w-full  flex justify-center items-center h-screen">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}
