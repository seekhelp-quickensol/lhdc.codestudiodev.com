import { User } from "lucide-react";
import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_EXPRESS_BACKEND_URL || 'http://localhost:3000/express';

const publicRoutes = ["/auth/signin", "/auth/signup", "/auth/error", "/auth/unauthorized"]; 
const authRoutes = ["/auth/signin", "/auth/signup"];

async function verifyToken(token: string) {
  try {
    const response = await fetch(`${API_URL}/auth/verify`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      return null;
    }

    const result = await response.json();
    return result.valid ? result.user : null;
  } catch (error) {
    console.error('Token verification error:', error);
    return null;
  }
}

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("auth_token")?.value;
  const user = token ? await verifyToken(token) : null;
  const isLoggedIn = !!user;
  const userRole = user?.role;
  const referer = request.headers.get("referer");

  console.log(`Proxy middleware: path=${pathname}, isLoggedIn=${isLoggedIn}, role=${userRole}`);

if (
  pathname === "/" &&
  isLoggedIn &&
  referer &&
  referer.includes("/auth")
) {
  return NextResponse.redirect(new URL("/admin", request.url));
}

  // 2. Kick logged-in users out of auth pages
  if (authRoutes.includes(pathname) && isLoggedIn) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  // 3. Allow public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // 4. Admin protection
  const adminRequiredPaths = ["/admin"];
  const needsAdmin = adminRequiredPaths.some(p => pathname.startsWith(p));

  if (needsAdmin && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};