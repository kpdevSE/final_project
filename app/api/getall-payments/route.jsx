import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

const prisma = new PrismaClient();

export async function GET()
{
    try
    {
        const allPayments = await prisma.payment.findMany();

        return NextResponse.json({
            payments: allPayments,
        });
    } catch (error)
    {
        console.error("Error fetching vendors:", error);
        return new NextResponse({
            status: 500,
            body: "Internal Server Error",
        });
    }
}
