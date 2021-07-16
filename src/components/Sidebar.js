import React, { useContext } from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import ChannelList from "./ChannelList";
import ListAllUsers from "./ListOfAllUsers";
import { userContext } from "../context/userContext";

function Sidebar() {
  //would typically use usestate but now we will use firebase hooks
  const contextUser = useContext(userContext)[0];

  // var userInfo = JSON.parse(sessionStorage.user);
  // listOfAllUsers(userInfo.headers)
  //   .then(response => response)
  //   .then(result => console.log(result.data))
  //   .catch(error => error);
  // // console.log(userInfo.headers)

  if (!contextUser) {
    return <NoSibebar />;
  }

  return (
    <StyledDiv>
      <SidebarContainer>
        <SidebarHeader>
          <SidebarInfo>
            <h2>Group 2</h2>
            <h3>
              <FiberManualRecordIcon />
              {contextUser.uid}
            </h3>
          </SidebarInfo>
          <CreateIcon />
        </SidebarHeader>

        <SidebarOption Icon={InsertCommentIcon} title="All Dms" to="/all-dms" />
        <SidebarOption Icon={InsertCommentIcon} title="Thread" />
        <SidebarOption Icon={InboxIcon} title="My Channels" to="/owned-channels" />
        <SidebarOption Icon={DraftsIcon} title="Saved items" />
        <SidebarOption Icon={PeopleAltIcon} title="All Users" to="/all-users" />
        <SidebarOption Icon={ExpandLessIcon} title="Show less" />
        <hr />
        <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
        {/* <CreateChannel /> */}
        <hr />
        <SidebarOption Icon={AddIcon} to="/add-channel" title="Add Channel" />
        <ChannelList />
        <ListAllUsers />
      </SidebarContainer>
    </StyledDiv>
  );
}

export default Sidebar;

function NoSibebar() {
  return <StyledNoSideBar></StyledNoSideBar>;
}

const StyledDiv = styled.div`
  grid-area: 2/1/3/2;
  overflow-y: auto;
  min-width: 200px;
  height: 92vh;
`;

const StyledNoSideBar = styled(StyledDiv)`
  background-color: var(--slack-color);
`;

const SidebarContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  color: white;
  background-color: var(--slack-color);

  > hr {
    margin-top: 5px;
    margin-bottom: 5px;
    border: 1px solid #512653;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #512653;
  border-top: 1px solid #512653;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #512653;
    font: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
