import React from "react";
import styled from "styled-components";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";

function SidebarLink({ title, id }) {
  const styleLink = {
    textDecoration: "none"
  };

  return (
    <SidebarOptionContainer>
      <PersonIcon />

      <Link to={`/dm/${id}/${title}`}>{title}</Link>
    </SidebarOptionContainer>
  );
}

export default SidebarLink;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding: 0.4rem;
  padding-left: 4px;
  cursor: pointer;
  max-width: 12rem;

  > a {
    color: white;
    text-decoration: none;
    display: block;
    padding: 0.1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
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
