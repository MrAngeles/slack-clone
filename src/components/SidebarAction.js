import React from "react";
import styled from "styled-components";
import PersonIcon from "@material-ui/icons/Person";

function SidebarAction({ icon: Icon, name, action }) {
  return (
    <SidebarOptionContainer onClick={action}>
      <Icon />
      <button>{name}</button>
    </SidebarOptionContainer>
  );
}

export default SidebarAction;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding: 0.4rem;
  padding-left: 4px;
  cursor: pointer;
  max-width: 12rem;

  > button {
    cursor: pointer;
    font-family: inherit;
    border: none;
    appearance: none;
    background: none;
    outline: none;
    color: white;
    display: inline-block;
    /* padding: 0.1rem; */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 17px;
    font-weight: 300;
    /* font-size: 20px; */
  }

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > .MuiSvgIcon-root {
    display: flex;
    align-items: center;
    /* font-size: 17px; */
    margin-right: 0.3rem;
  }
`;
