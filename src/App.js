import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Chat from "./components/Chat";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "./firebase";
import Login from "./components/Login";
import Registration from "./components/Registration";
// import Spinner from "react-spinkit";
//does it work?

function App() {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [register, setRegister] = useState(false);

  // if (login){
  //   return (
  //     <AppLoading>
  //         <AppLoadingContents>
  //             <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt=""
  //             />

  //             <Spinner
  //               name="ball-spin-fade-loader"
  //               color="purple"
  //               fadeIn="none"
  //             />
  //         </AppLoadingContents>
  //     </AppLoading>
  //   )
  // }
  return (
    <div className="app">
      <Router>
        {register ? (
          <Route>
            <Registration setRegister={setRegister} />
          </Route>
        ) : !login ? (
          <Route>
            <Login
              path="/login"
              exact
              setRegister={setRegister}
              setLogin={setLogin}
            />
          </Route>
        ) : (
          <>
            <Header setLogin={setLogin} />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route>
                  <Chat path="/chat" exact />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

// const AppLoading = styled.div`
//   display: grid;
//   place-items: center;
//   height: 100vh;
//   width: 100%;

// `;

// const AppLoadingContents = styled.div`
//   text-align: center;
//   padding-bottom: 100px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   > img {
//     height: 100px;
//     padding: 20px;
//     margin-bottom: 40px;
//   }
// `;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
