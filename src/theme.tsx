"use client";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: "var(--font-roboto)",
    h1: {
      fontSize: "40px !important",
      fontWeight: "500 !important",
      letterSpacing: "4px",
    },
  },
  palette: {
    primary: {
      light: "#E6E1F0",
      main: "#6A0DAD",
      contrastText: "#fff",
    },
    secondary: {
      light: "#E3ECFF",
      main: "#1E3A8A",
      contrastText: "#fff",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          variants: [
            {
              style: {
                right: 0,
                left: "auto !important",
                width: "200px",
                top: "64px !important",
                backgroundColor: "#E3ECFF",
              },
            },
          ],
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (min-width:1200px)": {
            maxWidth: "none",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "40px",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecorationColor: "#1E3A8A",
          color: "#212121",
        },
      },
    },
  },
});
