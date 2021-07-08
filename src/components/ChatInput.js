import React, { useRef, useState } from 'react';
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { db } from "../firebase";
import firebase from 'firebase';

function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault(); //Prevents refresh

        if (channelId) {
            return false;
        }

        db.collection("rooms").doc(channelId).collection("message").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: "Sonny"
            
        });
    };


    return <ChatInputContainer>
        <form>
            <input value={input}
            onChange={e => setInput(e.target.value)} 
            placeholder={`Message #ROOM`}/>
            <Button hidden type='submit' onClick={sendMessage}>
                SEND
            </Button>
        </form>
    </ChatInputContainer>
}

export default ChatInput;

const ChatInputContainer = styled.div``;
