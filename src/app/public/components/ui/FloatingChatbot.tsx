import { useEffect, useState } from "react";
import { IconButton, Box, Tooltip } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import CloseIcon from "@mui/icons-material/Close";
import ChatbotDialog from "./ChatbotDialog";

export const FloatingChatbot = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpenRequest = () => setOpen(true);
    window.addEventListener("open-vision-chat", handleOpenRequest);
    return () => window.removeEventListener("open-vision-chat", handleOpenRequest);
  }, []);

  return (
    <>
      <ChatbotDialog open={open} onClose={() => setOpen(false)} />

      <Box
        sx={{
          position: "fixed",
          bottom: 96,
          right: 24,
          zIndex: 2000,
        }}
      >
        <Tooltip title={open ? "" : "Chatea con nosotros"} placement="left">
          <IconButton
            onClick={() => setOpen((prev) => !prev)}
            sx={{
              background: "linear-gradient(135deg, #6366f1, #9333ea)",
              color: "#fff",
              width: 60,
              height: 60,
              boxShadow: "0 10px 30px rgba(99,102,241,0.45)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #4f46e5, #7e22ce)",
                transform: "scale(1.08)",
              },
            }}
          >
            {open ? (
              <CloseIcon sx={{ fontSize: 26 }} />
            ) : (
              <SmartToyIcon sx={{ fontSize: 28 }} />
            )}
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};
