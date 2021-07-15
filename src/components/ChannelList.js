import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ChannelList = () => {

const loggedInUser = {
    "access-token": "g3c29Tkg2MS23vDdiPiDeQ",
    client: "tdluJrvdfrqEmGV_nCLpvQ",
    expiry: 1626966033,
    uid: "m1@m.com",
    id: 31,
};

const [channels, setChannels] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

useEffect(() => {
    const requestOptions = {
    method: 'GET',
    headers: loggedInUser,
};

fetch(`http://206.189.91.54//api/v1/channels`, requestOptions)
.then(response => {
    if (!response.ok) {
        throw Error('could not fetch the data for that resource')
    }
    return response.json();
})
.then(data => {
    setChannels(data);
    console.log(data)
    setIsPending(false);
    setError(null);
})
.catch(error => {
    setIsPending(false);
    setError(error);
})

}, [])
console.log(channels);
  return (
    <div>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { !isPending && channels.data.map((channel, index) => (
        <div className='channels-preview' key={index}>
          <div className="mychannels">
            <h5>{channel.name}</h5>
               </div>
        </div>
))
}
    </div>
  )
}

export default ChannelList;