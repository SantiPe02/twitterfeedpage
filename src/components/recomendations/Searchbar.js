import { Box, Input } from "@mui/material";
import React from "react";
import colors from "../../utils/design/Colors";
import theme from "../../utils/design/themes/Theme";

function Searchbar() {
  return (
    <Box
      sx={{
        marginTop: "20px",
      }}
    >
      <Input
        placeholder="input"
        margin="normal"
        variant="contained"
        sx={{
          backgroundColor: colors.greybackground,
          borderRadius: 8,
          padding: "0px 10px",
          height: "40px",
          width: "110%",
        }}
        fullWidth
        inputProps={{
          style: {
            fontSize: theme.typography.medium,
            fontFamily: theme.typography.fontFamily,
          },
        }}
        disableUnderline
      ></Input>
    </Box>
  );
}

export default Searchbar;
