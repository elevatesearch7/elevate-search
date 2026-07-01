import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, website, message } = body;

    // We send the form data securely to a free email pipeline
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: "00935dde-ee3f-4ed7-bdf7-168303be0ff9", // We will grab this key in Step 3!
        subject: `🚨 New Elevate Search Lead: ${name}`,
        from_name: "Elevate AI Terminal",
        to_email: "elevatesearch7@gmail.com",
        
        // Beautifully structured email text layout for your inbox
        "Client Name": name,
        "WhatsApp / Phone Link": `https://wa.me/${phone.replace(/\D/g, '')} (${phone})`,
        "Email Address": email,
        "Target Website URL": website,
        "Operational Message": message || "No custom message provided."
      })
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: data.message }, { status: 400 });
    }

  } catch (error) {
    console.error("Form transmission failure:", error);
    return NextResponse.json({ success: false, error: "Internal Channel Error" }, { status: 500 });
  }
}