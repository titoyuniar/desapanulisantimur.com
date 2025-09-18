import { NextRequest, NextResponse } from "next/server";

const guestPath = Object.freeze([
  { path: "/", exact: true },
  { path: "/product/detail/", exact: false },
  { path: "/auth/reset/pin", exact: false },
  { path: "/auth/pin/forgot", exact: false },
]);

export async function middleware(req: NextRequest) {
  const whatsappToken = req.cookies.get("whatsappToken")?.value;
  const accessToken = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;

  if (req.nextUrl.pathname.startsWith("/auth")) {
    if (accessToken && refreshToken) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } else if (
    !accessToken &&
    !refreshToken &&
    !guestPath.some(({ exact, path }) => (exact ? req.nextUrl.pathname === path : req.nextUrl.pathname.startsWith(path)))
  ) {
    if (whatsappToken) {
      return NextResponse.redirect(new URL("/login", req.url));
    } else {
      return NextResponse.redirect(new URL("/register", req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|icons/*|manifest.json).*)",
};
