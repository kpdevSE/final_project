export default function AdminDashboard() {
  const dummyAdminCredentials = {
    username: "kpdev",
    email: "kanishkapasindu6@gmail.com",
    password: "kpdev",
  };
  return <div>Hey..{dummyAdminCredentials.username}</div>;
}
