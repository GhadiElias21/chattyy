// /lib/apiClient.ts
export interface ApiClientOptions {
  headers?: Record<string, string>;
  body?: any;
  credentials?: RequestCredentials;
}

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = "") {
    this.baseUrl = baseUrl; // e.g., "" for relative paths or "http://localhost:5000"
  }

  private async request<T>(
    url: string,
    method: "GET" | "POST" | "PATCH" | "DELETE",
    options: ApiClientOptions = {}
  ): Promise<T> {
    const { headers = {}, body, credentials = "include" } = options;

    try {
      const res = await fetch(`${this.baseUrl}${url}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
        credentials,
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data.message || `Request failed with status ${res.status}`
        );
      }

      return data as T;
    } catch (err: unknown) {
      if (err instanceof Error) throw err;
      throw new Error("Unknown server error");
    }
  }

  get<T>(url: string, options?: ApiClientOptions) {
    return this.request<T>(url, "GET", options);
  }

  post<T>(url: string, body?: any, options?: ApiClientOptions) {
    return this.request<T>(url, "POST", { ...options, body });
  }

  patch<T>(url: string, body?: any, options?: ApiClientOptions) {
    return this.request<T>(url, "PATCH", { ...options, body });
  }

  delete<T>(url: string, body?: any, options?: ApiClientOptions) {
    return this.request<T>(url, "DELETE", { ...options, body });
  }
}

// Export a default instance for relative paths
export const apiClient = new ApiClient();
