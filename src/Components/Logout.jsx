import React, { useState } from "react";
import logo1 from "../Assets/logo.png";
import { Modal, Button, Container } from "react-bootstrap";

function Logout() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
    localStorage.clear();
    setTimeout(function () {
      window.location.href = "/";
    }, 3000);
  }

  return (
    <>
      {values.map((v, idx) => (
        <button
          key={idx}
          className=" bg-transparent border-0 text-dark"
          style={{
            textDecoration: "none",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onClick={() => handleShow(v)}
        >
          <i className="la la-power-off mr-2 text-color-11"></i>LogOut
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </button>
      ))}

      <Modal
        show={show}
        className="bg-transparent "
        fullscreen={fullscreen}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setShow(false)}
      >
        <Modal.Body
          id="contained-modal-title-vcenter"
          className=" text-right text-dark mt-"
        >
          <div class="projects-thumb">
                                <div class="projects-info">

                                    <h3 class="projects-title">LOGING OUT...</h3>
                                </div>

                                <a href="images/projects/true-agency-9Bjog5FZ-oc-unsplash.jpg" class="popup-image">
                                    <img src={logo1} class="projects-image img-fluid" alt=""/>
                                </a>
                            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Logout;
