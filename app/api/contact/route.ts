import { NextResponse } from "next/server";

/**
 * POST /api/contact
 *
 * Forwards the contact form payload to Web3Forms, which delivers a
 * formatted email to whichever address you registered at web3forms.com
 * (in our case: jeanpaulfrago10@gmail.com).
 *
 * Set the env var WEB3FORMS_ACCESS_KEY in `.env.local` (dev) and in
 * Vercel → Project → Settings → Environment Variables (prod).
 */
export async function POST(req: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Email service not configured. Set WEB3FORMS_ACCESS_KEY in environment variables."
      },
      { status: 500 }
    );
  }

  let data: Record<string, string> = {};
  try {
    data = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = (data.name || "").toString().trim();
  const email = (data.email || "").toString().trim();
  const role = (data.role || "").toString().trim();
  const message = (data.message || "").toString().trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  // Basic anti-spam honeypot check
  if (data.company) {
    // Bots fill hidden 'company' field
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `FFG-Scouting · New Assessment Request — ${name}`,
        from_name: "FFG-Scouting Website",
        replyto: email,
        // Fields shown in the email body:
        Name: name,
        Email: email,
        Role: role || "—",
        Message: message,
        Source: "ffg-scouting.com / Booking form"
      })
    });

    const json = (await res.json()) as { success?: boolean; message?: string };

    if (!res.ok || !json.success) {
      return NextResponse.json(
        {
          ok: false,
          error: json.message || "Email service rejected the request."
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Network error reaching email service." },
      { status: 502 }
    );
  }
}
