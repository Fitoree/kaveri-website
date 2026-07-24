import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    console.log("API HIT");

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.log("API KEY MISSING");
      return Response.json(
        { error: "RESEND_API_KEY is missing" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { name, email, message } = await req.json();

    console.log("FORM DATA:", { name, email, message });

    const data = await resend.emails.send({
  from: "Kaverik <toimisto@kaverikp.fi>",
  to: "toimisto@kaverikp.fi",
  replyTo: email,
  subject: `New Contact Form Message from ${name}`,
  html: `
    <h2>New Contact Form Message</h2>

    <p><strong>Name:</strong> ${name}</p>

    <p><strong>Email:</strong> ${email}</p>

    <p><strong>Message:</strong></p>

    <p>${message}</p>
  `,
});

    console.log("RESEND RESPONSE:", data);

    return Response.json(data);
  } catch (error) {
    console.error("FULL ERROR:", error);

    return Response.json(
      {
        error: JSON.stringify(error, null, 2),
      },
      { status: 500 }
    );
  }
}