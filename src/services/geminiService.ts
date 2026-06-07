import Groq from "groq-sdk";

const SYSTEM_PROMPT = `Eres el asistente virtual de VisionWeb, una empresa colombiana especializada en soluciones tecnológicas empresariales Open Source.

Tus conocimientos se limitan estrictamente a los servicios y productos de VisionWeb:
- Mesa de Ayuda Profesional: implementación y soporte de GLPI para gestión de tickets, incidentes y solicitudes de TI.
- Gestión de Inventario TI: control centralizado de activos tecnológicos (computadores, servidores, periféricos, software).
- Documentación técnica: base de conocimiento integrada en GLPI.
- Reportes y métricas: dashboards e informes de rendimiento del área TI.
- Soporte multiplataforma: compatibilidad con Windows, Linux y Mac.
- Control y seguridad: gestión de accesos y auditoría de activos.

Reglas de comportamiento:
- Responde siempre en español, de forma clara, amable y profesional.
- Si te preguntan algo fuera del ámbito de VisionWeb o TI empresarial, responde: "Esa pregunta está fuera de mi área de conocimiento. ¿Puedo ayudarte con algo relacionado con nuestros servicios de mesa de ayuda o gestión de inventario TI?"
- Para solicitar una demo o cotización, indica que pueden escribir al WhatsApp +57 300 753 8453 o usar el formulario de contacto.
- No inventes precios ni fechas. Si no sabes un dato específico, deriva al equipo de ventas.
- Respuestas cortas y directas, máximo 3 párrafos.`;

const groq = new Groq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY ?? "",
  dangerouslyAllowBrowser: true,
});

export type ChatMessage = {
  role: "user" | "model";
  text: string;
};

export class RateLimitError extends Error {
  constructor() {
    super("rate_limit");
  }
}

export async function sendChatMessage(
  history: ChatMessage[],
  userMessage: string
): Promise<string> {
  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...history.map((m) => ({
          role: m.role === "model" ? ("assistant" as const) : ("user" as const),
          content: m.text,
        })),
        { role: "user", content: userMessage },
      ],
      temperature: 0.7,
      max_tokens: 512,
    });

    return response.choices[0]?.message?.content ?? "";
  } catch (err: any) {
    const status = err?.status ?? err?.error?.code ?? "";
    if (String(status).includes("429") || String(status).includes("rate_limit")) {
      throw new RateLimitError();
    }
    throw err;
  }
}
