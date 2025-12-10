import { NextRequest, NextResponse } from "next/server";

export async function POST() {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (err) {
    return NextResponse.json({ message: "Server error", err }, { status: 500 });
  }
}
