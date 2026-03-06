import { NextRequest } from "next/server";

const API_BASE_URL =
  process.env.API_BASE_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://allforone-cfdsfqahd2a2d9d5.westus3-01.azurewebsites.net";
const TEXT_PLAIN = "text/plain";
const JSON_CONTENT_TYPE = "application/json";

function getTargetUrl(req: NextRequest): URL | null {
  const incoming = new URL(req.url);
  const target = incoming.searchParams.get("target");

  if (!target || !target.startsWith("/api/")) {
    return null;
  }

  return new URL(target, API_BASE_URL);
}

async function forward(req: NextRequest) {
  const targetUrl = getTargetUrl(req);
  if (!targetUrl) {
    return new Response("Missing or invalid target. Expected ?target=/api/<endpoint>", {
      status: 400,
      headers: { "content-type": TEXT_PLAIN },
    });
  }

  const body = req.method === "POST" ? await req.text() : undefined;

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        "content-type": req.headers.get("content-type") || JSON_CONTENT_TYPE,
      },
      body,
      cache: "no-store",
    });

    const contentType = response.headers.get("content-type") || TEXT_PLAIN;
    const payload = await response.text();

    return new Response(payload, {
      status: response.status,
      headers: { "content-type": contentType },
    });
  } catch {
    return new Response(
      `Upstream API is unreachable at ${API_BASE_URL}. Set API_BASE_URL in your environment if needed.`,
      {
        status: 502,
        headers: { "content-type": TEXT_PLAIN },
      },
    );
  }
}

export async function GET(req: NextRequest) {
  return forward(req);
}

export async function POST(req: NextRequest) {
  return forward(req);
}
