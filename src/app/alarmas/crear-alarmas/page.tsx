import Navbar from "@/components/Navbar";
import { Container, Typography } from "@mui/material";

export default function Alarms() {
  return (
    <>
      <Navbar backTo="/alarmas" />
      <Container sx={{ mt: "25px !important" }}>
        <Typography variant="h1">ALARMAS</Typography>
      </Container>
    </>
  );
}
