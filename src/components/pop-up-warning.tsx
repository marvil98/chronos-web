import { Box, Modal, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type PopUpWarningProps = {
  isOpen: boolean;
  image: any;
  message: string;
  setShowWarning: any;
  routing?: string;
};

export function PopUpWarning({
  isOpen,
  image,
  message,
  setShowWarning,
  routing,
}: PopUpWarningProps) {
  const router = useRouter();

  useEffect(() => {
    let timerId: number | undefined;
    if (isOpen) {
      timerId = window.setTimeout(() => {
        setShowWarning(false);
        if (routing !== "") {
          router.push(routing || "");
        }
      }, 2000);
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [isOpen, setShowWarning]);

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          height: "80%",
          bgcolor: "#E3ECFF",
          border: "2px solid #DDE0EE",
          borderRadius: "25px",
          boxShadow: 24,
          p: 4,
          outline: "none",
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "50% 50%",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <Box sx={{ height: "100%", aspectRatio: "1 / 1" }}>
          <Image
            src={image}
            alt="ico logo"
            layout="responsive"
            width={100}
            height={100}
            objectFit="cover"
          />
        </Box>
        <Typography
          id="modal-title"
          variant="h6"
          component="h2"
          sx={{
            textAlign: "center",
            fontSize: "xxx-large",
            width: "60%",
            margin: "auto !important",
          }}
        >
          {message}
        </Typography>
      </Box>
    </Modal>
  );
}
