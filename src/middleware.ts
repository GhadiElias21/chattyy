// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const publicPaths = ["/signin", "/signup", "/favicon.ico", "/_next"];
  const path = req.nextUrl.pathname;

  const isPublic = publicPaths.some((p) => path.startsWith(p));

  if (!token && !isPublic) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|api|favicon.ico).*)",
};
