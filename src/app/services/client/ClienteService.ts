import { HttpClient } from "../core/HttpClient";
import { ServicioPostUsuario } from "../client/ServicePostUsuario";
import { URLS } from "../../utilities/domains/urls";

export class ClienteService {

  /**
   * Obtener todos los clientes
   */
  public static async listarClientes(): Promise<any[]> {

    try {

      const data = await HttpClient.get<any[]>(
        URLS.URL_BASE + URLS.LISTAR_CLIENTES,
        true
      );

      return data;

    } catch (error) {

      console.error("Error obteniendo clientes:", error);
      throw error;

    }

  }

  /**
   * Crear cliente
   */
  public static async crearCliente(datos: any): Promise<any> {

    try {

      return ServicioPostUsuario.peticionPost(
        URLS.URL_BASE + URLS.CREAR_CLIENTES,
        datos
      );

    } catch (error) {

      console.error("Error creando cliente:", error);
      throw error;

    }

  }

  /**
   * Actualizar cliente
   */
  public static async actualizarCliente(id: number, datos: any): Promise<any> {

    try {

      const token = localStorage.getItem("TOKEN_AUTORIZACION") as string;

      const res = await fetch(
        URLS.URL_BASE + URLS.ACTUALIZAR_CLIENTES + `/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: token
          },
          body: JSON.stringify(datos)
        }
      );

      return await res.json();

    } catch (error) {

      console.error("Error actualizando cliente:", error);
      throw error;

    }

  }

  /**
   * Eliminar cliente
   */
  public static async eliminarCliente(id: number): Promise<any> {

    try {

      const token = localStorage.getItem("TOKEN_AUTORIZACION") as string;

      const res = await fetch(
        URLS.URL_BASE + URLS.ELIMINAR_CLIENTES + `/${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: token
          }
        }
      );

      return await res.json();

    } catch (error) {

      console.error("Error eliminando cliente:", error);
      throw error;

    }

  }

}