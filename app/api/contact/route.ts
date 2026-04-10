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
  // Reject oversized payloads
  const contentLength = req.headers.get("content-length")
  if (contentLength && parseInt(contentLength) > 10_000) {
    return NextResponse.json({ ok: false, error: "Payload too large" }, { status: 413 })
  }

  let fields: {
    firstName: string
    lastName: string
    phone: string
    email: string
    message: string
    interestedInSuite: boolean
  }

  try {
    const body = await req.json()
    if (!body || typeof body !== "object") throw new Error("Invalid body")

    const b = body as Record<string, unknown>
    const firstName = typeof b.firstName === "string" ? b.firstName.trim() : ""
    const lastName = typeof b.lastName === "string" ? b.lastName.trim() : ""
    const email = typeof b.email === "string" ? b.email.trim() : ""
    const phone = typeof b.phone === "string" ? b.phone.trim() : ""

    if (!firstName) throw new Error("First name is required")
    if (!email) throw new Error("Email is required")

    fields = {
      firstName,
      lastName,
      phone,
      email,
      message: typeof b.message === "string" ? b.message.trim() : "",
      interestedInSuite: Boolean(b.interestedInSuite),
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Bad request"
    return NextResponse.json({ ok: false, error: message }, { status: 400 })
  }

  try {
    const { firstName, lastName, phone, email, message, interestedInSuite } = fields

    const accessToken = await getAccessToken()

    const description = [
      message,
      interestedInSuite ? "Interested in purchasing a suite." : "",
    ]
      .filter(Boolean)
      .join("\n\n")

    const lead: Record<string, unknown> = {
      First_Name: firstName,
      Last_Name: lastName || "(no last name)",
      Lead_Source: "Web Site",
    }
    if (phone)       lead.Phone       = phone
    if (email)       lead.Email       = email
    if (description) lead.Description = description

    const crmRes = await fetch(`https://www.zohoapis.${DC}/crm/v2/Leads`, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: [lead] }),
    })

    const crmJson = await crmRes.json()

    // Zoho can return HTTP 200 with data[0].status === "error"
    const record = crmJson?.data?.[0]
    if (!crmRes.ok || record?.status === "error") {
      const code = record?.code ?? crmRes.status
      const details = record?.message ?? JSON.stringify(crmJson)
      throw new Error(`Zoho CRM ${code}: ${details}`)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[/api/contact]", err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}