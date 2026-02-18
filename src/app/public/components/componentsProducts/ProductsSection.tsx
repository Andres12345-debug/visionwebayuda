import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { SoftwareCard, SoftwareItem } from "./SoftwareCard";
import { ProductModal } from "./ProductModal";

// Íconos
import InventoryIcon from "@mui/icons-material/Inventory";
import BusinessIcon from "@mui/icons-material/Business";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const softwareList: SoftwareItem[] = [
  {
    id: 1,
    name: "GPLI Inventario",
    description: "Control avanzado de stock, almacenes y movimientos.",
    category: "Inventario",
    icon: <InventoryIcon fontSize="large" />,
  },
  {
    id: 2,
    name: "GPLI Empresarial",
    description: "Gestión integral de procesos administrativos y contables.",
    category: "Empresarial",
    icon: <BusinessIcon fontSize="large" />,
  },
  {
    id: 3,
    name: "GPLI Logística",
    description: "Optimización de envíos, rutas y distribución.",
    category: "Logística",
    icon: <LocalShippingIcon fontSize="large" />,
  },
  {
    id: 4,
    name: "GPLI Reportes",
    description:
      "Análisis y métricas en tiempo real para decisiones estratégicas.",
    category: "Analytics",
    icon: <AssessmentIcon fontSize="large" />,
  },
  {
    id: 5,
    name: "GPLI Comercial",
    description: "Ventas, facturación electrónica y gestión de clientes.",
    category: "Comercial",
    icon: <StorefrontIcon fontSize="large" />,
  },
  {
    id: 6,
    name: "GPLI Soporte",
    description: "Gestión de tickets y atención al cliente.",
    category: "Soporte",
    icon: <SupportAgentIcon fontSize="large" />,
  },
];

const ProductsSection = () => {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] =
    useState<SoftwareItem | null>(null);
  const [open, setOpen] = useState(false);

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
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "linear-gradient(180deg, #0f0f13, #0a0a0d)"
              : "linear-gradient(180deg, #f8fafc, #ffffff)",
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
              Soluciones GPLI
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
