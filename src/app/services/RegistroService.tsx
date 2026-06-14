import { RegistroSesion } from "../models/SessionRegister";
import { URLS } from "../utilities/domains/urls";
import { HttpClient } from "./core/HttpClient";

export class RegistroService {
    public static async registrarUsuario(objRegistro: RegistroSesion): Promise<any> {
        return HttpClient.post<any>(URLS.URL_BASE + URLS.REGISTRO, objRegistro);
    }
}
