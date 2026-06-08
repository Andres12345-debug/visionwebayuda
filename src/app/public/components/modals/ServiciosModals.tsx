import {
  Button,
  CircularProgress,
  InputAdornment
} from "@mui/material";
import Grid from "@mui/material/Grid";

import BadgeIcon from "@mui/icons-material/Badge";
import SubjectIcon from "@mui/icons-material/Subject";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

import { ReactNode, useState, useEffect } from "react";
import { Servicio } from "../../../models/Servicio";
import { ServiciosService } from "../../../services/servicios/ServiciosService";
import { BaseModal, ModalTextField } from "./AnswerEmail";

const adornment = (icon: ReactNode) => ({
  slotProps: {
    input: {
      startAdornment: (
        <InputAdornment position="start">
          {icon}
        </InputAdornment>
      )
    }
  }
});

interface Props {
  open: boolean;
  onClose: () => void;
  servicio?: Servicio | null;
  onSuccess: () => void;
}

export const ServicioModal = ({ open, onClose, servicio, onSuccess }: Props) => {

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nombreServicio: "",
    descripcionServicio: "",
    precioBaseServicio: ""
  });

  useEffect(() => {

    if (servicio) {

      setForm({
        nombreServicio: servicio.nombreServicio ?? "",
        descripcionServicio: servicio.descripcionServicio ?? "",
        precioBaseServicio: String(servicio.precioBaseServicio ?? "")
      });

    } else {

      setForm({
        nombreServicio: "",
        descripcionServicio: "",
        precioBaseServicio: ""
      });

    }

  }, [servicio]);

  const handleChange = (campo: string, valor: any) => {
    setForm({ ...form, [campo]: valor });
  };

  const guardar = async () => {

    try {

      setLoading(true);

      const datos = {
        nombreServicio: form.nombreServicio,
        descripcionServicio: form.descripcionServicio || undefined,
        precioBaseServicio: Number(form.precioBaseServicio)
      };

      if (servicio) {
        await ServiciosService.actualizarServicio(servicio.codServicio, datos);
      } else {
        await ServiciosService.crearServicio(datos);
      }

      onSuccess();
      onClose();

    } catch (error) {

      console.error("Error guardando servicio:", error);
      alert("Error guardando servicio");

    } finally {

      setLoading(false);

    }

  };

  return (

    <BaseModal
      open={open}
      onClose={onClose}
      title={servicio ? "Editar servicio" : "Crear servicio"}
      icon={<DesignServicesIcon />}
      maxWidth="sm"
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

        <Grid size={12}>
          <ModalTextField
            label="Nombre del servicio"
            value={form.nombreServicio}
            onChange={(e) => handleChange("nombreServicio", e.target.value)}
            {...adornment(<BadgeIcon color="action" />)}
          />
        </Grid>

        <Grid size={12}>
          <ModalTextField
            label="Descripción"
            multiline
            rows={3}
            value={form.descripcionServicio}
            onChange={(e) => handleChange("descripcionServicio", e.target.value)}
            {...adornment(<SubjectIcon color="action" />)}
          />
        </Grid>

        <Grid size={12}>
          <ModalTextField
            label="Precio base"
            type="number"
            value={form.precioBaseServicio}
            onChange={(e) => handleChange("precioBaseServicio", e.target.value)}
            {...adornment(<AttachMoneyIcon color="action" />)}
          />
        </Grid>

      </Grid>

    </BaseModal>

  );

};
