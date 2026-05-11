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
import { useTranslation } from "react-i18next";

import { SoftwareCard, SoftwareItem } from "./SoftwareCard";
import { ProductModal } from "./ProductModal";

import InventoryIcon from "@mui/icons-material/Inventory";
import BusinessIcon from "@mui/icons-material/Business";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const ProductsSection = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] =
    useState<SoftwareItem | null>(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const softwareList: SoftwareItem[] = [
    {
      id: 1,
      name: t("products.productos.0.name"),
      description: t("products.productos.0.desc"),
      category: "Inventario",
      icon: <InventoryIcon fontSize="large" />,
    },
    {
      id: 2,
      name: t("products.productos.1.name"),
      description: t("products.productos.1.desc"),
      category: "Empresarial",
      icon: <BusinessIcon fontSize="large" />,
    },
    {
      id: 3,
      name: t("products.productos.2.name"),
      description: t("products.productos.2.desc"),
      category: "Logística",
      icon: <LocalShippingIcon fontSize="large" />,
    },
    {
      id: 4,
      name: t("products.productos.3.name"),
      description: t("products.productos.3.desc"),
      category: "Analytics",
      icon: <AssessmentIcon fontSize="large" />,
    },
    {
      id: 5,
      name: t("products.productos.4.name"),
      description: t("products.productos.4.desc"),
      category: "Comercial",
      icon: <StorefrontIcon fontSize="large" />,
    },
    {
      id: 6,
      name: t("products.productos.5.name"),
      description: t("products.productos.5.desc"),
      category: "Soporte",
      icon: <SupportAgentIcon fontSize="large" />,
    },
  ];

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
              {t("products.titulo")}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                maxWidth: 700,
                mx: "auto",
                color: "text.secondary",
              }}
            >
              {t("products.subtitulo")}
            </Typography>
          </Box>

          {/* Buscador */}
          <Box display="flex" justifyContent="center" mb={6}>
            <TextField
              placeholder={t("products.buscarPlaceholder")}
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
              {t("products.ctaTitulo")}
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
              {t("products.ctaBoton")}
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
