"use client";
import Footer from "@/app/components/footer";
import Example from "@/app/components/ourteam";
import VendorNavigationPanel from "@/app/components/vendor-navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ChatWithEmail() {
  const [userMail, setUserMail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setloading] = useState(true);

  const onSubmitHandler = async () => {
    const response = await fetch("api/vendoremail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userMail, message }),
    })
      .then(() => {
        if (response.ok) {
          toast.success("Email Send Successfully");
        }
        setloading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong ", error);
      });
  };
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center relative top-24">
        Request your Events Advertistment
      </h1>
      <div className="w-[85%] mx-auto mt-16 relative top-28 h-">
        <VendorNavigationPanel />

        <form
          className="w-[100%] lg:w-[65%] flex items-center justify-center flex-col mt-16 mx-auto"
          onSubmit={onSubmitHandler}>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={userMail}
              onChange={(e) => {
                setUserMail(e.target.value);
              }}
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Your Email
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <textarea
              name=""
              id=""
              cols="150"
              rows="10"
              className="w-full border border-b-2 border-black"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              required
              placeholder="Description of Your Message"></textarea>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {!loading ? "Please Wait" : "Send a Message"}
          </button>
        </form>
      </div>
      <div className="mt-24">
        {" "}
        <Example />
      </div>

      <Footer />
    </div>
  );
}
