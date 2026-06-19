import { HttpClient } from "../core/HttpClient";
import { URLS } from "../../utilities/domains/urls";

export type ChatMessage = {
  role: "user" | "model";
  text: string;
};

export class RateLimitError extends Error {
  constructor() {
    super("rate_limit");
  }
}

export class AsistenteService {

  /**
   * Enviar una pregunta al asistente IA del backend (mismo "cerebro" que usa el bot de Telegram)
   */
  public static async preguntar(pregunta: string, historial: ChatMessage[] = []): Promise<string> {

    try {

      const resp = await HttpClient.post<{ respuesta: string }>(
        URLS.URL_BASE + URLS.PREGUNTAR_ASISTENTE,
        { pregunta, historial }
      );

      return resp.respuesta;

    } catch (error: any) {

      if (error?.message === "rate_limit") {
        throw new RateLimitError();
      }

      console.error("Error consultando al asistente:", error);
      throw error;

    }

  }

}
