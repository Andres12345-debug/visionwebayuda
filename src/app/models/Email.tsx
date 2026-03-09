// modelos/Correo.ts

export class Correo {

  public id: number;
  public nombre: string;
  public email: string;
  public mensaje: string;
  public fecha: string;

  constructor(
    id: number,
    nombre: string,
    email: string,
    mensaje: string,
    fecha: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.mensaje = mensaje;
    this.fecha = fecha;
  }

}