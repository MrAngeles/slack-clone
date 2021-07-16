import React from "react";
import styled from "styled-components";
import GroupIcon from "@material-ui/icons/Group";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { useHistory, Link } from "react-router-dom";

function SidebarLink({ title, id }) {
  return (
    <SidebarOptionContainer>
      <span>
        <GroupIcon style={{ marginBottom: 5 }} />
      </span>
      <Link Icon={PeopleAltIcon} to={`/dm/${id}/${title}`}>
        {title}
      </Link>
    </SidebarOptionContainer>
  );
}

export default SidebarLink;

const SidebarOptionContainer = styled(Link)`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 4px;
  cursor: pointer;

  > a {
    color: black !important;
    text-decoration: none;
    font-size: 20px;
  }

  > span {
    color: white;
  }

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > .MuiSvgIcon-root {
    font-size: 17px;
    /* padding: 10; */
  }
`;
