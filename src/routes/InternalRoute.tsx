import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { LinearProgress, Box } from "@mui/material"; // Usamos MUI para un cargador decente
import ScrollToTop from "../app/public/components/ScrollToTop";
import { Boardboard } from "../app/private/pages/Boardboard";
import { useAuth } from "../app/utilities/hoks/useAuth";
import { RoleGuard } from "../app/security/RoleGuard";
import { ROLES } from "../app/utilities/domains/roles";

// Corrección de typos y organización
const LazyError = lazy(() => import("../app/shared/Error"));
const LazyProfile = lazy(() => import("../app/private/pages/Profile"));
const LazyCorreos = lazy(() => import("../app/private/pages/EmailDashBoard"));
const LazyServicios = lazy(() => import("../app/private/pages/ServiciosDashboard"));
const LazyMisServicios = lazy(() => import("../app/private/pages/MisServicios"));


// Loader profesional para el Suspense
const PageLoader = () => (
  <Box sx={{ width: "100%", mt: 2 }}>
    <LinearProgress />
  </Box>
);

export const InternalRoute = () => {
  const { esAdministrador, esSupervisor, esCliente } = useAuth();

  // Ruta por defecto al entrar al prefijo (ej: /dash/):
  // administradores van a la bandeja de correos, supervisores a servicios,
  // clientes a sus servicios contratados, el resto va a su perfil.
  const rutaPorDefecto = esAdministrador
    ? "correos"
    : esSupervisor
      ? "servicios"
      : esCliente
        ? "mis-servicios"
        : "profile";

  return (
    <>
      <ScrollToTop />
      {/* Usamos un loader de MUI para que la carga no se vea "barata" */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Boardboard DEBE tener el componente <Outlet />
              dentro de su JSX para renderizar las rutas hijas.
          */}
          <Route path="/" element={<Boardboard />}>
            <Route index element={<Navigate to={rutaPorDefecto} replace />} />

            {/* Ruta: /prefijo/profile */}
            <Route path="profile" element={<LazyProfile />} />

            {/* Ruta: /prefijo/correos — solo administradores (alineado con /privado/correos del backend) */}
            <Route
              path="correos"
              element={
                <RoleGuard roles={[ROLES.ADMINISTRADOR]}>
                  <LazyCorreos />
                </RoleGuard>
              }
            />

            {/* Ruta: /prefijo/servicios — administradores y supervisores (alineado con /privado/servicios y /privado/cliente-servicios) */}
            <Route
              path="servicios"
              element={
                <RoleGuard roles={[ROLES.ADMINISTRADOR, ROLES.SUPERVISOR]}>
                  <LazyServicios />
                </RoleGuard>
              }
            />

            {/* Ruta: /prefijo/mis-servicios — solo clientes (alineado con /privado/cliente-servicios/mios) */}
            <Route
              path="mis-servicios"
              element={
                <RoleGuard roles={[ROLES.CLIENTE]}>
                  <LazyMisServicios />
                </RoleGuard>
              }
            />

            {/* Atrapamos cualquier ruta no definida DENTRO del layout.
                Si no existe, muestra el Error.
            */}
            <Route path="*" element={<LazyError />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
