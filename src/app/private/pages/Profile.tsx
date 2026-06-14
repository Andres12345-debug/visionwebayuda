import React, { useState, useEffect } from "react";
import {
  Box, Card, CardContent, Typography, Avatar, Stack, Divider,
  useTheme, alpha, Button, Dialog, DialogTitle, DialogContent,
  DialogActions, TextField, CircularProgress, MenuItem, Alert
} from "@mui/material";
import {
  BadgeOutlined as IdIcon,
  PhoneIphoneOutlined as PhoneIcon,
  VerifiedUserOutlined as RoleIcon,
  MailOutline as EmailIcon,
  EditOutlined as EditIcon,
  BusinessOutlined as EmpresaIcon,
  CakeOutlined as FechaIcon,
} from "@mui/icons-material";
import { UserService } from "../../services/user/UserService";

interface PerfilUsuario {
  codUsuario: number;
  nombreUsuario: string;
  correoUsuario: string;
  fechaNacimientoUsuario: string;
  telefonoUsuario: string;
  generoUsuario: number;
  empresaUsuario: string | null;
  codRol: number;
  rolNombre?: string;
}

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}


const formatFecha = (fecha: string) => {
  if (!fecha) return "-";
  const fechaSolo = fecha.slice(0, 10);
  const [anio, mes, dia] = fechaSolo.split("-");
  if (!anio || !mes || !dia) return fechaSolo;
  return `${dia}/${mes}/${anio}`;
};

const Profile = () => {
  const theme = useTheme();
  const [perfil, setPerfil] = useState<PerfilUsuario | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState({
    nombreUsuario: "",
    telefonoUsuario: "",
    fechaNacimientoUsuario: "",
    generoUsuario: 1,
    empresaUsuario: "",
  });

  const cargarPerfil = async () => {
    setCargando(true);
    setError(null);
    try {
      const respuesta: any = await UserService.obtenerPerfil();
      setPerfil(respuesta.usuario);
    } catch {
      setError("No se pudo cargar la información del perfil.");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarPerfil();
  }, []);

  const handleAbrirEdicion = () => {
    if (!perfil) return;
    setEditData({
      nombreUsuario: perfil.nombreUsuario,
      telefonoUsuario: perfil.telefonoUsuario,
      fechaNacimientoUsuario: perfil.fechaNacimientoUsuario.slice(0, 10),
      generoUsuario: perfil.generoUsuario,
      empresaUsuario: perfil.empresaUsuario || "",
    });
    setOpen(true);
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await UserService.actualizarPerfil(editData);
      await cargarPerfil();
      setOpen(false);
    } catch (error) {
      console.error("Error al actualizar el perfil", error);
    } finally {
      setLoading(false);
    }
  };

  if (cargando) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !perfil) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", p: 3 }}>
        <Alert severity="error">{error || "No hay sesión activa."}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", bgcolor: "background.default", p: 3 }}>
      <Card sx={{ width: "100%", maxWidth: 420, borderRadius: 6, position: "relative", overflow: "visible" }}>
        {/* Header con gradiente */}
        <Box sx={{ height: 120, background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`, borderRadius: "24px 24px 0 0" }} />

        <CardContent sx={{ pt: 0, px: 3, pb: 4 }}>
          <Stack alignItems="center" sx={{ mt: -6, mb: 3 }}>
            <Avatar sx={{ width: 100, height: 100, border: `4px solid ${theme.palette.background.paper}`, bgcolor: "primary.main", boxShadow: theme.shadows[4], fontSize: "2rem", fontWeight: "bold" }}>
              {perfil.nombreUsuario.charAt(0)}
            </Avatar>
            <Typography variant="h5" fontWeight={800} sx={{ mt: 2 }}>{perfil.nombreUsuario}</Typography>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ opacity: 0.8 }}>
              <RoleIcon sx={{ fontSize: 16, color: "primary.main" }} />
              <Typography variant="subtitle2" sx={{ color: "text.secondary", textTransform: "uppercase" }}>{perfil.rolNombre}</Typography>
            </Stack>
          </Stack>

          <Divider sx={{ mb: 3 }} />

          <Stack spacing={2}>
            <InfoItem icon={<IdIcon color="primary" />} label="ID Usuario" value={perfil.codUsuario} />
            <InfoItem icon={<EmailIcon color="primary" />} label="Correo" value={perfil.correoUsuario} />
            <InfoItem icon={<PhoneIcon color="primary" />} label="Teléfono" value={perfil.telefonoUsuario} />
            <InfoItem icon={<FechaIcon color="primary" />} label="Fecha de nacimiento" value={formatFecha(perfil.fechaNacimientoUsuario)} />
            <InfoItem icon={<EmpresaIcon color="primary" />} label="Empresa" value={perfil.empresaUsuario || "-"} />
          </Stack>

          <Button fullWidth variant="outlined" startIcon={<EditIcon />} onClick={handleAbrirEdicion} sx={{ mt: 4, borderRadius: 3, py: 1.5, fontWeight: 700 }}>
            Editar Perfil
          </Button>
        </CardContent>
      </Card>

      {/* Modal de Edición */}
      <Dialog open={open} onClose={() => !loading && setOpen(false)} fullWidth maxWidth="xs">
        <DialogTitle sx={{ fontWeight: 800 }}>Actualizar Perfil</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={3} sx={{ mt: 1 }}>
            <TextField
              label="Nombre Completo"
              fullWidth
              value={editData.nombreUsuario}
              onChange={(e) => setEditData({ ...editData, nombreUsuario: e.target.value })}
              disabled={loading}
            />
            <TextField
              label="Teléfono"
              fullWidth
              value={editData.telefonoUsuario}
              onChange={(e) => setEditData({ ...editData, telefonoUsuario: e.target.value })}
              disabled={loading}
            />
            <TextField
              label="Fecha de nacimiento"
              type="date"
              fullWidth
              value={editData.fechaNacimientoUsuario}
              onChange={(e) => setEditData({ ...editData, fechaNacimientoUsuario: e.target.value })}
              disabled={loading}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              select
              label="Género"
              fullWidth
              value={editData.generoUsuario}
              onChange={(e) => setEditData({ ...editData, generoUsuario: Number(e.target.value) })}
              disabled={loading}
            >
              <MenuItem value={1}>Masculino</MenuItem>
              <MenuItem value={2}>Femenino</MenuItem>
            </TextField>
            <TextField
              label="Empresa"
              fullWidth
              value={editData.empresaUsuario}
              onChange={(e) => setEditData({ ...editData, empresaUsuario: e.target.value })}
              disabled={loading}
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setOpen(false)} color="inherit" disabled={loading}>Cancelar</Button>
          <Button
            onClick={handleSave}
            variant="contained"
            disabled={loading || !editData.nombreUsuario.trim() || !editData.telefonoUsuario.trim()}
            startIcon={loading && <CircularProgress size={20} color="inherit" />}
          >
            {loading ? "Guardando..." : "Guardar"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const InfoItem = ({ icon, label, value }: InfoItemProps) => {
  const theme = useTheme();
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box sx={{ p: 1, borderRadius: 2, bgcolor: alpha(theme.palette.primary.main, 0.1), display: "flex" }}>{icon}</Box>
      <Box>
        <Typography variant="caption" sx={{ color: "text.secondary", display: "block", fontWeight: 600 }}>{label}</Typography>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>{value}</Typography>
      </Box>
    </Stack>
  );
};

export default Profile;
