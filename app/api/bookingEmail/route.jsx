import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { sellerEmail, userEmail, price } = await request.json();

    console.log(sellerEmail, userEmail, price);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: "kanishkapasindu6@gmail.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: userEmail,
      to: sellerEmail,
      subject: "Congratulations!!",
      html: `<h3>Hello ${sellerEmail}</h3>
             <p>Your Event planing system was booked by ${userEmail} ..it cost is ${price}.. you can contact with him now..</p></br>
             <p>See You ${sellerEmail}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: "Email Sent Successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.error(error);
  }
}
