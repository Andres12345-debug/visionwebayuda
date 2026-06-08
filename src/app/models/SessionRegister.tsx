export class RegistroSesion{
    public nombreUsuario: string;
    public fechaNacimientoUsuario: string;
    public generoUsuario: number;
    public telefonoUsuario: string;
    public empresaUsuario?: string;
    public correoUsuario: string;
    public claveAcceso: string;

    constructor(nom: string,
           fec: string,
           gen: number,
           tel: string,
           cor: string,
           cla: string,
           emp?: string
            ) {
        this.nombreUsuario = nom;
        this.fechaNacimientoUsuario = fec;
        this.generoUsuario = gen;
        this.telefonoUsuario = tel;
        this.empresaUsuario = emp;
        this.correoUsuario = cor;
        this.claveAcceso = cla;
      }
    }
