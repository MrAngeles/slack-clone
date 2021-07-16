import React, { useContext } from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useHistory } from "react-router-dom";
import { removeUserSession } from "../Utils/Common";
import { userContext } from "../context/userContext";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebase";
function Header(props) {
  let history = useHistory();
  const setContextUser = useContext(userContext)[1];
  // const [user] = useAuthState(auth);

  const signOutHandleClick = () => {
    removeUserSession();
    setContextUser(null);

    history.push("/login");
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar onClick={signOutHandleClick} />
        <AccessTimeIcon />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search Group 2" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
const HeaderContainer = styled.div`
  box-sizing: border-box;
  grid-area: 1/1/2/3;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #340d36;
  color: #d9d2da;
  padding: 0.5rem;
  height: 8vh;
`;
const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  border: 1px #674a68 solid;
  padding: 5px;
  width: 100%;
  max-width: 30rem;
  border-radius: 6px;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    outline: 0;
    color: white;
    font-size: 13px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > .MuiAvatar-root {
    font-size: 22px;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
  }
  > .MuiSvgIcon-root {
    font-size: 22px;
  }
`;
const HeaderRight = styled.div`
  /* flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: -57px;
    margin-right: 420px;
    font-size: 22px !important;
  } */
`;

const HeaderAvatar = styled(Avatar)`
  /* position: absolute;
  left: 1612px;
  width: 28px !important;
  height: 28px !important;
  cursor: pointer;
  margin: 5px;
  border-radius: 5px !important; */

  :hover {
    opacity: 0.8;
  }
`;
