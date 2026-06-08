export class Servicio {

  public codServicio: number;
  public nombreServicio: string;
  public descripcionServicio: string | null;
  public precioBaseServicio: number;

  constructor(
    codServicio: number,
    nombreServicio: string,
    descripcionServicio: string | null,
    precioBaseServicio: number | string
  ) {
    this.codServicio = codServicio;
    this.nombreServicio = nombreServicio;
    this.descripcionServicio = descripcionServicio;
    this.precioBaseServicio = Number(precioBaseServicio);
  }

}
