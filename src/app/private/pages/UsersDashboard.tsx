import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Stack,
  Avatar,
  alpha,
  useTheme,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip
} from "@mui/material";

import {
  PersonOutline as UserIcon,
  Refresh as RefreshIcon,
  Male as MaleIcon,
  Female as FemaleIcon
} from "@mui/icons-material";

import { Usuario } from "../../models/Users";
import { ClienteService } from "../../services/client/ClienteService";

const UsuariosDashboard = () => {

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {

    try {

      const data = await ClienteService.listarClientes();
      setUsuarios(data);

    } catch (error) {

      console.error("Error cargando usuarios", error);

    }

  };

  const stats = [

    {
      label: "Usuarios Totales",
      value: usuarios.length,
      icon: <UserIcon />,
      color: theme.palette.info.main
    },

    {
      label: "Hombres",
      value: usuarios.filter(u => u.generoUsuario === 1).length,
      icon: <MaleIcon />,
      color: theme.palette.primary.main
    },

    {
      label: "Mujeres",
      value: usuarios.filter(u => u.generoUsuario === 2).length,
      icon: <FemaleIcon />,
      color: theme.palette.secondary.main
    }

  ];

  return (

    <Box sx={{ p: { xs: 2, md: 4 } }}>

      {/* HEADER */}

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 4 }}
      >

        <Box>

          <Typography variant="h4" fontWeight={900}>
            Gestión de Usuarios
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Administración de usuarios registrados
          </Typography>

        </Box>

        <Button
          variant="contained"
          startIcon={<RefreshIcon />}
          onClick={cargarUsuarios}
          sx={{
            bgcolor: alpha(theme.palette.info.main, 0.9),
            color: "#fff",
            fontWeight: 700,
            borderRadius: 2,
            textTransform: "none",
            px: 3
          }}
        >
          Actualizar
        </Button>

      </Stack>

      {/* ESTADÍSTICAS */}

      <Grid container spacing={3} sx={{ mb: 4 }}>

        {stats.map((stat, index) => (

          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>

            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: isDark
                  ? alpha(theme.palette.background.paper, 0.6)
                  : "background.paper"
              }}
            >

              <Stack direction="row" spacing={2} alignItems="center">

                <Avatar
                  sx={{
                    bgcolor: alpha(stat.color, 0.15),
                    color: stat.color,
                    width: 50,
                    height: 50
                  }}
                >
                  {stat.icon}
                </Avatar>

                <Box>

                  <Typography variant="h5" fontWeight={800}>
                    {stat.value}
                  </Typography>

                  <Typography
                    variant="caption"
                    fontWeight={700}
                    color="text.secondary"
                    sx={{ textTransform: "uppercase" }}
                  >
                    {stat.label}
                  </Typography>

                </Box>

              </Stack>

            </Paper>

          </Grid>

        ))}

      </Grid>

      {/* TABLA */}

      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          border: "1px solid",
          borderColor: "divider",
          overflow: "hidden"
        }}
      >

        <TableContainer>

          <Table>

            <TableHead
              sx={{
                bgcolor: isDark
                  ? alpha(theme.palette.primary.main, 0.05)
                  : theme.palette.grey[50]
              }}
            >

              <TableRow>

                <TableCell sx={{ fontWeight: 700 }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Nombre</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Teléfono</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Nacimiento</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Género</TableCell>

              </TableRow>

            </TableHead>

            <TableBody>

              {usuarios.map(usuario => (

                <TableRow
                  key={usuario.codUsuario}
                  hover
                  sx={{
                    transition: "0.2s",
                    "&:hover": {
                      backgroundColor: alpha(theme.palette.primary.main, 0.04)
                    }
                  }}
                >

                  <TableCell>{usuario.codUsuario}</TableCell>

                  <TableCell sx={{ fontWeight: 600 }}>
                    {usuario.nombreUsuario}
                  </TableCell>

                  <TableCell>
                    {usuario.telefonoUsuario}
                  </TableCell>

                  <TableCell>
                    {new Date(usuario.fechaNacimientoUsuario).toLocaleDateString()}
                  </TableCell>

                  <TableCell>

                    {usuario.generoUsuario === 1 ? (

                      <Chip
                        icon={<MaleIcon />}
                        label="Masculino"
                        size="small"
                        sx={{
                          bgcolor: alpha(theme.palette.primary.main, 0.15),
                          color: theme.palette.primary.main,
                          fontWeight: 700
                        }}
                      />

                    ) : (

                      <Chip
                        icon={<FemaleIcon />}
                        label="Femenino"
                        size="small"
                        sx={{
                          bgcolor: alpha(theme.palette.secondary.main, 0.15),
                          color: theme.palette.secondary.main,
                          fontWeight: 700
                        }}
                      />

                    )}

                  </TableCell>

                </TableRow>

              ))}

            </TableBody>

          </Table>

        </TableContainer>

      </Paper>

    </Box>

  );

};

export default UsuariosDashboard;