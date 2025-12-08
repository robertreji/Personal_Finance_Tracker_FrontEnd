import { NextRequest, NextResponse } from "next/server";
export function proxy(req: NextRequest) {
  console.log("proxy fired for", req.nextUrl.pathname);
  
  const {pathname} = req.nextUrl
  const accestoken = req.cookies.get("accessToken")?.value || ''
console.log("acesstoken :",accestoken)
  if(!accestoken && !pathname.startsWith("/auth"))
  {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  if(accestoken && pathname.startsWith("/auth/login"))
  {
    return NextResponse.redirect(new URL("/",req.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\.png$).*)',
  ],
}