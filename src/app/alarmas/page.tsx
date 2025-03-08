import Navbar from "@/components/Navbar";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Link,
  Typography,
} from "@mui/material";
import { Today, AccessTime } from "@mui/icons-material";

export default function Alarms() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: "25px !important" }}>
        <Typography variant="h1">ALARMAS</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "stretch",
            width: "600px",
            mt: "25px !important",
          }}>
          <Button variant="contained" sx={{ width: "200px" }}>
            CREAR ALARMA
          </Button>
          <Link component="button" color="secondary">
            USAR CONFIGURACIÓN RECOMENDADA
          </Link>
        </Box>
        <Box sx={{ mt: "16px !important" }}>
          <Card
            sx={{ minWidth: 240, border: "1px solid", borderRadius: "12px" }}>
            <CardContent>
              <Typography variant="body1">Alarma creada</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Today sx={{ fontSize: 15, mr: "5px !important" }} />
                <Typography variant="body2">01/01/2025</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AccessTime sx={{ fontSize: 15, mr: "5px !important" }} />
                <Typography variant="body2">10:00</Typography>
              </Box>
            </CardContent>
          </Card>
          <Card
            sx={{
              minWidth: 240,
              mt: "16px !important",
              border: "1px solid",
              borderRadius: "12px",
            }}>
            <CardContent>
              <Typography variant="body1">Alarma creada</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Today sx={{ fontSize: 15, mr: "5px !important" }} />
                <Typography variant="body2">01/01/2025</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AccessTime sx={{ fontSize: 15, mr: "5px !important" }} />
                <Typography variant="body2">10:00</Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}
