import React from "react";
import { Box, Typography } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";

export const EmptyState = () => {
    return (
        <Box textAlign="center" py={8}>
            <SearchOffIcon sx={{ fontSize: 60, color: "text.secondary", mb: 2 }} />
            <Typography variant="h6" fontWeight={600}>
                No se encontraron resultados
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Intenta cambiar el término de búsqueda.
            </Typography>
        </Box>
    );
};
