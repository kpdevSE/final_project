"use client";

import AdminNavigationPanel from "@/app/components/admin-navigation";

export default function AdminDashboard() {
  const dummyAdminCredentials = {
    username: "kpdev",
    email: "kanishkapasindu6@gmail.com",
    password: "kpdev",
  };
  return (
    <div>
      <div>Hey..{dummyAdminCredentials.username}</div>
      <AdminNavigationPanel />
    </div>
  );
}
