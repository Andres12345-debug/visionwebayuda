import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { LinearProgress, Box } from "@mui/material"; // Usamos MUI para un cargador decente
import ScrollToTop from "../app/public/components/ScrollToTop";
import { Boardboard } from "../app/private/pages/Boardboard";

// Corrección de typos y organización
const LazyError = lazy(() => import("../app/shared/Error"));
const LazyProfile = lazy(() => import("../app/private/pages/Profile"));
const LazyDashboard = lazy(() => import("../app/private/pages/dashborad")); // Corregido 'dashboard'

// Loader profesional para el Suspense
const PageLoader = () => (
  <Box sx={{ width: "100%", mt: 2 }}>
    <LinearProgress />
  </Box>
);

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
            {/* Ruta por defecto al entrar al prefijo (ej: /dash/)
             */}
            <Route index element={<LazyDashboard />} />

            {/* Ruta: /prefijo/profile */}
            <Route path="profile" element={<LazyProfile />} />

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
