import { createTheme } from "@mui/material";

export const titleTheme = createTheme({
    typography: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        buttonTypography: { fontSize: "15px" },
        large: { fontSize: "20px" },
        medium: { fontSize: "18px" },
    }
})