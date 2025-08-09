import { emailSender } from "../services/mail.service.js";

export const sendEmail = async (req, res) => {
  try {
    const { recipients, subject, content } = req.body;
    await emailSender(recipients, subject, content);
    res.json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("Email send error:", err.message || err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
};
