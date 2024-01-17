"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const dummyAdminCredentials = {
  username: "kpdev",
  email: "kpdev@gmail.com",
  password: "kpdev",
};

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (
      username === dummyAdminCredentials.username &&
      password === dummyAdminCredentials.password
    ) {
      toast.success("welcome" + " " + dummyAdminCredentials.username);
      router.push("/admin-dashboard");
    } else {
      setError("Invalid credentials");
    }
  };
  return (
    <div>
      <h1>Admin Login</h1>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
  );
}
