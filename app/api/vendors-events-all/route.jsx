import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request, response) {
  try {
    const allEvents = await prisma.eventz.findMany();

    return NextResponse.json({
      events: allEvents,
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return new NextResponse({
      status: 500,
      body: "Internal Server Error",
    });
  }
}
