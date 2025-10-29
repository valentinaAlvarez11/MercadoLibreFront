// singletonFetch.ts
const rawApiUrl = process.env.NEXT_PUBLIC_API_URL;
const API_URL = (rawApiUrl && rawApiUrl !== "undefined")
  ? rawApiUrl.replace(/\/$/, "")
  : "http://localhost:3000";

type methods = "GET" | "POST" | "PUT" | "DELETE";

export const apiFetch = async (endpoint: string, method: methods, body?: any) => {
  // Construir URL
  const url = endpoint.match(/^https?:\/\//i)
    ? endpoint
    : `${API_URL}/${endpoint.replace(/^\//, "")}`;

  // DEBUG: muestra en consola la URL usada (quitar en producción)
  if (process.env.NODE_ENV === "development") {
    console.debug("[apiFetch] API_URL:", API_URL, " -> fetching:", url);
  }

  const headerOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    // 🔑 CAMBIO CRUCIAL AQUÍ: Incluir credenciales (cookies) en la petición
    credentials: 'include', 
  };

  if (method === "POST" || method === "PUT") headerOptions.body = JSON.stringify(body);

  const res = await fetch(url, headerOptions);

  const text = await res.text();
  const contentType = (res.headers.get("content-type") || "").toLowerCase();

  let json: any = null;
  if (contentType.includes("application/json") && text) {
    try {
      json = JSON.parse(text);
    } catch (e) {
      console.warn("[apiFetch] fallo parse json:", e);
    }
  }

  if (!res.ok) {
    const message = (json && (json.error || json.message)) || text || `HTTP error ${res.status}`;
    const error = new Error(message);
    (error as any).status = res.status;
    (error as any).response = json ?? text;
    throw error;
  }

  return json ?? text;
};