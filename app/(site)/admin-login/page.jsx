"use client";
import LoadingScreen from "@/app/components/loading.component";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const dummyAdminCredentials = {
  username: "kpdev",
  email: "kanishkapasindu6@gmail.com",
  password: "kpdev",
};

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  const handleLogin = () => {
    if (
      email === dummyAdminCredentials.email &&
      password === dummyAdminCredentials.password
    ) {
      toast.success("welcome" + " " + dummyAdminCredentials.email);
      router.push("/admin-dashboard");
    } else {
      setError("Invalid credentials");
    }
  };
  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="w-full h-screen justify-center flex items-center flex-col">
          <h1>Admin Login</h1>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
}
