import {PrismaClient} from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {NextResponse} from "next/server";

const prisma = new PrismaClient();

export async function POST(request)
{
  try
  {
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

    console.log(body)

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
    )
    {
      return new NextResponse("Missing Feilds", {status: 400});
    }

    const existingUser = await prisma.vendor.findUnique({
      where: {email: email},
    });

    console.log("Success this feild");

    if (existingUser)
    {
      return new NextResponse("User Already Exist", {status: 503});
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);



    // Create the user
    const newUser = await prisma.vendor.create({
      data: {
        name,
        email,
        address,
        mobile,
        nicNumber,
        description,
        option,
        status,
        hashPassword,
      },
    });

    console.log("Is this success feilds ??")

    // Generate JWT token
    const token = jwt.sign({userId: newUser.id}, process.env.JWT_SECRET);

    return new NextResponse(JSON.stringify({token}), {status: 200});



  } catch (error)
  {
    console.error("Error registering user:", error);
    return new NextResponse("Something went wrong", {status: 500})
  }
}
