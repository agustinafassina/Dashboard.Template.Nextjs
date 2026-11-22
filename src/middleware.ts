import { NextResponse } from 'next/server'
import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge'

// Cookies written by older versions of this template, which exposed the
// access token to client-side JavaScript. Remove them if still present.
const LEGACY_COOKIES = ['token', 'username']

export default withMiddlewareAuthRequired(async (req) => {
  const res = NextResponse.next()
  for (const name of LEGACY_COOKIES) {
    if (req.cookies.has(name)) res.cookies.delete(name)
  }
  return res
})

export const config = {
  matcher: ['/', '/home', '/home/:path*', '/guide'],
}
