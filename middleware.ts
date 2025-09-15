import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const SECRET = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (!pathname.startsWith("/admin")) return NextResponse.next();

  // Obtiene token de la sesión en middleware
  const token = await getToken({ req, secret: SECRET });

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Aquí tu campo rol viene de jwt callback: token.rol
  if (token.rol !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};