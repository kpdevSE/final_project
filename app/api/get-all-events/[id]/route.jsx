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
    return new NextResponse.json({
      status: 500,
      body: "Internal Server Error",
    });
  }
}

export async function PUT(request, { params }) {
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
      price: price,
    } = body;
    console.log(body);
    const eventzUpdate = await prisma.eventz.update({
      where: {
        id: params.id,
      },
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
        price,
      },
    });
    if (eventzUpdate.ok) {
      return NextResponse.json({
        status: 200,
        message: "Data updated successfully",
      });
    } else {
      return NextResponse.json({
        status: 404,
        message: "Event not found",
      });
    }
  } catch (error) {
    console.error("Error fetching event:", error);
    return NextResponse.json({
      status: 500,
      body: "Internal Server Error",
    });
  }
}
