// import {PrismaClient} from '@prisma/client';
// import {message} from 'antd';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import {NextResponse} from 'next/server';

// const prisma = new PrismaClient();

// export async function POST(request)
// {

//     const body = await request.json();
//     const {
//         email,
//         password,
//     } = body;

//     console.log(body)
//     try
//     {
//         // Find the user by username
//         const user = await prisma.vendor.findUnique({
//             where: {email},
//         });

//         console.log(user)



//         if (!user)
//         {
//             return new NextResponse(JSON.stringify({message: 'User not found'}), {status: 404})
//         }

//         console.log("methanata enakan awilla")
//         // Compare the password

//         const passwordMatch = await bcrypt.compare(password, user.hashPassword);

//         if (!passwordMatch)
//         {
//             console.log("Password is incoreect or invalid")
//             return new NextResponse(JSON.stringify({message: 'Password incorrect'}), {status: 400})
//         }

//         // Generate JWT token
//         const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET);

//         console.log(token);

//         if (!token)
//         {
//             console.log("Error in generating token", message.error);
//         }

//         return new NextResponse({message: "Success token"})

//     } catch (error)
//     {
//         console.error('Error logging in user:', error);
//         return new NextResponse(JSON.stringify({message: 'Internal Server Error'}), {status: 500})
//     }


// }



import {PrismaClient} from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {NextResponse} from 'next/server';

const prisma = new PrismaClient();

export async function POST(request)
{
    const body = await request.json();
    const {
        email,
        password,
    } = body;

    console.log(body)

    try
    {
        // Find the user by email
        const user = await prisma.vendor.findUnique({
            where: {email},
        });

        console.log(user);

        if (!user)
        {
            return new NextResponse(JSON.stringify({message: 'User not found'}), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        // Compare the password
        const passwordMatch = await bcrypt.compare(password, user.hashPassword);

        if (!passwordMatch)
        {
            return new NextResponse(JSON.stringify({message: 'Password incorrect'}), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        // Generate JWT token
        const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET);

        if (!token)
        {
            throw new Error('Error in generating token');
        }

        console.log(token)

        return new NextResponse(JSON.stringify({token}), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error)
    {
        console.error('Error logging in user:', error);
        return new NextResponse(JSON.stringify({message: 'Internal Server Error'}), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

