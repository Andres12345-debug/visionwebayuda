import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export const ProductSearch: React.FC<Props> = ({ value, onChange }) => {
    return (
        <TextField
            placeholder="Buscar producto..."
            variant="outlined"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            sx={{ width: { xs: "100%", sm: 400 } }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
};
