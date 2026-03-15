export class ServicioPostUsuario {

  public static async peticionPost(
    urlServicio: string,
    objRegistro: any,
    isMultipart: boolean = false
  ): Promise<any> {

    const token = localStorage.getItem("TOKEN_AUTORIZACION") as string;

    const headers: any = isMultipart
      ? { authorization: token }
      : {
          "Content-Type": "application/json; charset=UTF-8",
          authorization: token
        };

    const datosEnviar: RequestInit = {
      method: "POST",
      headers,
      body: isMultipart ? objRegistro : JSON.stringify(objRegistro),
    };

    try {

      const res = await fetch(urlServicio, datosEnviar);

      console.log("Estado respuesta:", res.status);

      if (!res.ok) {

        const errorData = await res.json();

        console.error("Error del servidor:", errorData);

        return {
          success: false,
          error: errorData
        };

      }

      return await res.json();

    } catch (error) {

      console.error("Error en petición POST usuario:", error);

      return {
        success: false,
        error
      };

    }

  }

}