import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UserChannel = () => {
  const loggedInUser = {
    "access-token": "g3c29Tkg2MS23vDdiPiDeQ",
    client: "tdluJrvdfrqEmGV_nCLpvQ",
    expiry: 1626966033,
    uid: "m1@m.com",
    id: 31
  };

  const [channels, setChannels] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  console.log(dms);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: loggedInUser
    };

    fetch(`http://206.189.91.54//api/v1/channel/owned`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return response.json();
      })
      .then(data => {
          const channels = data.data
          setChannels(channels);
          setIsPending(false);
          console.log(data);
      })
      .catch(error => {
        // setIsPending(false);
        // setError(error);
      });
  }, []);

  return (
     
            <StyledDMsContainer>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {!isPending &&
                    dms.map((dm) => (
                        <StyledDMs key={dm.id}>
                            <Link to={`/dm/${dm.id}/${dm.uid}`}>{dm.uid}
                            </Link>
                        </StyledDMs>
                    ))}
            </StyledDMsContainer>
              
  );
};

export default UserChannel

const StyledDMsContainer= styled.div `
    display: flex;
    flex-direction: column;
    text-decoration: 'none';
    
`;

const StyledDMs = styled.div `
    display: flex;
    padding-bottom: 1em;
    & div{
      text-decoration: 'none';
    }
`;
