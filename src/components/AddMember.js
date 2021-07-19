import React, {useState, useContext} from 'react'
import styled from "styled-components";
import ListOfAllUsers from './ListOfAllUsers'
import SidebarLink from './SidebarLink';
import { userContext } from "../context/userContext";
import axios from 'axios'

function AddMember() {

const loggedInUser = useContext(userContext).userDetails[0];
const  usersLists = useContext(userContext).usersLists[0];

// console.log(usersLists) 

const [filteredUsers, setfilteredUsers] = useState( [] || usersLists);
const [userShown, showUsers] = useState(false);


console.log(filteredUsers)
// const [values, setValues ] = useState("")




const config = {
    method: "post",
    url: "http://206.189.91.54//api/v1/channel/add_member",
    headers: {
      "content-type": "application/json",
      ...loggedInUser
    },
    data: {
      id: 13,
      member_id: [31]
    }
  };



const handleChange = (e) => {
    const searchResults = usersLists.data.filter((filteredUser) =>
        filteredUser.uid.toLowerCase().includes(e.target.value)
		);
        setfilteredUsers(searchResults)
}

console.log(filteredUsers)

const handleSubmit = (e) => {
    e.preventDefault()

    axios(config)
    .then(response => {
      console.log(JSON.stringify(response.data));
    })
    .catch(error => {
      console.log(error);
    });
};

// console.log(usersLists)

const styleUsers = {
    color: "#000"
}


    return (
        <form onSubmit={handleSubmit}>
            <AddChannelInputContainer>
                <input
                    className="add-member-input"
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Add members"
                    required
                    // value={values}
                    onChange={handleChange}
                />
                <ul>
                {
                  filteredUsers.map((user, index) => (
                        <SidebarLink
                            colorUser={styleUsers}
                            key={index}
                            title={user.email}
                            id={user.id}
                            uid={user.uid}
                            // to={`/all-users/${user.id}/${user.email}`}
                        />
                    ))
                }
                </ul>
                 <AddMemberButton>
                    <button type="submit">submit</button>
                </AddMemberButton>
            </AddChannelInputContainer>
        </form>
    )
}

export default AddMember


const AddMemberButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  > button {
    width: 15vh;
    padding: 10px 0px 10px 0px;
    border-radius: 5px;
    cursor: pointer;
    background-color: var(--slack-color);
    color: white;
  }
`;


const AddChannelInputContainer = styled.div`
  > input {
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #757575;
    margin: 10px;
    margin-left: 0;
  }

  input:focus {
    outline: none;
  }
`;
