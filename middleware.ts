import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


 export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;


   const protectedPaths = ['/cupones', '/vender', '/cart'];
  const isProtected = protectedPaths.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  if (!isProtected) return NextResponse.next();

  const token = request.cookies.get('token')?.value;

  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('next', pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}


 export const config = {
   matcher: ['/cupones/:path*', '/vender/:path*', '/cart/:path*', '/cupones', '/vender', '/cart'],
 };


