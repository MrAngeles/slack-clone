import React, { useState } from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
import axios from "axios";

const loggedInUser = {
  "access-token": "g3c29Tkg2MS23vDdiPiDeQ",
  client: "tdluJrvdfrqEmGV_nCLpvQ",
  expiry: 1626966033,
  uid: "m1@m.com",
  id: 31,
};
const url = "http://206.189.91.54//api/v1/messages";

function ChatInput({ channelName, channelId, chatRef }) {
  const [message, setMessage] = useState("");

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  const config = {
    method: "post",
    url,
    headers: {
      "content-type": "application/json",
      ...loggedInUser,
    },
    data: {
      receiver_id: 1,
      receiver_class: "User",
      body: message,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ChatContainer>
      <form onSubmit={handleSubmit}>
        <ChatInputContainer>
          <input
            onChange={handleMessageChange}
            id="body"
            value={message}
            autoComplete="off"
            placeholder={`Send message to ${channelName}`}
          />
        </ChatInputContainer>
        <ChatButtonContainer>
          <button type="submit">
            <SendIcon />
          </button>
        </ChatButtonContainer>
      </form>
    </ChatContainer>
  );
}
// }

export default ChatInput;

const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row !important;
  margin-top: 465px !important;
`;
const ChatButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > button {
    position: relative;
    right: -4%;
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
    margin-bottom: -20px;
    > .MuiSvgIcon-root {
      font-size: 36px !important;
    }
    :hover {
      color: gray;
    }
  }
`;

const ChatInputContainer = styled.div`
  margin-bottom: -60px;

  > input {
    font-size: 18px;
    padding: 20px 10px 20px 5px;
    width: 140vh;
    margin: 10px;
    margin-left: 50px;
    border: 1px solid black;
    border-radius: 5px;
  }
`;
