import React from 'react';
import OnboardingSteps from './OnboardingSteps';
import { useThemeContext } from "../../../shared/theme/ThemeConext";
import TechDifferentiator from './TechDifferentiator';

const PlanesPage = () => {
    const { mode } = useThemeContext();
    const isDark = mode === 'dark';

    return (
        <div style={{
            backgroundColor: isDark ? '#000000' : '#ffffff',
            minHeight: '100vh',
            transition: 'background-color 0.3s ease',
            color: isDark ? '#fff' : '#000'
        }}>
            {/*
    <HeroPricing />

    <section style={{ marginTop: '-40px' }}>
        <SavingsCaculator />
    </section>

    
    <ComparativaTabla />
*/}
            <OnboardingSteps />
            <TechDifferentiator />

        </div>
    );
};

export default PlanesPage;