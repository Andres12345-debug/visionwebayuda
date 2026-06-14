import { Acceso } from "../models/Acess";
import { URLS } from "../utilities/domains/urls";
import { HttpClient } from "./core/HttpClient";

export class AccesoService {
    public static async iniciarSesion(objAcceso: Acceso): Promise<any> {
        return HttpClient.post<any>(URLS.URL_BASE + URLS.INICIAR_SESION, objAcceso);
    }
}
