import React, { useState, useEffect, useContext } from "react";
import SidebarLink from "./SidebarLink";
import { userContext } from "../context/userContext";

function ListOfAllUsers() {
  const loggedInUser = useContext(userContext).userDetails[0];
  const usersListContext = useContext(userContext).usersLists[1];

  const [allUsers, setAllUsers] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: loggedInUser
    };

    fetch(`http://206.189.91.54//api/v1/users`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return response.json();
      })
      .then(data => {
        setAllUsers(data);
        usersListContext(data)
        setIsPending(false);
        setError(null);
      })
      .catch(error => {
        setIsPending(false);
        setError(error);
      });
  }, [allUsers]);

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {!isPending &&
        allUsers.data.map((user, index) => (
          <div key={index}>
            <SidebarLink
              title={user.email}
              id={user.id}
              to={`/all-users/${user.id}/${user.email}`}
            />
          </div>
        ))}
    </div>
  );
}

export default ListOfAllUsers;
