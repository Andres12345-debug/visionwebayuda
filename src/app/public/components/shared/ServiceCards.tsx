import { Card, CardContent, Box, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  minHeight?: number | string;
};

export default function ServiceCard({
  icon,
  title,
  description,
  minHeight = 280,
}: ServiceCardProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Card
      elevation={2}
      sx={{
        width: "100%",
        height: "100%",
        minHeight,

        flexShrink: 0,

        borderRadius: 4,
        border: `1px solid ${isDark ? "#334155" : "#e2e8f0"}`,

        position: "relative",
        overflow: "hidden",

        backgroundColor: isDark ? "#1e293b" : "#fff",

        display: "flex",
        flexDirection: "column",

        transition:
          "transform 0.25s ease, box-shadow 0.25s ease",

        WebkitTapHighlightColor: "transparent",
        userSelect: "none",

        "&:active": {
          transform: "scale(0.98)",
        },

        "@media (hover: hover)": {
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: theme.shadows[10],
          },
        },

        // TOP GRADIENT
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "4px",

          background: `
            linear-gradient(
              90deg,
              #3b82f6,
              #8b5cf6,
              #ec4899
            )
          `,
        },
      }}
    >
      <CardContent
        sx={{
          p: { xs: 3, md: 4 },
          textAlign: "center",
        }}
      >
        {/* ICON */}
        <Box
          sx={{
            width: 68,
            height: 68,

            borderRadius: "50%",

            mx: "auto",
            mb: 3,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            background:
              "linear-gradient(135deg, #6366f1, #9333ea)",

            color: "#fff",

            boxShadow:
              "0 12px 28px rgba(99,102,241,0.35)",
          }}
        >
          {icon}
        </Box>

        {/* TITLE */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            mb: 1.5,
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.7,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}