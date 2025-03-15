"use client";
import { colors } from "@mui/material";
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
    action: {
      active: "#49454F",
    },
  },
  components: {
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
          "&.Mui-disabled": {
            backgroundColor: "#B0BEC5",
            color: "#fff",
            opacity: "38%",
          },
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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#49454F",
          },
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0px 1000px white inset !important",
            backgroundColor: "white !important",
            color: "black !important",
            "-webkit-text-fill-color": "black !important",
          },
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0px 1000px white inset !important",
            backgroundColor: "white !important",
            color: "black !important",
            "-webkit-text-fill-color": "black !important",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          "&.Mui-focused": {
            backgroundColor: "white",
          },
          "&.MuiInputLabel-shrink": {
            backgroundColor: "#E6E1F0",
            color: "#6A0DAD",
            padding: "0px 5px",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 52,
          height: 32,
          padding: 0,
          gap: "12px",
          marginRight: "15px !important",
        },
        switchBase: {
          "&.Mui-checked": {
            transform: "translateX(24px)",
            left: "-5px",
            "& .MuiSwitch-thumb": {
              backgroundColor: "#FFFFFF",
            },
            "& + .MuiSwitch-track": {
              backgroundColor: "#6A0DAD",
              border: "2px solid #6A0DAD",
              opacity: 1,
            },
          },
        },
        track: {
          backgroundColor: "#E6E1F0",
          opacity: 1,
          borderRadius: 16,
          border: "2px solid #6A0DAD",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        thumb: {
          width: 18,
          height: 18,
          backgroundColor: "#6A0DAD",
          marginTop: "-1px !important",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#6A0DAD",
        },
      },
    },
  },
});
