import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Button, Container } from "react-bootstrap";

function Commend({data}) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [isHelpFull, setIsgood] = useState(false);
  const [isProfessional, setIsprofessional] = useState(false);
  const [teacherId, setTeacherId] = useState(data._id);
  const [isFriendly, setIsfriendly] = useState(false);
  const [commend, setCommend] = useState(true);
  
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const sendData = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/commend", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        isHelpFull,
        isProfessional,
        isFriendly,
        teacherId
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning(data.message);
    } else if (res.status === 401) {
      toast.warning(data.message);
    } else {
 
     if(! localStorage.getItem("isCommend")){   
        localStorage.setItem("isCommend",teacherId)
        toast.success("Commended Successfully");
        window.location.reload()
      }else{
        toast.info("One Commend At a day");
      }
    
    }

  };
 useEffect(()=>{
  if (localStorage.getItem("isCommend") == data._id) {
    setCommend(false);
  }
 },[])
  return (
    <>
      {values.map((v, idx) => (

        <>  {!commend ? (
          <>commended!</>
        ) : (
          <button
          key={idx}
          className=" border-0 bg-transparent"
          style={{ textDecoration: "none" }}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onClick={() => handleShow(v)}
        >
          
          Commend Me!
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </button>
        )}</>
       
      ))}

      <Modal
        show={show}
        className="bg-transparent "
        fullscreen={fullscreen}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setShow(false)}
      >
        <Modal.Body>
          <div className="modal-content border-0 ">
            <div className="modal-header text-center">
              <h2 className="modal-title ">Commend Now</h2>
            </div>
            <div className="modal-body">
              <div className="contact-form-action">
                <form className="form " method="POST" action="">
                  <div className="custom-checkbox">
                    <input
                      type="checkbox"
                      id="catChb1"
                      value="1"
                      onChange={(e) => setIsgood(e.target.value)}
                    />
                    <label for="catChb1">Is HelpFull To Students</label>
                  </div>
                  <div className="custom-checkbox">
                    <input
                      type="checkbox"
                      id="catChb2"
                      value="1"
                      onChange={(e) => setIsfriendly(e.target.value)}
                    />
                    <label for="catChb2">Is Friendly in Nature</label>
                  </div>
                  <div className="custom-checkbox">
                    <input
                      type="checkbox"
                      id="catChb3"
                      value="1"
                      onChange={(e) => setIsprofessional(e.target.value)}
                    />
                    <label for="catChb3">Is Best in his Profession</label>
                  </div>
                  <div>
                    <div className="btn-box pt-3 pb-4">
                      <button
                        type="button"
                        onClick={sendData}
                        className="theme-btn w-100"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Commend;
