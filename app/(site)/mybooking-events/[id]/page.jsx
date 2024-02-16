"use client";

import LoadingScreen from "@/app/components/loading.component";
import Navigation from "@/app/components/navigation.component";
import {getSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";

export default function MyBooking()
{
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [booking, setBooking] = useState([]);

  const fetchData = async () =>
  {
    try
    {
      const response = await fetch("/api/mybooking");
      if (!response.ok)
      {
        toast.error(error);
        throw new Error("Failed to fetch bookings");
      }
      const result = await response.json();
      if (result.status === "fail")
      {
        throw new Error(result.message);
      }
      setBooking(result.book);
      console.log(result.book);
    } catch (error)
    {
      console.error("Error fetching bookings:", error);
    }
  };

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
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Navigation />
          <div>
            <h1>My Booking</h1>
            {booking.map((e) =>
            {
              return (
                <div key={e.id}>
                  <p>{e.category}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
