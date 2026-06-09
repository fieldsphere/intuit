import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 });
  }

  const email = typeof payload === "object" && payload !== null && "email" in payload
    ? String((payload as { email: unknown }).email).trim()
    : "";

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks for subscribing to Intuit updates.",
    email
  });
}
