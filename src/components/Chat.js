import React, { useState, useContext } from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
// import { useSelector } from "react-redux";
// import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
// import { useCollection, useDocument } from "react-firebase-hooks/firestore";
// import { db } from "../firebase";
// import UserContext from "../features/appSlice";
import Message from "./Message";
import axios from "axios";
import GroupIcon from "@material-ui/icons/Group";

const loggedInUser = {
  "access-token": "g3c29Tkg2MS23vDdiPiDeQ",
  client: "tdluJrvdfrqEmGV_nCLpvQ",
  expiry: 1626966033,
  uid: "m1@m.com",
  id: 31,
};

function Chat() {
  // const { userDetails, userListHeaders } = useContext(UserContext);
  var userInfo = JSON.parse(sessionStorage.user);
  console.log(userInfo);

  // const [sendMessage, setSendMessage] = useState("");

  const getMessage = () => {
    axios
      .get("http://206.189.91.54//api/v1/messages", {
        headers: {
          "Content-Type": "application/json",
          ...loggedInUser,
        },
        params: {
          // sender_id: userDetails[0].id || "",
          sender_id: 1,
          receiver_class: 1,
          receiver_id: "user",
        },
        // "access-token": "haXWCLr264GN4T2F5qSSug",
        // client: "_690jUPp79Ik24mMmKlQJA",
        // expiry: "1626789364",
        // uid: "user1@example.com",
      })
      .then((response) => response)
      .then((result) => console.log(result))
      .catch((error) => error);
  };

  const retrieveMessageRequest = {
    // "access-token": userListHeaders["access-token"],
    // client: userListHeaders.client,
    // expiry: userListHeaders.expiry,
    // uid: userListHeaders.uid,
    // sender_id: userDetails[0].id || "",
    sender_id: 1,
    receiver_class: 1,
    receiver_id: "user",
  };

  const retrieveMessageHandler = () => {
    const data = getMessage(retrieveMessageRequest);
    console.log(data);
    getMessage();
  };

  return (
    <ChatContainer>
      {/* {roomDetails && roomMessages && ( */}
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>
                <GroupIcon />
                {/* {roomDetails?.data().name} */}
              </strong>
            </h4>
            <StarBorderOutlinedIcon />
          </HeaderLeft>

          <HeaderRight>
            <p>
              <InfoOutlinedIcon /> Details
            </p>
          </HeaderRight>
        </Header>

        <ChatMessages>
          {/* {getMessage?.docs.map((doc) => {
            const { message, timestamp, user, userImage } = doc.data(); */}

          {/* return ( */}
          <button onClick={retrieveMessageHandler()}></button>
          <Message

          // key={doc.id}
          // message={message}
          // timestamp={timestamp}
          // user={user}
          // userImage={userImage}
          // onChange={handleSendMessageChange}
          />

          {/* ); */}
          {/* })} */}
          <ChatBottom ref={Chat} />
        </ChatMessages>

        <ChatInput
        //Channel Name
        // chatRef={Chat}
        // channelName={getMessage?.data().name}
        // channelId={Chat}
        />
      </>
      {/* )} */}
    </ChatContainer>
  );
}

export default Chat;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const ChatMessages = styled.div``;

const HeaderLeft = styled.div`
  display: flex;
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
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-top: -10px !important;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
    margin-top: 0px !important;
  }
`;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
