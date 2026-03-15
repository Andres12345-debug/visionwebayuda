import React, { useEffect, useState } from "react";

import {
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
  Female as FemaleIcon,
  Add as AddIcon,
  Edit as EditIcon
} from "@mui/icons-material";

import { ClienteService } from "../../services/client/ClienteService";
import { Cliente } from "../../models/Client";
import { ClienteModal } from "../../public/components/modals/ClientsModals";



const ClientesDashboard = () => {

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [modalCliente, setModalCliente] = useState(false);
  const [clienteSeleccionado, setClienteSeleccionado] = useState<Cliente | null>(null);

  useEffect(() => {
    cargarClientes();
  }, []);

  const cargarClientes = async () => {

    try {

      const data = await ClienteService.listarClientes();
      setClientes(data);

    } catch (error) {

      console.error("Error cargando clientes", error);

    }

  };

  const abrirAgregar = () => {
    setClienteSeleccionado(null);
    setModalCliente(true);
  };

  const abrirEditar = (cliente: Cliente) => {
    setClienteSeleccionado(cliente);
    setModalCliente(true);
  };

  const stats = [

    {
      label: "Clientes Totales",
      value: clientes.length,
      icon: <UserIcon />,
      color: theme.palette.info.main
    },

    {
      label: "Hombres",
      value: clientes.filter(c => c.generoUsuario === 1).length,
      icon: <MaleIcon />,
      color: theme.palette.primary.main
    },

    {
      label: "Mujeres",
      value: clientes.filter(c => c.generoUsuario === 2).length,
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
            Gestión de Clientes
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Administración de clientes registrados
          </Typography>

        </Box>

        <Stack direction="row" spacing={2}>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={abrirAgregar}
            sx={{
              bgcolor: alpha(theme.palette.success.main, 0.9),
              color: "#fff",
              fontWeight: 700,
              borderRadius: 2,
              textTransform: "none",
              px: 3
            }}
          >
            Agregar Cliente
          </Button>

          <Button
            variant="contained"
            startIcon={<RefreshIcon />}
            onClick={cargarClientes}
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

      </Stack>

      {/* ESTADÍSTICAS */}

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        sx={{ mb: 4 }}
      >

        {stats.map((stat, index) => (

          <Paper
            key={index}
            elevation={0}
            sx={{
              flex: 1,
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

        ))}

      </Stack>

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

                <TableCell sx={{ fontWeight: 700 }}>NIT</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Nombre</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Correo</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Teléfono</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Ciudad</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Género</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Acción</TableCell>

              </TableRow>

            </TableHead>

            <TableBody>

              {clientes.map((cliente) => (

                <TableRow
                  key={cliente.nitCliente}
                  hover
                  sx={{
                    transition: "0.2s",
                    "&:hover": {
                      backgroundColor: alpha(theme.palette.primary.main, 0.04)
                    }
                  }}
                >

                  <TableCell>
                    {cliente.nitCliente}
                  </TableCell>

                  <TableCell sx={{ fontWeight: 600 }}>
                    {cliente.nombreCliente} {cliente.apellidoCliente}
                  </TableCell>

                  <TableCell>
                    {cliente.correoCliente}
                  </TableCell>

                  <TableCell>
                    {cliente.telefonoCliente}
                  </TableCell>

                  <TableCell>
                    {cliente.ciudadCliente}
                  </TableCell>

                  <TableCell>

                    {cliente.generoUsuario === 1 ? (

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

                  <TableCell>

                    <Button
                      size="small"
                      startIcon={<EditIcon />}
                      onClick={() => abrirEditar(cliente)}
                      sx={{
                        bgcolor: alpha(theme.palette.warning.main, 0.15),
                        color: theme.palette.warning.main,
                        fontWeight: 700,
                        borderRadius: 2,
                        textTransform: "none",
                        px: 2
                      }}
                    >
                      Editar
                    </Button>

                  </TableCell>

                </TableRow>

              ))}

            </TableBody>

          </Table>

        </TableContainer>

      </Paper>

      {/* MODAL */}

      <ClienteModal
        open={modalCliente}
        onClose={() => setModalCliente(false)}
        cliente={clienteSeleccionado}
        onSuccess={cargarClientes}
      />

    </Box>

  );

};

export default ClientesDashboard;