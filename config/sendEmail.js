import { sendEmail } from "./emailService.js";

const sendEmailFun = async ({ sendTo, subject, html }) => {
    const result = await sendEmail(sendTo, subject, html);
    return result.success;
};

export default sendEmailFun;