import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(request, { params }) {
  try {
    const eventzDelete = await prisma.eventz.delete({
      where: {
        id: params.id,
      },
    });
    if (eventzDelete.ok) {
      return new NextResponse.json({
        status: 200,
        message: "Data deleted successfully",
      });
    }
  } catch (error) {
    console.error("Error fetching event:", error);
    return new NextResponse({
      status: 500,
      body: "Internal Server Error",
    });
  }
}
