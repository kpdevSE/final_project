// import { NextResponse } from "next/server";
// import prisma from "../../libs/prismadb";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { NextResponse } from "next/server";

export async function POST(request, response) {
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
    if (response.ok) {
      return NextResponse.json({
        newEvents,
      });
    } else {
      console.log("faild to create");
    }
    console.log(newEvents);
  } catch (error) {
    console.error("Error creating event:", error);
    return new NextResponse({
      status: 500,
      body: "Internal Server Error",
    });
  }
}
