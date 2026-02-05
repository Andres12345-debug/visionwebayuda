import { Box, Typography } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";
import SecurityIcon from "@mui/icons-material/Security";

export default function BenefitsStrip() {
  const items = [
    { icon: <SpeedIcon />, text: "Implementación rápida" },
    { icon: <TrendingUpIcon />, text: "Mayor productividad" },
    { icon: <GroupsIcon />, text: "Mejor colaboración" },
    { icon: <SecurityIcon />, text: "Datos seguros" },
  ];

  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 6,
        textAlign: "center",
      }}
    >
      {items.map((item, i) => (
        <Box key={i}>
          <Box sx={{ color: "primary.main", fontSize: 40 }}>{item.icon}</Box>
          <Typography fontWeight={600}>{item.text}</Typography>
        </Box>
      ))}
    </Box>
  );
}
