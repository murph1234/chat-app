import { Box } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import { Chat_History } from "../../data";
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from "./MsgTypes";
const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              //Timeline
              return <Timeline el={el} />;

            case "msg":
              switch (el.subtype) {
                case "img":
                  return <MediaMsg el={el}/>;
                case "doc":
                  //doc msg
                  return <DocMsg el={el} />;
                case "link":
                  //link msg
                  return <LinkMsg el={el} /> ;
                  
                case "reply":
                  //reply msg
                  return <ReplyMsg el={el}/>
                

                default:
                  return <TextMsg el={el} />;
              }
            

            default:
              return <></>;
            
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
