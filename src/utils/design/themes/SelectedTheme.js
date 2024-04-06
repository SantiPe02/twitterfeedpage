import { createTheme } from "@mui/material";

const selectedTheme = createTheme({
    typography: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontWeightBold: 800,
        fontWeightRegular: 400,
    }
})

export default selectedTheme;