import { NextRequest, NextResponse } from "next/server";
export function proxy(req: NextRequest) {
  
  const {pathname} = req.nextUrl
  const accestoken = req.cookies.get("accessToken")?.value || ''

  if(!accestoken && !pathname.startsWith("/auth"))
  {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  
  if(accestoken && (pathname.startsWith("/auth/login") || pathname ==="/"))
  {
    return NextResponse.redirect(new URL("/dashboard",req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\.png$).*)',
  ],
}