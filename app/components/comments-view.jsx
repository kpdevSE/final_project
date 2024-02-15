"use client";

import { useEffect, useState } from "react";

export default function CommentsView({ id }) {
  const eId = id;
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/get-comments");

      if (response.ok) {
        const result = await response.json();
        setData(result.ratings);
        console.log(result.ratings);
      } else {
        toast.error("Error fetching events");
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Unexpected error occurred");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterData = data.filter((comments) => comments.eventzId === eId);
  return (
    <div>
      <h1 className="text-xl font-semibold text-gray-600">Review ..</h1>
      {filterData.map((e) => {
        return (
          <div
            key={e.id}
            className="mt-12 flex items-start justify-start gap-2 flex-col border-b-2 border-gray-200 pb-3">
            <p>{e.comments}</p>
            <p className="font-semibold">{e.creator}</p>
          </div>
        );
      })}
    </div>
  );
}
