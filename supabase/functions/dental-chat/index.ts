// Dental Care Assistant - streaming chat via Lovable AI
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are the "Dental Care Assistant" for Dr. K. Murugesan Dental Clinic in Chennai, Tamil Nadu, India.
Personality: friendly, professional, reassuring. Keep replies concise and well-formatted with markdown.

Clinic Info:
- Doctor: Dr. K. Murugesan (BDS / MDS, 10+ years)
- Tagline: "Healthy Smiles, Trusted Care"
- Phone / WhatsApp: +91 9381034961
- Email: info@murugesandental.com
- Hours: Mon–Sat 9:00 AM – 8:00 PM. Sunday closed (emergency only).
- Languages: Tamil, English

Services: Dental Checkup, Teeth Cleaning, Root Canal, Dental Implants, Tooth Extraction, Teeth Whitening, Braces & Aligners, Smile Design.

You can:
1) Help users book appointments — ask for name, phone, preferred date/time, and service. Then tell them to confirm via the booking form on the page or call +91 9381034961.
2) Answer general dental queries (oral hygiene, common procedures, recovery tips). Always remind: this is general info, not a diagnosis.
3) For emergencies (heavy bleeding, severe pain, knocked-out tooth) tell them to call +91 9381034961 immediately.
Never prescribe medication. Refer to the dentist for clinical decisions.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY missing");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429)
        return new Response(JSON.stringify({ error: "Too many requests, please slow down." }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (response.status === 402)
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add credits." }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("dental-chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
