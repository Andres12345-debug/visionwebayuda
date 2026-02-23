import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack
} from "@mui/material";
import { jwtDecode } from "jwt-decode";

const Profile = () => {

  const token = localStorage.getItem("TOKEN_AUTORIZACION");

  if (!token) {
    return <Typography>No hay sesión activa</Typography>;
  }

  const datosUsuario: any = jwtDecode(token);

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Card sx={{ width: 400, p: 2, borderRadius: 3 }}>
        <CardContent>

          <Stack alignItems="center" spacing={2}>
            <Avatar sx={{ width: 80, height: 80 }}>
              {datosUsuario?.nombre?.charAt(0)}
            </Avatar>

            <Typography variant="h5" fontWeight="bold">
              {datosUsuario?.nombre}
            </Typography>

            <Typography color="text.secondary">
              Rol: {datosUsuario?.rol}
            </Typography>
          </Stack>

          <Box mt={3}>
            <Typography>
              <strong>ID:</strong> {datosUsuario?.id}
            </Typography>

            <Typography>
              <strong>Teléfono:</strong> {datosUsuario?.telefono}
            </Typography>

            <Typography>
              <strong>Usuario:</strong> {datosUsuario?.access}
            </Typography>
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;