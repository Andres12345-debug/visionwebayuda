import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
  IconButton,
  TextField,
  TextFieldProps,
  InputAdornment,
  CircularProgress,
  Chip,
  Stack,
  alpha,
  useTheme
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ReplyIcon from "@mui/icons-material/Reply";
import SubjectIcon from "@mui/icons-material/Subject";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import { ReactNode, useState } from "react";
import { CorreoService } from "../../../services/email/EmailService";

type ModalMaxWidth = "xs" | "sm" | "md" | "lg" | "xl";

/** TextField con estilo uniforme (bordes redondeados) para usar dentro de los modales */
export const ModalTextField = ({ sx, ...props }: TextFieldProps) => (
  <TextField
    variant="outlined"
    fullWidth
    {...props}
    sx={[
      {
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px"
        }
      },
      ...(Array.isArray(sx) ? sx : [sx])
    ]}
  />
);

interface BaseModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  icon?: ReactNode;
  iconColor?: string;
  maxWidth?: ModalMaxWidth;
  dividers?: boolean;
  actions?: ReactNode;
  children: ReactNode;
}

export const BaseModal = ({
  open,
  onClose,
  title,
  icon,
  iconColor,
  maxWidth = "sm",
  dividers = true,
  actions,
  children
}: BaseModalProps) => {

  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4
        }
      }}
    >

      {/* HEADER */}

      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 1
        }}
      >

        <Stack direction="row" spacing={1.5} alignItems="center">

          {icon && (
            <Box
              sx={{
                display: "flex",
                color: iconColor ?? theme.palette.info.main
              }}
            >
              {icon}
            </Box>
          )}

          <Typography variant="h6" fontWeight={800}>
            {title}
          </Typography>

        </Stack>

        <IconButton
          onClick={onClose}
          sx={{
            bgcolor: alpha(theme.palette.grey[500], 0.08),
            "&:hover": {
              bgcolor: alpha(theme.palette.grey[500], 0.15)
            }
          }}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent dividers={dividers} sx={{ py: 3 }}>
        {children}
      </DialogContent>

      {/* ACCIONES */}

      {actions && (
        <DialogActions
          sx={{
            p: 3,
            justifyContent: "space-between"
          }}
        >
          {actions}
        </DialogActions>
      )}

    </Dialog>
  );
};

interface ResponderCorreoModalProps {
  open: boolean;
  onClose: () => void;
  id: number;
  email: string;
  onSuccess: () => void;
}

export const ResponderCorreoModal = ({
  open,
  onClose,
  id,
  email,
  onSuccess
}: ResponderCorreoModalProps) => {

  const theme = useTheme();

  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const enviarRespuesta = async () => {

    if (!asunto || !mensaje) {
      alert("Debes completar todos los campos");
      return;
    }

    try {

      setLoading(true);

      const resp = await CorreoService.responderCorreo(
        id,
        email,
        asunto,
        mensaje
      );

      if (resp?.success === false) {
        alert("Error enviando respuesta");
        return;
      }

      alert("Respuesta enviada correctamente");

      setAsunto("");
      setMensaje("");

      onSuccess();
      onClose();

    } catch (error) {

      console.error(error);
      alert("Error enviando correo");

    } finally {
      setLoading(false);
    }

  };

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      title="Responder correo"
      icon={<ReplyIcon />}
      iconColor={theme.palette.info.main}
      maxWidth="sm"
      actions={
        <>
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{
              borderRadius: 2,
              fontWeight: 600,
              textTransform: "none"
            }}
          >
            Cancelar
          </Button>

          <Button
            variant="contained"
            startIcon={!loading && <ReplyIcon />}
            onClick={enviarRespuesta}
            disabled={loading}
            sx={{
              bgcolor: alpha(theme.palette.info.main, 0.9),
              fontWeight: 700,
              borderRadius: 2,
              textTransform: "none",
              px: 3,
              "&:hover": {
                bgcolor: theme.palette.info.main
              }
            }}
          >

            {loading
              ? <CircularProgress size={22} color="inherit" />
              : "Enviar respuesta"}

          </Button>
        </>
      }
    >

      {/* DESTINATARIO */}

      <Box sx={{ mb: 3 }}>

        <Typography
          variant="caption"
          fontWeight={700}
          color="text.secondary"
          sx={{ display: "block", mb: 1 }}
        >
          DESTINATARIO
        </Typography>

        <Chip
          icon={<EmailOutlinedIcon />}
          label={email}
          sx={{
            bgcolor: alpha(theme.palette.info.main, 0.12),
            color: theme.palette.info.main,
            fontWeight: 600
          }}
        />

      </Box>

      {/* ASUNTO */}

      <ModalTextField
        label="Asunto"
        placeholder="Escribe el asunto del correo"
        value={asunto}
        onChange={(e) => setAsunto(e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SubjectIcon color="action" />
              </InputAdornment>
            )
          }
        }}
        sx={{ mb: 3 }}
      />

      {/* MENSAJE */}

      <ModalTextField
        label="Mensaje"
        placeholder="Escribe tu respuesta..."
        multiline
        rows={6}
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />

    </BaseModal>
  );
};
