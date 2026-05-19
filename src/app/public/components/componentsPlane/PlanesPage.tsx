
import OnboardingSteps from './OnboardingSteps';
import { useThemeContext } from "../../../shared/theme/ThemeConext";
import TechDifferentiator from './TechDifferentiator';
import { Box } from '@mui/system';

const PlanesPage = () => {
    const { mode } = useThemeContext();
    const isDark = mode === 'dark';

    return (
        <Box style={{
            backgroundColor: isDark ? '#000000' : '#ffffff',
            minHeight: '100vh',
            transition: 'background-color 0.3s ease',
            color: isDark ? '#fff' : '#000'
        }}>
            <OnboardingSteps />
            <TechDifferentiator />

        </Box>
    );
};

export default PlanesPage;