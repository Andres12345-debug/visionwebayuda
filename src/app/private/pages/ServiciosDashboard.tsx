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
  Chip,
  Tabs,
  Tab,
  IconButton,
  Tooltip
} from "@mui/material";

import {
  DesignServicesOutlined as ServicesIcon,
  AssignmentOutlined as ContractIcon,
  Refresh as RefreshIcon,
  Add as AddIcon,
  Edit as EditIcon,
  DeleteOutline as DeleteIcon,
  PaidOutlined as PaidIcon,
  GroupOutlined as ClientsIcon
} from "@mui/icons-material";

import { ServiciosService } from "../../services/servicios/ServiciosService";
import { ClienteServiciosService } from "../../services/servicios/ClienteServiciosService";
import { useAuth } from "../../utilities/hoks/useAuth";
import { Servicio } from "../../models/Servicio";
import { ClienteServicio } from "../../models/ClienteServicio";
import { ServicioModal } from "../../public/components/modals/ServiciosModals";
import { ClienteServicioModal } from "../../public/components/modals/ClienteServiciosModals";

const formatoMoneda = (valor: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(valor);

const colorEstado = (theme: any, estado: string) => {
  const valor = estado?.toLowerCase();

  if (valor === "activo") return theme.palette.success.main;
  if (valor === "pausado") return theme.palette.warning.main;
  if (valor === "finalizado") return theme.palette.info.main;
  if (valor === "cancelado") return theme.palette.error.main;

  return theme.palette.grey[500];
};

const ServiciosDashboard = () => {

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { esAdministrador } = useAuth();

  const [tab, setTab] = useState(0);

  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [contratos, setContratos] = useState<ClienteServicio[]>([]);

  const [modalServicio, setModalServicio] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState<Servicio | null>(null);

  const [modalContrato, setModalContrato] = useState(false);
  const [contratoSeleccionado, setContratoSeleccionado] = useState<ClienteServicio | null>(null);

  useEffect(() => {
    cargarServicios();
    cargarContratos();
  }, []);

  const cargarServicios = async () => {
    try {
      const data = await ServiciosService.listarServicios();
      setServicios(data);
    } catch (error) {
      console.error("Error cargando servicios", error);
    }
  };

  const cargarContratos = async () => {
    try {
      const data = await ClienteServiciosService.listarTodos();
      setContratos(data);
    } catch (error) {
      console.error("Error cargando contratos", error);
    }
  };

  const abrirAgregarServicio = () => {
    setServicioSeleccionado(null);
    setModalServicio(true);
  };

  const abrirEditarServicio = (servicio: Servicio) => {
    setServicioSeleccionado(servicio);
    setModalServicio(true);
  };

  const eliminarServicio = async (servicio: Servicio) => {

    if (!window.confirm(`¿Eliminar el servicio "${servicio.nombreServicio}"?`)) return;

    try {
      await ServiciosService.eliminarServicio(servicio.codServicio);
      cargarServicios();
    } catch (error) {
      console.error("Error eliminando servicio", error);
      alert("No se pudo eliminar el servicio. Verifica que no tenga contratos asociados.");
    }

  };

  const abrirAgregarContrato = () => {
    setContratoSeleccionado(null);
    setModalContrato(true);
  };

  const abrirEditarContrato = (contrato: ClienteServicio) => {
    setContratoSeleccionado(contrato);
    setModalContrato(true);
  };

  const eliminarContrato = async (contrato: ClienteServicio) => {

    if (!window.confirm("¿Eliminar este contrato de cliente?")) return;

    try {
      await ClienteServiciosService.eliminar(contrato.codClienteServicio);
      cargarContratos();
    } catch (error) {
      console.error("Error eliminando contrato", error);
      alert("No se pudo eliminar el contrato.");
    }

  };

  const statsServicios = [
    {
      label: "Servicios en catálogo",
      value: servicios.length,
      icon: <ServicesIcon />,
      color: theme.palette.info.main
    },
    {
      label: "Precio base promedio",
      value: servicios.length
        ? formatoMoneda(servicios.reduce((acc, s) => acc + s.precioBaseServicio, 0) / servicios.length)
        : formatoMoneda(0),
      icon: <PaidIcon />,
      color: theme.palette.success.main
    }
  ];

  const statsContratos = [
    {
      label: "Contratos totales",
      value: contratos.length,
      icon: <ContractIcon />,
      color: theme.palette.info.main
    },
    {
      label: "Contratos activos",
      value: contratos.filter(c => c.estado?.toLowerCase() === "activo").length,
      icon: <ClientsIcon />,
      color: theme.palette.success.main
    }
  ];

  return (

    <Box sx={{ p: { xs: 2, md: 4 } }}>

      {/* HEADER */}

      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={2}
        sx={{ mb: 3 }}
      >

        <Box>
          <Typography variant="h4" fontWeight={900}>
            Servicios y contratos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Catálogo de servicios y contratación de servicios por cliente
          </Typography>
        </Box>

      </Stack>

      <Tabs
        value={tab}
        onChange={(_, valor) => setTab(valor)}
        sx={{ mb: 3 }}
      >
        <Tab icon={<ServicesIcon fontSize="small" />} iconPosition="start" label="Catálogo de servicios" />
        <Tab icon={<ContractIcon fontSize="small" />} iconPosition="start" label="Contratos de clientes" />
      </Tabs>

      {/* TAB 0: CATÁLOGO DE SERVICIOS */}
      {tab === 0 && (
        <>
          <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mb: 3 }}>

            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={abrirAgregarServicio}
              sx={{
                bgcolor: alpha(theme.palette.success.main, 0.9),
                color: "#fff",
                fontWeight: 700,
                borderRadius: 2,
                textTransform: "none",
                px: 3
              }}
            >
              Agregar servicio
            </Button>

            <Button
              variant="contained"
              startIcon={<RefreshIcon />}
              onClick={cargarServicios}
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

          <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ mb: 4 }}>

            {statsServicios.map((stat, index) => (

              <Paper
                key={index}
                elevation={0}
                sx={{
                  flex: 1,
                  p: 3,
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: isDark ? alpha(theme.palette.background.paper, 0.6) : "background.paper"
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

                    <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ textTransform: "uppercase" }}>
                      {stat.label}
                    </Typography>
                  </Box>

                </Stack>

              </Paper>

            ))}

          </Stack>

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
                    bgcolor: isDark ? alpha(theme.palette.primary.main, 0.05) : theme.palette.grey[50]
                  }}
                >

                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Nombre</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Descripción</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Precio base</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Acciones</TableCell>
                  </TableRow>

                </TableHead>

                <TableBody>

                  {servicios.map((servicio) => (

                    <TableRow
                      key={servicio.codServicio}
                      hover
                      sx={{
                        transition: "0.2s",
                        "&:hover": { backgroundColor: alpha(theme.palette.primary.main, 0.04) }
                      }}
                    >

                      <TableCell sx={{ fontWeight: 600 }}>
                        {servicio.nombreServicio}
                      </TableCell>

                      <TableCell sx={{ maxWidth: 360 }}>
                        <Typography variant="body2" noWrap>
                          {servicio.descripcionServicio || "—"}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Chip
                          label={formatoMoneda(servicio.precioBaseServicio)}
                          size="small"
                          sx={{
                            bgcolor: alpha(theme.palette.success.main, 0.12),
                            color: theme.palette.success.main,
                            fontWeight: 700
                          }}
                        />
                      </TableCell>

                      <TableCell>
                        <Stack direction="row" spacing={1}>

                          <Tooltip title="Editar servicio">
                            <IconButton
                              size="small"
                              onClick={() => abrirEditarServicio(servicio)}
                              sx={{
                                bgcolor: alpha(theme.palette.warning.main, 0.12),
                                color: theme.palette.warning.main,
                                "&:hover": { bgcolor: alpha(theme.palette.warning.main, 0.2) }
                              }}
                            >
                              <EditIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>

                          {esAdministrador && (
                            <Tooltip title="Eliminar servicio">
                              <IconButton
                                size="small"
                                onClick={() => eliminarServicio(servicio)}
                                sx={{
                                  bgcolor: alpha(theme.palette.error.main, 0.12),
                                  color: theme.palette.error.main,
                                  "&:hover": { bgcolor: alpha(theme.palette.error.main, 0.2) }
                                }}
                              >
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          )}

                        </Stack>
                      </TableCell>

                    </TableRow>

                  ))}

                </TableBody>

              </Table>
            </TableContainer>

          </Paper>
        </>
      )}

      {/* TAB 1: CONTRATOS DE CLIENTES */}
      {tab === 1 && (
        <>
          <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mb: 3 }}>

            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={abrirAgregarContrato}
              sx={{
                bgcolor: alpha(theme.palette.success.main, 0.9),
                color: "#fff",
                fontWeight: 700,
                borderRadius: 2,
                textTransform: "none",
                px: 3
              }}
            >
              Asignar servicio
            </Button>

            <Button
              variant="contained"
              startIcon={<RefreshIcon />}
              onClick={cargarContratos}
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

          <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ mb: 4 }}>

            {statsContratos.map((stat, index) => (

              <Paper
                key={index}
                elevation={0}
                sx={{
                  flex: 1,
                  p: 3,
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: isDark ? alpha(theme.palette.background.paper, 0.6) : "background.paper"
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

                    <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ textTransform: "uppercase" }}>
                      {stat.label}
                    </Typography>
                  </Box>

                </Stack>

              </Paper>

            ))}

          </Stack>

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
                    bgcolor: isDark ? alpha(theme.palette.primary.main, 0.05) : theme.palette.grey[50]
                  }}
                >

                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Cliente</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Empresa</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Servicio</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Vigencia</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Precio pactado</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Estado</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Acciones</TableCell>
                  </TableRow>

                </TableHead>

                <TableBody>

                  {contratos.map((contrato) => (

                    <TableRow
                      key={contrato.codClienteServicio}
                      hover
                      sx={{
                        transition: "0.2s",
                        "&:hover": { backgroundColor: alpha(theme.palette.primary.main, 0.04) }
                      }}
                    >

                      <TableCell sx={{ fontWeight: 600 }}>
                        {contrato.usuario?.nombreUsuario ?? `Usuario #${contrato.codUsuario}`}
                        <Typography variant="caption" color="text.secondary" sx={{ display: "block" }}>
                          {contrato.usuario?.correoUsuario ?? ""}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        {contrato.usuario?.empresaUsuario || "—"}
                      </TableCell>

                      <TableCell>
                        {contrato.servicio?.nombreServicio ?? `Servicio #${contrato.codServicio}`}
                      </TableCell>

                      <TableCell>
                        {contrato.fechaInicio} {contrato.fechaFin ? `→ ${contrato.fechaFin}` : "→ indefinido"}
                      </TableCell>

                      <TableCell>
                        <Chip
                          label={formatoMoneda(contrato.precioPactado)}
                          size="small"
                          sx={{
                            bgcolor: alpha(theme.palette.success.main, 0.12),
                            color: theme.palette.success.main,
                            fontWeight: 700
                          }}
                        />
                      </TableCell>

                      <TableCell>
                        <Chip
                          label={contrato.estado}
                          size="small"
                          sx={{
                            bgcolor: alpha(colorEstado(theme, contrato.estado), 0.15),
                            color: colorEstado(theme, contrato.estado),
                            fontWeight: 700,
                            textTransform: "capitalize"
                          }}
                        />
                      </TableCell>

                      <TableCell>
                        <Stack direction="row" spacing={1}>

                          <Tooltip title="Editar contrato">
                            <IconButton
                              size="small"
                              onClick={() => abrirEditarContrato(contrato)}
                              sx={{
                                bgcolor: alpha(theme.palette.warning.main, 0.12),
                                color: theme.palette.warning.main,
                                "&:hover": { bgcolor: alpha(theme.palette.warning.main, 0.2) }
                              }}
                            >
                              <EditIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>

                          {esAdministrador && (
                            <Tooltip title="Eliminar contrato">
                              <IconButton
                                size="small"
                                onClick={() => eliminarContrato(contrato)}
                                sx={{
                                  bgcolor: alpha(theme.palette.error.main, 0.12),
                                  color: theme.palette.error.main,
                                  "&:hover": { bgcolor: alpha(theme.palette.error.main, 0.2) }
                                }}
                              >
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          )}

                        </Stack>
                      </TableCell>

                    </TableRow>

                  ))}

                </TableBody>

              </Table>
            </TableContainer>

          </Paper>
        </>
      )}

      {/* MODALES */}

      <ServicioModal
        open={modalServicio}
        onClose={() => setModalServicio(false)}
        servicio={servicioSeleccionado}
        onSuccess={cargarServicios}
      />

      <ClienteServicioModal
        open={modalContrato}
        onClose={() => setModalContrato(false)}
        contrato={contratoSeleccionado}
        servicios={servicios}
        onSuccess={cargarContratos}
      />

    </Box>

  );

};

export default ServiciosDashboard;
