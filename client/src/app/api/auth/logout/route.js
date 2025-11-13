import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  // MUST await cookies()
  const cookieStore = await cookies();

  cookieStore.set("cnAdmin", "", {
    maxAge: 0,
    httpOnly: true,
    secure: true,
    path: "/",
  });

  return NextResponse.json({
    message: "Logged out successfully",
  });
}
