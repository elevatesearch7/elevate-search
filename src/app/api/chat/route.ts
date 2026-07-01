import { NextResponse } from 'next/server';

// Strict type contracts to pass Vercel development linter compilation runs smoothly
interface GeminiPart {
  text?: string;
}

interface GeminiCandidate {
  content?: {
    parts?: GeminiPart[];
  };
}

interface GeminiApiResponse {
  candidates?: GeminiCandidate[];
  error?: {
    message?: string;
  };
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const systemInstructionText = `You are the elite, ultra-intelligent AI Visibility Assistant running natively on the Elevate Search platform. 
    Your objective is to consult potential clients fluidly on Website SEO, Google Maps Matrix positioning (GEO), and Answer Engine Optimization (AEO).

    Core Corporate Knowledge Parameters:
    - Founder & Lead Architect: Narayan Yadav, a 24-year-old digital systems strategist and technical engineer born on October 3, 2001. Narayan specializes in deep visual optimization frameworks, technical code cleanup, and paid digital acquisition structures. He engineers all project roadmaps manually for clients.
    - Flat-Rate Pricing Structures (No ongoing retainers):
      1. Google Business Maps Optimization: ₹8,000 one-time fee. Fixes dropped map rankings, coordinate misalignment, and removes category overlapping.
      2. Website Search Optimization: ₹15,000 one-time fee. Cleans heavy script clutter, accelerates performance under 2 seconds, and repairs indexing defects.
      3. Complete Search Visibility Solution: ₹20,000 one-time fee. The absolute flagship blueprint combining web search, map packs, and AEO schema trees for tools like ChatGPT and Gemini.
      4. Targeted Single-Asset Audits: ₹500 to ₹1,000.
    - Official Direct Channels: Email is elevatesearch7@gmail.com, Voice line is 8850286037.

    Operational Rules:
    - Keep answers conversational, crisp, confident, and professional.
    - Use clear, plain business terms rather than dense marketing buzzwords.
    - CRITICAL FORMATTING RULE: Return your entire response as a single continuous paragraph of clean, plain text. Do NOT use any line breaks (\\n), bullet points, bold markdown (**), or special symbols. Ensure your sentences are completely finished and never cut off mid-thought.`;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ text: "System Configuration Notice: GEMINI_API_KEY environment variable is currently missing from your host dashboard setup." });
    }

    // Fixed: Restructured payload to use the correct root-level systemInstruction parameter block
    const apiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { role: 'user', parts: [{ text: message }] }
        ],
        systemInstruction: {
          parts: [{ text: systemInstructionText }]
        },
        generationConfig: { 
          maxOutputTokens: 800, // Expanded generation boundary room to let thoughts finish fully
          temperature: 0.6 
        }
      })
    });

    const outputData = (await apiResponse.json()) as GeminiApiResponse;

    // 1. SUCCESS: Return the clean AI response text string
    const cleanOutput = outputData.candidates?.[0]?.content?.parts?.[0]?.text;
    if (cleanOutput) {
      return NextResponse.json({ text: cleanOutput });
    }

    // 2. RATE LIMIT CAPTURE: Intercept API rate limits and display a polished direct message
    if (outputData.error?.message?.toLowerCase().includes("quota") || outputData.error?.message?.toLowerCase().includes("limit")) {
      return NextResponse.json({ 
        text: "The AI terminal is currently processing a high volume of global optimization scans. Please wait a few seconds and ask your question again, or tap 'Connect WhatsApp' below to speak with Narayan instantly!" 
      });
    }

    // 3. ERROR FALLBACK
    if (outputData.error) {
      return NextResponse.json({ text: "Our visibility scanning array is running a quick background adjustment. Feel free to submit your URL via our Free Audit Form for a comprehensive evaluation layout!" });
    }

    return NextResponse.json({ text: "I'm experiencing a brief signal loop deviation across the local indexing network. Let's start an immediate text diagnostic over on WhatsApp!" });

  } catch {
    return NextResponse.json({ text: "The local search array is taking longer than expected to process." }, { status: 500 });
  }
}