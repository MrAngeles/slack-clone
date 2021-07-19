import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { userContext } from "../context/userContext";

const AllDms = props => {
  const loggedInUser = useContext(userContext).userDetails[0];

  const [dms, setDms] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  console.log(dms);

  useEffect(() => {
    console.log("runs");
    const requestOptions = {
      method: "GET",
      headers: loggedInUser
    };

    fetch(
      `http://206.189.91.54//api/v1/messages?receiver_class=${props.receiver_class}&receiver_id=${props.receiver_id}`,
      requestOptions
    )
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
        // console.log(dms);
      })
      .catch(error => {
        setIsPending(false);
        setError(error);
      });
  }, [props.receiver_id, props.flag]);

  return (
    <Sdiv>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {!isPending &&
        dms.map(dm => (
          <Mdiv key={dm.id}>
            <p>{dm.body}</p>
          </Mdiv>
        ))}
    </Sdiv>
  );
};

export default AllDms;

const Sdiv = styled.div`
  box-sizing: border-box;
  /* background: red; */
  width: 100%;
  padding: 0.4rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
`;

const Mdiv = styled.div`
  padding: 0.3rem 0.5rem;
  display: block;
  background: violet;
  margin: 0.5rem;
  border-radius: 5px;
`;
