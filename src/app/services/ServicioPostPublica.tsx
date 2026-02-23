export class ServicioPostPublica {

  public static async peticionPostPublica(urlServicio: string, datos: any): Promise<any> {

    const datosEnviar = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(datos),
    };

    try {
      const response = await fetch(urlServicio, datosEnviar);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error servidor:", errorText);
        throw new Error(`Error ${response.status}`);
      }

      return await response.json();

    } catch (error) {
      console.error("Error en petición POST pública:", error);
      throw error;
    }
  }
}