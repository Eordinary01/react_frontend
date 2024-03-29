import React, { useState, useEffect } from "react";
import LayoutComponents from "../LayoutComponents";
import { Modal, Button } from "react-bootstrap";

import UserService from "../../services/userService";

const UserComponent = () => {
  const [createShow, setCreateShow] = useState(false);

  const createModal = () => {
    setCreateShow(!createShow);
  };

  // user data

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [userSelectedFile, setUserSelectedFile] = useState("");

  const createFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("mno", mobile);
    if (userSelectedFile !== "" && userSelectedFile.length !== 0) {
      formData.append("image", userSelectedFile);
    }
    const response = await UserService.create(formData);

    if (response.data.success === true) {
      alert("User Successfully Created!");
    } else {
      alert(response.data.msg);
    }

    createModal();
    fetchUsers();
  };

  const [users, setUsers] = useState({});

  const fetchUsers = async () => {
    setUsers(await UserService.getUsers());
  };

  useEffect(() => {
    fetchUsers();
  }, [users]);

  // delete users 

  const deleteUser = async(user_id)=>{
    const formData = new FormData();
    formData.append('user_id',user_id);

      const response = await UserService.deleteUser(formData);
      // console.log(response.data)

      if(response.data.success === true){
        alert(response.data.msg);
      }
      else{
        alert(response.data.msg);

      }
      fetchUsers();
  }

  return (
    <div className="wrapper d-flex align-items-stretch">
      <LayoutComponents />

      <div id="content" className="p-4 p-md-5 pt-5">
        <h2 className="mb-4">Users</h2>
        <Button variant="success" onClick={createModal}>
          Create User
        </Button>

        <Modal show={createShow} onHide={createModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create User</Modal.Title>
          </Modal.Header>
          <form onSubmit={createFormSubmit}>
            <Modal.Body>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="w-100 mb-3"
                onChange={(event) => setName(event.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="w-100 mb-3"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <input
                type="number"
                name="mno"
                placeholder="Enter Mobile No."
                className="w-100 mb-3"
                onChange={(event) => setMobile(event.target.value)}
                required
              />
              <input
                type="file"
                name="image"
                className="w-100 mb-3"
                onChange={(event) => setUserSelectedFile(event.target.files[0])}
                required
              />
            </Modal.Body>

            <Modal.Footer>
              <Button variant="dark" onClick={createModal}>
                Close
              </Button>
              <Button type="submit" variant="primary">
                Save
              </Button>
            </Modal.Footer>
          </form>
        </Modal>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>MobileNo</th>
              <th>Image</th>
              <th>Delete</th>
            </tr>
          </thead>
          {users.data !== undefined && users.data.data.length > 0 && (
            <tbody>
              {users.data.data.map((user) => (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mno}</td>
                  <td>
                    <img
                      src={"http://127.0.0.1:8088/api/" + user.image}
                      style={{ width: "100px", height: "100px" }}
                      alt=""
                    />
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={event=> deleteUser(user._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default UserComponent;
