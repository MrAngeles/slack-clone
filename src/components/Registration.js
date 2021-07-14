import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { registrationUser } from "./api/Api";

function Registration(props) {
  // const url = "http://206.189.91.54//api/v1/auth/"
  const [user, setUser] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [error, setError] = useState(null);

  let history = useHistory();

  const signInHandleClick = () => {
    // props.setRegister(false)
    history.push("/");
  };

  const submit = (e) => {
    e.preventDefault();

    var data = {
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation,
    };

    registrationUser(data)
      .then(response => {
        history.push("/");
        return response
      })
      .then((result) => console.log(result))
      .catch((response) => {
        setError(response.response.data.errors.full_messages[0])
        return response
      });
  };

  const inputChangeHandler = (e) => {
    const newUser = { ...user };
    newUser[e.target.id] = e.target.value;
    setUser(newUser);
  };

  const errorStyle = {
    color: "red",
    marginBottom: "20px",
  };


  return (
    <div>
      
        <RegistrationContainer>
          <RegistrationInnerContainer>
            <img
              src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
              alt=""
            />
            <h1>Sign up to slack</h1>
            <p>Join slack now!</p>
            <form onSubmit={submit}>
              <RegistrationInputContainer>
                <input
                  onChange={(e) => inputChangeHandler(e)}
                  type="email"
                  placeholder="Email"
                  id="email"
                />
                <input
                  onChange={(e) => inputChangeHandler(e)}
                  type="password"
                  placeholder="Password"
                  id="password"
                />
                <input
                  onChange={(e) => inputChangeHandler(e)}
                  type="password"
                  placeholder="Confirm Password"
                  id="password_confirmation"
                />
              </RegistrationInputContainer>
              {error && <div style={errorStyle}>{error}</div>}
              <RegistrationButtonContainer>
                <Button type="submit">Register</Button>
                <Button onClick={signInHandleClick}>
                  Already have an account
                </Button>
              </RegistrationButtonContainer>

            </form>
          </RegistrationInnerContainer>
        </RegistrationContainer>
      
    </div>
  );
}

export default Registration;

const RegistrationContainer = styled.div`
  /* background-color: #f8f8f8; */
  background-color: #d9d7d7;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const RegistrationInnerContainer = styled.div`
  padding: 100px;
  padding-left: 130px;
  padding-right: 130px;
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

const RegistrationInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  
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
const RegistrationButtonContainer = styled.div`
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
