import React, { useState, useEffect } from "react";
import LayoutComponents from "../LayoutComponents";
import { Modal, Button } from "react-bootstrap";
import UserService from "../../services/userService";

function ProductComponent() {
  const [createShow, setCreateShow] = useState(false);

  const createModal = () => {
    setCreateShow(!createShow);
  };

  const [users, setUsers] = useState({});

  const fetchUsers = async () => {
    setUsers(await UserService.getUsers());
  };
  useEffect(() => {
    fetchUsers();
  });

  return (
    <div className="wrapper d-flex align-items-stretch">
      <LayoutComponents />

      <div id="content" className="p-4 p-md-5 pt-5">
        <h2 className="mb-4">Products</h2>

        <Button variant="success" onClick={createModal}>
          Add Product
        </Button>

        <Modal show={createShow} onHide={createModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <form>
            <Modal.Body>
                <select name="user_id" required className="w-100 mb-3">
                    <option value="">Select User</option>
                    {users.data !== undefined && users.data.data.length > 0 && (
                        users.data.data.map(user=>(
                            <option value={user._id}>{user.name}</option>
                        ))
                    )}
                </select>
                <input type="text" name ="name" required placeholder="Enter Product Name" className="w-100 mb-3 " />
                <input type="number" name ="price" required placeholder="Enter Product Price" className="w-100 mb-3 " />
                <input type="file" name ="images" required multiple className="w-100 mb-3 " />

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
}

export default ProductComponent;
