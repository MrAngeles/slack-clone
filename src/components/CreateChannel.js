import React, { useContext, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { userContext } from "../context/userContext";
import { Link } from "react-router-dom";
// import { Button } from "@material-ui/core";

// const loggedInUser = {
//   "access-token": "g3c29Tkg2MS23vDdiPiDeQ",
//   client: "tdluJrvdfrqEmGV_nCLpvQ",
//   expiry: 1626966033,
//   uid: "m1@m.com",
//   id: 31,
// };

function CreateChannel() {

  const loggedInUser = useContext(userContext).userDetails[0];
  const  usersLists = useContext(userContext).usersLists[0];

  console.log(usersLists)

  const [name, setName] = useState("");

  const config = {
    method: "post",
    url: "http://206.189.91.54//api/v1/channels",
    headers: {
      "content-type": "application/json",
      ...loggedInUser
    },
    data: {
      name: name,
      user_ids: [31]
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        // usersLists()
      })
      .catch(error => {
        console.log(error);
      });
  };

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <AddChannelContainer>
        <form onSubmit={handleSubmit}>
          <AddChannelInputContainer>
            <input
              text="text"
              onChange={handleNameChange}
              value={name}
              placeholder="Enter Channel:"
              id="channel"
              autoComplete="off"
            />
          </AddChannelInputContainer>
          <AddChannelButton>
            <Link to="/add-member"><button type="submit">submit</button></Link>
          </AddChannelButton>
          {/* <ChannelList /> */}
        </form>
      </AddChannelContainer>
    </>
  );
}

export default CreateChannel;

const AddChannelContainer = styled.div``;

const AddChannelButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;

  >a {
    > button {
      width: 15vh;
      padding: 10px 0px 10px 0px;
      border-radius: 5px;
      cursor: pointer;
      background-color: var(--slack-color);
      color: white;
    }
  }
 
`;

const AddChannelInputContainer = styled.div`
  > input {
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #757575;
    margin: 10px;
    margin-left: 0;
  }

  input:focus {
    outline: none;
  }
`;
