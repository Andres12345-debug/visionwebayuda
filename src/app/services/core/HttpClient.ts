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

  // GET
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

  // POST
  public static async post<T>(url: string, data: any, auth: boolean = false): Promise<T> {

    try {

      const response = await fetch(url, {
        method: "POST",
        headers: this.getHeaders(auth),
        body: JSON.stringify(data)
      });

      if (!response.ok) {

        const text = await response.text();
        console.error("Error servidor:", text);
        throw new Error(`Error HTTP ${response.status}`);

      }

      return await response.json();

    } catch (error) {

      console.error("Error en HttpClient POST:", error);
      throw error;

    }

  }

  // PUT
  public static async put<T>(url: string, data: any, auth: boolean = false): Promise<T> {

    try {

      const response = await fetch(url, {
        method: "PUT",
        headers: this.getHeaders(auth),
        body: JSON.stringify(data)
      });

      if (!response.ok) {

        const text = await response.text();
        console.error("Error servidor:", text);
        throw new Error(`Error HTTP ${response.status}`);

      }

      return await response.json();

    } catch (error) {

      console.error("Error en HttpClient PUT:", error);
      throw error;

    }

  }

  public static async delete<T>(url: string, auth: boolean = false): Promise<T> {

  try {

    const response = await fetch(url, {
      method: "DELETE",
      headers: this.getHeaders(auth)
    });

    if (!response.ok) {

      const text = await response.text();
      console.error("Error servidor:", text);
      throw new Error(`Error HTTP ${response.status}`);

    }

    return await response.json();

  } catch (error) {

    console.error("Error en HttpClient DELETE:", error);
    throw error;

  }

}

}