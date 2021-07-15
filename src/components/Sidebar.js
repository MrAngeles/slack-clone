import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { listOfAllUsers } from "./api/Api";

function Sidebar() {
  //would typically use usestate but now we will use firebase hooks
  const [channels] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);

  // var userInfo = JSON.parse(sessionStorage.user);
  // listOfAllUsers(userInfo.headers)
  //   .then(response => response)
  //   .then(result => console.log(result.data))
  //   .catch(error => error);
  // // console.log(userInfo.headers)

  return <NoSibebar />;

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Group 2</h2>
          <h3>
            <FiberManualRecordIcon />
            {/* {userInfo.data.email} */}
            hagaga
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarOption Icon={InsertCommentIcon} title="Thread" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

      {channels?.docs.map(doc => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;

function NoSibebar() {
  return <SidebarContainer></SidebarContainer>;
}

const SidebarContainer = styled.div`
  grid-area: 2/1/3/2;
  color: white;
  background-color: var(--slack-color);
  min-width: 200px;
  overflow-y: auto;

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
