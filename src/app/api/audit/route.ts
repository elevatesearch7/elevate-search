import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // 1. Safely parse incoming data packages
    const data = await req.json().catch(() => null);
    if (!data) {
      return NextResponse.json({ success: false, error: "Empty payload body" }, { status: 400 });
    }

    // 2. Destructure data properties with safe fallbacks
    const name = data.name || "New Lead";
    const phone = data.phone || "Not provided";
    const email = data.email || "Not provided";
    const website = data.website || "Not provided";
    const message = data.message || "No message left.";

    // 3. Directly transmit clean payload arrays straight to Web3Forms
    const externalResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: "YOUR_ACTUAL_WEB3FORMS_KEY_HERE", // <-- Ensure your active key is pasted here!
        subject: `🚨 New Elevate Search Lead: ${name}`,
        from_name: "Elevate AI Terminal",
        
        "Client Name": name,
        "Phone / WhatsApp": phone,
        "Email Address": email,
        "Target Website Link": website,
        "Operational Message": message
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