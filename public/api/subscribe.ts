import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email } = req.body as { email?: string };

    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Valid email is required" });
    }

    // Send the welcome email
    await resend.emails.send({
      from: "AMSmartTech <onboarding@resend.dev>", // works for testing
      to: email,
      subject: "Welcome to AMSmartTech ✅",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <h2>Welcome to AMSmartTech!</h2>
          <p>You're subscribed 🎉</p>
          <p>Every week you'll get Windows tips, productivity hacks, and PC tutorials.</p>
          <p><b>Start here:</b> <a href="https://amsmarttech.vercel.app/tips">Browse Tips</a></p>
          <p style="color:#666;font-size:12px;margin-top:24px">
            If you didn’t subscribe, you can ignore this email.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}