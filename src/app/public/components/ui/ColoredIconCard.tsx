import { ReactNode } from 'react';
import { Typography, Avatar, Paper } from "@mui/material";
import ScrollReveal from "./ScrollReveal";

export type ColoredIconCardProps = {
    icon: ReactNode;
    title: string;
    desc: string;
    color: string;
    isDark: boolean;
    stepNumber?: number;
};

export default function ColoredIconCard({ icon, title, desc, color, isDark, stepNumber }: ColoredIconCardProps) {
    return (
        <ScrollReveal>
        <Paper
            elevation={0}
            sx={{
                p: 4,
                height: '100%',
                borderRadius: '24px',
                backgroundColor: isDark ? '#1e293b' : '#fff',
                border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: color,
                    boxShadow: isDark ? `0 10px 30px ${color}20` : `0 10px 30px rgba(0,0,0,0.05)`
                }
            }}
        >
            <Avatar
                sx={{
                    bgcolor: `${color}15`,
                    color,
                    width: 68,
                    height: 68,
                    mb: 2,
                    border: `1px solid ${color}30`
                }}
            >
                {icon}
            </Avatar>

            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: isDark ? '#fff' : '#1e293b' }}>
                {title}
            </Typography>

            <Typography variant="body2" sx={{ color: isDark ? '#94a3b8' : '#475569', lineHeight: 1.7, fontSize: '0.95rem' }}>
                {desc}
            </Typography>

            {stepNumber !== undefined && (
                <Typography sx={{
                    position: 'absolute',
                    bottom: -10,
                    right: 10,
                    fontSize: '5rem',
                    fontWeight: 900,
                    opacity: 0.05,
                    color: isDark ? '#ffffff' : '#000000',
                    userSelect: 'none'
                }}>
                    {stepNumber}
                </Typography>
            )}
        </Paper>
        </ScrollReveal>
    );
}
