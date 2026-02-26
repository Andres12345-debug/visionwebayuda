import React, { useState, useEffect, useMemo } from "react";
import {
  Box, Card, CardContent, Typography, Avatar, Stack, Divider,
  useTheme, alpha, Button, Dialog, DialogTitle, DialogContent,
  DialogActions, TextField, CircularProgress
} from "@mui/material";
import {
  BadgeOutlined as IdIcon,
  PhoneIphoneOutlined as PhoneIcon,
  VerifiedUserOutlined as RoleIcon,
  MailOutline as EmailIcon,
  EditOutlined as EditIcon,
} from "@mui/icons-material";
import { jwtDecode } from "jwt-decode";

interface TokenPayload {
  id: number;
  nombre: string;
  rol: string;
  telefono: string;
  acceso: string;
}

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

const Profile = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // 1. Obtener datos iniciales de forma segura
  const datosUsuario = useMemo(() => {
    const token = localStorage.getItem("TOKEN_AUTORIZACION");
    if (!token) return null;
    try {
      return jwtDecode<TokenPayload>(token);
    } catch {
      return null;
    }
  }, []);

  const [editData, setEditData] = useState({ 
    nombre: datosUsuario?.nombre || "", 
    telefono: datosUsuario?.telefono || "" 
  });

  // 2. Sincronizar solo si datosUsuario cambia (ej. al loguear)
  useEffect(() => {
    if (datosUsuario) {
      setEditData({ nombre: datosUsuario.nombre, telefono: datosUsuario.telefono });
    }
  }, [datosUsuario]);

  if (!datosUsuario) return <Typography>No hay sesión activa.</Typography>;

  const handleSave = async () => {
    setLoading(true);
    try {
      // Simulación de llamada API
      await new Promise(res => setTimeout(res, 1500));
      console.log("Datos actualizados:", editData);
      setOpen(false);
    } catch (error) {
      console.error("Error al actualizar", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", bgcolor: "background.default", p: 3 }}>
      <Card sx={{ width: "100%", maxWidth: 420, borderRadius: 6, position: "relative", overflow: "visible" }}>
        {/* Header con gradiente */}
        <Box sx={{ height: 120, background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`, borderRadius: "24px 24px 0 0" }} />
        
        <CardContent sx={{ pt: 0, px: 3, pb: 4 }}>
          <Stack alignItems="center" sx={{ mt: -6, mb: 3 }}>
            <Avatar sx={{ width: 100, height: 100, border: `4px solid ${theme.palette.background.paper}`, bgcolor: "primary.main", boxShadow: theme.shadows[4], fontSize: "2rem", fontWeight: "bold" }}>
              {datosUsuario.nombre.charAt(0)}
            </Avatar>
            <Typography variant="h5" fontWeight={800} sx={{ mt: 2 }}>{datosUsuario.nombre}</Typography>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ opacity: 0.8 }}>
              <RoleIcon sx={{ fontSize: 16, color: "primary.main" }} />
              <Typography variant="subtitle2" sx={{ color: "text.secondary", textTransform: "uppercase" }}>{datosUsuario.rol}</Typography>
            </Stack>
          </Stack>

          <Divider sx={{ mb: 3 }} />

          <Stack spacing={2}>
            <InfoItem icon={<IdIcon color="primary" />} label="ID Usuario" value={datosUsuario.id} />
            <InfoItem icon={<EmailIcon color="primary" />} label="Acceso" value={datosUsuario.acceso} />
            <InfoItem icon={<PhoneIcon color="primary" />} label="Teléfono" value={datosUsuario.telefono} />
          </Stack>

          <Button fullWidth variant="outlined" startIcon={<EditIcon />} onClick={() => setOpen(true)} sx={{ mt: 4, borderRadius: 3, py: 1.5, fontWeight: 700 }}>
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
              value={editData.nombre}
              onChange={(e) => setEditData({ ...editData, nombre: e.target.value })}
              disabled={loading}
            />
            <TextField
              label="Teléfono"
              fullWidth
              value={editData.telefono}
              onChange={(e) => setEditData({ ...editData, telefono: e.target.value })}
              disabled={loading}
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setOpen(false)} color="inherit" disabled={loading}>Cancelar</Button>
          <Button 
            onClick={handleSave} 
            variant="contained" 
            disabled={loading || !editData.nombre.trim() || !editData.telefono.trim()}
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