"use client";
import LoadingScreen from "@/app/components/loading.component";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import logo from "../../../public/logo/logo.png";

const dummyAdminCredentials = {
  username: "kpdev",
  email: "kanishkapasindu6@gmail.com",
  password: "kpdev",
};

export default function AdminLogin()
{
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() =>
  {
    setTimeout(() =>
    {
      setLoading(false);
    }, 1500);
  });

  const handleLogin = () =>
  {
    if (
      email === dummyAdminCredentials.email &&
      password === dummyAdminCredentials.password
    )
    {
      toast.success("welcome" + " " + dummyAdminCredentials.email);
      router.push("/admin-dashboard");
    } else
    {
      setError("Invalid credentials");
    }
  };
  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <h1 className="text-center  relative top-12 text-5xl font-semibold">
            Admin Login
          </h1>
          <div className="w-full h-screen justify-center flex items-center flex-col">
            <div className="w-[85%]  mx-auto flex items-center justify-around lg:flex-row flex-col-reverse gap-8">
              <div className="flex flex-col items-center justify-center lg:w-[50%] gap-4">
                <Image src={logo} alt="" width={400} height={400} />
                <p>
                  <i>
                    "As an administrator, fostering motivation among your team
                    is vital for achieving collective success. Recognizing and
                    appreciating their efforts, maintaining transparent
                    communication, and setting realistic goals are fundamental.
                    Encourage professional growth, create a positive work
                    environment, and empower your team through trust and
                    responsibilities. Regular feedback and celebrating small
                    victories contribute to a motivated and high-performing
                    administrative team. Remember, a motivated team is the
                    cornerstone of a thriving organization."
                  </i>
                </p>
              </div>
              <div className="lg:w-[50%] w-full">
                <div>
                  <label className="font-semibold">Username:</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  />
                </div>
                <div className="mt-5">
                  <label className="font-semibold">Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  />
                </div>
                <div className="w-full bg-sky-400 rounded-xl p-3 flex items-center justify-center mt-5">
                  <button onClick={handleLogin} className="text-white text-xl">
                    Login
                  </button>
                </div>
                <Link href={"/"}>
                  <div className="w-full bg-green-400 rounded-xl p-3 flex items-center justify-center mt-5">
                    <button className="text-white text-xl">Home</button>
                  </div>
                </Link>

                {error && (
                  <p className="bg-red-400 p-2 flex items-center justify-center text-white rounded-lg mt-5">
                    {error}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
