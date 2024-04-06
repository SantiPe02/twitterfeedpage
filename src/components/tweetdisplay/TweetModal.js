import {
  Avatar,
  Box,
  Button,
  IconButton,
  Input,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import closeIcon from "../../utils/resources/icons/close_icon.png";
import theme from "../../utils/design/themes/Theme";
import colors from "../../utils/design/Colors";
import { timeFormater } from "../../utils/timeFormatter";
import { titleTheme } from "../../utils/design/themes/TitleTheme";

function TweetModal({ open, onClose, tweet }) {
  const author = tweet.author;
  const content = tweet.content;
  const images = tweet.images;

  const [reply, setReply] = useState("");

  const isButtonDisabled = reply === "";

  const handleReply = (event) => {
    setReply(event.target.value);
  };

  const handleCloseModal = () => {
    onClose();
  };

  const modalStyle = {
    position: "absolute",
    bgcolor: "background.paper",
    maxWidth: "560px",
    maxHeight: "600px",
    boxShadow: 24,
    p: 2,
    borderRadius: 3,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: 5,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#555",
      borderRadius: 8,
    },
  };

  return (
    <div>
      <Modal open={open} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          <IconButton onClick={handleCloseModal}>
            <img src={closeIcon} alt="close" />
          </IconButton>
          <Box padding={2}>
            <Box display={"flex"} alignItems={"center"} marginBottom={2}>
              <Avatar
                src={author.profilePicture}
                sx={{ marginRight: "10px", width: "48px", height: "48px" }}
              ></Avatar>
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
            <Typography>{content}</Typography>
            {images.map((image, index) => (
              <Box
                key={index}
                sx={{ width: "514px", height: "auto" }}
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
          <Box display={"flex"} alignItems={"center"} marginTop={2}>
            <Avatar
              sx={{ marginRight: "10px", width: "48px", height: "48px" }}
            ></Avatar>
            <Input
              placeholder="Tweet your reply"
              margin="normal"
              variant="standard"
              fullWidth
              inputProps={{
                style: {
                  fontSize: titleTheme.typography.medium,
                  fontFamily: titleTheme.typography.fontFamily,
                },
              }}
              onChange={handleReply}
              disableUnderline
            ></Input>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={3}
          >
            <svg
              width="18px"
              height="auto"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM11.14 8.86L8.14 12.73L6 10.14L3 14H15L11.14 8.86Z"
                fill={colors.primarymain}
              />
            </svg>
            <Button
              variant="contained"
              sx={{
                borderRadius: 8,
                bgcolor: colors.primarymain,
                "&:disabled": {
                  backgroundColor: colors.primarylight,
                  color: "white",
                },
                "&:hover": {
                  backgroundColor: colors.primarydark,
                },
                fontFamily: theme.typography.fontFamily,
                textTransform: "none",
                fontSize: theme.typography.medium,
              }}
              onClick={handleCloseModal}
              disabled={isButtonDisabled}
            >
              Tweet
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default TweetModal;
