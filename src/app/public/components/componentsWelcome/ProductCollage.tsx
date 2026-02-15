import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
} from "@mui/material";

import trabajadorFeliz from "../../../assets/img/welcome/PresentacionDelServicio.png";

const products = [
  {
    tag: "NUEVO",
    title: "iPhone 17 Pro",
    desc1: "Disponible desde $268.708",
    desc2: "en 24 meses sin intereses.",
    img: "https://mac-center.com/cdn/shop/files/iPhone_17_Pro_Cosmic_Orange_2-up_Screen__USEN_49b87fe2-b008-4718-8f64-351e2a4df443.webp?v=1757462602&width=362",
    link: "https://mac-center.com/products/iphone-17-pro-mg8h4lz-a",
    large: true,
  },
  {
    tag: "NUEVO",
    title: "iPad Pro M5",
    desc1: "Financia con 0% interés.",
    desc2: "Disponible desde $250.791",
    img: "https://mac-center.com/cdn/shop/files/iPad_Pro_13-in_M5_Cellular_Space_Black_PDP_Image_Position_2__en-US.jpg?v=1760539699&width=235",
    link: "https://mac-center.com/collections/ipad-pro",
  },
  {
    tag: "NUEVO",
    title: "AirPods Pro 3",
    desc1: "La mejor cancelación activa de ruido in-ear del mundo.",
    desc2: "Desde $1.279.000",
    img: trabajadorFeliz,
    link: "https://mac-center.com/products/airpods-pro-3-mfhp4am-a",
  },
];

export const ProductCollage = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: 6,
      }}
    >
      {/* CONTENEDOR FLEX */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {products.map((p, i) => (
          <Card
            key={i}
            sx={{
              flex: p.large
                ? "1 1 600px"   // tarjeta grande
                : "1 1 280px",  // tarjetas pequeñas
              display: "flex",
              flexDirection: p.large
                ? { xs: "column", md: "row" }
                : "column",
              borderRadius: 4,
              boxShadow: 4,
              p: 2,
              justifyContent: "space-between",
            }}
          >
            {/* TEXTO */}
            <CardContent sx={{ flex: 1 }}>
              <Chip
                label={p.tag}
                size="small"
                sx={{
                  bgcolor: "transparent",
                  color: "#BF4800",
                  fontWeight: "bold",
                  mb: 1,
                }}
              />

              <Typography variant="h5" fontWeight={700} gutterBottom>
                {p.title}
              </Typography>

              <Typography variant="body2">{p.desc1}</Typography>
              <Typography variant="body2" mb={2}>
                {p.desc2}
              </Typography>

              <Button
                variant="contained"
                href={p.link}
                target="_blank"
                sx={{
                  borderRadius: 5,
                  textTransform: "none",
                  px: 3,
                }}
              >
                Comprar
              </Button>
            </CardContent>

            {/* IMAGEN */}
            <CardMedia
              component="img"
              image={p.img}
              alt={p.title}
              sx={{
                width: p.large ? { xs: "100%", md: 260 } : "100%",
                objectFit: "contain",
                p: 2,
              }}
            />
          </Card>
        ))}
      </Box>
    </Box>
  );
};
