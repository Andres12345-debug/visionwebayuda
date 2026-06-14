import { HttpClient } from "../core/HttpClient";
import { URLS } from "../../utilities/domains/urls";

export class UserService {

  public static listarTodos() {
    return HttpClient.get<any[]>(
      URLS.URL_BASE + URLS.LISTAR_USUARIOS,
      true
    );
  }

  public static obtenerPerfil() {
    return HttpClient.get(
      URLS.URL_BASE + URLS.LISTAR_PERFIL,
      true
    );
  }

  public static actualizarPerfil(datos: any) {
    return HttpClient.put(
      URLS.URL_BASE + URLS.ACTUALIZAR_PERFIL,
      datos,
      true
    );
  }

}