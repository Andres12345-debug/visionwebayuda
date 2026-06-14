import { Navigate, Outlet } from "react-router-dom";
import { AuthService } from "../services/auth/AuthService";

type rutasVigilante = { children?: any };

export const Vigilante = ({ children }: rutasVigilante) => {
  if (!AuthService.estaAutenticado()) {
    return <Navigate to="/login" />;
  }

  return children ? children : <Outlet></Outlet>;
};
