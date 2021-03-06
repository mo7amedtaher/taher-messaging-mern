import React from "react";

import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  MoreVert,
  SearchOutlined,
  AttachFile,
  InsertEmoticon,
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h5>Room Name</h5>
          <p>last seen at ....</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Mohamed</span>
          this is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message chat__reciever">
          <span className="chat__name">Mohamed</span>
          this is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message">
          <span className="chat__name">Mohamed</span>
          this is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit">send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
