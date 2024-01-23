import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request, response) {
  try {
    const weddings = await prisma.eventz.findMany({
      where: {
        option: {
          contains: "conserts",
        },
      },
    });

    return NextResponse.json({
      events: weddings,
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return new NextResponse({
      status: 500,
      body: "Internal Server Error",
    });
  }
}
