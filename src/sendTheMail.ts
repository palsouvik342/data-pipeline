import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const sendTheMail = (table:any)=> {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'palsouvik342@gmail.com',
          pass: process.env.nodeMailerPass,
        }
      });
      const mailOptions = {
        from: 'palsouvik342@gmail.com',
        to: 'souvikpalunofficial@gmail.com',
        subject: "It works!",
        html: table
      };
      transporter.sendMail(mailOptions, function (err, info) {
        if (err) console.log(err);
        else console.log(info);
      });
}

export default sendTheMail;