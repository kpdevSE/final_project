import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { subject, message, to, from } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: "kanishkapasindu6@gmail.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      html: `<h3>Hello ${to}</h3>
             <p>${message}</p>`,
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
