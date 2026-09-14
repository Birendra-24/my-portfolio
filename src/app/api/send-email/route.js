/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import nodemailer from "nodemailer";

export async function POST(req, res) {
  const body = await req.json();
  const { name, email, message } = body;
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}"`,
      to: process.env.EMAIL,
      replyTo: email,
      subject: "New Contact Form Message",
      html: `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
        <h2 style="color: #333;">📩 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        
        <div style="padding: 15px; background-color: #f9f9f9; border-left: 4px solid #007BFF; margin-top: 5px; white-space: pre-wrap;">
          ${message}
        </div>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />
       <p style="font-size: 12px; color: #777; margin-top: 30px;">
  This message was sent from the contact form on your website:
  <br />
</p>

      </div>
    </div>
  `,
    });

    return Response.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ success: false, message: "Email failed to send." }),
      {
        status: 500,
      }
    );
  }
}
