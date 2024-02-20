"use client";
import {useSession} from "next-auth/react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useState} from "react";
import toast from "react-hot-toast";
import {IoCloseSharp} from "react-icons/io5";

export default function ModalComponents({price, fName, lName, des, eventzEmail, address, company, img, mobile, eventOption})
{
  const priceEvent = price;
  const eventsOption = eventOption;
  const eventsImage = img;
  const fiName = fName;
  const laName = lName;
  const descri = des;
  const eveEmail = eventzEmail;
  const eventsAddress = address;
  const eventsCompany = company;
  const eventsMobile = mobile;

  const {data: session} = useSession();

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const email = session?.user?.email;

  const [data, setData] = useState({
    userName: "",
    sellerName: "",
    sellerEmail: "",
    userEmail: "",
    price: priceEvent,
    category: eventsOption,
    mobile: "",
    bookingDate: "",
    creatorEmail: email,
    imageUrl: eventsImage
  });


  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    const requestBody = {...data, creatorEmail: email, imageUrl: eventsImage, category: eventsOption};
    try
    {
      setLoading(true);
      const response = await fetch("/api/bookingEvents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      if (response.ok)
      {
        toast.success("Event Booking Successfully and send a Email to seller");
        setLoading(false);
        setTimeout(async () =>
        {
          setLoading(true);
          const bookingEmail = await fetch("/api/bookingEmail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userEmail: data.userEmail,
              sellerEmail: data.sellerEmail,
              price: data.price,
              bookingDate: data.bookingDate,
            }),
          });
          if (bookingEmail.ok)
          {
            setLoading(false);
            toast.success("Email Send Successfully");
            router.push("/userview-dashboard");
          } else
          {
            toast.error("Email not Sent.");
          }
        }, 2000);
      } else
      {
        toast.error("Booking Failed");
      }
    } catch (error)
    {
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
          <p>We are getting this details to inform the seller .. please fill it correctly.</p>
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
                  onChange={(e) =>
                  {
                    setData({...data, userName: e.target.value});
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
                  onChange={(e) =>
                  {
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
                  onChange={(e) =>
                  {
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
                  onChange={(e) =>
                  {
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
                  type="date"
                  name=""
                  id=""
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                  placeholder="When will you hold your Event"
                  value={data.bookingDate}
                  onChange={(e) =>
                  {
                    const selectedDate = e.target.value;
                    const formattedDate = new Date(selectedDate)
                      .toISOString()
                      .split("T")[0];
                    setData({
                      ...data,
                      bookingDate: formattedDate,
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
                  placeholder="Your Mobile Number"
                  value={data.mobile}
                  onChange={(e) =>
                  {
                    setData({
                      ...data,
                      mobile: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            <div className="flex  items-center justify-between w-full flex-row gap-3 mt-10">

              <p>Event Price :-</p>
              <p className="text-lg font-semibold">Rs: <span className="text-xl">{priceEvent}.00</span></p>
              <p>Event Option :-</p>
              <p className="text-lg font-semibold"> <span className="text-xl">{eventsOption}</span></p>
            </div>

            <div className="flex flex-col items-center justify-between w-full lg:flex-row gap-3 mt-8">
              <div className="lg:w-[50%] w-full">
                <Image src={eventsImage} alt="" className="w-full h-full rounded-xl" width={250} height={250} />
              </div>
              <div className="lg:w-[50%] w-full">
                <div className=" flex flex-col gap-3 md:w-[100%] w-full">
                  <p className="lg:text-3xl font-semibold  md:text-4xl text-3xl">
                    {eventsCompany}
                  </p>
                  <p className="text-sm">
                    {descri}
                  </p>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                        />
                      </svg>
                      <p>{eventzEmail}</p>
                    </div>

                    <div className="flex items-center justify-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                      <p>{eventsAddress}</p>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>

                      <p>{fiName + " " + laName}</p>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                      <p>{eventsMobile}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit "
              className="bg-red-300 p-2 rounded-lg shadow-md shadow-red-300 font-semibold w-[150px] flex items-center justify-center mt-10">
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                " Book Now"
              )}
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-red-700 hover:bg-red-600">
                <IoCloseSharp className="text-white text-xl " />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
