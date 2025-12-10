import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Forward the browser cookie to backend
    const cookie = req.headers.get("cookie") || "";

    const response = await fetch(`${process.env.BACKEND_URL}/api/user/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        cookie,
      },
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}
