import {NextResponse} from "next/server";
import prisma from '../../libs/prismadb';

export async function GET(req, res)
{
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader)
    {
        return new NextResponse({message: "Unauthorized"}, {status: 401});
    }

    const token = authorizationHeader.split(' ')[1];
    // Proceed with your logic using the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            email: true,
        },
    });

    console.log(user)

    if (!user)
    {
        return new NextResponse({error: "User not found"}, {status: 404});
    }

    return new NextResponse(user);
}
