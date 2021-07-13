import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";
import GroupIcon from "@material-ui/icons/Group";

function Chat() {
  // const chatRef = useRef(null);
  // const roomId = useSelector(selectRoomId);
  // const [roomDetails] = useDocument(
  //   roomId && db.collection("rooms").doc(roomId)
  // );
  // const [roomMessages, loading] = useCollection(
  //   roomId &&
  //     db
  //       .collection("rooms")
  //       .doc(roomId)
  //       .collection("messages")
  //       .orderBy("timestamp", "asc")
  // );

  // useEffect(() => {
  //   chatRef?.current?.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // }, [roomId, loading]);

  return (
    <ChatContainer>
      {/* {roomDetails && roomMessages && ( */}
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>
                  <GroupIcon />
                  {roomDetails?.data().name}
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
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();

              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>

          <ChatInput
            //Channel Name
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
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
