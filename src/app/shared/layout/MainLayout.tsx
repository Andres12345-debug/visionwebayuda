import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
// Importamos Suspense de React
import { Suspense } from "react";
import SmallNav from "../../public/nav/SmallNav";
import { FloatingWhatsApp } from "../../public/components/ui/FloatingWhatsApp";
import Footer from "../../public/footer/footer";

export const MainLayout = () => {
  return (
    <Box>
      <SmallNav />
      {/* Espacio para que el contenido no empiece detrás de la Navbar fija */}
      <Toolbar />

      <Box sx={{ p: 0 }}> {/* p: 3 podría dañar el diseño de tus secciones full-width, mejor manejarlo dentro de cada página */}

        {/* 1. EL SUSPENSE ES LA CLAVE: Envuelve el Outlet */}
        <Suspense fallback={
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
            Cargando...
          </Box>
        }>
          <Outlet />
        </Suspense>

        <FloatingWhatsApp />
        <Footer />
      </Box>
    </Box>
  );
};