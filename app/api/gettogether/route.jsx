import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request, response) {
  try {
    const gettogether = await prisma.eventz.findMany({
      where: {
        option: {
          contains: "getTogether",
        },
      },
    });

    return NextResponse.json({
      events: gettogether,
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return new NextResponse({
      status: 500,
      body: "Internal Server Error",
    });
  }
}
