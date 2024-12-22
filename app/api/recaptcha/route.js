import { NextResponse } from "next/server";

export async function POST(request) {
  console.log("1");
  const body = await request.json();
  const { token } = body;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`, {
    method: "POST",
  });

  const verificationData = await response.json();
  console.log("a");
  if (verificationData.success && verificationData.score > 0.5) {
    console.log("b");
    return NextResponse.json({ success: true, score: verificationData.score });
  } else return NextResponse.json({ success: false, score: verificationData.score, errorCodes: verificationData["error-codes"] });
}
