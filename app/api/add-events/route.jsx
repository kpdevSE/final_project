import { NextResponse } from "next/server";

export async function POST(request, response) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      imageUrl,
      email,
      number,
      address,
      option,
      comapany,
      description,
    } = body;
    console.log(body);

    const newEvents = await prisma.events.create({
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
    }
  } catch {
    return new NextResponse(Error);
  }
}
