export class Correo {

  public id: number;
  public nombre: string;
  public email: string;
  public mensaje: string;
  public fecha: string;
  public respondido: boolean;

  constructor(
    id: number,
    nombre: string,
    email: string,
    mensaje: string,
    fecha: string,
    respondido: boolean
  ) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.mensaje = mensaje;
    this.fecha = fecha;
    this.respondido = respondido;
  }

}