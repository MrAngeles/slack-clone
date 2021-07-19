import { createContext, useState } from "react";

export const userContext = createContext();

function UserProvider(props) {
  const [user, setUser] = useState(null);
  const [userslist, setUsersList] = useState(null);
  return (
    <userContext.Provider value={{
      userDetails: [user, setUser], 
      usersLists: [userslist, setUsersList]
      }}>
      {props.children}
    </userContext.Provider>
  );
}

export default UserProvider;
