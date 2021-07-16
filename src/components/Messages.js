import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      headers: loggedInUser,
    };

    fetch(
      `http://206.189.91.54//api/v1/messages?receiver_class=User&receiver_id=1`,
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        const dms = data.data;
        setDms(dms);
        setIsPending(false);
        // console.log(dms);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error);
      });
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {!isPending &&
        dms.map((dm) => (
          <div key={dm.id}>
            <p>{dm.body}</p>
          </div>
        ))}
    </div>
  );
};

export default AllDms;
