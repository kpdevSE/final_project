"use client";

import { UploadDropzone } from "@uploadthing/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function EventsUpdateModalButton({ params }) {
  const [imageUrl, setImageUrl] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [comapany, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState("");
  const [option, setOption] = useState("");
  const [price, setprice] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id } = params;

    if (!params.id) {
      console.log("id is undefined");
      toast.error("An event ID is required to proceed.");
      return;
    }
    try {
      const body = {
        firstName,
        lastName,
        imageUrl,
        email,
        comapany,
        address,
        option,
        number,
        description,
        price,
      };
      const response = await fetch(`/api/get-all-events/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        toast.error("Event creation failed. Please try again.");
      } else {
        toast.success("Event added successfully");
        router.push("/admin-events");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <div className="w-[85%] mx-auto ">
      <form
        className=" mx-auto w-full lg:w-[65%] md:w-[75%]"
        onSubmit={handleSubmit}>
        <UploadDropzone
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            console.log("Files: ", res);
            toast.success("Image Uploaded");
            setImageUrl(res[0].url);
          }}
          onUploadError={(error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
        <div className="grid md:grid-cols-2 md:gap-6 mt-8">
          <div className="relative z-0 w-full mb-5 group  ">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={firstName}
              onChange={(e) => {
                // setData({
                //   ...data,
                //   firstName: e.target.value,
                // });
                setfirstName(e.target.value);
              }}
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={lastName}
              onChange={(e) => {
                // setData({
                //   ...data,
                //   lastName: e.target.value,
                // });
                setLastName(e.target.value);
              }}
              required
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Last name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={number}
              onChange={(e) => {
                // setData({
                //   ...data,
                //   number: e.target.value,
                // });
                setNumber(e.target.value);
              }}
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Phone number
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={comapany}
              onChange={(e) => {
                // setData({
                //   ...data,
                //   comapany: e.target.value,
                // });
                setCompany(e.target.value);
              }}
              required
            />
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Company (Ex. Google)
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={email}
              onChange={(e) => {
                // setData({
                //   ...data,
                //   email: e.target.value,
                // });
                setEmail(e.target.value);
              }}
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_address"
              id="floating_address"
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={address}
              onChange={(e) => {
                // setData({
                //   ...data,
                //   address: e.target.value,
                // });
                setAddress(e.target.value);
              }}
              required
            />
            <label
              htmlFor="floating_address"
              className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Address
            </label>
          </div>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <textarea
            type="text"
            name="floating_repeat_description"
            id="floating_repeat_description"
            className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer h-[200px]"
            placeholder=" "
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          />
          <label
            htmlFor="floating_repeat_description"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Description
          </label>
        </div>
        <div className="relative z-0 lg:w-[30%] w-[100%] mb-5 group">
          <input
            type="text"
            name="floating_price"
            id="floating_price"
            className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={price}
            onChange={(e) => {
              // setData({
              //   ...data,
              //   address: e.target.value,
              // });
              setprice(e.target.value);
            }}
            required
          />
          <label
            htmlFor="floating_price"
            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Price
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group flex justify-center items-center">
          <select
            className="select select-bordered w-full max-w-xs"
            value={option}
            onChange={(e) => {
              setOption(e.target.value);
            }}>
            <option>Choose</option>
            <option value="getTogether">Get Togethers</option>
            <option value="weddings">Weddings</option>
            <option value="bday">Birthday Parties</option>
            <option value="conserts">Live Conserts</option>
            <option value="djs">Dj</option>
          </select>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </form>
    </div>
  );
}
