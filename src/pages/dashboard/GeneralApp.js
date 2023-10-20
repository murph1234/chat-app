import React from "react";
import Chats from "./Chats";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Conversation from "../../components/Conversation";
import { useTheme } from "@emotion/react";
const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw-420px)",
          backgroundColor:
          theme.palette.mode==="light" ? "#F0F4FA" : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
