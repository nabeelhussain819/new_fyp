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
          className=" theme-btn btn-lg"
          style={{ textDecoration: "none" }}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onClick={() => handleShow(v)}
        >
       
          <i class="la la-power-off mr-2 text-color-11"></i>LogOut
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
          className=" text-right text-dark mt-2  bg-transparent"
        >
          <img src={logo1} style={{width:"450px"}} alt="" />
          <div id="loading-wrapper" className="p-4">
          
            <div id="loading-text"><h3>LOGING OUT...</h3></div>
            <div id="loading-content"></div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Logout;
