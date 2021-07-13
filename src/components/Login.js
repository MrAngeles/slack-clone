import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
// import { auth, provider } from '../firebase';
import { useHistory } from "react-router-dom";
import axios from "axios";
import { setUserSession } from "../Utils/Common";

function Login(props) {
  let history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const submit = (e) => {
    e.preventDefault();

    var data = {
      email: user.email,
      password: user.password,
    };

    var config = {
      method: "post",
      url: "http://206.189.91.54//api/v1/auth/sign_in",
      headers: {
        "Content-Type": "application/json",
        crossDomain: true,
        Accept: "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        setUserSession(response.data);
        // props.setLogin(JSON.stringify(response.data))
        history.push("/main");
      })
      .catch((error) => {
        console.log(error.response.data.errors[0]);
        setError(error.response.data.errors[0]);
        return error;
      });
  };

  const inputChangeHandler = (e) => {
    const loginUser = { ...user };
    loginUser[e.target.id] = e.target.value;
    setUser(loginUser);
    console.log(loginUser);
  };

  // const signIn = e => {
  //     e.preventDefault();
  //     auth.signInWithPopup(provider).catch((error) => alert(error.message));

  // };

  const signUpHandleClick = () => {
    history.push("/registration");
  };

  const errorStyle = {
    color: "red",
    marginBottom: "20px",
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>Sign in to the Page</h1>
        <p>Slack Project</p>
        <form onSubmit={submit} autoComplete="new-password">
          <LoginInputContainer>
            <input
              onChange={(e) => inputChangeHandler(e)}
              type="email"
              placeholder="Email"
              id="email"
              autoComplete="off"
            />
            <input
              onChange={(e) => inputChangeHandler(e)}
              type="password"
              placeholder="Password"
              id="password"
              autoComplete="off"
            />
          </LoginInputContainer>
          {error && <div style={errorStyle}>{error}</div>}
          <LoginButtonContainer>
            <Button type="submit">Sign In</Button>
            <Button onClick={signUpHandleClick}>Sign Up</Button>
          </LoginButtonContainer>
        </form>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginInputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 4vh;

  > input {
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 40vh;
    border: none;
    border-bottom: 1px solid #757575;
    margin: 10px;
  }

  input:focus {
    outline: none;
  }
`;

const LoginButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  > button {
    margin-bottom: 10px;
    width: 42vh;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
`;
