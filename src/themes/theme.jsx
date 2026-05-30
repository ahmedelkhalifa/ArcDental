import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "rgb(14, 58, 138)",
    },

    accent: {
      main: "#0946ca",
      surface: "#EFF6FF",
    },

    background: {
      default: "rgb(248, 250, 252)",
      paper: "#ffffff",
    },

    text: {
      primary: "#111827",
      secondary: "#6B7280",
    },

    border: {
      main: "#E5E7EB",
    },
  },

  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,

    h1: {
      fontFamily: `"DM Serif Display", serif`,
    },

    body1: {
      fontFamily: "Inter",
    },

    button: {
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: 600,
      textTransform: "none",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "none",
          paddingInline: "20px",
          height: "50px",

          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export default theme;