import { Avatar, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import theme from "../../utils/design/themes/Theme";
import colors from "../../utils/design/Colors";
import { timeFormater } from "../../utils/timeFormatter";
import Interactions from "./Interactions";
import TweetModal from "./TweetModal";

function Tweet({ tweet }) {
  const author = tweet.author;
  const content = tweet.content;
  const images = tweet.images;
  const likes = tweet.reactions.filter((reaction) => reaction.type === "LOVE");
  const retweets = tweet.reactions.filter(
    (reaction) => reaction.type === "RETWEET"
  );
  const comments = tweet.comments;
  const [isTweetModalOpen, setIsTweetModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsTweetModalOpen(true);
  };
  const handleCloseTweetModal = () => setIsTweetModalOpen(false);

  return (
    <Box display={"flex"} sx={{ padding: 2, cursor: "pointer" }}>
      <Avatar
        src={author.profilePicture}
        sx={{ marginRight: "10px", width: "48px", height: "48px" }}
      ></Avatar>
      <Box>
        <Box onClick={handleOpenModal}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box display={"flex"} alignItems={"center"}>
              <Typography
                fontSize={theme.medium}
                sx={{ marginRight: "10px" }}
                fontWeight={600}
                fontFamily={theme.typography.fontFamily}
              >
                {author.firstName}
              </Typography>
              <Typography
                color={colors.greytext}
                fontSize={theme.medium}
                fontFamily={theme.typography.fontFamily}
              >
                @{author.username}
              </Typography>
              <Typography
                style={{
                  fontSize: "15px",
                  margin: "0 5px",
                  color: colors.greytext,
                }}
              >
                •
              </Typography>
              <Typography
                color={colors.greytext}
                fontSize={theme.medium}
                fontFamily={theme.typography.fontFamily}
              >
                {timeFormater(tweet.createdAt)}
              </Typography>
            </Box>
            <Typography
              style={{
                fontSize: "25px",
                margin: "0 5px",
                color: colors.greytext,
              }}
            >
              ...
            </Typography>
          </Box>
          <Box marginBottom={2} marginTop={5}>
            <Typography
              fontSize={theme.medium}
              fontFamily={theme.typography.fontFamily}
            >
              {content}
            </Typography>
          </Box>
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{ width: "100%", height: "auto" }}
              marginTop={2}
            >
              <img
                alt=""
                src={image}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              ></img>
            </Box>
          ))}
        </Box>
        <Interactions
          likes={likes}
          retweets={retweets}
          comments={comments}
          tweetId={tweet.id}
        ></Interactions>
      </Box>
      <TweetModal
        open={isTweetModalOpen}
        onClose={handleCloseTweetModal}
        tweet={tweet}
      />
      {console.log(isTweetModalOpen)}
    </Box>
  );
}

export default Tweet;
