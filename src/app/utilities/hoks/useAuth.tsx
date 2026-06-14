import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService, TokenPayload } from "../../services/auth/AuthService";
import { ROLES } from "../domains/roles";

export const useAuth = () => {
  const navigate = useNavigate();

  const usuario: TokenPayload | null = useMemo(() => AuthService.obtenerUsuario(), []);

  const tieneRol = (...rolesPermitidos: string[]) => AuthService.tieneRol(...rolesPermitidos);

  const esAdministrador = tieneRol(ROLES.ADMINISTRADOR);
  const esSupervisor = tieneRol(ROLES.SUPERVISOR);
  const esCliente = tieneRol(ROLES.CLIENTE);

  const cerrarSesion = (redirigirA: string = "/") => {
    AuthService.cerrarSesion();
    navigate(redirigirA);
  };

  return {
    usuario,
    estaAutenticado: !!usuario,
    esAdministrador,
    esSupervisor,
    esCliente,
    tieneRol,
    cerrarSesion,
  };
};
