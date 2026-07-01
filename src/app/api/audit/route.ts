import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ success: false, error: "Malformed payload data structure" }, { status: 400 });
    }

    const { name, phone, email, website, message } = body;

    const safePhone = typeof phone === 'string' ? phone : '';
    const cleanDigits = safePhone.replace(/\D/g, '');
    const whatsappLink = cleanDigits ? `https://wa.me/${cleanDigits}` : 'No phone provided';

    // Establish link with Web3Forms secure gateway
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: "YOUR_ACTUAL_WEB3FORMS_KEY_HERE", // <-- Double-check your key is pasted here perfectly!
        subject: `🚨 New Elevate Search Lead: ${name || 'New Lead'}`,
        from_name: "Elevate AI Terminal",
        
        "Client Name": name || "Not provided",
        "WhatsApp Link": whatsappLink,
        "Phone Provided": safePhone || "Not provided",
        "Email Address": email || "Not provided",
        "Target Website": website || "Not provided",
        "Operational Message": message || "No custom message provided."
      })
    });

    // Read response safely as raw text first to block unexpected formatting crashes
    const rawText = await response.text();
    let responseData;
    
    try {
      responseData = JSON.parse(rawText);
    } catch {
      return NextResponse.json({ 
        success: false, 
        error: "External API did not return standard JSON format data structure",
        rawBody: rawText.substring(0, 150)
      }, { status: 400 });
    }

    if (response.ok && responseData.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ 
        success: false, 
        error: responseData.message || "Gateway access credentials rejected" 
      }, { status: 400 });
    }

  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      error: "Internal Exception Intercepted", 
      details: error?.message || String(error) 
    }, { status: 500 });
  }
}