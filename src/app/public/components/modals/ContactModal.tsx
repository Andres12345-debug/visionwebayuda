import {
  Typography,
  Button,
  Box,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

import { BaseModal } from "./AnswerEmail";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export const ContactModal = ({ open, onClose }: ContactModalProps) => {
  return (
    <BaseModal
      open={open}
      onClose={onClose}
      title="Contáctanos"
      maxWidth="sm"
      actions={
        <Button
          variant="contained"
          fullWidth
          onClick={onClose}
          sx={{
            borderRadius: "10px",
            fontWeight: 600,
            background: "linear-gradient(90deg, #6366f1, #9333ea)",
          }}
        >
          Cerrar
        </Button>
      }
    >
      <Typography sx={{ mb: 3, color: "text.secondary" }}>
        Estamos listos para ayudarte a implementar soluciones
        empresariales Open Source en tu organización.
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <EmailIcon color="primary" />
          <Typography>gerencia@visionstore.com</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <PhoneIcon color="primary" />
          <Typography>+57 3007538453</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <WhatsAppIcon color="primary" />
          <Typography>WhatsApp Empresarial</Typography>
        </Box>
      </Box>
    </BaseModal>
  );
};
