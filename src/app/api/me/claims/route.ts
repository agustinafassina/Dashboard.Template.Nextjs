import { NextResponse } from 'next/server'
import { getAccessToken } from '@auth0/nextjs-auth0'
import { jwtDecode } from 'jwt-decode'
import { CustomJwtPayload } from '@/interfaces/payload-jwt'
import { UserClaims } from '@/interfaces/user-claims'

/** Exposes only the access-token claims the UI needs, never the token itself. */
export async function GET() {
  try {
    const { accessToken } = await getAccessToken()
    if (!accessToken) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const decoded = jwtDecode<CustomJwtPayload>(accessToken)
    const claims: UserClaims = {
      role: decoded.role ?? [],
      jobTitle: decoded.user_jobtitle_ad ?? null,
    }
    return NextResponse.json(claims)
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
}
