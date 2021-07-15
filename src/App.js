import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Registration from "./components/Registration";
import CreateChannel from "./components/CreateChannel";

function App() {
  return (
    <StyledApp>
      <Router>
        <Switch>
          <Route path="/registration" component={Registration} />
          <Route path="/carl-test" component={CreateChannel} />
          <Route path="/main">
            <Header />
            {/* <AppBody> */}
            <Sidebar />
            <Chat />
            {/* </AppBody> */}
          </Route>
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template: auto 1fr / auto 1fr;
`;
