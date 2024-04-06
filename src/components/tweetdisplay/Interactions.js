import { Box } from "@mui/material";
import React, { useState } from "react";
import colors from "../../utils/design/Colors";
import theme from "../../utils/design/themes/Theme";
import { likePost, retweetPost } from "../../store/ExampleApi";

function Interactions({ likes, retweets, comments, tweetId }) {
  const [likeCount, setLikeCount] = useState(likes.length);
  const [retweetCount, setRetweetCount] = useState(retweets.length);
  const [commentCount, setCommentCount] = useState(comments.length);
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
      likePost(tweetId).then((response) => console.log(response));
    }
    setLiked(!liked);
  };

  const handleRetweet = () => {
    if (retweeted) {
      setRetweetCount(retweetCount - 1);
    } else {
      setRetweetCount(retweetCount + 1);
      retweetPost(tweetId).then((response) => console.log(response));
    }
    setRetweeted(!retweeted);
  };

  return (
    <Box>
      <Box display={"flex"} marginTop={2} marginBottom={5}>
        <Box display={"flex"} alignItems={"center"}>
          <svg
            width="18px"
            height="auto"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: 20 }}
          >
            <path
              d="M18.9 0H2.1C0.945 0 0 0.99 0 2.2V22L4.2 17.6H18.9C20.055 17.6 21 16.61 21 15.4V2.2C21 0.99 20.055 0 18.9 0ZM17.85 15.4H4.2L2.1 17.6V3.3C2.1 2.695 2.5725 2.2 3.15 2.2H17.85C18.4275 2.2 18.9 2.695 18.9 3.3V14.3C18.9 14.905 18.4275 15.4 17.85 15.4Z"
              fill={colors.greytext}
            />
          </svg>
          <Box
            marginRight={"10px"}
            fontSize={theme.typography.medium}
            fontWeight={400}
            sx={{ color: colors.greytext }}
          >
            {commentCount}
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          marginLeft={2}
          onClick={handleRetweet}
        >
          <svg
            width="18px"
            height="auto"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: 20 }}
          >
            <path
              d="M3.99996 5H14V6.79C14 7.24 14.54 7.46 14.85 7.14L17.64 4.35C17.84 4.15 17.84 3.84 17.64 3.64L14.85 0.850002C14.54 0.540002 14 0.760002 14 1.21V3H2.99996C2.44996 3 1.99996 3.45 1.99996 4V8C1.99996 8.55 2.44996 9 2.99996 9C3.54996 9 3.99996 8.55 3.99996 8V5ZM14 15H3.99996V13.21C3.99996 12.76 3.45996 12.54 3.14996 12.86L0.359961 15.65C0.159961 15.85 0.159961 16.16 0.359961 16.36L3.14996 19.15C3.45996 19.46 3.99996 19.24 3.99996 18.79V17H15C15.55 17 16 16.55 16 16V12C16 11.45 15.55 11 15 11C14.45 11 14 11.45 14 12V15Z"
              fill={retweeted ? colors.green : colors.greytext}
            />
          </svg>
          <Box
            marginRight={"10px"}
            fontSize={theme.typography.medium}
            fontWeight={400}
            sx={{ color: retweeted ? colors.green : colors.greytext}}
          >
            {retweetCount}
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          marginLeft={2}
          onClick={handleLike}
        >
          <svg
            width="18px"
            height="auto"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: 20 }}
          >
            <path
              d="M17.66 0.989998C15.02 -0.810002 11.76 0.0299981 9.99997 2.09C8.23997 0.0299981 4.97997 -0.820002 2.33997 0.989998C0.939969 1.95 0.0599691 3.57 -3.09171e-05 5.28C-0.140031 9.16 3.29997 12.27 8.54997 17.04L8.64997 17.13C9.40997 17.82 10.58 17.82 11.34 17.12L11.45 17.02C16.7 12.26 20.13 9.15 20 5.27C19.94 3.57 19.06 1.95 17.66 0.989998ZM10.1 15.55L9.99997 15.65L9.89997 15.55C5.13997 11.24 1.99997 8.39 1.99997 5.5C1.99997 3.5 3.49997 2 5.49997 2C7.03997 2 8.53997 2.99 9.06997 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"
              fill={liked ? colors.red : colors.greytext}
            />
          </svg>
          <Box
            fontSize={theme.typography.medium}
            fontWeight={400}
            sx={{ color: liked ? colors.red : colors.greytext}}
          >
            {likeCount}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Interactions;
