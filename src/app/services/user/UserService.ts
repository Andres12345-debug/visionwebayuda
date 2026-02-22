import { HttpClient } from "../core/HttpClient";
import { URLS } from "../../utilities/domains/urls";

export class UserService {

  public static obtenerPerfil() {
    return HttpClient.get(
      URLS.URL_BASE + URLS.LISTAR_PERFIL,
      true
    );
  }

}