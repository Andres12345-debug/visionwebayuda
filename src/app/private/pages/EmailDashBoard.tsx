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
  ReplyOutlined as ReplyIcon
} from "@mui/icons-material";

import { CorreoService } from "../../services/email/EmailService";
import { Correo } from "../../models/Email";
import { ResponderCorreoModal } from "../../public/components/modals/AnswerEmail";

const CorreosDashboard = () => {

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [correos, setCorreos] = useState<Correo[]>([]);
  const [modalResponder, setModalResponder] = useState(false);
  const [correoSeleccionado, setCorreoSeleccionado] = useState<Correo | null>(null);

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

  const abrirResponder = (correo: Correo) => {
    setCorreoSeleccionado(correo);
    setModalResponder(true);
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
      label: "Respondidos",
      value: correos.filter(c => c.respondido).length,
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
          <Typography variant="body2" color="text.secondary">
            Mensajes recibidos desde el formulario de contacto
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<EmailIcon />}
          onClick={cargarCorreos}
          sx={{
            bgcolor: alpha(theme.palette.info.main, 0.9),
            color: "#fff",
            fontWeight: 700,
            borderRadius: 2,
            textTransform: "none",
            px: 3,
            "&:hover": {
              bgcolor: theme.palette.info.main
            }
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

                <TableCell sx={{ fontWeight: 700 }}>Nombre</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Mensaje</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Fecha</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Estado</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Acción</TableCell>

              </TableRow>

            </TableHead>

            <TableBody>

              {correos.map((correo) => (

                <TableRow
                  key={correo.id}
                  hover
                  sx={{
                    transition: "0.2s",
                    "&:hover": {
                      backgroundColor: alpha(theme.palette.primary.main, 0.04)
                    }
                  }}
                >

                  <TableCell sx={{ fontWeight: 600 }}>
                    {correo.nombre}
                  </TableCell>

                  <TableCell>

                    <Chip
                      label={correo.email}
                      size="small"
                      sx={{
                        bgcolor: alpha(theme.palette.info.main, 0.12),
                        color: theme.palette.info.main,
                        fontWeight: 600
                      }}
                    />

                  </TableCell>

                  <TableCell sx={{ maxWidth: 300 }}>

                    <Typography variant="body2" noWrap>
                      {correo.mensaje}
                    </Typography>

                  </TableCell>

                  <TableCell>
                    {new Date(correo.fecha).toLocaleDateString()}
                  </TableCell>

                  <TableCell>

                    {correo.respondido ? (

                      <Chip
                        label="Respondido"
                        size="small"
                        sx={{
                          bgcolor: alpha(theme.palette.success.main, 0.15),
                          color: theme.palette.success.main,
                          fontWeight: 700
                        }}
                      />

                    ) : (

                      <Chip
                        label="Pendiente"
                        size="small"
                        sx={{
                          bgcolor: alpha(theme.palette.warning.main, 0.15),
                          color: theme.palette.warning.main,
                          fontWeight: 700
                        }}
                      />

                    )}

                  </TableCell>

                  <TableCell>

                    <Button
                      size="small"
                      startIcon={<ReplyIcon />}
                      disabled={correo.respondido}
                      onClick={() => abrirResponder(correo)}
                      sx={{
                        bgcolor: alpha(theme.palette.info.main, 0.12),
                        color: theme.palette.info.main,
                        fontWeight: 700,
                        borderRadius: 2,
                        textTransform: "none",
                        px: 2,
                        "&:hover": {
                          bgcolor: alpha(theme.palette.info.main, 0.2)
                        },
                        "&.Mui-disabled": {
                          bgcolor: alpha(theme.palette.success.main, 0.12),
                          color: theme.palette.success.main
                        }
                      }}
                    >

                      {correo.respondido ? "Respondido" : "Responder"}

                    </Button>

                  </TableCell>

                </TableRow>

              ))}

            </TableBody>

          </Table>
        </TableContainer>

      </Paper>

      {/* MODAL */}
      <ResponderCorreoModal
        open={modalResponder}
        onClose={() => setModalResponder(false)}
        id={correoSeleccionado?.id || 0}
        email={correoSeleccionado?.email || ""}
        onSuccess={cargarCorreos}
      />

    </Box>
  );
};

export default CorreosDashboard;