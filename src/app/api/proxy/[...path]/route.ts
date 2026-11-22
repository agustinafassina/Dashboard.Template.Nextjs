import { NextRequest, NextResponse } from 'next/server'
import { getAccessToken } from '@auth0/nextjs-auth0'

const API_BASE_URL =
  process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL

const FORWARDED_REQUEST_HEADERS = ['accept', 'accept-language', 'content-type']
const FORWARDED_RESPONSE_HEADERS = [
  'content-type',
  'content-disposition',
  'cache-control',
]

type Context = { params: Promise<{ path: string[] }> }

async function proxy(req: NextRequest, { params }: Context) {
  if (!API_BASE_URL) {
    return NextResponse.json(
      { error: 'API_BASE_URL is not configured' },
      { status: 500 },
    )
  }

  let accessToken: string | undefined
  try {
    ;({ accessToken } = await getAccessToken())
  } catch {
    accessToken = undefined
  }
  if (!accessToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { path } = await params
  if (path.some((segment) => segment === '.' || segment === '..')) {
    return NextResponse.json({ error: 'Invalid path' }, { status: 400 })
  }

  const base = API_BASE_URL.endsWith('/') ? API_BASE_URL : `${API_BASE_URL}/`
  const target = new URL(path.map(encodeURIComponent).join('/'), base)
  target.search = req.nextUrl.search

  const headers = new Headers()
  for (const name of FORWARDED_REQUEST_HEADERS) {
    const value = req.headers.get(name)
    if (value) headers.set(name, value)
  }
  headers.set('authorization', `Bearer ${accessToken}`)

  const hasBody = req.method !== 'GET' && req.method !== 'HEAD'

  let upstream: Response
  try {
    upstream = await fetch(target, {
      method: req.method,
      headers,
      body: hasBody ? await req.arrayBuffer() : undefined,
      cache: 'no-store',
      redirect: 'manual',
    })
  } catch {
    return NextResponse.json({ error: 'Upstream unavailable' }, { status: 502 })
  }

  const responseHeaders = new Headers()
  for (const name of FORWARDED_RESPONSE_HEADERS) {
    const value = upstream.headers.get(name)
    if (value) responseHeaders.set(name, value)
  }

  return new Response(upstream.body, {
    status: upstream.status,
    headers: responseHeaders,
  })
}

export {
  proxy as GET,
  proxy as POST,
  proxy as PUT,
  proxy as PATCH,
  proxy as DELETE,
}
