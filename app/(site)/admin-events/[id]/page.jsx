"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function SingleEvent() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/get-all-events/${_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JOSN.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        setData(data.event);
        toast.success("Event fetching successfully");
        console.log(data);
      } else {
        toast.error("Error fetching event");
      }
    } catch (error) {
      console.error("Error fetching event:", error);
      toast.error("Unexpected error occurred");
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  1;

  return (
    <div>
      <h1>Dynamic route</h1>
      <p>{data && data.comapany}</p>
      {/* Display other event details as needed */}
    </div>
  );
}
