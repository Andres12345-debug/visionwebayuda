import { Box } from "@mui/material";
import { ReactNode } from "react";

type GradientTextProps = {
  children: ReactNode;
  gradient?: string;
};

export default function GradientText({
  children,
  gradient = "linear-gradient(90deg, #6366f1, #9333ea)",
}: GradientTextProps) {
  return (
    <Box
      component="span"
      sx={{
        background: gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </Box>
  );
}
