// core/HttpClient.ts

export class HttpClient {

  private static getHeaders(auth: boolean = false) {

    const headers: any = {
      "Content-Type": "application/json"
    };

    if (auth) {
      const token = localStorage.getItem("TOKEN_AUTORIZACION");

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
    }

    return headers;
  }

  public static async get<T>(url: string, auth: boolean = false): Promise<T> {

    try {

      const response = await fetch(url, {
        method: "GET",
        headers: this.getHeaders(auth)
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("Error servidor:", text);
        throw new Error(`Error HTTP ${response.status}`);
      }

      return await response.json();

    } catch (error) {
      console.error("Error en HttpClient GET:", error);
      throw error;
    }

  }

}