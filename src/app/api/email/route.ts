import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { FF__cookTime } from '../../../../FeatureFlags';

interface OrderItem {
  name: string;
  amount: number;
  price: number;
}

export async function POST(request: NextRequest) {
  const { items, totalAmount, totalTime } = (await request.json()) as {
    items: OrderItem[];
    totalAmount: number;
    totalTime: number;
  };

  // Format the email content
  let message = `New Order Received:\n\n`;
  items.forEach((item) => {
    message += `${item.amount} ${item.name}\n`;
  });
  if (FF__cookTime) {
    message += `\nTotal Amount: ${totalAmount}\nTotal Time: ${totalTime}`;
  }

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      NOTE: see below setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `New Order from Yomogi!`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
