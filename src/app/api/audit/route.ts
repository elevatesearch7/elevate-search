import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // 1. Safely parse the incoming JSON data to avoid crash loops
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ success: false, error: "Missing or malformed data payload" }, { status: 400 });
    }

    const { name, phone, email, website, message } = body;

    // 2. Safeguard the phone formatting logic so it NEVER throws a 500 crash
    const safePhone = typeof phone === 'string' ? phone : '';
    const cleanDigits = safePhone.replace(/\D/g, '');
    const whatsappLink = cleanDigits ? `https://wa.me/${cleanDigits}` : 'No valid phone number provided';

    // 3. Connect directly to the Web3Forms secure email delivery network
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: "00935dde-ee3f-4ed7-bdf7-168303be0ff9", // <-- Make sure your real key is pasted here!
        subject: `🚨 New Elevate Search Lead: ${name || 'New Client'}`,
        from_name: "Elevate AI Terminal",
        
        "Client Name": name || "Not provided",
        "WhatsApp Link": whatsappLink,
        "Phone Provided": safePhone || "Not provided",
        "Email Address": email || "Not provided",
        "Target Website": website || "Not provided",
        "Operational Message": message || "No custom message provided."
      })
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: data.message }, { status: 400 });
    }

  } catch (error: any) {
    // 4. If a crash happens, output the exact reason so it displays in your browser Network tab
    return NextResponse.json({ 
      success: false, 
      error: "Internal Server Exception Handler", 
      message: error?.message || String(error) 
    }, { status: 500 });
  }
}