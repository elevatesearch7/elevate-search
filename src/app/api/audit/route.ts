import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json().catch(() => null);
    if (!data) {
      return NextResponse.json({ success: false, error: "Empty payload body" }, { status: 400 });
    }

    // Extract the raw clean data fields from the frontend
    const name = data.name || "New Lead";
    const phone = data.phone || "Not provided";
    const email = data.email || "Not provided";
    const website = data.website || "Not provided";
    const message = data.message || "No message left.";

    // Hyper-standardized payload layout matching Web3Forms specifications exactly
    const externalResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: "00935dde-ee3f-4ed7-bdf7-168303be0ff9", 
        subject: `🚨 New Elevate Search Lead: ${name}`,
        from_name: "Elevate AI Terminal",
        name: name,
        email: email,
        phone: phone,
        website: website,
        message: message
      })
    });

    const resultText = await externalResponse.text();
    let parsedResult;
    
    try {
      parsedResult = JSON.parse(resultText);
    } catch {
      return NextResponse.json({ success: false, error: "Bad gateway string mapping" }, { status: 400 });
    }

    if (externalResponse.ok && parsedResult.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: parsedResult.message || "Key verification refused" }, { status: 400 });
    }

  } catch (serverError: any) {
    console.error("Intercepted server crash loop:", serverError);
    return NextResponse.json({ 
      success: false, 
      error: "Internal runtime failure protection layer trigger",
      details: serverError?.message || String(serverError)
    }, { status: 500 });
  }
}