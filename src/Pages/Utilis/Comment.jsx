import React, { useState } from "react";
import { Modal, Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Comment({data , api}) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");
  const [value, setValue] = useState("");
  const [studentId, setUserId] = useState(localStorage.getItem("id"));
  const [courseId, setCourseId] = useState([data._id]);
  console.log(data.email);
  const teacherId = data._id;
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const CommentC = async (e) => {
    e.preventDefault();
    if (!localStorage.getItem("token")) {
      toast.warning("You Need To Login First");
    } else {
      const res = await fetch("http://localhost:5000/comment-" + api, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          comment,
          value,
          studentId,
          courseId,
          teacherId,
        }),
      });
      const data = await res.json();
      if (res.status === 400 || !data) {
        toast.warning("Invalid Credentials");
      } else if (res.status === 401) {
        toast.warning("Invalid entry!");
      } else {
        toast.success("Comment Submited!");
      }
    }
  };
  return (
    <>
      {values.map((v, idx) => (
       
        <div class="section-title-wrap d-flex justify-content-center align-items-center mb-5">
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
        {typeof v === "string" && `below ${v.split("-")[0]}`}
                                    <h2 class="text-white ms-4 mb-0"> <i className="la la-star text-color-11"></i>Leave A review</h2>
        </button>
        </div>
       
    
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
          
          <p class="services-price-text mb-0">   <button
              type="button"
              className="la la-close border-0 bg-transparent"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setShow(false)}
            ></button></p>
                                <div class="projects-info">
                                <h3>Leave A review</h3>
                             
                                <form action="#" method="get" class="custom-form contact-form" role="form">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <div class="form-floating">
                                                <input type="text" name="name" id="name"   value={localStorage.getItem("data")} class="form-control" />
                                                
                                                <label for="floatingInput">Name</label>
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-12"> 
                                            <div class="form-floating">
                                                <input type="email" name="email" id="email" value={localStorage.getItem("email")}  class="form-control" />
                                                
                                                <label for="floatingInput">Email</label>
                                            </div>
                                        </div>

                                        <div className="rate-stars-option">
                      <span className="ratings d-flex align-items-center mr-1">
                        <input
                          type="checkbox"
                          id="lst1"
                          value="1"
                          onChange={(e) => setValue(e.target.value)}
                        />
                        <label for="lst1"></label>
                        <input
                          type="checkbox"
                          id="lst2"
                          value="2"
                          onChange={(e) => setValue(e.target.value)}
                        />
                        <label for="lst2"></label>
                        <input
                          type="checkbox"
                          id="lst3"
                          value="3"
                          onChange={(e) => setValue(e.target.value)}
                        />
                        <label for="lst3"></label>
                        <input
                          type="checkbox"
                          id="lst4"
                          value="4"
                          onChange={(e) => setValue(e.target.value)}
                        />
                        <label for="lst4"></label>
                        <input
                          type="checkbox"
                          id="lst5"
                          value="5"
                          onChange={(e) => setValue(e.target.value)}
                        />
                        <label for="lst5"></label>
                      </span>
                    </div>

                                        <div class="col-lg-12 col-12">
                                            <div class="form-floating">
                                                <textarea class="form-control" id="message" name="message" placeholder="Tell me about the project"  value={comment}
                          onChange={(e) => setComment(e.target.value)}></textarea>
                                                
                                                <label for="floatingTextarea">Tell me about the project</label>
                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-12 ms-auto">
                                            <button type="submit"  onClick={CommentC} class="custom-btn">Send</button>
                                        </div>

                                    </div>
                                </form>
                                </div>
                            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Comment;
