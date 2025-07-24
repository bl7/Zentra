"use server";
import { sendMail } from "../../lib/mail";

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const adminEmail = "admin@instalabel.co";
  const subject = `Contact Form Submission from ${name}`;
  const body = `<b>Name:</b> ${name}<br/><b>Email:</b> ${email}<br/><b>Message:</b><br/>${message}`;
  try {
    await sendMail({ to: adminEmail, subject, body });
    await sendMail({ to: email, subject: "We received your message", body: `<b>Thank you for contacting PrintBridge!</b><br/>We received your message and will get back to you soon.<br/><br/>Your message:<br/>${body}` });
    return { ok: true };
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
} 