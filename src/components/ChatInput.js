import React, { useRef, useState } from "react";
import styled from "styled-components";
// import { Button } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import SendIcon from "@material-ui/icons/Send";
// import { auth, db } from "../firebase";
// import firebase from "firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");
  //   const [user] = useAuthState(auth);
  const url = "http://206.189.91.54//api/v1/messages";
  const [user, setUser] = useState({
    receiver_id: "",
    receiver_class: "",
    body: "",
  });

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        receiver_id: user.receiver_id,
        // parseInt(user.receiver_id),
        receiver_class: user.receiver_class,
        body: user.body,
      })
      // axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   const sendMessage = ({
  //     receiver_id,
  //     receiver_class,
  //     body,
  //     headers: { token, client, expiry, uid },
  //   }) => {
  const sendMessage = (e) => {
    // e.preventDefault();
    const newChat = { ...user };
    newChat[e.target.id] = e.target.value;
    setUser(newChat);
    console.log(newChat);

    // //POST
    // axios
    //   .post(
    //     "http://206.189.91.54//api/v1/messages",
    //     {
    //       receiver_id,
    //       receiver_class,
    //       body,
    //     },
    //     {
    //       headers: {
    //         "access-token": token,
    //         client: client,
    //         expiry: expiry,
    //         uid: uid,
    //       },
    //     }
    //   )
    //   .then((response) => response)
    //   .then((result) => result)
    //   .catch((error) => error);

    // const sendMessage = ({
    //   receiver_id,
    //   receiver_class,
    //   body,
    //   headers: { token, client, expiry, uid },
    // }) => {

    // var config = {
    //   method: "post",
    //   url: "http://206.189.91.54//api/v1/messages",
    //   headers: {
    //     "access-token": "haXWCLr264GN4T2F5qSSug",
    //     client: "_690jUPp79Ik24mMmKlQJA",
    //     expiry: "1626789364",
    //     uid: "user1@example.com",
    //   },
    //   data: data,
    // };

    // var data = {
    //   receiver_id: user.id,
    //   receiver_class: user.class,
    //   body: user.body,
    // };

    // axios(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //GET
    const retrieveMessage = () => {
      var config = {
        method: "get",
        url: "http://206.189.91.54//api/v1/messages?receiver_class=User&receiver_id=1",
        headers: {
          "access-token": "haXWCLr264GN4T2F5qSSug",
          client: "_690jUPp79Ik24mMmKlQJA",
          expiry: "1626789364",
          uid: "user1@example.com",
        },
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    };

    ////////////////////////////////////////////////////////////////////////////////////
    // if (!channelId) {
    //   return false;
    // }

    // db.collection("rooms").doc(channelId).collection("messages").add({
    //   message: input,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   user: user.displayName,
    //   userImage: user.photoURL,
    // });
    ////////////////////////////////////////////////////////////////////////////////////
    //GET
    const getMessage = ({
      receiver_id,
      receiver_class,
      headers: { token, client, expiry, uid },
    }) => {
      return axios
        .get("http://206.189.91.54//api/v1/messages", {
          headers: {
            "access-token": token,
            client: client,
            expiry: expiry,
            uid: uid,
          },
          params: {
            receiver_id,
            receiver_class,
          },
        })
        .then((response) => response)
        .then((result) => result)
        .catch((error) => error);
    };

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };
  //   const retrieveChangeHandler = (e) => {
  //     const newChat = { ...user };
  //     newChat[e.target.id] = e.target.value;
  //     setUser(newChat);
  //   };

  return (
    <ChatContainer>
      <form onSubmit={(e) => submit(e)}>
        <ChatInputContainer>
          <input
            value={input}
            onChange={(e) => sendMessage(e)}
            id="body"
            value={user.body}
            // id="receiver_id"
            // value={user.receiver_id}
            autoComplete="off"
            placeholder={`Message <LockIcon/> ${channelName} `}
          />
        </ChatInputContainer>
        <ChatButtonContainer>
          <button type="submit" onClick={sendMessage}>
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
