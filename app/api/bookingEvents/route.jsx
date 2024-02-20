import {NextResponse} from "next/server";
import prisma from "../../libs/prismadb";

export async function POST(request)
{
  const body = await request.json();
  const {
    userName,
    sellerName,
    userEmail,
    sellerEmail,
    mobile,
    price,
    category,
    bookingDate,
    creatorEmail,
    imageUrl
  } = body;
  console.log(body);

  if (
    (!userName,
      !sellerName,
      !price,
      !category,
      !userEmail,
      !sellerEmail,
      !mobile,
      !bookingDate), !imageUrl
  )
  {
    return new NextResponse("Missing Feilds", {status: 400});
  }

  const booking = await prisma.booking.create({
    data: {
      creatorEmail,
      userName,
      sellerName,
      userEmail,
      sellerEmail,
      imageUrl,
      mobile,
      category,
      price,
      bookingDate,
      creator: {connect: {email: creatorEmail.toLowerCase()}},
    },
  });

  return NextResponse.json(booking);
}
