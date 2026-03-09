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
  Chip,
} from "@mui/material";

import {
  EmailOutlined as EmailIcon,
  MarkEmailReadOutlined as ReadIcon,
  PersonOutlined as PersonIcon,
  VisibilityOutlined as ViewIcon
} from "@mui/icons-material";

import { CorreoService } from "../../services/email/EmailService";
import { Correo } from "../../models/Email";

const CorreosDashboard = () => {

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [correos, setCorreos] = useState<Correo[]>([]);

  useEffect(() => {
    cargarCorreos();
  }, []);

  const cargarCorreos = async () => {

    try {

      const data = await CorreoService.listarCorreos();
      setCorreos(data);

    } catch (error) {

      console.error("Error cargando correos", error);

    }

  };

  const stats = [
    {
      label: "Correos Recibidos",
      value: correos.length,
      icon: <EmailIcon />,
      color: theme.palette.info.main
    },
    {
      label: "Contactos Únicos",
      value: new Set(correos.map(c => c.email)).size,
      icon: <PersonIcon />,
      color: theme.palette.success.main
    },
    {
      label: "Mensajes Procesados",
      value: correos.length,
      icon: <ReadIcon />,
      color: theme.palette.secondary.main
    }
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>

      {/* HEADER */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Box>
          <Typography variant="h4" fontWeight={900}>
            Bandeja de Correos
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Mensajes recibidos desde el formulario de contacto.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<EmailIcon />}
          sx={{
            borderRadius: 3,
            px: 3,
            py: 1.2,
            fontWeight: 700,
            textTransform: "none"
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
                borderRadius: 5,
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
                    width: 52,
                    height: 52
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

      {/* TABLA DE CORREOS */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 5,
          border: "1px solid",
          borderColor: "divider",
          bgcolor: isDark
            ? alpha(theme.palette.background.paper, 0.4)
            : "background.paper",
          overflow: "hidden"
        }}
      >

        <Box sx={{ p: 3, borderBottom: "1px solid", borderColor: "divider" }}>
          <Typography variant="h6" fontWeight={700}>
            Correos Recibidos
          </Typography>
        </Box>

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
                <TableCell sx={{ fontWeight: 700 }}>Nombre</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Mensaje</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Fecha</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Acción</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>

              {correos.map((correo) => (

                <TableRow key={correo.id} hover>

                  <TableCell sx={{ fontWeight: 600 }}>
                    {correo.nombre}
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={correo.email}
                      size="small"
                      sx={{
                        fontWeight: 700,
                        bgcolor: alpha(theme.palette.info.main, 0.1),
                        color: theme.palette.info.main,
                        border: "1px solid currentColor"
                      }}
                    />
                  </TableCell>

                  <TableCell sx={{ maxWidth: 350 }}>
                    <Typography variant="body2" noWrap>
                      {correo.mensaje}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    {new Date(correo.fecha).toLocaleDateString()}
                  </TableCell>

                  <TableCell>
                    <Button
                      size="small"
                      startIcon={<ViewIcon />}
                      sx={{ textTransform: "none", fontWeight: 600 }}
                    >
                      Ver
                    </Button>
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

export default CorreosDashboard;