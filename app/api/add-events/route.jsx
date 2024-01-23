import { NextResponse } from "next/server";
// import prisma from "../../libs/prismadb";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request, res) {
  try {
    const body = await request.json();
    const {
      firstName: firstName,
      lastName: lastName,
      imageUrl: imageUrl,
      number: number,
      email: email,
      address: address,
      option: option,
      comapany: comapany,
      description: description,
    } = body;
    console.log(body);

    const newEvents = await prisma.eventz.create({
      data: {
        firstName,
        lastName,
        imageUrl,
        number,
        email,
        address,
        option,
        comapany,
        description,
      },
    });
    if (!res.ok) {
      return NextResponse.json({
        error: "Response Faild",
      });
    } else {
      return NextResponse.json(console.log(newEvents));
    }
    console.log(newEvents);
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse({
      status: 500,
      body: "Internal Server Error",
    });
  }
}
