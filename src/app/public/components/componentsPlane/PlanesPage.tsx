
import OnboardingSteps from './OnboardingSteps';
import { useThemeContext } from "../../../shared/theme/ThemeConext";
import TechDifferentiator from './TechDifferentiator';
import { Box } from '@mui/system';

const PlanesPage = () => {
    const { mode } = useThemeContext();
    const isDark = mode === 'dark';

    return (
        <Box>
            <OnboardingSteps />
            <TechDifferentiator />

        </Box>
    );
};

export default PlanesPage;