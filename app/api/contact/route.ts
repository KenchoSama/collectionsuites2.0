import { NextRequest, NextResponse } from "next/server"

const DC = process.env.ZOHO_DATA_CENTER ?? "com"

async function getAccessToken(): Promise<string> {
  const res = await fetch(`https://accounts.zoho.${DC}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: process.env.ZOHO_CLIENT_ID!,
      client_secret: process.env.ZOHO_CLIENT_SECRET!,
      refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
    }),
  })

  if (!res.ok) throw new Error(`Zoho token error: ${res.status}`)
  const data = await res.json()
  if (!data.access_token) throw new Error("No access_token in Zoho response")
  return data.access_token
}

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, phone, email, message, interestedInSuite } =
      await req.json()

    const accessToken = await getAccessToken()

    const description = [
      message,
      interestedInSuite
        ? "Interested in purchasing a suite."
        : "",
    ]
      .filter(Boolean)
      .join("\n\n")

    const lead = {
      First_Name: firstName,
      Last_Name: lastName || "(no last name)",
      Phone: phone,
      Email: email,
      Description: description,
      Lead_Source: "Web Site",
    }

    const crmRes = await fetch(
      `https://www.zohoapis.${DC}/crm/v2/Leads`,
      {
        method: "POST",
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: [lead] }),
      }
    )

    if (!crmRes.ok) {
      const err = await crmRes.text()
      throw new Error(`Zoho CRM error ${crmRes.status}: ${err}`)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[/api/contact]", err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
