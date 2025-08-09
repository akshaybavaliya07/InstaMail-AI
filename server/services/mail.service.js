import nodemailer from "nodemailer";

export const emailSender = async (recipients, subject, content) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"InstaMail AI" <${process.env.EMAIL_USER}>`,
    to: recipients.join(", "),
    subject,
    text: content,
  });
};
