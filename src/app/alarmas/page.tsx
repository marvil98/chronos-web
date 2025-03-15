"use client";
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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Alarm {
  title: string;
  date: string;
  hour: string;
}

export default function Alarms() {
  const router = useRouter();
  const [alarmas, setAlarmas] = useState<Alarm[]>([]);

  useEffect(() => {
    const defaultAlarms: Alarm[] = [
      {
        title: "Reunión de equipo",
        date: "2025-08-05T05:00:00.000Z",
        hour: "08:30",
      },
      {
        title: "Ejercicio matutino",
        date: "2025-08-06T05:00:00.000Z",
        hour: "06:00",
      },
    ];

    const formatDate = (dateString: string): string => {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Fecha inválida";
      return date.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    };

    const storedAlarms: Alarm[] = JSON.parse(
      localStorage.getItem("alarmas") || "[]",
    );

    if (storedAlarms.length === 0) {
      localStorage.setItem("alarmas", JSON.stringify(defaultAlarms));
      setAlarmas(
        defaultAlarms.map((alarm: Alarm) => ({
          ...alarm,
          date: formatDate(alarm.date),
        })),
      );
    } else {
      setAlarmas(
        storedAlarms.map((alarm: Alarm) => ({
          ...alarm,
          date: formatDate(alarm.date),
        })),
      );
    }
  }, []);

  return (
    <>
      <Navbar backTo="/" />
      <Container sx={{ mt: "25px !important" }}>
        <Typography variant="h1">ALARMAS</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "600px",
            mt: "25px !important",
          }}
        >
          <Button
            variant="contained"
            sx={{ width: "200px" }}
            onClick={() => router.push("/alarmas/crear-alarmas")}
          >
            CREAR ALARMA
          </Button>
          <Link
            component="button"
            color="secondary"
            onClick={() => router.push("/alarmas/recomendacion")}
          >
            USAR CONFIGURACIÓN RECOMENDADA
          </Link>
        </Box>

        <Box sx={{ mt: "16px !important" }}>
          {alarmas.length > 0 ? (
            alarmas.map((alarma: any, index) => (
              <Card
                key={index}
                sx={{
                  width: 240,
                  mt: "16px !important",
                  border: "1px solid",
                  borderRadius: "12px",
                  backgroundColor: "#E3ECFF",
                }}
              >
                <CardContent>
                  <Typography variant="body1">{alarma.title}</Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Today sx={{ fontSize: 15, mr: "5px !important" }} />
                    <Typography variant="body2">{alarma.date}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <AccessTime sx={{ fontSize: 15, mr: "5px !important" }} />
                    <Typography variant="body2">{alarma.hour}</Typography>
                  </Box>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography>No hay alarmas guardadas.</Typography>
          )}
        </Box>
      </Container>
    </>
  );
}
