import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from "jose";
export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  try {
    const payload = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET),
    );
    if (payload.payload.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } catch (err) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  // try {
  //   const payload = JSON.parse(atob(token.split(".")[1]));
  //   if (payload.role !== "ADMIN") {
  //     return NextResponse.redirect(new URL("/403", req.url));
  //   }
  // } catch (err) {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }
}

export const config = {
  matcher: "/admin/:path*",
};
