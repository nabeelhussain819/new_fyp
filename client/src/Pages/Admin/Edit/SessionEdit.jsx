import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import Delete from "../Delete/Delete";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyVerticallyCenteredModal(props) {
  const [name, setName] = useState("");
  const [id, setId] = useState(props.data._id);
  const [code, setCode] = useState("");
  const sendData = async (e) => {
    e.preventDefault();

    const res = await fetch("https://fyptes.herokuapp.com/edit-sessions", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        id,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Add All feilds");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      alert("Edited Successfully");
      window.location.reload();
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.data.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">01</th>
              <td>
                <div className="table-content">
                  <input
                    type="text"
                    placeholder={props.data.name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </td>
              <td>
                <div className="table-content">
                  <Link
                    to={"/details/" + props.data._id}
                    className="bg-transparent border-0 p-1"
                    state={{ from: props.data, api: "sessions" }}
                  >
                    <i className="la la-eye"></i>
                  </Link>
                  <Delete id={props.data._id} api={"sessions"} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={sendData}>Submit</Button>
        <Button onClick={props.onHide} className="btn-danger">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Edit({ data }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button
        className="bg-transparent border-0 p-1"
        onClick={() => setModalShow(true)}
      >
        <i className="la la-edit"></i>
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        data={data}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Edit;
