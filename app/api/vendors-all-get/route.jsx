import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const allVendors = await prisma.vendor.findMany();

    return NextResponse.json({
      vendors: allVendors,
    });
  } catch (error) {
    console.error("Error fetching vendors:", error);
    return new NextResponse({
      status: 500,
      body: "Internal Server Error",
    });
  }
}
