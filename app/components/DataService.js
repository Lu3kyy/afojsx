"use client";

function normalizePath(path) {
  return path.startsWith("/") ? path : `/${path}`;
}

function toApiUrl(path) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  const normalized = normalizePath(path);

  if (normalized.startsWith("/api/challenge/")) {
    const target = normalized.replace("/api/challenge/", "/api/");
    return `/api?target=${encodeURIComponent(target)}`;
  }

  return normalized;
}

export async function callChallengeApi(path, options) {
  const response = await fetch(toApiUrl(path), {
    ...options,
    cache: "no-store",
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(text || `Request failed with status ${response.status}`);
  }

  return text;
}
