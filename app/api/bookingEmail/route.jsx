import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { sellerEmail, userEmail, price, bookingDate } = await request.json();

    console.log(sellerEmail, userEmail, price, bookingDate);

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
      subject: "Confirmation of Your Event Booking",
      html: `<p>Dear ${sellerEmail},
             <p>I am pleased to inform you that ${userEmail} has successfully booked your event planning system for an upcoming event. The total cost for the booking is Rs.${price}.00.</p></br>His booking date is ${bookingDate}</br>
             <p>For any further communication or clarification, please reach out to Kanishka Paisindu at ${userEmail}.</p></br></br>
             <p>Thank you!....</p>`,
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
