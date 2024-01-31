"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ModalComponents() {
  const router = useRouter();
  const [data, setData] = useState({
    userName: "",
    sellerName: "",
    sellerEmail: "",
    userEmail: "",
    price: "",
    catergory: "",
    bookDate: "",
  });
  // const [userName, setUserName] = useState("");
  // const [sellerName, setSellerName] = useState("");
  // const [sellerEmail, setSellerEmail] = useState("");
  // const [userEmail, setUserEmail] = useState("");
  // const [price, setPrice] = useState("");
  // const [catergory, setCatergory] = useState("");
  // const [bookDate, setBookDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/bookingEvents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Event Booking Successfully and send a Email to seller");
        setTimeout(async () => {
          const bookingEmail = await fetch("/api/bookingEmail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userEmail: data.userEmail,
              sellerEmail: data.sellerEmail,
              price: data.price,
            }),
          });
          if (bookingEmail.ok) {
            toast.success("Email Send Successfully");
            router.push("/userview-dashboard");
          } else {
            toast.error("Email not Sent.");
          }
        }, 2000);
      } else {
        toast.error("Booking Failed");
      }
    } catch (error) {
      console.error("Email Sending Error:", error);
      toast.error("Something went wrong with a email sending");
    }
  };
  return (
    <div>
      <button
        className="bg-lime-400 w-[200px] h-[50px] flex items-center justify-center rounded-lg shadow-lg shadow-lime-200 gap-2 font-semibold mt-8"
        onClick={() => document.getElementById("my_modal_4").showModal()}>
        Book Now
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <p className="font-semibold text-lg">
            Fill the Details below to Booking your order
          </p>
          <form action="" className="mt-5" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center w-full lg:flex-row gap-3">
              <div className="w-full flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                  placeholder="Enter Your Name"
                  value={data.userName}
                  onChange={(e) => {
                    setData({ ...data, userName: e.target.value });
                  }}
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <input
                  type="email"
                  name=""
                  id=""
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                  placeholder="Enter Your Email Address"
                  value={data.userEmail}
                  onChange={(e) => {
                    setData({
                      ...data,
                      userEmail: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full lg:flex-row gap-3 mt-3">
              <div className="w-full flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                  placeholder="Enter Seller Name"
                  value={data.sellerName}
                  onChange={(e) => {
                    setData({
                      ...data,
                      sellerName: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <input
                  type="email"
                  name=""
                  id=""
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                  placeholder="Enter Seller Email"
                  value={data.sellerEmail}
                  onChange={(e) => {
                    setData({
                      ...data,
                      sellerEmail: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full lg:flex-row gap-3 mt-3">
              <div className="w-full flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                  placeholder="Price"
                  value={data.price}
                  onChange={(e) => {
                    setData({
                      ...data,
                      price: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <input
                  type="text"
                  name=""
                  id=""
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                  value={data.bookDate}
                  onChange={(e) => {
                    setData({
                      ...data,
                      bookDate: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 group flex justify-center items-center mt-5">
              <select
                className="select select-bordered w-full max-w-xs"
                value={data.catergory}
                onChange={(e) => {
                  setData({
                    ...data,
                    catergory: e.target.value,
                  });
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
              type="submit "
              className="bg-red-300 p-2 rounded-lg shadow-lg shadow-red-300 font-semibold">
              Book Now
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
