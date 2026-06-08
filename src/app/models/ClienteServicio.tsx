export interface UsuarioContrato {
  codUsuario: number;
  nombreUsuario: string;
  correoUsuario: string;
  empresaUsuario?: string | null;
  [campo: string]: any;
}

export interface ServicioContrato {
  codServicio: number;
  nombreServicio: string;
  precioBaseServicio: string | number;
  [campo: string]: any;
}

export class ClienteServicio {

  public codClienteServicio: number;
  public codUsuario: number;
  public codServicio: number;
  public fechaInicio: string;
  public fechaFin: string | null;
  public precioPactado: number;
  public estado: string;
  public urlContrato: string | null;
  public observaciones: string | null;
  public usuario?: UsuarioContrato;
  public servicio?: ServicioContrato;

  constructor(
    codClienteServicio: number,
    codUsuario: number,
    codServicio: number,
    fechaInicio: string,
    fechaFin: string | null,
    precioPactado: number | string,
    estado: string,
    urlContrato: string | null,
    observaciones: string | null,
    usuario?: UsuarioContrato,
    servicio?: ServicioContrato
  ) {
    this.codClienteServicio = codClienteServicio;
    this.codUsuario = codUsuario;
    this.codServicio = codServicio;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.precioPactado = Number(precioPactado);
    this.estado = estado;
    this.urlContrato = urlContrato;
    this.observaciones = observaciones;
    this.usuario = usuario;
    this.servicio = servicio;
  }

}
