import React, { useState } from "react";
import LayoutComponents from "../LayoutComponents";
import { Modal, Button } from "react-bootstrap";

import UserService from '../../services/userService';

const UserComponent = () => {
  const [createShow, setCreateShow] = useState(false);

  const createModal = () => {
    setCreateShow(!createShow);
  };

  // user data 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [userSelectedFile, setUserSelectedFile] = useState('');

  const createFormSubmit = async(event)=>{
    event.preventDefault();

    const  formData =  new FormData();

    formData.append('name',name);
    formData.append('email',email);
    formData.append('mno',mobile);
    if(userSelectedFile !== '' && userSelectedFile.length !=0){
      formData.append('image', userSelectedFile);
    }
  const response  =   await UserService.create(formData);

  if(response.data.success === true){
    alert('User Successfully Created!');

  }
  else{
    alert(response.data.msg);
  }

  createModal();

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
                onChange={event => setName(event.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="w-100 mb-3"
                onChange={event=> setEmail(event.target.value)}
                required
              />
              <input
                type="number"
                name="mno"
                placeholder="Enter Mobile No."
                className="w-100 mb-3"
                onChange={event => setMobile(event.target.value)}
                required
              />
              <input type="file" name="image" className="w-100 mb-3" onChange={event => setUserSelectedFile(event.target.files[0])} required />
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
      </div>
    </div>
  );
};

export default UserComponent;
