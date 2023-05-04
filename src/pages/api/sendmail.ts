import nodemailer from "nodemailer";

const senderMail = (req: any, res: any) => {
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "afb44588e04ba1",
      pass: "fb4d5684366741",
    },
  });
  transport.sendMail(
    {
      from: "hemant.mourya@cloudactivelabs.in",
      to: "studentrk7@gamil.com",
      subject: "SuccessFull running",
    },
    (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    }
  );
  res.json({
    message: "success ful",
  });
};

export default senderMail;
