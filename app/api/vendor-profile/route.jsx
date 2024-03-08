import jwt from 'jsonwebtoken';
import {NextResponse} from 'next/server';

export async function GET(req, res)
{

    const token = req.headers.authorization?.split(' ')[1];

    if (!token)
    {
        return new NextResponse({message: "Unauthorized"});
    }

    try
    {
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
            // Handle case where user is not found
            return {error: "User not found"};
        }
    } catch (error)
    {
        console.error('Error fetching user:', error);
        return new NextResponse({message: "Internal server error"});
    }
}
