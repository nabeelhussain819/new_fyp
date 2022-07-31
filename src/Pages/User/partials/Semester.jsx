import React, { useState,useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {  AuthUser } from "../../../Api/SpecificData/AuthUser";
const Semester = () => {
  const [department, setCourse] = useState([]);
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const navigate = useNavigate();
console.log(department)
  const handleClose = () => setShow(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  useEffect(() => {
    const getData = () => {
      AuthUser().then(function (result) {
        setCourse([result]);
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
        SEMESTER
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false} centered className="bg-trarnsparent">
      <div class="col-lg-12 col-12">
        <div class="services-thumb">
        {department.map((data) => {
              return (
                <>{data.semesterId.map((index)=>{return(<>
                   <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
          <h3 class="mb-0">semester-{index.name}</h3>
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
            <p>{index.description}</p>
            <hr />
            <ul>
                <li>Created At {new Date(index.createdAt).toLocaleDateString(
                              "en-US"
                            )}</li>
                            
                            <li>Total Courses {index.courseId.length}</li>
                        
            </ul>
                </>)})}
     
            </>)})}
            </div>
            </div>
      </Modal>
    </div>
  );
};

export default Semester;
