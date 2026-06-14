import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PrimaryButton from "../ui/PrimaryButton";

type SectionHeroSplitBaseProps = {
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  subtitle: string;
  title: ReactNode;
  description: string;
  buttonText: string;
  buttonLink?: string;
};

export default function SectionHeroSplitBase({
  image,
  imageAlt,
  imagePosition = "right",
  subtitle,
  title,
  description,
  buttonText,
  buttonLink = "#",
}: SectionHeroSplitBaseProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const imageEl = (
    <Box
      component="img"
      src={image}
      alt={imageAlt}
      sx={{ display: { xs: "none", md: "block" }, width: "100%", borderRadius: 5 }}
    />
  );

  const textEl = (
    <Box>
      <Typography
        sx={{
          fontSize: "0.8rem",
          fontWeight: 700,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          color: "primary.main",
          mb: 2,
        }}
      >
        {subtitle}
      </Typography>

      <Typography
        sx={{
          fontWeight: 900,
          fontSize: { xs: "1.9rem", md: "2.6rem" },
          lineHeight: 1.2,
          mb: 3,
          color: "text.primary",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: "text.secondary",
          fontSize: "1.1rem",
          lineHeight: 1.7,
          mb: 4,
        }}
      >
        {description}
      </Typography>

      <PrimaryButton
        size="large"
        href={buttonLink}
        sx={{ px: 5, py: 1.6, "&:hover": { transform: "translateY(-3px)" } }}
      >
        {buttonText}
      </PrimaryButton>
    </Box>
  );

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          background: isDark ? "#111827" : "#ffffff",
          borderRadius: 6,
          p: { xs: 4, md: 8 },
          boxShadow: isDark
            ? "0 20px 60px rgba(0,0,0,0.6)"
            : "0 20px 60px rgba(0,0,0,0.08)",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.1fr" },
            gap: { xs: 6, md: 10 },
            alignItems: "center",
          }}
        >
          {imagePosition === "left" ? (
            <>
              {imageEl}
              {textEl}
            </>
          ) : (
            <>
              {textEl}
              {imageEl}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}
