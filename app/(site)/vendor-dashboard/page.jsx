"use client";
import Carousle from "@/app/components/carousel";
import Footer from "@/app/components/footer";
import LoadingScreen from "@/app/components/loading.component";
import VendorNavigationPanel from "@/app/components/vendor-navigation";
import {useRouter} from "next/navigation";
import {useEffect, useRef, useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {RiLogoutBoxLine} from "react-icons/ri";
import "../vendor-dashboard/style.module.css";

export default function VendorDahsboard()
{
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const chartRef = useRef(null);
  const data = [12, 19, 3, 5, 2, 3];
  const labels = ["January", "February", "March", "April", "May", "June"];

  const onChange = (newDate) =>
  {
    setDate(newDate);
  };

  const [user, setUser] = useState();
  function logout()
  {
    // Remove token from local storage or invalidate it on the server-side
    localStorage.removeItem('token');

    // Redirect the user to the login page or any other desired destination
    router.push('/vendor-logins');
  }

  useEffect(() =>
  {

    const fetchData = async () =>
    {
      const token = localStorage.getItem('token');
      console.log(token);
      if (token)
      {
        try
        {
          const response = await fetch('/api/vendor-profile', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });

          if (response.ok)
          {
            const data = await response.json();
            setUser(data.user);
            // You can also use a separate function to update other parts of your UI
          } else
          {
            throw new Error('Failed to fetch user profile');
          }
        } catch (error)
        {
          console.error('Error fetching user profile:', error);
          // You can display a user-friendly error message here
        }
      } else
      {
        router.push('/vendor-logins'); // Redirect to login page if no token
      }
      setTimeout(() =>
      {
        setLoading(false);
      }, 1500);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <div className="w-[50px] flex items-center justify-center absolute top-0 right-10">
            <button onClick={logout} className="flex items-center justify-center gap-3 pl-3 pr-4 hover:bg-black hover:text-white font-bold  w-[100%] h-[50px] transform rounded-full"><RiLogoutBoxLine className="w-[30px] h-[30px]" /></button>
          </div>
          <div className="mt-24">

            <Carousle />
          </div>
          <div className="w-[85%] h-full mx-auto">
            <VendorNavigationPanel />

            <h1>Vendor Dashboard</h1>
            <div className="w-full flex flex-col lg:flex-row items-center justify-between h-[40vh]">
              <div>
                <Calendar onChange={onChange} value={date} />
              </div>
              <div className="w-[100%] h-full md:w-full lg:w-[65%] flex items-center justify-center">
                <p>{user}</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
