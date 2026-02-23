export class ServicioGet {
    public static async peticionGet(urlServicio: string): Promise<any> {
        const token = localStorage.getItem("TOKEN_AUTORIZACION");

        const datosEnviar = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "authorization": `Bearer ${token}`
            }
        };

        try {
            const response = await fetch(urlServicio, datosEnviar);

            if (!response.ok) {
                throw new Error(`Error del servidor: ${response.status}`);
            }

            return await response.json();

        } catch (error) {
            console.error("Error en petición GET:", error);
            throw error;
        }
    }
    public static async peticionGetPublica(urlServicio: string): Promise<any> {
        const datosEnviar = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        };

        try {
            const response = await fetch(urlServicio, datosEnviar);

            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                console.error(`Error HTTP: ${response.status} ${response.statusText}`);
                console.error(`URL que falló: ${urlServicio}`);

                // Si la respuesta no es JSON, intentar leer como texto
                const textResponse = await response.text();
                console.error("Respuesta del servidor:", textResponse);

                throw new Error(`Error del servidor: ${response.status} ${response.statusText}`);
            }

            // Verificar el tipo de contenido
            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                const textResponse = await response.text();
                console.error("El servidor no devolvió JSON. Respuesta:", textResponse);
                throw new Error("El servidor no devolvió JSON válido");
            }

            const losDatos = await response.json();
            return losDatos;
        } catch (error) {
            console.error("Error en petición GET pública:", error);
            console.error("URL que causó el error:", urlServicio);
            throw error;
        }
    }

  
   
}