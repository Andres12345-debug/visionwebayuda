import { Navigate, Outlet } from "react-router-dom";
import { AuthService } from "../services/auth/AuthService";

type RoleGuardProps = {
  roles: string[];
  redirectTo?: string;
  children?: React.ReactNode;
};

export const RoleGuard = ({ roles, redirectTo = "/dash", children }: RoleGuardProps) => {
  if (!AuthService.tieneRol(...roles)) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};
