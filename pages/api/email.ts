import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { IEmailBody } from "@/types/IEmailBody";

interface NextApiMailRequest extends NextApiRequest {
  body: IEmailBody;
}

const addLineBreaks = (text: string) => {
  let textAreaString = text;
  textAreaString = textAreaString.replace(/\n\r/g, "<br />");
  textAreaString = textAreaString.replace(/\n/g, "<br />");

  return textAreaString;
};

async function sendEmail(req: NextApiMailRequest, res: NextApiResponse) {
  const output = `
    <p style="color: grey;">You have a new contact request</p>
    <h3>CONTACT DETAILS:</h3>
    <ul style="list-style: none;">
      <li>Ime i prezime: <strong>${req.body.fullName}</strong></li>
      <li>Poslao: <strong>${req.body.email}</strong></li>
      <li>Naslov: <strong>${req.body.subject}</strong></li>
    </ul>
    <h3>Poruka:</h3>
    <div>${addLineBreaks(req.body.message)}</div>
  `;

  const emailUser = process.env.EMAIL_USER!;
  const emailPass = process.env.EMAIL_PASS!;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    user: "smtp.gmail.com",
    secure: false, // true for 465, false for other ports
    auth: {
      type: "login",
      user: emailUser,
      pass: emailPass,
    },
    tls: {
      rejectUnauthorized: false, // disable blocking from localhost
    },
  });

  if (
    req.body.fullName !== "" &&
    req.body.email !== "" &&
    req.body.subject !== "" &&
    req.body.message !== ""
  )
    await transporter.sendMail({
      from: `Fagus Art | Kontakt forma <${req.body.email}>`, // sender address
      to: emailUser, // list of receivers
      subject: "Nova poruka | Fagus Art", // Subject line
      text: "Nova poruka!", // plain text body
      html: output, // html body
    });

  res.json({ message: "Email has been sent!" });
}

export default sendEmail;
