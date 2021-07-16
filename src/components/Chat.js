import React, { useContext } from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import ChatInput from "./ChatInput";
import { userContext } from "../context/userContext";
import PersonIcon from "@material-ui/icons/Person";

function Chat(props) {
  const state = useContext(userContext)[0];
  console.log(props);
  const channelName = props.match.params.name;
  const channelId = props.match.params.id;
  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <PersonIcon />
          <strong>{channelName}</strong>
          <StarBorderOutlinedIcon />
        </HeaderLeft>
      </Header>
      <ChatMessages />
      <ChatInput />
    </ChatContainer>
  );
}

export default Chat;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 20px; */
  border-bottom: 1px solid lightgray;
`;

const ChatMessages = styled.div``;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;

  > strong {
    margin-inline: 1rem;
  }

  /* display: flex;
  align-items: center;
  margin-top: -20px !important;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > h4 .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
  > h4 > strong .MuiSvgIcon-root {
    margin-bottom: -7px !important;
    margin-left: 10px;
    margin-right: 5px;
  } */
`;

const ChatContainer = styled.div`
  grid-area: 2/2/3/3;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
