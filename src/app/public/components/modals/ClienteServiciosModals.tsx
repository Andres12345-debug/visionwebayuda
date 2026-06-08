import {
  Button,
  MenuItem,
  CircularProgress,
  InputAdornment
} from "@mui/material";
import Grid from "@mui/material/Grid";

import PersonIcon from "@mui/icons-material/Person";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import EventIcon from "@mui/icons-material/Event";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FlagIcon from "@mui/icons-material/Flag";
import LinkIcon from "@mui/icons-material/Link";
import SubjectIcon from "@mui/icons-material/Subject";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { ReactNode, useState, useEffect } from "react";
import { ClienteServicio } from "../../../models/ClienteServicio";
import { Servicio } from "../../../models/Servicio";
import { ClienteServiciosService } from "../../../services/servicios/ClienteServiciosService";
import { BaseModal, ModalTextField } from "./AnswerEmail";

const adornment = (icon: ReactNode, shrinkLabel: boolean = false) => ({
  slotProps: {
    input: {
      startAdornment: (
        <InputAdornment position="start">
          {icon}
        </InputAdornment>
      )
    },
    ...(shrinkLabel ? { inputLabel: { shrink: true } } : {})
  }
});

const ESTADOS = ["activo", "pausado", "finalizado", "cancelado"];

interface Props {
  open: boolean;
  onClose: () => void;
  contrato?: ClienteServicio | null;
  servicios: Servicio[];
  onSuccess: () => void;
}

export const ClienteServicioModal = ({ open, onClose, contrato, servicios, onSuccess }: Props) => {

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    codUsuario: "",
    codServicio: "",
    fechaInicio: "",
    fechaFin: "",
    precioPactado: "",
    estado: "activo",
    urlContrato: "",
    observaciones: ""
  });

  useEffect(() => {

    if (contrato) {

      setForm({
        codUsuario: String(contrato.codUsuario ?? ""),
        codServicio: String(contrato.codServicio ?? ""),
        fechaInicio: contrato.fechaInicio ?? "",
        fechaFin: contrato.fechaFin ?? "",
        precioPactado: String(contrato.precioPactado ?? ""),
        estado: contrato.estado ?? "activo",
        urlContrato: contrato.urlContrato ?? "",
        observaciones: contrato.observaciones ?? ""
      });

    } else {

      setForm({
        codUsuario: "",
        codServicio: "",
        fechaInicio: "",
        fechaFin: "",
        precioPactado: "",
        estado: "activo",
        urlContrato: "",
        observaciones: ""
      });

    }

  }, [contrato]);

  const handleChange = (campo: string, valor: any) => {
    setForm({ ...form, [campo]: valor });
  };

  const guardar = async () => {

    try {

      setLoading(true);

      const datos = {
        codUsuario: Number(form.codUsuario),
        codServicio: Number(form.codServicio),
        fechaInicio: form.fechaInicio,
        fechaFin: form.fechaFin || null,
        precioPactado: Number(form.precioPactado),
        estado: form.estado,
        urlContrato: form.urlContrato || undefined,
        observaciones: form.observaciones || undefined
      };

      if (contrato) {
        await ClienteServiciosService.actualizar(contrato.codClienteServicio, datos);
      } else {
        await ClienteServiciosService.crear(datos);
      }

      onSuccess();
      onClose();

    } catch (error) {

      console.error("Error guardando contrato:", error);
      alert("Error guardando contrato");

    } finally {

      setLoading(false);

    }

  };

  return (

    <BaseModal
      open={open}
      onClose={onClose}
      title={contrato ? "Editar contrato" : "Asignar servicio a cliente"}
      icon={<AssignmentIcon />}
      maxWidth="md"
      actions={
        <>
          <Button onClick={onClose}>
            Cancelar
          </Button>

          <Button
            variant="contained"
            onClick={guardar}
            disabled={loading}
          >
            {loading ? <CircularProgress size={20} /> : "Guardar"}
          </Button>
        </>
      }
    >

      <Grid container spacing={2.5}>

        <Grid size={{ xs: 12, sm: 6 }}>
          <ModalTextField
            label="Código de usuario (cliente)"
            type="number"
            helperText="Código del Usuario con rol clientes"
            value={form.codUsuario}
            onChange={(e) => handleChange("codUsuario", e.target.value)}
            {...adornment(<PersonIcon color="action" />)}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <ModalTextField
            select
            label="Servicio"
            value={form.codServicio}
            onChange={(e) => handleChange("codServicio", e.target.value)}
            {...adornment(<DesignServicesIcon color="action" />)}
          >
            {servicios.map((servicio) => (
              <MenuItem key={servicio.codServicio} value={String(servicio.codServicio)}>
                {servicio.nombreServicio}
              </MenuItem>
            ))}
          </ModalTextField>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <ModalTextField
            label="Fecha de inicio"
            type="date"
            value={form.fechaInicio}
            onChange={(e) => handleChange("fechaInicio", e.target.value)}
            {...adornment(<EventIcon color="action" />, true)}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <ModalTextField
            label="Fecha de fin (opcional)"
            type="date"
            value={form.fechaFin}
            onChange={(e) => handleChange("fechaFin", e.target.value)}
            {...adornment(<EventBusyIcon color="action" />, true)}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <ModalTextField
            label="Precio pactado"
            type="number"
            value={form.precioPactado}
            onChange={(e) => handleChange("precioPactado", e.target.value)}
            {...adornment(<AttachMoneyIcon color="action" />)}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <ModalTextField
            select
            label="Estado"
            value={form.estado}
            onChange={(e) => handleChange("estado", e.target.value)}
            {...adornment(<FlagIcon color="action" />)}
          >
            {ESTADOS.map((estado) => (
              <MenuItem key={estado} value={estado}>
                {estado.charAt(0).toUpperCase() + estado.slice(1)}
              </MenuItem>
            ))}
          </ModalTextField>
        </Grid>

        <Grid size={12}>
          <ModalTextField
            label="URL del contrato (opcional)"
            value={form.urlContrato}
            onChange={(e) => handleChange("urlContrato", e.target.value)}
            {...adornment(<LinkIcon color="action" />)}
          />
        </Grid>

        <Grid size={12}>
          <ModalTextField
            label="Observaciones (opcional)"
            multiline
            rows={2}
            value={form.observaciones}
            onChange={(e) => handleChange("observaciones", e.target.value)}
            {...adornment(<SubjectIcon color="action" />)}
          />
        </Grid>

      </Grid>

    </BaseModal>

  );

};
