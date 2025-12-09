import { NextRequest, NextResponse } from "next/server";
export function proxy(req: NextRequest) {
  
  const {pathname} = req.nextUrl
  console.log("proxy run on :",pathname)
  const accestoken = req.cookies.get("accessToken")?.value || ''
  const refreshToken = req.cookies.get("refreshToken")?.value || ''

  if((!accestoken && !refreshToken ) && !pathname.startsWith("/auth"))
  {
    console.log("no acess token no refresh token .............")
    return NextResponse.redirect(new URL("/auth/login", req.url));
  } 
  
  if(!accestoken && refreshToken)
  {
    console.log("no acess token but refresh token .............")
    return NextResponse.next();
  }
  if(accestoken && (pathname.startsWith("/auth") || pathname ==="/"))
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