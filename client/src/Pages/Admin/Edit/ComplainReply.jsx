import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import Delete from "../Delete/Delete";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyVerticallyCenteredModal(props) {
  const [name, setName] = useState("");
  const [complainId, setId] = useState(props.data._id);
  const [reply, setComplain] = useState("");
  console.log(props.data);
  const sendData = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/reply", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        complainId,
        reply,
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
          About {props.data.issue}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Complain</th>
              <th scope="col">For</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">01</th>
              <td>
                <div class="table-content">{props.data.complain}</div>
              </td>
              <td>
                <div class="table-content">
                  {props.data.departId &&
                    props.data.departId.map((data) => data.name)}
                  {props.data.courseId &&
                    props.data.courseId.map((data) => data.name)}
                </div>
              </td>
              <td>
                <div class="table-content">
                  <Link
                    to={"/details/" + props.data._id}
                    class="bg-transparent border-0 p-1"
                    state={{ from: props.data, api: "departments" }}
                  >
                    <i class="la la-eye"></i>
                  </Link>
                  <Delete id={props.data._id} api={"departments"} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
      <div class="col-lg-12 responsive-column">
        <div class="input-box">
          <label class="label-text">Your Reply</label>
          <div class="form-group">
            <textarea
              class="message-control form-control"
              name="message"
              placeholder="No HTML, no web or email address, no ALL CAPS "
              value={reply}
              onChange={(e) => setComplain(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
      <Modal.Footer>
        <Button onClick={sendData}>Submit</Button>
        <Button onClick={props.onHide} className="btn-danger">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Replay({ data }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button
        class="bg-transparent border-0 p-1"
        onClick={() => setModalShow(true)}
      >
        <i class="la la-edit"></i>
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        data={data}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Replay;
