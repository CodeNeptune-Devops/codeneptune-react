import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import Admin from "@/models/Admin";
import { connectDB } from "@/lib/db";
import { generateToken } from "@/lib/generateToken";
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    const { email, name, password } = await request.json();

    // Validate required fields
    if (!email || !name || !password) {
      return NextResponse.json(
        { message: "Email, name, and password are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate password length
    if (password.length < 6) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters long" },
        { status: 400 }
      );
    }

    await connectDB();

    // Check if user already exists
    const existingUser = await Admin.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 409 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    // Create new admin user
    const newAdmin = await Admin.create({
      email,
      name,
      password : hashedPassword
    });

    return NextResponse.json(
      {
        message: "Sign up successful",
        data: { email: newAdmin.email, name: newAdmin.name },
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error from signup route", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}