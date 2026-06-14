import { useEffect, useState } from "react";

import {
  Paper,
  Typography,
  Box,
  Stack,
  alpha,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Button,
  CircularProgress,
  Alert
} from "@mui/material";

import {
  AssignmentOutlined as ContractIcon,
  OpenInNewOutlined as OpenIcon
} from "@mui/icons-material";

import { ClienteServiciosService } from "../../services/servicios/ClienteServiciosService";
import { ClienteServicio } from "../../models/ClienteServicio";

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

const MisServicios = () => {

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [contratos, setContratos] = useState<ClienteServicio[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    cargarContratos();
  }, []);

  const cargarContratos = async () => {
    setCargando(true);
    setError(null);
    try {
      const data = await ClienteServiciosService.listarMios();
      setContratos(data);
    } catch (error) {
      console.error("Error cargando mis servicios", error);
      setError("No se pudieron cargar sus servicios contratados.");
    } finally {
      setCargando(false);
    }
  };

  if (cargando) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight={900}>
          Mis servicios
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Servicios y contratos asociados a su cuenta
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {!error && contratos.length === 0 && (
        <Alert severity="info">
          Aún no tiene servicios contratados.
        </Alert>
      )}

      {contratos.length > 0 && (
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
                  <TableCell sx={{ fontWeight: 700 }}>Servicio</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Vigencia</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Precio pactado</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Estado</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Observaciones</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Contrato</TableCell>
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
                      <Stack direction="row" spacing={1} alignItems="center">
                        <ContractIcon fontSize="small" color="action" />
                        <span>{contrato.servicio?.nombreServicio ?? `Servicio #${contrato.codServicio}`}</span>
                      </Stack>
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

                    <TableCell sx={{ maxWidth: 280 }}>
                      <Typography variant="body2" noWrap>
                        {contrato.observaciones || "—"}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      {contrato.urlContrato ? (
                        <Button
                          size="small"
                          startIcon={<OpenIcon fontSize="small" />}
                          href={contrato.urlContrato}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ textTransform: "none", fontWeight: 600 }}
                        >
                          Ver
                        </Button>
                      ) : "—"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>
          </TableContainer>
        </Paper>
      )}

    </Box>
  );
};

export default MisServicios;
