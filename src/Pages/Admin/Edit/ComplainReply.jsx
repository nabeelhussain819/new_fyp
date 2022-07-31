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
      <Modal.Body>
      <div class="services-thumb">
                                      <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                          <h3 class="mb-0">  About {props.data.issue}</h3>

                                          <div class="services-price-wrap ms-auto">
                                              <p class="services-price-text mb-0"> <button
              type="button"
              className="la la-close border-0 bg-transparent"
              data-dismiss="modal"
              aria-label="Close"
              onClick={props.onHide}
            ></button></p>
                                              <div class="services-price-overlay"></div>
                                          </div>
                                      </div>

                                      <div class="col-lg-12 col-12">
                          <div class="profile-thumb">
                              <div class="profile-title">
                                  <h4 class="mb-0">Information</h4>
                              </div>

                              <div class="profile-body">
                                  <p>
                                      <span class="profile-small-title">Complain</span> 
                                      <span>{props.data.complain} </span>  
                                  </p>

                                  <p>
                                      <span class="profile-small-title">For</span> 
                                      <span>{props.data.departId &&
                  props.data.departId.map((data) => data.name)}{props.data.courseId &&
                    props.data.courseId.map((data) => data.name)}</span>
                                  </p>

                                  <p>
                                      <span class="profile-small-title">Action</span> 
                                      <span>  <Link
                  to={"/details/" + props.data._id}
                  className="bg-transparent border-0 p-1"
                  state={{ from: props.data, api: "departments" }}
                >
                  See Details
                </Link>
                </span>
                                  </p>
                                
                              </div>
                              
                          </div>
                      </div>
                      <textarea
            className="message-control form-control"
            name="message"
            placeholder="No HTML, no web or email address, no ALL CAPS "
            value={reply}
            onChange={(e) => setComplain(e.target.value)}
            ></textarea>
             <Button onClick={sendData}>Submit</Button>
        <Button onClick={props.onHide} className="btn-danger">
          Cancel
        </Button> </div>
     
      </Modal.Body>
    </Modal>
  );
}

function Replay({ data }) {
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

export default Replay;
