import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
  MenuItem,
  CircularProgress
} from "@mui/material";

import { useState, useEffect } from "react";
import { Cliente } from "../../../models/Client";
import { ClienteService } from "../../../services/client/ClienteService";

interface Props {
  open: boolean;
  onClose: () => void;
  cliente?: Cliente | null;
  onSuccess: () => void;
}

export const ClienteModal = ({ open, onClose, cliente, onSuccess }: Props) => {

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<Cliente>({
    nombreCliente: "",
    apellidoCliente: "",
    nitCliente: "",
    direccionCliente: "",
    correoCliente: "",
    telefonoCliente: "",
    telefonoSecundarioCliente: "",
    estadoCliente: "",
    ciudadCliente: "",
    empresaCliente: "",
    caracteristicaCliente: "",
    generoUsuario: 1
  });

  useEffect(() => {

    if (cliente) {

      setForm(cliente);

    } else {

      setForm({
        nombreCliente: "",
        apellidoCliente: "",
        nitCliente: "",
        direccionCliente: "",
        correoCliente: "",
        telefonoCliente: "",
        telefonoSecundarioCliente: "",
        estadoCliente: "",
        ciudadCliente: "",
        empresaCliente: "",
        caracteristicaCliente: "",
        generoUsuario: 1
      });

    }

  }, [cliente]);

  const handleChange = (campo: keyof Cliente, valor: any) => {

    setForm({
      ...form,
      [campo]: valor
    });

  };

  const guardar = async () => {

    try {

      setLoading(true);

      if (cliente && cliente.id) {

        await ClienteService.actualizarCliente(cliente.id, form);

      } else {

        await ClienteService.crearCliente(form);

      }

      onSuccess();
      onClose();

    } catch (error) {

      console.error(error);
      alert("Error guardando cliente");

    } finally {

      setLoading(false);

    }

  };

  return (

    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">

      <DialogTitle>
        {cliente ? "Editar Cliente" : "Crear Cliente"}
      </DialogTitle>

      <DialogContent>

        <Stack spacing={3} sx={{ mt: 2 }}>

          <TextField
            label="Nombre"
            value={form.nombreCliente}
            onChange={(e) => handleChange("nombreCliente", e.target.value)}
            fullWidth
          />

          <TextField
            label="Apellido"
            value={form.apellidoCliente}
            onChange={(e) => handleChange("apellidoCliente", e.target.value)}
            fullWidth
          />

          <TextField
            label="NIT"
            value={form.nitCliente}
            onChange={(e) => handleChange("nitCliente", e.target.value)}
            fullWidth
          />

          <TextField
            label="Correo"
            value={form.correoCliente}
            onChange={(e) => handleChange("correoCliente", e.target.value)}
            fullWidth
          />

          <TextField
            label="Teléfono"
            value={form.telefonoCliente}
            onChange={(e) => handleChange("telefonoCliente", e.target.value)}
            fullWidth
          />

          <TextField
            label="Teléfono Secundario"
            value={form.telefonoSecundarioCliente}
            onChange={(e) => handleChange("telefonoSecundarioCliente", e.target.value)}
            fullWidth
          />

          <TextField
            label="Dirección"
            value={form.direccionCliente}
            onChange={(e) => handleChange("direccionCliente", e.target.value)}
            fullWidth
          />

          <TextField
            label="Ciudad"
            value={form.ciudadCliente}
            onChange={(e) => handleChange("ciudadCliente", e.target.value)}
            fullWidth
          />

          <TextField
            label="Empresa"
            value={form.empresaCliente}
            onChange={(e) => handleChange("empresaCliente", e.target.value)}
            fullWidth
          />

          <TextField
            label="Característica"
            value={form.caracteristicaCliente}
            onChange={(e) => handleChange("caracteristicaCliente", e.target.value)}
            fullWidth
          />

          <TextField
            select
            label="Estado"
            value={form.estadoCliente}
            onChange={(e) => handleChange("estadoCliente", e.target.value)}
          >
            <MenuItem value="Activo">Activo</MenuItem>
            <MenuItem value="Inactivo">Inactivo</MenuItem>
          </TextField>

          <TextField
            select
            label="Género"
            value={form.generoUsuario}
            onChange={(e) => handleChange("generoUsuario", Number(e.target.value))}
          >
            <MenuItem value={1}>Masculino</MenuItem>
            <MenuItem value={2}>Femenino</MenuItem>
          </TextField>

        </Stack>

      </DialogContent>

      <DialogActions>

        <Button onClick={onClose}>
          Cancelar
        </Button>

        <Button
          variant="contained"
          onClick={guardar}
          disabled={loading}
        >

          {loading
            ? <CircularProgress size={20} />
            : "Guardar"}

        </Button>

      </DialogActions>

    </Dialog>

  );

};