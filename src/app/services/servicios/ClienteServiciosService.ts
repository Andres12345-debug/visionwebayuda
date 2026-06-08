import { HttpClient } from "../core/HttpClient";
import { URLS } from "../../utilities/domains/urls";
import { ClienteServicio } from "../../models/ClienteServicio";

const mapClienteServicio = (item: any) => new ClienteServicio(
  item.codClienteServicio,
  item.codUsuario,
  item.codServicio,
  item.fechaInicio,
  item.fechaFin,
  item.precioPactado,
  item.estado,
  item.urlContrato,
  item.observaciones,
  item.usuario,
  item.servicio
);

export class ClienteServiciosService {

  public static async listarTodos(): Promise<ClienteServicio[]> {
    const data = await HttpClient.get<any[]>(
      URLS.URL_BASE + URLS.LISTAR_CLIENTE_SERVICIOS,
      true
    );

    return data.map(mapClienteServicio);
  }

  public static async listarMios(): Promise<ClienteServicio[]> {
    const data = await HttpClient.get<any[]>(
      URLS.URL_BASE + URLS.MIS_CLIENTE_SERVICIOS,
      true
    );

    return data.map(mapClienteServicio);
  }

  public static async obtenerUno(id: number): Promise<ClienteServicio> {
    const item = await HttpClient.get<any>(
      URLS.URL_BASE + URLS.OBTENER_CLIENTE_SERVICIO + `/${id}`,
      true
    );

    return mapClienteServicio(item);
  }

  public static crear(datos: {
    codUsuario: number;
    codServicio: number;
    fechaInicio: string;
    fechaFin?: string | null;
    precioPactado: number;
    estado: string;
    urlContrato?: string;
    observaciones?: string;
  }) {
    return HttpClient.post<any>(
      URLS.URL_BASE + URLS.CREAR_CLIENTE_SERVICIO,
      datos,
      true
    );
  }

  public static actualizar(id: number, datos: {
    codUsuario?: number;
    codServicio?: number;
    fechaInicio?: string;
    fechaFin?: string | null;
    precioPactado?: number;
    estado?: string;
    urlContrato?: string;
    observaciones?: string;
  }) {
    return HttpClient.put<any>(
      URLS.URL_BASE + URLS.ACTUALIZAR_CLIENTE_SERVICIO + `/${id}`,
      datos,
      true
    );
  }

  public static eliminar(id: number) {
    return HttpClient.delete<any>(
      URLS.URL_BASE + URLS.ELIMINAR_CLIENTE_SERVICIO + `/${id}`,
      true
    );
  }

}
