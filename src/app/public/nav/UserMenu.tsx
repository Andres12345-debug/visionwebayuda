import React, { useState, useMemo } from "react";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Typography,
  Tooltip,
  alpha,
  Switch,
  useTheme,
} from "@mui/material";

import {
  AccountCircleOutlined as PersonIcon,
  AlternateEmail as MailIcon,
  PeopleOutline as GroupIcon,
  LogoutRounded as LogoutIcon,
  DarkModeOutlined as DarkIcon,
  LightModeOutlined as LightIcon,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// Usamos el hook que tú ya definiste en tu archivo de contexto
import { useThemeContext } from "../../shared/theme/ThemeConext";

interface UserToken {
  nombre: string;
  rol: string;
  exp: number;
}

const UserMenu = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  // Extraemos las funciones y el estado del contexto
  const { mode, toggleTheme } = useThemeContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const datosUsuario = useMemo(() => {
    const token = localStorage.getItem("TOKEN_AUTORIZACION");
    if (!token) return null;
    try {
      return jwtDecode<UserToken>(token);
    } catch {
      return null;
    }
  }, []);

  if (!datosUsuario) return null;

  const handleOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    localStorage.removeItem("TOKEN_AUTORIZACION");
    navigate("/");
    handleClose();
  };

  const menuItems = [
    { label: "Mi Perfil", Icon: PersonIcon, path: "profile" },
    { label: "Bandeja de Entrada", Icon: MailIcon, path: "/correos" },
    { label: "Gestión de Usuarios", Icon: GroupIcon, path: "/usuarios" },
  ];

  return (
    <Box sx={{ position: "fixed", top: 16, right: 16, zIndex: 1300 }}>
      <Tooltip title="Ajustes de usuario">
        <IconButton onClick={handleOpen} sx={{ p: 0.5 }}>
          <Avatar
            sx={{
              width: 42,
              height: 42,
              bgcolor: "primary.main",
              fontWeight: 700,
              boxShadow:
                mode === "dark"
                  ? "0 0 12px rgba(99, 102, 241, 0.4)"
                  : "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            {datosUsuario.nombre.charAt(0).toUpperCase()}
          </Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            mt: 1.5,
            width: 280,
            borderRadius: "16px",
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "background.paper",
            backgroundImage: "none", // Elimina el overlay grisáceo de MUI en modo dark
            boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            sx={{
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              color: "primary.main",
              fontWeight: 700,
            }}
          >
            {datosUsuario.nombre.charAt(0).toUpperCase()}
          </Avatar>
          <Box sx={{ overflow: "hidden" }}>
            <Typography variant="subtitle2" noWrap sx={{ fontWeight: 700 }}>
              {datosUsuario.nombre}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ textTransform: "uppercase" }}
            >
              {datosUsuario.rol}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ borderStyle: "dashed", my: 1 }} />

        {/* INTERRUPTOR DE TEMA - Usando tu toggleTheme */}
        <MenuItem
          disableRipple
          sx={{
            cursor: "default",
            justifyContent: "space-between",
            py: 1.5,
            "&:hover": { bgcolor: "transparent" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ListItemIcon sx={{ minWidth: 35 }}>
              {mode === "dark" ? (
                <DarkIcon fontSize="small" color="primary" />
              ) : (
                <LightIcon fontSize="small" color="primary" />
              )}
            </ListItemIcon>
            <Typography variant="body2" fontWeight={600}>
              Modo Oscuro
            </Typography>
          </Box>
          <Switch
            size="small"
            checked={mode === "dark"}
            onChange={toggleTheme} // <--- Tu función del contexto
          />
        </MenuItem>

        <Divider sx={{ borderStyle: "dashed", my: 1 }} />

        <Box sx={{ px: 1 }}>
          {menuItems.map((item) => (
            <MenuItem
              key={item.path}
              onClick={() => {
                navigate(item.path);
                handleClose();
              }}
              sx={{
                borderRadius: "10px",
                mb: 0.5,
                "&:hover": {
                  bgcolor: alpha(theme.palette.primary.main, 0.08),
                  color: "primary.main",
                  "& .MuiListItemIcon-root": { color: "primary.main" },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 35, color: "text.secondary" }}>
                <item.Icon fontSize="small" />
              </ListItemIcon>
              <Typography variant="body2" fontWeight={500}>
                {item.label}
              </Typography>
            </MenuItem>
          ))}
        </Box>

        <Divider sx={{ borderStyle: "dashed", my: 1 }} />

        <Box sx={{ px: 1, pb: 0.5 }}>
          <MenuItem
            onClick={handleLogout}
            sx={{
              borderRadius: "10px",
              color: "error.main",
              "&:hover": { bgcolor: alpha(theme.palette.error.main, 0.08) },
            }}
          >
            <ListItemIcon sx={{ minWidth: 35, color: "inherit" }}>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="body2" fontWeight={600}>
              Cerrar sesión
            </Typography>
          </MenuItem>
        </Box>
      </Menu>
    </Box>
  );
};

export default UserMenu;
