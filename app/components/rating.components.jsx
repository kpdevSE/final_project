"use client";
import {useSession} from "next-auth/react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useState} from "react";
import toast from "react-hot-toast";
import {FaRegCommentDots} from "react-icons/fa";
import thinking from "../../public/logo/thinking.png";

export default function RatingView({id})
{
  const router = useRouter();
  const eventId = id;
  const [loading, setLoading] = useState(false);
  const {data: session} = useSession();
  const creator = session?.user?.email;

  const [data, setData] = useState({
    comments: "",
    creator: creator,
    eventzId: eventId,
  });

  console.log(eventId);

  const handleSubmit = async (e) =>
  {
    e.preventDefault();

    try
    {
      const requestBody = {...data, eventId: eventId, creator: creator};
      setLoading(true);
      const response = await fetch("/api/add-comments", {
        method: "POST",
        headers:
        {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok)
      {
        toast.error("Event creation failed. Please try again.");
        console.log(error);
      } else
      {
        setLoading(false);
        toast.success("Comment added successfully");
        window.location.reload();
      }
    } catch {
      toast.error("something went wrong");
    }
  };

  return (
    <div className="lg:w-full mx-auto w-full">
      <div className="flex items-center justify-start gap-3">
        <FaRegCommentDots className="text-xl" />
        <h1 className="text-lg font-semibold text-gray-600">
          Add your Review...
        </h1>
      </div>
      <div className="flex items-center justify-between gap-5 ">
        <div className="lg:w-[80%] w-full md:w-[80%]">
          <form action="" onSubmit={handleSubmit}>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_text"
                id="floating_text"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={data.comments}
                onChange={(e) =>
                  setData({
                    ...data,
                    comments: e.target.value,
                  })
                }
                required
              />
              <label
                for="floating_text"
                class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Giv us to your ideas...
              </label>
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {loading ? (
                <span className="loading loading-ring loading-md text-white"></span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
        <div className="lg:w-[20%] md:w-[20%] flex items-center justify-end ">
          <Image
            src={thinking}
            alt=""
            width={150}
            height={150}
            className="hidden lg:block md:block"
          />
        </div>
      </div>
    </div>
  );
}
