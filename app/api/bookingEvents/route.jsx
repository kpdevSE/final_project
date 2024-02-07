import { NextResponse } from "next/server";
import prisma from "../../libs/prismadb";

export async function POST(request) {
  const body = await request.json();
  const {
    userName,
    sellerName,
    userEmail,
    sellerEmail,
    mobile,
    price,
    catergory,
    bookingDate,
  } = body;
  console.log(body);

  if (
    (!userName,
    !sellerName,
    !price,
    !catergory,
    !userEmail,
    !sellerEmail,
    !mobile,
    !bookingDate)
  ) {
    return new NextResponse("Missing Feilds", { status: 400 });
  }

  const booking = await prisma.booking.create({
    data: {
      userName,
      sellerName,
      userEmail,
      sellerEmail,
      mobile,
      catergory,
      price,
      bookingDate,
    },
  });

  return NextResponse.json(booking);
}
