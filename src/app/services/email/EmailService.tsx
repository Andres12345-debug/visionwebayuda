// services/correoService.tsx

import { HttpClient } from "../core/HttpClient";
import { URLS } from "../../utilities/domains/urls";
import { Correo } from "../../models/Email";

export class CorreoService {

  /**
   * Obtener todos los correos
   */
  public static async listarCorreos(): Promise<Correo[]> {

    try {

      const data = await HttpClient.get<any[]>(
        URLS.URL_BASE + URLS.LISTAR_CORREOS,
        false
      );

      return data.map(item => new Correo(
        item.id,
        item.nombre,
        item.email,
        item.mensaje,
        item.fecha
      ));

    } catch (error) {

      console.error("Error obteniendo correos:", error);
      throw error;

    }

  }


  /**
   * Obtener un correo por ID
   */
  public static async obtenerCorreo(id: number): Promise<Correo> {

    try {

      const item = await HttpClient.get<any>(
        URLS.URL_BASE + URLS.OBTENER_CORREO + `/${id}`,
        false
      );

      return new Correo(
        item.id,
        item.nombre,
        item.email,
        item.mensaje,
        item.fecha
      );

    } catch (error) {

      console.error(`Error obteniendo correo ${id}:`, error);
      throw error;

    }

  }

}