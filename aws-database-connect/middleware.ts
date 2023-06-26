import { NextResponse } from 'next/server';

export function middleware(request: any) {
  const origin = request.headers.get('origin');
  console.log(origin);

  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', '*'); //allows public access to this endpoint from any domain
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    'Content-type, Authorization'
  );
  response.headers.set('Access-Control-Max-Age', '86400');

  console.log('Middleware running!');
  console.log(request.method);
  console.log(request.url);

  return response;
}

export const config = {
  matcher: '/api/:path*',
};
