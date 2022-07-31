import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Button, Container } from "react-bootstrap";

function Commend({ data }) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [isHelpfull, setIsgood] = useState(false);
  const [isProfessional, setIsprofessional] = useState(false);
  const [teacherId, setTeacherId] = useState(data._id);
  const [isFriendly, setIsfriendly] = useState(false);
  const [commend, setCommend] = useState(true);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  console.log(isHelpfull, isProfessional, isFriendly);
  const sendData = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/commend", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        isHelpfull,
        isProfessional,
        isFriendly,
        teacherId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning(data.message);
    } else if (res.status === 401) {
      toast.success(data.message);
    } else {
      toast.success("Done!");
      if (localStorage.getItem("isCommend")) {
        toast.info("One Commend At a day");
 
      } else {
        localStorage.setItem("isCommend", teacherId);
        setShow(false);
      }
    }
  };
  useEffect(() => {
    if (localStorage.getItem("isCommend") == data._id) {
      setCommend(false);
    }
  }, []);
  return (
    <>
      {values.map((v, idx) => (
        <>
          {" "}
          {!commend ? (
            <></>
          ) : (
            <button
              key={idx}
              className=" custom-btn mt-4"
              style={{ textDecoration: "none" }}
              aria-labelledby="contained-modal-title-vcenter"
              centered
              onClick={() => handleShow(v)}
            >
              Commend Me!
              {typeof v === "string" && `below ${v.split("-")[0]}`}
            </button>
          )}
        </>
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
        <div class="projects-thumb">
                                <div class="projects-info">

                                    <h3 class="projects-title">Commend Now</h3>
                                </div>
                                <div className="modal-body">
              <div className="contact-form-action">
                <div className="reviews-reaction">
                  <button
                    className="comment-love bg-transparent border-0 text-primary p-1"
                    onClick={() => setIsgood("1")}
                  >
                    <i className="la la-thumbs-up"></i>
                  </button>
                  <button
                    className="comment-love bg-transparent border-0 text-warning p-1"
                    onClick={() => setIsgood("2")}
                  >
                    <i className="la la-fire"></i>
                  </button>
                  <button
                    className="comment-love bg-transparent border-0 text-danger p-1 pr-4"
                    onClick={() => setIsgood("3")}
                  >
                    <i className="la la-heart-o"></i>
                  </button>
                  <label for="catChb2" className="">Is HelpFull in Nature</label>
                </div>
                <div className="reviews-reaction">
                  <button
                    className="comment-love bg-transparent border-0 text-primary p-1"
                    onClick={() => setIsfriendly("1")}
                  >
                    <i className="la la-thumbs-up"></i>
                  </button>
                  <button
                    className="comment-love bg-transparent border-0 text-warning p-1"
                    onClick={() => setIsfriendly("2")}
                  >
                    <i className="la la-fire"></i>
                  </button>
                  <button
                    className="comment-love bg-transparent border-0 text-danger p-1 pr-4"
                    onClick={() => setIsfriendly("3")}
                  >
                    <i className="la la-heart-o"></i>
                  </button>
                  <label for="catChb2" className="">Is Friendly in Nature</label>
                </div>
                <div className="reviews-reaction">
                  <button
                    className="comment-love bg-transparent border-0 text-primary p-1"
                    onClick={() => setIsprofessional("1")}
                  >
                    <i className="la la-thumbs-up"></i>
                  </button>
                  <button
                    className="comment-love bg-transparent border-0 text-warning p-1"
                    onClick={() => setIsprofessional("2")}
                  >
                    <i className="la la-fire"></i>
                  </button>
                  <button
                    className="comment-love bg-transparent border-0 text-danger p-1 pr-4"
                    onClick={() => setIsprofessional("3")}
                  >
                    <i className="la la-heart-o"></i>
                  </button>
                  <label for="catChb2" className="">Is Best in his Profession</label>
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
              </div>
            </div>
                            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Commend;
