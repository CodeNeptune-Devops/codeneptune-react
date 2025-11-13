import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import Admin from "@/models/Admin";
import { connectDB } from "@/lib/db";
import { generateToken } from "@/lib/generateToken";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    await connectDB();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await Admin.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const token = await generateToken(user);

    // FIXED: cookies() must be awaited
    const cookieStore = await cookies();
    cookieStore.set("cnAdmin", token, {
      maxAge: 24 * 60 * 60, // 1 day
      httpOnly: true,
      secure: true,
      path: "/",
    });

    return NextResponse.json({
      message: "Sign in successful",
      data: { email },
    });
  } catch (error) {
    console.log("Error from signin route", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
