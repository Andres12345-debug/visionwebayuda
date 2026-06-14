import { jwtDecode } from "jwt-decode";
import { ROLES } from "../../utilities/domains/roles";

export const TOKEN_KEY = "TOKEN_AUTORIZACION";

export interface TokenPayload {
  id: number;
  nombre: string;
  rol: string;
  telefono: string;
  correo: string;
  exp?: number;
}

export class AuthService {

  public static getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public static setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  public static cerrarSesion(): void {
    localStorage.removeItem(TOKEN_KEY);
  }

  public static decodificarToken(token: string): TokenPayload {
    return jwtDecode<TokenPayload>(token);
  }

  public static obtenerUsuario(): TokenPayload | null {
    const token = this.getToken();
    if (!token) return null;
    try {
      return this.decodificarToken(token);
    } catch {
      return null;
    }
  }

  public static estaAutenticado(): boolean {
    const usuario = this.obtenerUsuario();
    if (!usuario) return false;
    if (usuario.exp && usuario.exp * 1000 < Date.now()) return false;
    return true;
  }

  public static tieneRol(...rolesPermitidos: string[]): boolean {
    const usuario = this.obtenerUsuario();
    const rolUsuario = usuario?.rol?.trim().toLowerCase();
    if (!rolUsuario) return false;
    return rolesPermitidos.some((rol) => rol.trim().toLowerCase() === rolUsuario);
  }

  public static esAdministrador(): boolean {
    return this.tieneRol(ROLES.ADMINISTRADOR);
  }

  public static esSupervisor(): boolean {
    return this.tieneRol(ROLES.SUPERVISOR);
  }

  public static esCliente(): boolean {
    return this.tieneRol(ROLES.CLIENTE);
  }
}
