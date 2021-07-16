import React, { useContext } from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import ChatInput from "./ChatInput";
import { userContext } from "../context/userContext";
import PersonIcon from "@material-ui/icons/Person";
import axios from "axios";
import Messages from "./Messages";

// const loggedInUser = {
//   "access-token": "g3c29Tkg2MS23vDdiPiDeQ",
//   client: "tdluJrvdfrqEmGV_nCLpvQ",
//   expiry: 1626966033,
//   uid: "m1@m.com",
//   id: 31,
// };

const url =
  "http://206.189.91.54//api/v1/messages?receiver_class=User&receiver_id=1";

function Chat(props) {
  const loggedInUser = useContext(userContext)[0];
  const state = useContext(userContext)[0];
  console.log(props);
  const channelName = props.match.params.name;
  const channelId = props.match.params.id;

  const config = {
    method: "get",

    url,
    headers: {
      "content-type": "application/json",
      ...loggedInUser,
      params: {
        receiver_id: 1,
        receiver_class: "User",
        sender_idy: 1,
      },
    },
  };

  const retreiveMessageHandler = () => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    Chat();
  };

  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <PersonIcon />
          <strong>{channelName}</strong>
          <StarBorderOutlinedIcon />
        </HeaderLeft>
      </Header>
      <Messages />
      <ChatInput />
    </ChatContainer>
  );
}

export default Chat;

// const ChatBottom = styled.div`
//   padding-bottom: 200px;
// `;

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
