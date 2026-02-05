import { Box, Typography, Button } from "@mui/material";

export default function FinalCTA() {
  return (
    <Box
      sx={{
        py: 10,
        textAlign: "center",
        background: "linear-gradient(135deg, #1c42ae, #42BFA7)",
        color: "#fff",
      }}
    >
      <Typography variant="h4" fontWeight={800} mb={2}>
        Lleva tu área TIC al siguiente nivel
      </Typography>
      <Typography mb={4}>
        Implementa una mesa de ayuda profesional hoy mismo.
      </Typography>
      <Button variant="contained" size="large" sx={{ bgcolor: "#fff", color: "#000" }}>
        Solicitar asesoría
      </Button>
    </Box>
  );
}
