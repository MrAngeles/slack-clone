import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userContext } from "../context/userContext";

const AllDms = () => {
    const loggedInUser = useContext(userContext)[0];
  
  const [dms, setDms] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  console.log(dms);

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
          const dms = data.data
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

export default AllDms

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
