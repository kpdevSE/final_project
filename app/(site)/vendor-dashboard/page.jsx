"use client";
import Carousle from "@/app/components/carousel";
import Footer from "@/app/components/footer";
import LoadingScreen from "@/app/components/loading.component";
import VendorNavigationPanel from "@/app/components/vendor-navigation";
import axios from "axios";
import {useRouter} from "next/navigation";
import {useEffect, useRef, useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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

  const [email, setEmail] = useState('');
  function logout()
  {
    // Remove token from local storage or invalidate it on the server-side
    localStorage.removeItem('token');

    // Redirect the user to the login page or any other desired destination
    router.push('/vendor-logins');
  }

  useEffect(() =>
  {
    const token = localStorage.getItem('token');
    if (token)
    {
      // Fetch user email using the token
      axios.get('/api/vendor-profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response =>
        {
          setEmail(response.data.email);
          console.log(email);
        })
        .catch(error =>
        {
          console.error('Error fetching user email:', error);
        });
    }
    else
    {
      router.push('/vendor-logins')
    }

    setTimeout(() =>
    {
      setLoading(false);
    }, 1500);
  }, [data, labels]);
  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Carousle />
          <div className="w-[85%] h-full mx-auto">
            <VendorNavigationPanel />

            <h1>Vendor Dashboard</h1>
            <div className="w-full flex flex-col lg:flex-row items-center justify-between h-[40vh]">
              <div>
                <Calendar onChange={onChange} value={date} />
              </div>
              <div className="w-[100%] h-full md:w-full lg:w-[65%] flex items-center justify-center">
                welcome, {email}
                <button onClick={logout}>Logout</button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
