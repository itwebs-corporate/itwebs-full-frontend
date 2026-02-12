export type ClientRequestData = {
  name: string;
  phone?: string;
  email?: string;
  comment?: string;
  section: string;
  service: string;
};

export type ClientRequestBody = {
  data: ClientRequestData;
};

export async function postClientRequest(data: ClientRequestData) {
  const res = await fetch('/api/client-request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ data }),
  });

  const text = await res.text().catch(() => '');

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}. ${text}`);
  }

  try {
    return JSON.parse(text);
  } catch {
    return { ok: true, raw: text };
  }
}
