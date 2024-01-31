import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { data: session } = useSession;
  try {
    const { subject, message, to, from } = await request.json();
    const transpoter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: "kanishkapasindu6@gmail.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOption = {
      from: from,
      to: to,
      subject: subject,
      html: `<h3>Hello ${to}</h3>
             <h1>${message}</h1>`,
    };
    await transpoter.sendMail(mailOption);

    return NextResponse.json(
      {
        success: "Email Sent Successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    NextResponse.json(error);
  }
}
