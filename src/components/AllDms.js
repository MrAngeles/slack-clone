import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllDms = () => {
  const loggedInUser = {
    "access-token": "g3c29Tkg2MS23vDdiPiDeQ",
    client: "tdluJrvdfrqEmGV_nCLpvQ",
    expiry: 1626966033,
    uid: "m1@m.com",
    id: 31
  };

  const [dms, setDms] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: loggedInUser
    };

    fetch(`http://206.189.91.54//api/v1/users/recent`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return response.json();
      })
      .then(data => {
        const dms = data.data;
        setDms(dms);
        setIsPending(false);
        console.log(dms);
      })
      .catch(error => {
        // setIsPending(false);
        // setError(error);
      });
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {!isPending &&
        dms.map(dm => (
          <div key={dm.id}>
            <Link to={`/dm/${dm.id}/${dm.uid}`}>{dm.uid}</Link>
          </div>
        ))}
    </div>
  );
};

export default AllDms;
