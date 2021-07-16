import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ChannelDetails = () => {
  const { id } = useParams();
  const loggedInUser = {
    "access-token": "g3c29Tkg2MS23vDdiPiDeQ",
    client: "tdluJrvdfrqEmGV_nCLpvQ",
    expiry: 1626966033,
    uid: "m1@m.com",
    id: 31,
  };

  const [channelDetails, setChannelDetails] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    const requestOptions = {
      method: "GET",
      headers: loggedInUser,
    };

    fetch(`http://206.189.91.54//api/v1/channels/${id}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setChannelDetails(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error);
      });
  }, []);

  return (
    <div>
      {error && <h2>{error}</h2>}
      {isPending && <h2>Loading...</h2>}
      {!isPending && <h2>{channelDetails.data.name}</h2>}
    </div>
  );
};

export default ChannelDetails;
