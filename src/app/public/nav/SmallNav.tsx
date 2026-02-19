import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import {
  DarkMode,
  LightMode,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
// Importamos useLocation para el estado activo y Link para la navegación
import { useLocation, Link } from "react-router-dom";
import { useThemeContext } from "../../shared/theme/ThemeConext";
import { useTranslation } from "react-i18next";

// 1. Agregamos "Inicio" apuntando a /welcome
const MENU_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/products" },
  { label: "Planes de Gestión IT", href: "/Plane" },
];

export default function Navbar() {
  const { mode, toggleTheme } = useThemeContext();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { i18n } = useTranslation();

  // 2. Hook para saber la ruta actual (Evita errores de "pestaña desconocida")
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle = {
    textDecoration: "none",
    textTransform: "none",
    fontWeight: 500,
    color: "inherit",
    position: "relative",
    cursor: "pointer",
    transition: "color 0.3s ease",
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          transition: "all 0.3s ease",
          backdropFilter: "blur(12px)",
          // Fondo ajustado para modo oscuro puro
          background: mode === "light"
            ? "linear-gradient(90deg, rgba(255,255,255,0.9), rgba(240,240,255,0.9))"
            : "rgba(0, 0, 0, 0.8)",
          color: mode === "light" ? "#000" : "#fff",
          borderBottom: mode === "dark" && scrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
        }}
      >
        <Toolbar sx={{ minHeight: scrolled ? 56 : 72, transition: "0.3s" }}>
          {/* Logo - Ahora siempre lleva al inicio */}
          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{ fontWeight: 900, letterSpacing: 1, textDecoration: "none", color: "inherit", mr: 4 }}
          >
            ViSion<span style={{ color: "#6366f1" }}>Web</span>
          </Typography>

          {/* Menú Desktop con indicador de pestaña activa */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            {MENU_ITEMS.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Typography
                  key={item.href}
                  component={Link}
                  to={item.href}
                  sx={{
                    ...navLinkStyle,
                    color: isActive ? "#6366f1" : "inherit",
                    fontWeight: isActive ? 700 : 500,
                    // Línea inferior animada que se queda fija si está activo
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: isActive ? "100%" : 0,
                      height: "2px",
                      bottom: -4,
                      left: 0,
                      backgroundColor: "#6366f1",
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": { width: "100%" }
                  }}
                >
                  {item.label}
                </Typography>
              );
            })}
          </Box>

          {/* Acciones Derecha */}
          <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              variant="outlined"
              startIcon={<LanguageIcon />}
              sx={{
                textTransform: "none",
                borderRadius: 3,
                display: { xs: "none", sm: "inline-flex" },
                borderColor: mode === "dark" ? "rgba(255,255,255,0.3)" : "primary.main"
              }}
              onClick={toggleLanguage}
            >
              {i18n.language === "es" ? "EN" : "ES"}
            </Button>

            <IconButton onClick={toggleTheme} color="inherit">
              {mode === "light" ? <DarkMode /> : <LightMode />}
            </IconButton>

            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: "flex", md: "none" } }}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Menú Lateral (Drawer) */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 260, height: '100%', bgcolor: mode === 'dark' ? '#0a0a0a' : '#fff' }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
            <IconButton onClick={() => setDrawerOpen(false)}><CloseIcon /></IconButton>
          </Box>
          <Divider />
          <List>
            {MENU_ITEMS.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <ListItemButton
                  key={item.href}
                  component={Link}
                  to={item.href}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    color: isActive ? "#6366f1" : "inherit",
                    bgcolor: isActive ? "rgba(99, 102, 241, 0.08)" : "transparent",
                    borderLeft: isActive ? "4px solid #6366f1" : "4px solid transparent"
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontWeight: isActive ? 700 : 500 }}
                  />
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}