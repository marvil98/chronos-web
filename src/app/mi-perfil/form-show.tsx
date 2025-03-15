import { Box, Button, Grid, Link, Paper, Typography } from "@mui/material";
import Image from "next/image";
import userImage from "@/assets/Avatar-ico.svg";
import emailImage from "@/assets/email-ico.svg";

type FormShowProps = {
  userName: string;
  userEmail: string;
  handleClickEdit: () => void;
  handleClickDelete: () => void;
};

export function FormShow({
  userName,
  userEmail,
  handleClickEdit,
  handleClickDelete,
}: FormShowProps) {
  return (
    <Paper elevation={0} sx={{ p: 2, mt: "25px !important" }}>
      <Grid container spacing={2} wrap="nowrap" sx={{ gap: "1.25em" }}>
        <Box
          sx={{
            minWidth: "112px",
            maxWidth: "112px",
            marginRight: "16px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            gap: "1.063em",
          }}
        >
          <Box
            sx={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              marginBottom: "16px",
              backgroundColor: "#E6E1F0",
            }}
          >
            <Image src={userImage} alt="Avatar logo" width={75} height={75} />
          </Box>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            {userName}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "1.875em" }}>
          <Typography
            variant="body1"
            sx={{
              cursor: "pointer",
              width: "fit-content",
              fontSize: "24px",
              textDecoration: "underline",
              textDecorationColor: "#6A0DAD",
              textDecorationThickness: "4px",
            }}
            onClick={handleClickEdit}
          >
            Editar perfil
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "0.313em",
              alignItems: "center",
              cursor: "pointer",
              width: "fit-content",
            }}
          >
            <Image src={emailImage} alt="Email logo" width={20} height={20} />
            <Typography
              variant="body2"
              sx={{ textDecoration: "underline", color: "blue" }}
            >
              {userEmail}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{ cursor: "pointer", width: "fit-content" }}
          >
            <Link href="/alarmas" style={{ textDecoration: "none" }}>
              Mis Alarmas
            </Link>
          </Typography>
          <Typography
            variant="body2"
            sx={{ cursor: "pointer", width: "fit-content" }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              Gestiona notifiaciones
            </Link>
          </Typography>
          <Button
            variant="contained"
            sx={{ width: "200px" }}
            onClick={handleClickDelete}
          >
            Eliminar cuenta
          </Button>
        </Box>
      </Grid>
    </Paper>
  );
}
