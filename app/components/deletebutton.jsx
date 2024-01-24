"use client";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function DeletButton({ params }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-start lg:flex-row md:flex-row gap-10">
        <button className="w-[200px] h-[50px] bg-amber-400 shadow-lg shadow-amber-200 rounded-lg font-semibold text-white">
          Update
        </button>
        <button
          className="w-[200px] h-[50px] bg-red-500 shadow-lg shadow-red-200 rounded-lg font-semibold text-white"
          onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
