import React, { useState } from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import ChatInput from "./ChatInput";
import PersonIcon from "@material-ui/icons/Person";
import Messages from "./Messages";

function Chat(props) {
  const [flag, setFlag] = useState("");

  console.log(props);
  const chatName = props.match.params.name;
  const chatId = parseInt(props.match.params.id);
  const path = props.match.path;
  const isGroup = /group/.test(path);
  const receiver_class = isGroup ? "Channel" : "User";

  function changeFlag() {
    setFlag(generateString());
  }

  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <PersonIcon />
          <strong>{chatName}</strong>
          <StarBorderOutlinedIcon />
        </HeaderLeft>
      </Header>
      <Messages
        receiver_id={chatId}
        receiver_class={receiver_class}
        flag={flag}
      />
      <ChatInput
        receiver_id={chatId}
        receiver_class={receiver_class}
        changeFlag={changeFlag}
      />
    </ChatContainer>
  );
}

export default Chat;

//from stackOverFlow
function generateString() {
  return Math.random().toString(20).substr(2, 6);
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 20px; */
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;

  > strong {
    margin-inline: 1rem;
  }
`;

const ChatContainer = styled.div`
  grid-area: 2/2/3/3;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
