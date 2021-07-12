import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebase";
import { useHistory } from 'react-router-dom'; 

function Header(props) {

  // const [user] = useAuthState(auth);

  let history = useHistory ();

  const signOutHandleClick = () => {
      props.setLogin()
      history.push('/login')
  }

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar onClick={signOutHandleClick}
          // alt={user?.displayName}
          // src={user?.photoURL}
        />
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
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 82px;
  margin-right: 79px;
  color: #d9d2da;
  border: 1px #674a68 solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
    font-size: 13px;
    margin-left: -200px;
  }
  > ::placeholder {
    color: #d9d2da;
  }
  > .MuiSvgIcon-root {
    display: flex;
    margin: 2px 0px 2px 208px;
    font-size: 18px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 0;
  background-color: #340d36;
  color: #d9d2da;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 22px;
    font-size: 22px !important;
  }
`;
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: -57px;
    margin-right: 420px;
    font-size: 22px !important;
  }
`;

const HeaderAvatar = styled(Avatar)`
  position: absolute;
  left: 1612px;
  width: 28px !important;
  height: 28px !important;
  cursor: pointer;
  margin: 5px;
  border-radius: 5px !important;

  :hover {
    opacity: 0.8;
  }
`;
