import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Comment = ({ data, api }) => {
  const [comment, setComment] = useState("");
  const [value, setValue] = useState("");
  const [studentId, setUserId] = useState(localStorage.getItem("id"));
  const [courseId, setCourseId] = useState([data._id]);
  console.log(data.email);
  const teacherId = data._id;
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
    <div>
      <div class="comment-forum padding-top-40px">
        <div class="form-box">
          <div class="form-title-wrap">
            <h3 class="">Write a Review</h3>
          </div>
          <div class="form-content">
            <div class="rate-option p-2">
              <div class="row">
                <div class="col-lg-4 responsive-column">
                  <div class="rate-option-item">
                    <label>Service</label>
                    <div class="rate-stars-option">
                      <span class="ratings d-flex align-items-center mr-1">
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
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-form-action">
              <form method="post">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="input-box">
                      <label class="label-text">Name</label>
                      <div class="form-group">
                        <span class="la la-user form-icon"></span>
                        <input
                          class="form-control"
                          type="text"
                          name="text"
                          placeholder="Your name"
                          value={localStorage.getItem("data")}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-box">
                      <label class="label-text">Email</label>
                      <div class="form-group">
                        <span class="la la-envelope-o form-icon"></span>
                        <input
                          class="form-control"
                          type="email"
                          name="email"
                          placeholder="Email address"
                          value={localStorage.getItem("email")}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-box">
                      <label class="label-text">Message</label>
                      <div class="form-group">
                        <span class="la la-pencil form-icon"></span>
                        <textarea
                          class="message-control form-control"
                          name="message"
                          placeholder="Write message"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="btn-box">
                      <button
                        type="button"
                        onClick={CommentC}
                        class="theme-btn"
                      >
                        Leave a Review
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
