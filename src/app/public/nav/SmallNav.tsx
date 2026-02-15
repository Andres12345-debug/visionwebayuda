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
import { useThemeContext } from "../../shared/theme/ThemeConext";
import { useTranslation } from "react-i18next";


const MENU_ITEMS = [
  { label: "Productos", href: "/products" },
  { label: "Servicios", href: "/" },
];

export default function Navbar() {
  const { mode, toggleTheme } = useThemeContext();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
  const newLang = i18n.language === "es" ? "en" : "es";
  i18n.changeLanguage(newLang);
};



  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          transition: "all 0.3s ease",
          backdropFilter: "blur(12px)",
          background: mode === "light"
            ? "linear-gradient(90deg, rgba(255,255,255,0.9), rgba(240,240,255,0.9))"
            : "linear-gradient(90deg, rgba(18,18,18,0.9), rgba(30,30,40,0.9))",
          color: mode === "light" ? "#000" : "#fff",
          boxShadow: scrolled
            ? "0 4px 20px rgba(0,0,0,0.08)"
            : "none",
        }}
      >
        <Toolbar
          sx={{
            minHeight: scrolled ? 56 : 72,
            transition: "all 0.3s ease",
          }}
        >
          {/* Logo */}
          <Typography
            
            variant="h6"
            sx={{
              fontWeight: 900,
              letterSpacing: 1,
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            ViSion<span style={{ color: "#6366f1" }}>Web</span>
          </Typography>

          {/* Menu Desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 4,
              ml: 8,
            }}
          >
            {MENU_ITEMS.map((item, i) => (
              <Button
                key={i}
                href={item.href}
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  color: "inherit",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: 0,
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "#6366f1",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
                onClick={() => i18n.changeLanguage("es")}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Right Actions */}
          <Box
            sx={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Button
              variant="outlined"
              startIcon={<LanguageIcon />}
              sx={{ textTransform: "none", borderRadius: 3 }}
              onClick={toggleLanguage}
            >
              {i18n.language === "es" ? "EN" : "ES"}
            </Button>

            {/* Tema */}
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === "light" ? <DarkMode /> : <LightMode />}
            </IconButton>

            {/* Mobile Menu */}
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

      {/* Drawer Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 260 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 1,
            }}
          >
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          <List>
            {MENU_ITEMS.map((item, i) => (
              <ListItemButton
                key={i}
                component="a"
                href={item.href}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
