import { RegistroSesion } from "../models/SessionRegister";
import { URLS } from "../utilities/domains/urls"

export class RegistroService {
    public static async registrarUsuario(objRegistro: RegistroSesion): Promise<any> {
        const datosEnviar = {
            method: "POST",
            body: JSON.stringify(objRegistro),
            headers: { "Content-Type": "application/json; charset=UTF-8" }
        };

        const urlEnviar = URLS.URL_BASE + URLS.REGISTRO;
        const respuesta = await fetch(urlEnviar, datosEnviar);

        if (!respuesta.ok) {
            const errorData = await respuesta.json();
            throw new Error(errorData.message || "Error en el registro");
        }

        return respuesta.json();
    }
}
