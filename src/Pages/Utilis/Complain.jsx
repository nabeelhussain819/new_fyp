import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Comment from "./Comment";

const Complain = ({ data, api }) => {
  const [complain, setComplain] = useState("");
  const [studentId, setUserId] = useState(localStorage.getItem("id"));
  const [courseId, setCourseId] = useState([data._id]);

  const ComplainDept = async (e) => {
    e.preventDefault();
    if (localStorage.getItem("token")) {
      const res = await fetch("http://localhost:5000/complain-" + api, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          complain,
          studentId,
          courseId,
        }),
      });
      const data = await res.json();
      if (res.status === 400 || !data) {
        toast.warning("Invalid Credentials");
      } else if (res.status === 401) {
        toast.warning("Invalid entry!");
      } else {
        console.log("Course Created Successfully");
      }
    } else {
      toast.warning("You Need To Login First");
    }
  };
  return (
    <div className="col-lg-4">
      <Comment data={data} api={api} />
      <div className="sidebar-widget single-content-widget">
        <h3 className="title stroke-shape">Complain Box</h3>
        <div className="enquiry-forum">
          <div className="form-box">
            <div className="form-content">
              <div className="contact-form-action">
                <form method="post">
                  <div class="input-box">
                    <label class="label-text">Email</label>
                    <div class="form-group">
                      <span class="la la-envelope-o form-icon"></span>
                      <input
                        class="form-control"
                        type="email"
                        name="email"
                        value={localStorage.getItem("name")}
                        placeholder="Email address"
                      />
                    </div>
                  </div>
                  <div class="input-box">
                    <label class="label-text">Name</label>
                    <div class="form-group">
                      <span class="la la-user-o form-icon"></span>
                      <input
                        class="form-control"
                        type="text"
                        name="email"
                        value={localStorage.getItem("email")}
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="input-box">
                    <label>Complain </label>
                    <div className="form-group">
                      <span className="la la-pencil form-icon"></span>
                      <textarea
                        className="message-control form-control"
                        name="message"
                        placeholder="Write message"
                        value={complain}
                        onChange={(e) => setComplain(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="btn-box">
                    <button
                      type="button"
                      className="theme-btn"
                      onClick={ComplainDept}
                    >
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complain;
