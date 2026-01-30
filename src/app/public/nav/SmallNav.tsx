import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import {
  DarkMode,
  LightMode,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { useThemeContext } from "../../shared/theme/ThemeConext";

const MENU_ITEMS = [
  { label: "Inicio", href: "#" },
  { label: "Productos", href: "#" },
  { label: "Servicios", href: "#" },
  { label: "Contacto", href: "#" },
];

export default function Navbar() {
  const { mode, toggleTheme } = useThemeContext();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        elevation={0}
        sx={{ top: 0, zIndex: (theme) => theme.zIndex.appBar + 2 }}
      >
        <Toolbar variant="dense" sx={{ minHeight: 56 }}>
          {/* Logo */}
          <Box>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" }, fontWeight: 700 }}
            >
              ViSionWeb
            </Typography>
          </Box>

          {/* Menu Items (desktop) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
              ml: 4,
            }}
          >
            {MENU_ITEMS.map((item, i) => (
              <Button
                key={i}
                color="inherit"
                href={item.href}
                sx={{ textTransform: "none" }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Right Actions */}
          <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 1 }}>
            {/* Idioma */}
            <Button
              variant="outlined"
              startIcon={<LanguageIcon />}
              sx={{ color: "#fff", borderColor: "#fff" }}
              onClick={() => alert("Cambiar idioma")}
            >
              ES
            </Button>

            {/* Tema */}
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === "light" ? <DarkMode /> : <LightMode />}
            </IconButton>

            {/* Menú hamburguesa (móvil) */}
            <IconButton
              onClick={() => setDrawerOpen(true)}
              color="inherit"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer móvil */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {MENU_ITEMS.map((item, i) => (
              <ListItem
                
                key={i}
                component="a"
                href={item.href}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
