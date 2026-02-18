import React from "react";
import { Box, Chip } from "@mui/material";

interface Props {
    categories: string[];
    selected: string;
    onSelect: (category: string) => void;
}

export const CategoryFilter: React.FC<Props> = ({
    categories,
    selected,
    onSelect,
}) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            gap={2}
            mb={4}
        >
            {categories.map((cat) => (
                <Chip
                    key={cat}
                    label={cat}
                    clickable
                    color={selected === cat ? "primary" : "default"}
                    onClick={() => onSelect(cat)}
                />
            ))}
        </Box>
    );
};
