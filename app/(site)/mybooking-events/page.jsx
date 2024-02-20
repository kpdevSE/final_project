"use client";

import Loader from '@/app/components/loader';
import PaymentMethod from '@/app/components/payment.components';
import {Button, Modal} from 'antd';
import {getSession, useSession} from "next-auth/react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {FaMoneyBillAlt, FaShoppingCart} from "react-icons/fa";
import {FiType} from "react-icons/fi";
import {HiDevicePhoneMobile} from "react-icons/hi2";
import {IoCloseSharp} from "react-icons/io5";
import
{
  MdDriveFileRenameOutline,
  MdMarkEmailRead,
  MdOutlineEmail,
} from "react-icons/md";
import {SlCalender} from "react-icons/sl";
import {TbBrandFramerMotion} from "react-icons/tb";
import logo from '../../../public/logo/logo.png';

export default function MyBooking()
{

  const {data: session} = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [booking, setBooking] = useState([]);
  const [open, setOpen] = useState(false);
  const [loader, setloader] = useState(false)

  const fetchData = async () =>
  {
    try
    {
      setloader(true);
      const response = await fetch("/api/mybooking");
      if (response.ok)
      {
        const result = await response.json();
        console.log(result);
        if (result && result.bookings)
        {
          setBooking(result.bookings);
          setloader(false);
          console.log(booking);
        } else
        {
          console.error("Unexpected response format:", result);
        }
      } else
      {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error)
    {
      console.error("Error fetching events:", error);
      toast.error("Unexpected error occurred");
    }
  };
  const handleDelete = async (id) =>
  {
    try
    {
      setLoading(true);
      const response = await fetch(`/api/mybooking/${id}`, {
        method: "DELETE",
      });
      toast.success("event canceled successfully");
      window.location.reload();
      fetchData();
    } catch (error)
    {
      console.error("Unexpected error during delete:", error);
    }
  };

  const userEmailAccount = session?.user?.email;

  const mybooking = booking.filter(
    (booking) => booking.creatorEmail === userEmailAccount
  );
  console.log(mybooking);

  useEffect(() =>
  {
    const securePage = async () =>
    {
      const sessionClient = await getSession();
      if (!sessionClient)
      {
        router.push("/login");
      } else
      {
        setTimeout(() =>
        {
          setLoading(false);
        }, 1100);
      }
    };
    securePage();

    fetchData();
  }, []);
  return (
    <div>
      <div>
        <Button className="hidden lg:block bg-black text-white w-[60px] h-[45px]  items-center justify-center" onClick={() => setOpen(true)} >
          <FaShoppingCart className="w-[30px] h-[30px] " />
        </Button>
        <Modal
          title="My Bookings"
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={2000}
          style={{
            top: 20,
          }}
        >
          <Image src={logo} alt='' width={150} height={150} className='mt-4' />
          {
            loader ? (<Loader />) : (
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-2'>


                {mybooking.map((e) =>
                {
                  return (
                    <div
                      key={e.id}
                      className="flex  gap-2 mt-4">
                      <div className=" w-full h-full p-1 flex flex-col gap-2 rounded-2xl">
                        <div className="w-full flex items-start justify-start ">
                          <Image src={e.imageUrl} alt="" width={300} height={300} className="rounded-2xl" />
                        </div>
                        <div className="flex items-center justify-start gap-3 ">
                          <FiType className="text-2xl" />
                          <p className="font-semibold">
                            Event Category:{" "}
                            <strong className="text-gray-600 text-lg">
                              {" "}
                              {e.category}
                            </strong>
                          </p>
                        </div>
                        <div className="flex items-center justify-start gap-3">
                          <MdDriveFileRenameOutline className="text-2xl" />
                          <p className="font-semibold">
                            Name you given:
                            <strong className="text-gray-600 text-lg">
                              {" "}
                              {e.userName}
                            </strong>
                          </p>
                        </div>
                        <div className="flex items-center justify-start gap-3">
                          <MdMarkEmailRead className="text-2xl" />
                          <p className="font-semibold">
                            Your Email:
                            <strong className="text-gray-600 text-lg">
                              {" "}
                              {e.creatorEmail}
                            </strong>
                          </p>
                        </div>
                        <div className="flex items-center justify-start gap-3">
                          <HiDevicePhoneMobile className="text-2xl" />
                          <p className="font-semibold">
                            Your Mobile :
                            <strong className="text-gray-600 text-lg">
                              {" "}
                              {e.mobile}
                            </strong>
                          </p>
                        </div>
                        <div className="flex items-center justify-start gap-3">
                          <TbBrandFramerMotion className="text-2xl" />
                          <p className="font-semibold">
                            Seller Name :
                            <strong className="text-gray-600 text-lg">
                              {" "}
                              {e.sellerName}
                            </strong>
                          </p>
                        </div>
                        <div className="flex items-center justify-start gap-3">
                          <MdOutlineEmail className="text-2xl" />
                          <p className="font-semibold">
                            Seller Email :
                            <strong className="text-gray-600 text-lg">
                              {" "}
                              {e.sellerEmail}
                            </strong>
                          </p>
                        </div>

                        <div className="flex items-center justify-start gap-3">
                          <SlCalender className="text-2xl" />
                          <p className="font-semibold">
                            Event Date :
                            <strong className="text-gray-600 text-lg">
                              {" "}
                              {e.bookingDate}
                            </strong>
                          </p>
                        </div>

                        <div className="flex items-center justify-start gap-3 ">
                          <FaMoneyBillAlt className="text-2xl" />
                          <p className="font-semibold">
                            Price :
                            <strong className="text-gray-600 text-lg">
                              {" "}
                              Rs.{e.price}
                            </strong>
                          </p>
                        </div>
                        <div className='flex items-center justify-between'>
                          <button
                            className="w-[50px] h-[35px] bg-red-500 shadow-lg shadow-red-200 rounded-lg font-semibold text-white flex items-center justify-center gap-3"
                            onClick={() =>
                            {
                              handleDelete(e.id);
                            }}>
                            {loading ? (
                              <span className="loading loading-dots loading-md"></span>
                            ) : (
                              <IoCloseSharp className="text-white" />
                            )}
                          </button>
                          <PaymentMethod />

                        </div>


                      </div>
                    </div>
                  );
                })}
              </div>
            )
          }

        </Modal>
      </div >

    </div >
  );
}
