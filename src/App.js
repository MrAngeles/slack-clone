import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./components/Login";
import Registration from "./components/Registration";
import CreateChannel from "./components/CreateChannel";
// import Main from "./components/Main";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Home from "./components/Home";

function App() {
  return (
    <StyledApp>
      <Router>
        <Header />
        <Sidebar />
        <Switch>
          <Route path="/registration" component={Registration} />
          <Route path="/carl-test" component={CreateChannel} />
          <Route path="/login" component={Login} />
          <Route path="/group" component={Chat} />
          <Route path="/dm" component={Chat} />
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
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
