import { Box } from "@mui/material";
import PlanesPage from "../components/componentsPlane/PlanesPage";

const Plane = () => {
    return (
        <Box>
            {/* Solo dejamos este, que ya contiene las 3 secciones internas */}
            <PlanesPage />
        </Box>
    );
};

export default Plane;