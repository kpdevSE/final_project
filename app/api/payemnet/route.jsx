import {NextResponse} from "next/server";
import prisma from "../../libs/prismadb";

export async function POST(request)
{
    const body = await request.json();
    const {
        name,
        cardNumber,
        month,
        year,
        cvv,
        creator,

    } = body;
    console.log(body);

    if (
        (!name,
            !cardNumber,
            !month,
            !year,
            !cvv,
            !creator)
    )
    {
        return new NextResponse("Missing Feilds", {status: 400});
    }

    const payments = await prisma.payment.create({
        data: {
            name,
            cardNumber,
            month,
            year,
            cvv,
            creator,

        },
    });

    return NextResponse.json(payments);
}
