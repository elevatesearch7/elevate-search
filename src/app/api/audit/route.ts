import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const dataPayload = await request.json();

    // The backend server handles the communication, bypassing client-side ad-blockers entirely
    const apiResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: "00935dde-ee3f-4ed7-bdf7-168303be0ff9",
        subject: `🚨 New Elevate Search Lead: ${dataPayload.name}`,
        from_name: "Elevate AI Terminal",
        name: dataPayload.name,
        email: dataPayload.email,
        phone: dataPayload.phone,
        website: dataPayload.website,
        message: dataPayload.message,
      }),
    });

    const resultData = await apiResponse.json();

    if (apiResponse.ok && resultData.success) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: resultData.message }, { status: apiResponse.status });
  } catch (error: any) {
    console.error("Backend Form Error:", error);
    return NextResponse.json({ success: false, error: error?.message || "Internal Server Error" }, { status: 500 });
  }
}