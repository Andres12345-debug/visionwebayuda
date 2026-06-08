import {
  Button,
  MenuItem,
  CircularProgress,
  InputAdornment
} from "@mui/material";
import Grid from "@mui/material/Grid";

import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import BusinessIcon from "@mui/icons-material/Business";
import StyleIcon from "@mui/icons-material/Style";

import { ReactNode, useState, useEffect } from "react";
import { Cliente } from "../../../models/Client";
import { ClienteService } from "../../../services/client/ClienteService";
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
  cliente?: Cliente | null;
  onSuccess: () => void;
}

export const ClienteModal = ({ open, onClose, cliente, onSuccess }: Props) => {

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nombreCliente: "",
    apellidoCliente: "",
    nitCliente: "",
    direccionCliente: "",
    correoCliente: "",
    telefonoCliente: "",
    telefonoSecundarioCliente: "",
    estadoCliente: "Activo",
    ciudadCliente: "",
    empresaCliente: "",
    caracteristicaCliente: "",
    generoUsuario: 1
  });

  useEffect(() => {

    if (cliente) {

      setForm({
        nombreCliente: cliente.nombreCliente ?? "",
        apellidoCliente: cliente.apellidoCliente ?? "",
        nitCliente: cliente.nitCliente ?? "",
        direccionCliente: cliente.direccionCliente ?? "",
        correoCliente: cliente.correoCliente ?? "",
        telefonoCliente: cliente.telefonoCliente ?? "",
        telefonoSecundarioCliente: cliente.telefonoSecundarioCliente ?? "",
        estadoCliente: cliente.estadoCliente ?? "Activo",
        ciudadCliente: cliente.ciudadCliente ?? "",
        empresaCliente: cliente.empresaCliente ?? "",
        caracteristicaCliente: cliente.caracteristicaCliente ?? "",
        generoUsuario: cliente.generoUsuario ?? 1
      });

    } else {

      setForm({
        nombreCliente: "",
        apellidoCliente: "",
        nitCliente: "",
        direccionCliente: "",
        correoCliente: "",
        telefonoCliente: "",
        telefonoSecundarioCliente: "",
        estadoCliente: "Activo",
        ciudadCliente: "",
        empresaCliente: "",
        caracteristicaCliente: "",
        generoUsuario: 1
      });

    }

  }, [cliente]);

  const handleChange = (campo: string, valor: any) => {

    setForm({
      ...form,
      [campo]: valor
    });

  };

  const guardar = async () => {

    try {

      setLoading(true);

      const data: Cliente = {
        ...form,
        generoUsuario: Number(form.generoUsuario)
      };

      if (cliente && (cliente as any).id) {

        await ClienteService.actualizarCliente(
          (cliente as any).id,
          data
        );

      } else {

        await ClienteService.crearCliente(data);

      }

      onSuccess();
      onClose();

    } catch (error) {

      console.error("Error guardando cliente:", error);
      alert("Error guardando cliente");

    } finally {

      setLoading(false);

    }

  };

  return (

    <BaseModal
      open={open}
      onClose={onClose}
      title={cliente ? "Editar Cliente" : "Crear Cliente"}
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
            {loading ? <CircularProgress size={20}/> : "Guardar"}
          </Button>
        </>
      }
    >

      <Grid container spacing={2.5}>

        <Grid size={{ xs: 12, sm: 6 }}>
          <ModalTextField
            label="Nombre"
            value={form.nombreCliente}
            onChange={(e) => handleChange("nombreCliente", e.target.value)}
            {...adornment(<PersonIcon color="action" />)}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <ModalTextField
            label="Apellido"
            value={form.apellidoCliente}
            onChange={(e) => handleChange("apellidoCliente", e.target.value)}
            {...adornment(<PersonIcon color="action" />)}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <ModalTextField
            label="NIT"
            value={form.nitCliente}
            onChange={(e) => handleChange("nitCliente", e.target.value)}
            {...adornment(<BadgeIcon color="action" />)}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <ModalTextField
            label="Dirección"
            value={form.direccionCliente}
            onChange={(e) => handleChange("direccionCliente", e.target.value)}
            {...adornment(<LocationOnIcon color="action" />)}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <ModalTextField
            label="Correo"
            type="email"
            value={form.correoCliente}
            onChange={(e) => handleChange("correoCliente", e.target.value)}
            {...adornment(<EmailIcon color="action" />)}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <ModalTextField
            label="Teléfono"
            value={form.telefonoCliente}
            onChange={(e) => handleChange("telefonoCliente", e.target.value)}
            {...adornment(<PhoneIcon color="action" />)}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <ModalTextField
            label="Teléfono Secundario"
            value={form.telefonoSecundarioCliente}
            onChange={(e) => handleChange("telefonoSecundarioCliente", e.target.value)}
            {...adornment(<PhoneIcon color="action" />)}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <ModalTextField
            label="Ciudad"
            value={form.ciudadCliente}
            onChange={(e) => handleChange("ciudadCliente", e.target.value)}
            {...adornment(<LocationCityIcon color="action" />)}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <ModalTextField
            label="Empresa"
            value={form.empresaCliente}
            onChange={(e) => handleChange("empresaCliente", e.target.value)}
            {...adornment(<BusinessIcon color="action" />)}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <ModalTextField
            label="Característica"
            value={form.caracteristicaCliente}
            onChange={(e) => handleChange("caracteristicaCliente", e.target.value)}
            {...adornment(<StyleIcon color="action" />)}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <ModalTextField
            select
            label="Estado"
            value={form.estadoCliente}
            onChange={(e) => handleChange("estadoCliente", e.target.value)}
          >
            <MenuItem value="Activo">Activo</MenuItem>
            <MenuItem value="Inactivo">Inactivo</MenuItem>
          </ModalTextField>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <ModalTextField
            select
            label="Género"
            value={form.generoUsuario}
            onChange={(e) => handleChange("generoUsuario", Number(e.target.value))}
          >
            <MenuItem value={1}>Masculino</MenuItem>
            <MenuItem value={2}>Femenino</MenuItem>
          </ModalTextField>
        </Grid>

      </Grid>

    </BaseModal>

  );

};
