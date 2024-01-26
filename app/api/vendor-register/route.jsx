import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "../../libs/prismadb";

export async function POST(request) {
  const body = await request.json();
  const {
    name,
    email,
    password,
    address,
    mobile,
    nicNumber,
    description,
    option,
    status,
  } = body;
  console.log(body);

  if (
    !name ||
    !email ||
    !password ||
    !address ||
    !mobile ||
    !nicNumber ||
    !description ||
    !option ||
    !status
  ) {
    return new NextResponse("Missing Feilds", { status: 400 });
  }

  const existingUser = await prisma.vendor.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return new NextResponse("User Already Exist", { status: 400 });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await prisma.vendor.create({
    data: {
      name,
      email,
      hashPassword,
      address,
      mobile,
      nicNumber,
      description,
      option,
      status,
    },
  });

  return NextResponse.json(user);
}
