import React, { useState,useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthStudentProgram } from "../../../Api/SpecificData/AuthUser";
import myData from "../../Qec/question.json";
const Program = () => {
  const [department, setCourse] = useState([]);
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  useEffect(() => {
    const getData = () => {
      AuthStudentProgram().then(function (result) {
        setCourse(result);
      });
    };
    getData();
  }, []);

  return (
    <div>
   <Button
        variant="primary"
        onClick={handleShow}
        className="bg-transparent border-0 text-secondary"
      >
        PROGRAM
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false} centered className="bg-trarnsparent">
      <div class="col-lg-12 col-12">
        <div class="services-thumb">
        {department.map((data) => {
              return (
                <>
        <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
          <h3 class="mb-0">{data.name}</h3>
          <div class="services-price-wrap ms-auto">
            <p class="services-price-text mb-0">   <button
              type="button"
              className="la la-close border-0 bg-transparent"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setShow(false)}
            ></button>
            </p></div>      
            </div>
            <p>{data.description}</p>
            <hr />
            <ul>
                <li>Created At {new Date(data.createdAt).toLocaleDateString(
                              "en-US"
                            )}</li>
                            <li>Total Students {data.studentId.length}</li>
                            <li>Total Teachers {data.teacherId.length}</li>
                            <li>Session {data.sessionId.map((data) => data.name)}</li>
                            <li>Department {data.departmentId.map((data) => data.name)}</li>
            </ul>
            </>)})}
            </div>
            </div>
      </Modal>
    </div>
  );
};

export default Program;
