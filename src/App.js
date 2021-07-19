import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import styled from "styled-components";
import Login from "./components/Login";
import Registration from "./components/Registration";
import CreateChannel from "./components/CreateChannel";
// import Main from "./components/Main";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Home from "./components/Home";
import ListOfAllUsers from "./components/ListOfAllUsers";
import { userContext } from "./context/userContext";
import { getUser } from "./Utils/Common";
import AllDms from "./components/AllDms";
import UserChannel from "./components/UserChannel";
import AddMember from "./components/AddMember";

//first render
function App() {
  const [isLoading, setLoading] = useState(true); //initial
  const [contextUser, setContextUser] = useContext(userContext).userDetails;
  const history = useHistory();

  useEffect(() => {
    const sessionUser = getUser(); //get user sa storage
    if (sessionUser) {
      setContextUser(sessionUser); //user sa storage --> set to global state
      setLoading(false); //change state
    } else {
      setLoading(false);
      history.push("/login");
    }
  }, []);

  if (isLoading) {
    return <div>...loading</div>;
  }

  return (
    <StyledApp>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
      </Switch>
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/add-channel" component={CreateChannel} />
        <Route path="/add-member" component={AddMember} />
        <Route path="/all-dms" component={AllDms} />
        <Route path="/group/:id/:name" component={Chat} />
        <Route path="/dm/:id/:name" component={Chat} />
        <Route path="/owned-channels" component={UserChannel}/>
        {/* <Route path="/dm" component={ListOfAllUsers}/> */}
        <Route path="/" component={Home} exact />
      </Switch>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template: auto 1fr / auto 1fr;
`;
