import { Outlet } from "react-router-dom";
import { Box, Toolbar, Container, useTheme, alpha, Typography } from "@mui/material";
import { Suspense } from "react";
import UserMenu from "../../public/nav/UserMenu";
// Si creas un Sidebar, impórtalo aquí. Si no, usaremos una estructura de Box para el layout.


export const Boardboard = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      {/* NAVBAR SUPERIOR */}
      <Box
        component="header"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: theme.zIndex.drawer + 1,
          bgcolor: alpha(theme.palette.background.paper, 0.8),
          backdropFilter: "blur(8px)", // Efecto cristal moderno
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, sm: 4 } }}>
          {/* Logo o Nombre de la App */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                width: 35,
                height: 35,
                bgcolor: "primary.main",
                borderRadius: 1.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              V
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                fontWeight: 800,
                fontSize: "1.2rem",
                color: "text.primary",
              }}
            >
              VisionWeb{" "}
              <span
                style={{ fontWeight: 400, color: theme.palette.text.secondary }}
              >
                GLPI
              </span>
            </Box>
          </Box>

          {/* El Menú de Usuario con el Avatar y Switch */}
          <UserMenu />
        </Toolbar>
      </Box>

      {/* CONTENIDO PRINCIPAL */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Espaciador para el Navbar fijo */}
        <Toolbar sx={{ mb: 2 }} />

        <Container
          maxWidth="xl"
          sx={{
            flexGrow: 1,
            pb: 4,
            px: { xs: 2, md: 4 },
          }}
        >
          <Suspense
            fallback={
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "50vh",
                  gap: 2,
                }}
              >
                {/* Un spinner simple o texto elegante */}
                <Box
                  className="spinner-border text-primary"
                  sx={{ width: 40, height: 40 }}
                />
                <Box
                  sx={{
                    color: "text.secondary",
                    fontWeight: 500,
                    letterSpacing: 1,
                  }}
                >
                  SINCRONIZANDO INFRAESTRUCTURA...
                </Box>
              </Box>
            }
          >
            {/* Aquí se inyectan Dashboard.tsx o Profile.tsx */}
            <Outlet />
          </Suspense>
        </Container>

        {/* Footer Minimalista (Opcional) */}
        <Box
          component="footer"
          sx={{
            p: 3,
            textAlign: "center",
            // Creamos un borde sutil que se adapte al tema
            borderTop: "1px solid",
            borderColor: (theme) =>
              theme.palette.mode === "dark"
                ? alpha(theme.palette.divider, 0.1)
                : theme.palette.divider,

            // El fondo puede tener un ligero tinte para separar del contenido principal
            bgcolor: (theme) =>
              theme.palette.mode === "dark"
                ? alpha(theme.palette.background.paper, 0.5)
                : "background.default",

            // Color de texto que garantice legibilidad
            color: "text.secondary", // text.secondary es mejor que disabled para el modo oscuro
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: 0.5,
            mt: "auto", // Empuja el footer siempre al final si el contenido es poco
          }}
        >
          <Typography variant="caption" sx={{ opacity: 0.8 }}>
            © 2026 <strong>VisionWeb System</strong> | Panel de Gestión GLPI
            v1.0
          </Typography>
        </Box>
      </Box> 
    </Box>
  );
};
