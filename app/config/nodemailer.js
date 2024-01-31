import { useSession } from "next-auth/react";
import nodemailer from "nodemailer";

const { data: session } = useSession();

export const transpoter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: session.user.email,
    pass: process.env.EMAIL_PASS,
  },
});

export const mailOptions = {
  from: session.user.email,
  to: session.user.email,
};
