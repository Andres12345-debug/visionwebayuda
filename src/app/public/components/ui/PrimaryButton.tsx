import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

type PrimaryButtonProps = Omit<ButtonProps, "variant"> & {
  children: ReactNode;
};

export default function PrimaryButton({ children, sx, ...props }: PrimaryButtonProps) {
  return (
    <Button
      variant="contained"
      {...props}
      sx={{
        borderRadius: "14px",
        fontWeight: 600,
        textTransform: "none",
        background: "linear-gradient(90deg, #6366f1, #9333ea)",
        boxShadow: "0 8px 20px rgba(99,102,241,0.35)",
        "&:hover": {
          background: "linear-gradient(90deg, #4f46e5, #7e22ce)",
        },
        transition: "all .3s ease",
        ...sx,
      }}
    >
      {children}
    </Button>
  );
}
