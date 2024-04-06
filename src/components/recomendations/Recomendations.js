import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import colors from "../../utils/design/Colors";
import { titleTheme } from "../../utils/design/themes/TitleTheme";
import Searchbar from "./Searchbar";
import theme from "../../utils/design/themes/Theme";

function Recomendations() {
  return (
    <Box>
      <Searchbar />
      <Box
        sx={{ bgcolor: colors.greybackground, borderRadius: 5 }}
        padding={2}
        marginTop={2}
        width={"100%"}
      >
        <Typography
          fontFamily={titleTheme.typography.fontFamily}
          fontSize={titleTheme.typography.medium}
          fontWeight={"500px"}
          marginBottom={2}
        >
          Who to follow
        </Typography>
        {Array.from({ length: 5 }).map((_, index) => (
          <Box
            key={index}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ marginBottom: 2 }} // Espacio entre bloques
          >
            <Avatar
              sx={{ marginRight: "10px", width: "48px", height: "48px" }}
            ></Avatar>
            <Box>
              <Typography
                fontFamily={theme.typography.fontFamily}
                fontSize={theme.medium}
              >
                Other Username
              </Typography>
              <Typography
                fontFamily={theme.typography.fontFamily}
                sx={{ color: colors.greytext }}
                fontSize={theme.medium}
              >
                @Otherusername
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                borderRadius: 8,
                bgcolor: colors.black,
                fontFamily: theme.typography.fontFamily,
                textTransform: "none",
                fontSize: theme.typography.medium,
                height: "40px",
                "&:hover": {
                  backgroundColor: colors.black,
                },
              }}
            >
              Button
            </Button>
          </Box>
        ))}
        <Button
          variant="text"
          sx={{
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.medium,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "transparent",
            },
            color: colors.primarymain,
            marginTop: 2,
          }}
        >
          Show more
        </Button>
      </Box>
    </Box>
  );
}

export default Recomendations;
