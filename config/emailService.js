import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(to, subject, text, html) {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // default sender
      to,
      subject,
      html: html || `<p>${text}</p>`
    });

    return { success: true, messageId: response.id };

  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
}

export { sendEmail };