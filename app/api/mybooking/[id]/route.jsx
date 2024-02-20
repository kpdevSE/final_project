import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

const prisma = new PrismaClient();

export async function DELETE(request, {params})
{
  try
  {
    const eventzDelete = await prisma.booking.delete({
      where: {
        id: params.id,
      },
    });
    if (eventzDelete.ok)
    {
      return new NextResponse.json({
        status: 200,
        message: "Data deleted successfully",
      });
    } else
    {
      return new NextResponse.json(
        {
          status: 404,
          message: "Something went wrong"
        }
      )
    }
  } catch (error)
  {
    console.error("Error fetching event:", error);
    return new NextResponse.json({
      status: 500,
      body: "Internal Server Error",
    });
  }
}
