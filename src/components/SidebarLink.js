import React from "react";
import styled from "styled-components";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";

function SidebarLink({ title, id, colorUser }) {
  const styleLink = {
    textDecoration: "none",
    color: colorUser
  };

  if(!colorUser){
    styleLink.color = "#fff"
  } else {
    styleLink.color = colorUser
  }

  return (
    <SidebarOptionContainer>
      <PersonIcon />

      <Link to={`/dm/${id}/${title}`} style={styleLink}>{title}</Link>
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
