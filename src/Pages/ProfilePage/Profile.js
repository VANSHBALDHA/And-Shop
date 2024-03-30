import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Index.css";
import axios from "axios";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

const Profile = () => {
  const [user, setUser] = useState({});
  const Email = localStorage.getItem("Email");
  const [showEdit, setShowEdit] = useState(false);
  const [show, setShow] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    number: "",
    address: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const EditData = () => {
    axios
      .get("http://localhost:3078/users")
      .then((res) => {
        const EditUserData = res.data.find(
          (EditDatas) => EditDatas?.user?.email === Email
        );
        setUserData(EditUserData);
      })
      .catch((err) => console.log(err));
  };

  const getData = () => {
    axios
      .get("http://localhost:3078/users")
      .then((response) => {
        const userData = response.data.find(
          (userData) => userData?.user?.email === Email
        );
        setUser(userData);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = localStorage.getItem("Email");
    const updatedUserData = {
      username: userData.username,
      email: email,
      number: userData.number,
      address: userData.address,
    };

    axios
      .put(`http://localhost:3078/users/${user.id}`, updatedUserData)
      .then((response) => {
        console.log("Updated data", updatedUserData);
        getData();
        setShowEdit(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
    EditData();
  }, []);

  const handleClose = () => {
    setShow(false);
    setShowEdit(false);
  };

  const handleEdit = () => {
    setShowEdit(true);
  };

  return (
    <>
      <Helmet>
        <title>AND SHOP - Profile</title>
      </Helmet>
      <section>
        <div className="profile-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="dashboard_content">
                  <div className="myaccount-content">
                    <h4 className="title">Account details</h4>
                    <div className="login_form_container">
                      <div className="account_details_form">
                        <form>
                          <div className="default-form-box mb-20">
                            <label htmlFor="fname">Username</label>
                            <h4 className="form-control">
                              {user?.user?.username}
                            </h4>
                          </div>
                          <div className="default-form-box mb-20">
                            <label htmlFor="fname">email</label>
                            <h4 className="form-control">
                              {user?.user?.email}
                            </h4>
                          </div>
                          <div className="default-form-box mb-20">
                            <label htmlFor="fname">phone</label>
                            <h4 className="form-control">
                              {user?.user?.number}
                            </h4>
                          </div>
                          <div className="default-form-box mb-20">
                            <label htmlFor="fname">Address</label>
                            <h2 className="form-control">
                              {user?.user?.address}
                            </h2>
                          </div>
                          <div className="save_button mt-3">
                            <button
                              type="button"
                              className="btn btn-outline-dark"
                              onClick={() => handleEdit()}
                            >
                              Edit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          className="form_intent"
          centered
          show={showEdit}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group as={Col} className="mb-2" controlId="formGridState">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="username"
                  placeholder="Enter Your Name"
                  defaultValue={user?.user?.username}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-2" controlId="formGridState">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  placeholder="Enter Your Email"
                  defaultValue={user?.user?.email}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-2" controlId="formGridState">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  name="number"
                  disabled
                  placeholder="Enter Your Phone"
                  defaultValue={user?.user?.number}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-2" controlId="formGridZip">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  name="address"
                  placeholder="Enter Your Address"
                  defaultValue={user?.user?.address}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              <div className="text-center pt-4">
                <Button variant="primary" type="submit">
                  Update
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
};

export default Profile;
