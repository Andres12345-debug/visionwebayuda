import { IconButton, Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const phoneNumber = "3007538453";

const message =
  "Hola, quiero asesoría sobre software empresarial Open Source.";

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export const FloatingWhatsApp = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 2000,
      }}
    >
      <IconButton
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          backgroundColor: "#25D366",
          color: "#fff",
          width: 60,
          height: 60,
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          "&:hover": {
            backgroundColor: "#1ebe5d",
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 30 }} />
      </IconButton>
    </Box>
  );
};
