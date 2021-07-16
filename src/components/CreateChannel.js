import React, { useState } from "react";
import axios from "axios";
import ChannelList from "./ChannelList";

const loggedInUser = {
  "access-token": "g3c29Tkg2MS23vDdiPiDeQ",
  client: "tdluJrvdfrqEmGV_nCLpvQ",
  expiry: 1626966033,
  uid: "m1@m.com",
  id: 31,
};

function CreateChannel() {
  const [name, setName] = useState("");

  const config = {
    method: "post",
    url: "http://206.189.91.54//api/v1/channels",
    headers: {
      "content-type": "application/json",
      ...loggedInUser,
    },
    data: {
      name: name,
      user_ids: [31],
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

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          text="text"
          onChange={handleNameChange}
          value={name}
          placeholder="Enter Channel"
          id="channel"
          autoComplete="off"
        />
        <button type="submit">submit</button>
        <ChannelList />
      </form>
    </>
  );
}

export default CreateChannel;
