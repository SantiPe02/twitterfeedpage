import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Manrope", "sans-serif"].join(","),
    buttonTypography: { fontSize: "15px" },
    large: { fontSize: "20px" },
    medium: { fontSize: "15px" },
  },
});

export default theme;
