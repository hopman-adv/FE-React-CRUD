import { useState, useEffect } from "react";
import { getUsers } from "../Services/usersOperations";
import tokenService from "../Services/token.service";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button.js";
import ProfileEditUser from "./ProfileEditUser";

export default function UsersTable(props) {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const navigate = useNavigate();

  function handleUsersUpdate() {
    try {
      getUsers().then((response) => {
        console.log('i fire once');
        if (response === "Unlogged!") {
          alert("User not logged!");
          tokenService.removeUser();
          navigate("/login");
        }
        if (response.status === 200 && response.data) {
          setUsers(response.data);
          console.log(response.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleUsersUpdate();    
  }, []);

  function handleButtonClick(user) {
    console.log("Edit opened");
    !editing && setEditing(true);
    setEditedUser(user);
  }

  return (
    <>
      <div id="user-logged"></div>

      <table className="w3-table-all w3-hoverable" id="users-table">
        <tbody>
        <tr id="users-table-header">
          <th>Id</th>
          <th>User Name</th>
          <th>Email</th>
        </tr>
        {users.map((user) => {
          return <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td><Button className={"w3-button w3-green w3-padding-small w3-small"} onClick={()=>handleButtonClick(user)}>Edit client</Button></td>
          </tr>
        })}</tbody>
      </table>
        {editing && <ProfileEditUser editedUser={editedUser} handleUsersUpdate={handleUsersUpdate}/>}
    </>
  );
}
