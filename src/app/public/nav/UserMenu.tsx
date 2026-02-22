import React, { useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Typography,
  Tooltip
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";

import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const token = localStorage.getItem("TOKEN_AUTORIZACION");

  if (!token) return null;

  const datosUsuario: any = jwtDecode(token);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    handleClose();
  };

  const handleLogout = () => {
    localStorage.removeItem("TOKEN_AUTORIZACION");
    navigate("/");
    handleClose();
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 20,
        right: 20,
        zIndex: 1300
      }}
    >
      <Tooltip title={datosUsuario?.nombre}>
        <IconButton onClick={handleClick} size="small">
          <Avatar
            sx={{
              width: 45,
              height: 45,
              bgcolor: "primary.main",
              fontWeight: 600,
              textTransform: "uppercase"
            }}
          >
            {datosUsuario?.nombre?.charAt(0)}
          </Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 6,
          sx: {
            mt: 1.5,
            borderRadius: 3,
            minWidth: 230,
            p: 1
          }
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography fontWeight={600}>
            {datosUsuario?.nombre}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {datosUsuario?.rol}
          </Typography>
        </Box>

        <Divider />

        <MenuItem onClick={() => handleNavigate("/perfil")}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          Perfil
        </MenuItem>

        <MenuItem onClick={() => handleNavigate("/correos")}>
          <ListItemIcon>
            <MailIcon fontSize="small" />
          </ListItemIcon>
          Correos
        </MenuItem>

        <MenuItem onClick={() => handleNavigate("/usuarios")}>
          <ListItemIcon>
            <GroupIcon fontSize="small" />
          </ListItemIcon>
          Usuarios Registrados
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Cerrar sesión
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserMenu;