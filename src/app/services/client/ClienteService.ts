import { HttpClient } from "../core/HttpClient";
import { URLS } from "../../utilities/domains/urls";
import { Cliente } from "../../models/Client";

export class ClienteService {

  /**
   * LISTAR CLIENTES
   */
  public static async listarClientes(): Promise<Cliente[]> {

    return await HttpClient.get<Cliente[]>(
      URLS.URL_BASE + URLS.LISTAR_CLIENTES,
      true
    );

  }

  /**
   * CREAR CLIENTE
   */
  public static async crearCliente(cliente: Cliente): Promise<Cliente> {

    return await HttpClient.post<Cliente>(
      URLS.URL_BASE + URLS.CREAR_CLIENTES,
      cliente,
      true
    );

  }

  /**
   * ACTUALIZAR CLIENTE
   */
  public static async actualizarCliente(id: number, cliente: Cliente): Promise<Cliente> {

    const url = URLS.URL_BASE +
      URLS.ACTUALIZAR_CLIENTES.replace(":id", id.toString());

    return await HttpClient.put<Cliente>(
      url,
      cliente,
      true
    );

  }

  /**
   * ELIMINAR CLIENTE
   */
  public static async eliminarCliente(id: number): Promise<any> {

    const url = URLS.URL_BASE +
      URLS.ELIMINAR_CLIENTES.replace(":id", id.toString());

    return await HttpClient.delete(
      url,
      true
    );

  }

}