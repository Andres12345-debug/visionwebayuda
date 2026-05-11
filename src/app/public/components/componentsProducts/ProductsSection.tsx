import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  Stack,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

import { SoftwareCard, SoftwareItem } from "./SoftwareCard";
import { ProductModal } from "./ProductModal";

import InventoryIcon from "@mui/icons-material/Inventory";
import BusinessIcon from "@mui/icons-material/Business";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const softwareList: SoftwareItem[] = [
  {
    id: 1,
    name: "Inventario Profesional",
    description: "Control avanzado de stock, almacenes y movimientos de activos TI.",
    category: "Inventario",
    icon: <InventoryIcon fontSize="large" />,
  },
  {
    id: 2,
    name: "Gestión Empresarial",
    description: "Administración integral de procesos, finanzas y recursos empresariales.",
    category: "Empresarial",
    icon: <BusinessIcon fontSize="large" />,
  },
  {
    id: 3,
    name: "Logística Inteligente",
    description: "Optimización de envíos, rutas y distribución con trazabilidad completa.",
    category: "Logística",
    icon: <LocalShippingIcon fontSize="large" />,
  },
  {
    id: 4,
    name: "Analytics y Reportes",
    description:
      "Métricas en tiempo real y paneles interactivos para decisiones estratégicas.",
    category: "Analytics",
    icon: <AssessmentIcon fontSize="large" />,
  },
  {
    id: 5,
    name: "Comercial y Facturación",
    description: "Ventas, facturación electrónica y gestión integral de clientes.",
    category: "Comercial",
    icon: <StorefrontIcon fontSize="large" />,
  },
  {
    id: 6,
    name: "Soporte y Mesa de Ayuda",
    description: "Gestión de tickets, incidencias y atención al cliente centralizada.",
    category: "Soporte",
    icon: <SupportAgentIcon fontSize="large" />,
  },
];

const ProductsSection = () => {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] =
    useState<SoftwareItem | null>(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const filteredProducts = softwareList.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpen = (product: SoftwareItem) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#000000" : "#f8fafc",
          transition: "background-color 0.3s ease",
        }}
      >
        <Container maxWidth="xl">
          {/* Título */}
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h3"
              fontWeight={800}
              sx={{ fontSize: { xs: "2.2rem", md: "3rem" }, mb: 2 }}
            >
              Soluciones Profesionales
            </Typography>

            <Typography
              variant="body1"
              sx={{
                maxWidth: 700,
                mx: "auto",
                color: "text.secondary",
              }}
            >
              Plataforma integral para la gestión empresarial moderna.
            </Typography>
          </Box>

          {/* Buscador */}
          <Box display="flex" justifyContent="center" mb={6}>
            <TextField
              placeholder="Buscar producto..."
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ width: { xs: "100%", sm: 400 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Grid */}
          <Grid container spacing={4}>
            {filteredProducts.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <SoftwareCard
                  item={item}
                  onClick={() => handleOpen(item)}
                />
              </Grid>
            ))}
          </Grid>

          {/* Enlace interno a planes de gestión */}
          <Stack spacing={2} alignItems="center" sx={{ mt: 8, mb: 4 }}>
            <Typography variant="h6" fontWeight={700} color="text.secondary" textAlign="center">
              ¿Listo para llevar tu gestión al siguiente nivel?
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/plan-de-gestion-it")}
              sx={{
                py: 1.8,
                px: 5,
                borderRadius: 3,
                fontWeight: 700,
                textTransform: "none",
                fontSize: "1.1rem",
                background: "linear-gradient(90deg, #6366f1, #9333ea)",
                "&:hover": {
                  background: "linear-gradient(90deg, #4f46e5, #7e22ce)",
                },
              }}
            >
              Ver planes de gestión IT
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Modal */}
      <ProductModal
        open={open}
        onClose={handleClose}
        product={selectedProduct}
      />
    </>
  );
};

export default ProductsSection;
