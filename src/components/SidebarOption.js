import React from "react";
import styled from "styled-components";
// import { enterRoom } from "../features/appSlice";
import { db } from "../firebase";
import PersonIcon from "@material-ui/icons/Person";
import { useHistory } from "react-router-dom";
function SidebarOption({ Icon, title, to }) {
  const history = useHistory();

  return (
    <SidebarOptionContainer onClick={() => history.push(to)}>
      {Icon && <Icon style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>
            <PersonIcon style={{ marginBottom: 5 }} />
          </span>
          <p>{title}</p>
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 4px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > .MuiSvgIcon-root {
    font-size: 17px;
    /* padding: 10; */
  }

  > h3 {
    font-weight: 300;
  }
  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 18px 0;
  font-weight: 300;
  align-items: center;

  > p {
    display: flex;
    margin-top: -28px;
    margin-left: 50px;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
  }
`;
