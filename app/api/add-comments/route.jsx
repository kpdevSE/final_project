import { NextResponse } from "next/server";
import prisma from "../../libs/prismadb";

export async function POST(request) {
  const body = await request.json();
  const { comments, creator, eventzId } = body;
  console.log(body);

  if (!comments || !creator || !eventzId) {
    return new NextResponse("Missing Feilds", { status: 400 });
  }

  const ratingComments = await prisma.rating.create({
    data: {
      comments,
      creator,
      eventzId,
    },
  });

  return NextResponse.json(ratingComments);
}
