import { Box, Button, Modal, Typography } from "@mui/material";

type PopUpProps = {
  isOpen: boolean;
  message: string;
  isTwoButtons: boolean;
  btnOneText: string;
  btnTwoText?: string;
  handleClickPrimary: () => void;
  handleClickSecondary?: () => void;
};

export function PopUp({
  isOpen,
  message,
  isTwoButtons,
  btnOneText,
  btnTwoText,
  handleClickPrimary,
  handleClickSecondary,
}: PopUpProps) {
  return (
    <Modal
      open={isOpen}
      onClose={handleClickSecondary}
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
          gridTemplateRows: "60% 40%",
          alignItems: "center",
        }}
      >
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
        <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 3 }}>
          {isTwoButtons && (
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: "200px" }}
              onClick={handleClickSecondary}
            >
              {btnTwoText}
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "200px" }}
            onClick={handleClickPrimary}
          >
            {btnOneText}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
