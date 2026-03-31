import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Sadece /maintenance sayfasına izin ver
  if (url.pathname !== "/maintenance") {
    url.pathname = "/maintenance";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}