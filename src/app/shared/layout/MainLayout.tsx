import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import SmallNav from "../../public/nav/SmallNav";
import { FloatingWhatsApp } from "../../public/components/ui/FloatingWhatsApp";
import Footer from "../../public/footer/Footer";

export const MainLayout = () => {
  return (
    <Box>
      <SmallNav />
      {/* Espacio para que no quede debajo del AppBar */}
      <Toolbar />
      {/* 👇 AQUÍ se renderizan las rutas */}
      <Box sx={{ p: 3 }}>        
        <Outlet />
        <FloatingWhatsApp />
        <Footer/>
      </Box>
    </Box>
  );
};
