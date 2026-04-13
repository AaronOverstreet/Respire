const jsonHeaders = { "Content-Type": "application/json" };

function cors(methods: string) {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": methods,
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function mailchimpDc(apiKey: string): string | null {
  const parts = apiKey.split("-");
  const dc = parts[parts.length - 1];
  return dc && /^[a-z]{2}\d+$/i.test(dc) ? dc : null;
}

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors("POST, OPTIONS") });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...jsonHeaders, ...cors("POST, OPTIONS") },
      });
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID;

    if (!apiKey || !listId) {
      return new Response(
        JSON.stringify({ error: "Newsletter signup is not configured on the server." }),
        { status: 503, headers: { ...jsonHeaders, ...cors("POST, OPTIONS") } },
      );
    }

    const dc = mailchimpDc(apiKey);
    if (!dc) {
      return new Response(JSON.stringify({ error: "Invalid Mailchimp API key format." }), {
        status: 503,
        headers: { ...jsonHeaders, ...cors("POST, OPTIONS") },
      });
    }

    let body: Record<string, unknown>;
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON body." }), {
        status: 400,
        headers: { ...jsonHeaders, ...cors("POST, OPTIONS") },
      });
    }

    const email = String(body.email ?? "").trim();
    const name = String(body.name ?? "").trim();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required." }), {
        status: 400,
        headers: { ...jsonHeaders, ...cors("POST, OPTIONS") },
      });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return new Response(JSON.stringify({ error: "Please enter a valid email address." }), {
        status: 400,
        headers: { ...jsonHeaders, ...cors("POST, OPTIONS") },
      });
    }

    const auth = Buffer.from(`anystring:${apiKey}`).toString("base64");
    const url = `https://${dc}.api.mailchimp.com/3.0/lists/${encodeURIComponent(listId)}/members`;

    const mcRes = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        merge_fields: name ? { FNAME: name } : {},
      }),
    });

    if (mcRes.ok) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...jsonHeaders, ...cors("POST, OPTIONS") },
      });
    }

    let detail: { title?: string; detail?: string } = {};
    try {
      detail = (await mcRes.json()) as { title?: string; detail?: string };
    } catch {
      /* ignore */
    }

    if (detail.title === "Member Exists") {
      return new Response(JSON.stringify({ ok: true, alreadySubscribed: true }), {
        status: 200,
        headers: { ...jsonHeaders, ...cors("POST, OPTIONS") },
      });
    }

    console.error("Mailchimp error:", mcRes.status, detail);
    return new Response(
      JSON.stringify({
        error:
          detail.detail ||
          "Could not subscribe right now. Please try again later.",
      }),
      { status: 502, headers: { ...jsonHeaders, ...cors("POST, OPTIONS") } },
    );
  },
};
