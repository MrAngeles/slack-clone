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
      "Content-Type": "application/json",
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
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        onChange={handleMessageChange}
        id="body"
        value={message}
        autoComplete="off"
        placeholder={`Send message to ${channelName}`}
      />
      <StyledSubmit type="submit">
        <SendIcon />
      </StyledSubmit>
    </StyledForm>
  );
}
// }

export default ChatInput;

const StyledForm = styled.form`
  box-sizing: border-box;
  width: 100%;
  margin: 5px 10px;
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: 18px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 1rem;
`;

const StyledSubmit = styled.button`
  box-sizing: border-box;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  margin-inline: 2rem;

  > .MuiSvgIcon-root {
    font-size: 36px;
  }
  :hover {
    color: gray;
  }
`;
