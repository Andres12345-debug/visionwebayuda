// core/HttpClient.ts
export class HttpClient {

  private static getHeaders(auth: boolean = false) {
    const headers: any = {
      "Content-Type": "application/json"
    };

    if (auth) {
      const token = localStorage.getItem("TOKEN_AUTORIZACION");
      headers["Authorization"] = `Bearer ${token}`;
    }

    return headers;
  }

  public static async get(url: string, auth: boolean = false) {
    const response = await fetch(url, {
      method: "GET",
      headers: this.getHeaders(auth)
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    return response.json();
  }

}