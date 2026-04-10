import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    hasClientId: !!process.env.ZOHO_CLIENT_ID,
    hasClientSecret: !!process.env.ZOHO_CLIENT_SECRET,
    hasRefreshToken: !!process.env.ZOHO_REFRESH_TOKEN,
    dataCenter: process.env.ZOHO_DATA_CENTER ?? "not set",
  })
}