import { HttpClient } from "../core/HttpClient";
import { URLS } from "../../utilities/domains/urls";
import { Servicio } from "../../models/Servicio";

const mapServicio = (item: any) => new Servicio(
  item.codServicio,
  item.nombreServicio,
  item.descripcionServicio,
  item.precioBaseServicio
);

export class ServiciosService {

  public static async listarServicios(): Promise<Servicio[]> {
    const data = await HttpClient.get<any[]>(
      URLS.URL_BASE + URLS.LISTAR_SERVICIOS,
      true
    );

    return data.map(mapServicio);
  }

  public static async obtenerServicio(id: number): Promise<Servicio> {
    const item = await HttpClient.get<any>(
      URLS.URL_BASE + URLS.OBTENER_SERVICIO + `/${id}`,
      true
    );

    return mapServicio(item);
  }

  public static crearServicio(datos: {
    nombreServicio: string;
    descripcionServicio?: string;
    precioBaseServicio: number;
  }) {
    return HttpClient.post<any>(
      URLS.URL_BASE + URLS.CREAR_SERVICIO,
      datos,
      true
    );
  }

  public static actualizarServicio(id: number, datos: {
    nombreServicio?: string;
    descripcionServicio?: string;
    precioBaseServicio?: number;
  }) {
    return HttpClient.put<any>(
      URLS.URL_BASE + URLS.ACTUALIZAR_SERVICIO + `/${id}`,
      datos,
      true
    );
  }

  public static eliminarServicio(id: number) {
    return HttpClient.delete<any>(
      URLS.URL_BASE + URLS.ELIMINAR_SERVICIO + `/${id}`,
      true
    );
  }

}
