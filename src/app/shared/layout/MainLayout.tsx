import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import SmallNav from "../../public/nav/SmallNav";
import Footer from "../../public/footer/footer";
import { FloatingWhatsApp } from "../../public/components/ui/FloatingWhatsApp";

export const MainLayout = () => {
  return (
    <Box>
      <SmallNav />

      {/* Espacio para que no quede debajo del AppBar */}

      <Toolbar />

      {/* 👇 AQUÍ se renderizan las rutas */}
      <Box sx={{ p: 3 }}>        
        <Outlet />
        <Footer />
        <FloatingWhatsApp />

      </Box>
    </Box>
  );
};
