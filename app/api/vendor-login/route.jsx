import {PrismaClient} from "@prisma/client";
import bcrypt from "bcrypt";
import {NextResponse} from "next/server";

const prisma = new PrismaClient();

export async function POST(req, res)
{
  try
  {
    const {email, password} = req.body;
    console.log(email, password)

    if (!email || !password)
    {
      return NextResponse.json({error: "Email or password missing"});
    }

    const vendor = await prisma.vendor.findUnique({
      where: {email}
    });

    if (!vendor)
    {
      return NextResponse.json({error: "User not found"});
    }

    const passwordMatch = await bcrypt.compare(password, vendor.hashPassword);

    if (!passwordMatch)
    {
      return NextResponse.json({error: "Password does not match"});
    }

    return NextResponse.json({success: true, user: vendor});
  } catch (error)
  {
    console.error("Error:", error);
    return NextResponse.json({error: "Internal server error"});
  }
}
