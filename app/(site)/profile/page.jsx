"use client";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  return (
    <div>
      <h1>{session?.user?.name}</h1>
      <p>{session?.user?.email}</p>
    </div>
  );
}
