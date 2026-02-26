import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
  IconButton, 
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export const ContactModal = ({ open, onClose }: ContactModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: 700,
        }}
      >
        Contáctanos

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Typography sx={{ mb: 3, color: "text.secondary" }}>
          Estamos listos para ayudarte a implementar soluciones
          empresariales Open Source en tu organización.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <EmailIcon color="primary" />
            <Typography>vision.code24@gmail.com</Typography>
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
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
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
      </DialogActions>
    </Dialog>
  );
};
