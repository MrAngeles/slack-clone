import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components";

const loggedInUser = {
  "access-token": "g3c29Tkg2MS23vDdiPiDeQ",
  client: "tdluJrvdfrqEmGV_nCLpvQ",
  expiry: 1626966033,
  uid: "m1@m.com",
  id: 31,
};

const url = "http://206.189.91.54//api/v1/users/recent",
function Dm({ channelName, channelId, chatRef }) {
  const [message, setMessage] = useState("");

  var config = {
    method: "get",
    url: "http://206.189.91.54//api/v1/users/recent",
    headers: {
      "access-token": "REfZHYilSeuSfFnk2U4AWg",
      client: "ZV26weM0OfDXIYTLuf2nSA",
      expiry: "1627305480",
      uid: "user1@example.com",
    },
    data: data,
  };

  axios(config)
  loginUser(data)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  return <div></div>;
}

export default Dm;
