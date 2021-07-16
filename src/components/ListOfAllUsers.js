import React, { useState, useEffect } from "react";
import SidebarLink from "./SidebarLink";

function ListAllUsers() {
  let userInfo = JSON.parse(sessionStorage.user);

  const [allUsers, setAllUsers] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: userInfo
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

export default ListAllUsers;
