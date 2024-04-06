import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import logo from "../utils/resources/logo.png";
import selectedHome from "../utils/resources/icons/selected_home.png";
import notSelectedHome from "../utils/resources/icons/not_selected_home.png";
import selectedExplore from "../utils/resources/icons/selected_explore.png";
import notSelectedExplore from "../utils/resources/icons/not_selected_explore.png";
import selectedProfile from "../utils/resources/icons/selected_profile.png";
import notSelectedProfile from "../utils/resources/icons/not_selected_profile.png";
import selectedMessage from "../utils/resources/icons/selected_message.png";
import notSelectedMessage from "../utils/resources/icons/not_selected_message.png";
import theme from "../utils/design/themes/Theme";
import selectedTheme from "../utils/design/themes/SelectedTheme";
import colors from "../utils/design/Colors";

function Navbar() {
  const [selected, setSelected] = useState("Home");

  return (
    <Box sx={{ paddingTop: "10px" }} width={"15%"}>
      <img src={logo} alt="logo" width={24} height={"auto"}></img>
      <Box display={"flex"} flexDirection={"column"} marginTop={5}>
        <Box
          display={"flex"}
          onClick={() => setSelected("Home")}
          sx={{ cursor: "pointer" }}
          alignItems={"center"}
        >
          <img
            src={selected === "Home" ? selectedHome : notSelectedHome}
            alt="home"
            width={24}
          ></img>
          <Typography
            sx={{ marginLeft: 2, display: { xs: "none", sm: "block" } }}
            fontFamily={theme.typography.fontFamily}
            fontWeight={
              selected === "Home"
                ? selectedTheme.typography.fontWeightBold
                : selectedTheme.typography.fontWeightRegular
            }
            fontSize={theme.typography.large}
          >
            Home
          </Typography>
        </Box>
        <Box
          display={"flex"}
          onClick={() => setSelected("Explore")}
          sx={{ cursor: "pointer" }}
          marginTop={5}
          alignItems={"center"}
        >
          <img
            src={selected === "Explore" ? selectedExplore : notSelectedExplore}
            alt="explore"
            width={24}
          ></img>
          <Typography
            sx={{ marginLeft: 2, display: { xs: "none", sm: "block" } }}
            fontFamily={theme.typography.fontFamily}
            fontWeight={
              selected === "Explore"
                ? selectedTheme.typography.fontWeightBold
                : selectedTheme.typography.fontWeightRegular
            }
            fontSize={theme.typography.large}
          >
            Explore
          </Typography>
        </Box>
        <Box
          display={"flex"}
          onClick={() => setSelected("Messages")}
          sx={{ cursor: "pointer" }}
          marginTop={5}
          alignItems={"center"}
        >
          <img
            src={selected === "Messages" ? selectedMessage : notSelectedMessage}
            alt="messages"
            width={24}
          ></img>
          <Typography
            sx={{ marginLeft: 2, display: { xs: "none", sm: "block" } }}
            fontFamily={theme.typography.fontFamily}
            fontWeight={
              selected === "Messages"
                ? selectedTheme.typography.fontWeightBold
                : selectedTheme.typography.fontWeightRegular
            }
            fontSize={theme.typography.large}
          >
            Message
          </Typography>
        </Box>
        <Box
          display={"flex"}
          onClick={() => setSelected("Profile")}
          sx={{ cursor: "pointer" }}
          marginTop={5}
          alignItems={"center"}
        >
          <img
            src={selected === "Profile" ? selectedProfile : notSelectedProfile}
            alt="profile"
            width={24}
          ></img>
          <Typography
            sx={{ marginLeft: 2, display: { xs: "none", sm: "block" } }}
            fontFamily={theme.typography.fontFamily}
            fontWeight={
              selected === "Profile"
                ? selectedTheme.typography.fontWeightBold
                : selectedTheme.typography.fontWeightRegular
            }
            fontSize={theme.typography.large}
          >
            Profile
          </Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: "100%",
          borderRadius: 8,
          bgcolor: colors.primarymain,
          marginTop: 5,
          fontFamily: theme.typography.fontFamily,
          textTransform: "none",
          fontSize: theme.typography.medium,
          "&:hover": {
            backgroundColor: colors.primarydark,
          },
        }}
      >
        Tweet
      </Button>
    </Box>
  );
}

export default Navbar;
