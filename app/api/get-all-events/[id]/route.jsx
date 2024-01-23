import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const id = params.id;

    if (!eventId) {
      return new NextResponse({
        status: 400,
        body: "Event ID is required",
      });
    }

    const event = await prisma.eventz.findUnique({
      where: {
        id,
      },
    });

    if (!event) {
      return new NextResponse({
        status: 404,
        body: "Event not found",
      });
    }

    return NextResponse.json({
      event,
    });
  } catch (error) {
    console.error("Error fetching event:", error);
    return new NextResponse({
      status: 500,
      body: "Internal Server Error",
    });
  }
}
