import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { jwtDecode } from "jwt-decode";
import { LinearProgress, Box } from "@mui/material"; // Usamos MUI para un cargador decente
import ScrollToTop from "../app/public/components/ScrollToTop";
import { Boardboard } from "../app/private/pages/Boardboard";

// Corrección de typos y organización
const LazyError = lazy(() => import("../app/shared/Error"));
const LazyProfile = lazy(() => import("../app/private/pages/Profile"));
const LazyCorreos = lazy(() => import("../app/private/pages/EmailDashBoard"));
const LazyServicios = lazy(() => import("../app/private/pages/ServiciosDashboard"));


// Loader profesional para el Suspense
const PageLoader = () => (
  <Box sx={{ width: "100%", mt: 2 }}>
    <LinearProgress />
  </Box>
);

// La bandeja de correos solo está disponible para administradores
const esAdministrador = () => {
  const token = localStorage.getItem("TOKEN_AUTORIZACION");
  if (!token) return false;
  try {
    const { rol } = jwtDecode<{ rol: string }>(token);
    return rol?.toLowerCase().includes("admin") ?? false;
  } catch {
    return false;
  }
};

export const InternalRoute = () => {
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
            {/* Ruta por defecto al entrar al prefijo (ej: /dash/):
                administradores van directo a la bandeja de correos,
                el resto va a su perfil */}
            <Route
              index
              element={<Navigate to={esAdministrador() ? "correos" : "profile"} replace />}
            />

            {/* Ruta: /prefijo/profile */}
            <Route path="profile" element={<LazyProfile />} />

            {/* Ruta: /prefijo/correos — solo administradores */}
            <Route
              path="correos"
              element={esAdministrador() ? <LazyCorreos /> : <Navigate to="/dash" replace />}
            />

            {/* Ruta: /prefijo/servicios — solo administradores */}
            <Route
              path="servicios"
              element={esAdministrador() ? <LazyServicios /> : <Navigate to="/dash" replace />}
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
