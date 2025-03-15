"use client";
import Navbar from "@/components/Navbar";
import { AccessTime, PlayArrow, Loop, LockOpen } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import "../recomendacion/recomendacion.css";
import { useState } from "react";
import checkImage from "@/assets/check-ico.svg";
import { PopUpWarning } from "@/components/pop-up-warning";

export default function Recommendation() {
  const [showWarning, setShowWarning] = useState(false);
  const [varPopUpWarning] = useState({
    image: checkImage,
    text: "ALARMA CREADA EXITOSAMENTE",
  });
  return (
    <>
      <Navbar backTo="/alarmas" />
      <Container sx={{ mt: "25px !important" }}>
        <Typography variant="h1">ALARMAS</Typography>
        <Typography
          variant="h5"
          color="primary"
          fontWeight="bold"
          sx={{ marginTop: "20px !important" }}
        >
          ACTIVAR CONFIGURACIÓN RECOMENDADA
        </Typography>
        <div>
          <div className="item-configuration">
            <div>
              <AccessTime color="primary" />
            </div>
            <div className="ml-20">
              <Typography variant="h6" fontWeight="bold">
                HORA:
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 200 }}>
                7:00 A.M. (Predefinida)
              </Typography>
            </div>
          </div>
          <div className="item-configuration">
            <div>
              <PlayArrow color="primary" />
            </div>
            <div className="ml-20">
              <Typography variant="h6" fontWeight="bold">
                SONIDO:
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 200 }}>
                7:00 A.M. (Predefinida)
              </Typography>
            </div>
          </div>
          <div className="item-configuration">
            <div>
              <Loop color="primary" />
            </div>
            <div className="ml-20">
              <Typography variant="h6" fontWeight="bold">
                REPETICIÓN:
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 200 }}>
                Lunes - Viernes
              </Typography>
            </div>
          </div>
          <div className="item-configuration">
            <div>
              <LockOpen color="primary" />
            </div>
            <div className="ml-20">
              <Typography variant="h6" fontWeight="bold">
                APAGADO:
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 200 }}>
                Desafío
              </Typography>
            </div>
          </div>
        </div>
        <Button
          variant="contained"
          sx={{ width: "230px", marginTop: "25px !important" }}
          onClick={() => {
            setShowWarning(true);
          }}
        >
          GUARDAR ALARMA
        </Button>
        <PopUpWarning
          isOpen={showWarning}
          message={varPopUpWarning.text}
          image={varPopUpWarning.image}
          setShowWarning={setShowWarning}
          routing="/alarmas"
        />
      </Container>
    </>
  );
}
