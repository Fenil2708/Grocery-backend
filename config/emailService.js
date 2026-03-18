import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(to, subject, text, html) {
  try {
    if (!to || !subject || (!html && !text)) {
      throw new Error("Missing required email parameters");
    }

    const msg = {
      to,
      from: process.env.EMAIL_USER,
      subject,
      text,   // optional
      html,   // optional
    };

    await sgMail.send(msg);
    return { success: true };
  } catch (error) {
    console.error("SendGrid error:", error.response?.body || error.message);
    return { success: false };
  }
}

export { sendEmail };