import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyVerticallyCenteredModal(props) {
  const [gpa, setGpa] = useState("");
  const [studentId, setId] = useState(props.data._id);
  const [teacherId, setd] = useState(localStorage.getItem("id"));
  const [rating, setRating] = useState("");
  console.log(teacherId);
  const sendData = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/gpaRate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        rating,
        studentId,
        gpa,
        teacherId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Add All feilds");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      toast.success("Done!");
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
        <Modal.Title id="contained-modal-title-vcenter" className="text-dark">
          Name: {props.data.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">01</th>
              <td>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Add Rating Of The Student"
                  onChange={(e) => setRating(e.target.value)}
                />
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

function StudentRating({ data }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button
          class="custom-btn custom-border-btn btn mt-3"
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

export default StudentRating;
