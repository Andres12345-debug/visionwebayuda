import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ShieldMoonIcon from '@mui/icons-material/ShieldMoon';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DescriptionIcon from '@mui/icons-material/Description';
import BarChartIcon from '@mui/icons-material/BarChart';
import DevicesIcon from '@mui/icons-material/Devices';
import SecurityIcon from '@mui/icons-material/Security';
import BackupIcon from '@mui/icons-material/Backup';
import SchoolIcon from '@mui/icons-material/School';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import FolderIcon from '@mui/icons-material/Folder';
import { useTranslation } from "react-i18next";
import { useThemeContext } from "../../../shared/theme/ThemeConext";
import ColoredIconCard from "../ui/ColoredIconCard";

const OnboardingSteps = () => {
    const { t } = useTranslation();
    const { mode } = useThemeContext();
    const isDark = mode === 'dark';

    const STEPS = [
        { icon: <SearchIcon sx={{ fontSize: 30 }} />, title: t("onboarding.step1Title"), desc: t("onboarding.step1Desc"), color: "#6366f1" },
        { icon: <SettingsSuggestIcon sx={{ fontSize: 30 }} />, title: t("onboarding.step2Title"), desc: t("onboarding.step2Desc"), color: "#8b5cf6" },
        { icon: <ShieldMoonIcon sx={{ fontSize: 30 }} />, title: t("onboarding.step3Title"), desc: t("onboarding.step3Desc"), color: "#10b981" },
    ];

    const CARDS = [
        { icon: <SupportAgentIcon sx={{ fontSize: 28 }} />, title: t("servicesSection.mesaDeAyudaProfesional"), desc: t("servicesSection.mesaAyudaDesc"), color: '#6366f1' },
        { icon: <Inventory2Icon sx={{ fontSize: 28 }} />, title: t("servicesSection.gestionInventarioTitle"), desc: t("servicesSection.gestionInventarioDesc"), color: '#8b5cf6' },
        { icon: <DescriptionIcon sx={{ fontSize: 28 }} />, title: t("servicesSection.documentacionTitle"), desc: t("servicesSection.documentacionDesc"), color: '#10b981' },
        { icon: <BarChartIcon sx={{ fontSize: 28 }} />, title: t("servicesSection.reportesTitle"), desc: t("servicesSection.reportesDesc"), color: '#f59e0b' },
        { icon: <DevicesIcon sx={{ fontSize: 28 }} />, title: t("servicesSection.soporteMultiplataformaTitle"), desc: t("servicesSection.soporteMultiplataformaDesc"), color: '#ef4444' },
        { icon: <SecurityIcon sx={{ fontSize: 28 }} />, title: t("servicesSection.controlSeguridadTitle"), desc: t("servicesSection.controlSeguridadDesc"), color: '#06b6d4' },
        { icon: <SettingsSuggestIcon sx={{ fontSize: 28 }} />, title: t("inventoryAgent.installationTitle"), desc: t("inventoryAgent.installationText"), color: '#7c3aed' },
        { icon: <BackupIcon sx={{ fontSize: 28 }} />, title: t("inventoryAgent.backupTitle"), desc: t("inventoryAgent.backupText"), color: '#0ea5a4' },
        { icon: <SchoolIcon sx={{ fontSize: 28 }} />, title: t("inventoryAgent.trainingTitle"), desc: t("inventoryAgent.trainingText"), color: '#f97316' },
        { icon: <LiveHelpIcon sx={{ fontSize: 28 }} />, title: t("inventoryAgent.demoTitle"), desc: t("inventoryAgent.demoText"), color: '#2563eb' },
        { icon: <DownloadForOfflineIcon sx={{ fontSize: 28 }} />, title: t("inventoryAgent.agentInstallTitle"), desc: t("inventoryAgent.agentInstallText"), color: '#059669' },
        { icon: <FolderIcon sx={{ fontSize: 28 }} />, title: t("inventoryAgent.inventoryOrganizationTitle"), desc: t("inventoryAgent.inventoryOrganizationText"), color: '#0891b2' },
    ];

    return (
        <Box sx={{ py: 10, px: 2, backgroundColor: isDark ? 'transparent' : '#f8fafc' }}>
            <Box sx={{ maxWidth: '1100px', margin: '0 auto' }}>

                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="overline" sx={{ color: '#6366f1', fontWeight: 800, letterSpacing: 2 }}>
                        {t("onboarding.badge")}
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, fontSize: { xs: "2rem", md: "3rem" }, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                        {t("onboarding.titulo")}
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {STEPS.map((step, index) => (
                        <Grid key={`step-${index}`} size={{ xs: 12, md: 4 }}>
                            <ColoredIconCard {...step} isDark={isDark} stepNumber={index + 1} />
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ mt: 6 }}>
                    <Grid container spacing={4}>
                        {CARDS.map((card, idx) => (
                            <Grid key={`card-${idx}`} size={{ xs: 12, md: 4 }}>
                                <ColoredIconCard {...card} isDark={isDark} stepNumber={STEPS.length + idx + 1} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Typography variant="body2" sx={{ color: isDark ? '#64748b' : '#94a3b8', fontStyle: 'italic' }}>
                        {t("onboarding.footer")}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default OnboardingSteps;
