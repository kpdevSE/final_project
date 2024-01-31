import { NextResponse } from "next/server";
import prisma from "../../libs/prismadb";

export async function POST(request) {
  const body = await request.json();
  const {
    userName,
    sellerName,
    userEmail,
    sellerEmail,
    bookDate,
    price,
    catergory,
  } = body;
  console.log(body);

  if (
    (!userName,
    !sellerName,
    !price,
    !catergory,
    !userEmail,
    !sellerEmail,
    !bookDate)
  ) {
    return new NextResponse("Missing Feilds", { status: 400 });
  }

  const booking = await prisma.booking.create({
    data: {
      userName,
      sellerName,
      userEmail,
      sellerEmail,
      bookDate,
      catergory,
      price,
    },
  });

  return NextResponse.json(booking);
}
