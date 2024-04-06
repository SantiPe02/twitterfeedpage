import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import theme from "../../utils/design/themes/Theme";
import colors from "../../utils/design/Colors";
import tweets from "../../utils/resources/tweets.json";
import Tweet from "./Tweet";
import { titleTheme } from "../../utils/design/themes/TitleTheme";

function Home() {
  const [selectedSection, setSelectedSection] = useState("For you");

  return (
    console.log(tweets),
    (
      <Box width={"35%"}>
        <Box
          sx={{
            border: "1px solid #f0f0f0",
            paddingTop: "10px",
            paddingLeft: "10px",
          }}
        >
          <Box height={"53px"}>
            <Typography
              fontFamily={titleTheme.typography.fontFamily}
              fontSize={theme.typography.large}
              fontWeight={700}
            >
              Home
            </Typography>
          </Box>
          <Box
            display={"flex"}
            height={"57px"}
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Button
              variant="text"
              sx={{
                color:
                  selectedSection === "For you"
                    ? colors.black
                    : colors.greytext,
                borderBottom: selectedSection === "For you" && "2px solid",
                borderColor: colors.primarymain,
                fontFamily: theme.typography.fontFamily,
                fontSize: theme.typography.medium,
                borderRadius: 0,
                height: "100%",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => setSelectedSection("For you")}
            >
              For you
            </Button>
            <Button
              variant="text"
              sx={{
                color:
                  selectedSection === "For you"
                    ? colors.greytext
                    : colors.black,
                borderBottom: selectedSection === "Following" && "2px solid",
                borderColor: colors.primarymain,
                fontFamily: theme.typography.fontFamily,
                fontSize: theme.typography.medium,
                borderRadius: 0,
                height: "100%",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => setSelectedSection("Following")}
            >
              Following
            </Button>
          </Box>
        </Box>
        {tweets.map((tweet) => (
          <Box
            sx={{
              borderBottom: "1px solid #f0f0f0",
              borderRight: "1px solid #f0f0f0",
              borderLeft: "1px solid #f0f0f0",
            }}
          >
            <Tweet tweet={tweet} />
          </Box>
        ))}
      </Box>
    )
  );
}

export default Home;
