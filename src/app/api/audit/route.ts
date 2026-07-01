import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, website, message } = body;

    // Send the dataset exactly how Web3Forms expects it
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: "00935dde-ee3f-4ed7-bdf7-168303be0ff9", // Ensure your actual key is pasted here
        subject: `🚨 New Elevate Search Lead: ${name}`,
        from_name: "Elevate AI Terminal",
        
        // Custom fields formatted for your notification email
        "Client Name": name,
        "WhatsApp Link": `https://wa.me/${phone.replace(/\D/g, '')}`,
        "Phone Provided": phone,
        "Email Address": email,
        "Target Website": website,
        "Operational Message": message || "No custom message provided."
      })
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error("Web3Forms API Refusal Callback:", data.message);
      return NextResponse.json({ success: false, error: data.message }, { status: 400 });
    }

  } catch (error) {
    console.error("Critical Transmission Failure:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}