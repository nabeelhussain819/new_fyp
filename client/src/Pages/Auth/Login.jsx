import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [show, setShow] = useState(false);
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClose = () => setShow(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning(data.message);
    } else if (res.status === 401) {
      toast.warning(data.message);
    } else {
      console.log(data);
      toast.success("Logged In Successfully");
      const name = data.name.name;
      const id = data.name._id;
      const email = data.name.email;
      const u_id = data.name.u_id;
      const phone = data.name.phone;
      const code = data.name.courseId;

      if (email === "admin@admin.com") {
        localStorage.setItem("data", "admin");
        localStorage.setItem("isAdmin", "Admin");
        localStorage.setItem("depart", "all");
      } else {
        const depart = data.name.deptId.department;
        localStorage.setItem("depart", depart);
        localStorage.setItem("data", name);
      }
      if (data.name.isTeacher === true) {
        localStorage.setItem("isTeacher", "teacher");
      }
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("email", email);

      localStorage.setItem("u_id", u_id);
      localStorage.setItem("phone", phone);
      localStorage.setItem("code", code);
      localStorage.setItem("id", id);
      if (localStorage.getItem("isAdmin")) {
        navigate("/");
        window.location.reload();
      } else if (localStorage.getItem("isTeacher")) {
        navigate("/");
        window.location.reload();
      } else {
        navigate("/");
        window.location.reload();
      }
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="bg-transparent border-0 text-dark">
        Log In
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>

        <div class="modal-body">
          <div class="contact-form-action">
            <form method="post">
              <div class="input-box">
                <label class="label-text">Email</label>
                <div class="form-group">
                  <span class="la la-user form-icon"></span>

                  <input
                    class="form-control"
                    type="text"
                    name="text"
                    placeholder="Type your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div class="input-box">
                <label class="label-text">Password</label>
                <div class="form-group mb-2">
                  <span class="la la-lock form-icon"></span>
                  <input
                    class="form-control"
                    type="password"
                    name="text"
                    placeholder="Type password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="custom-checkbox mb-0">
                  </div>
                  <p class="forgot-password">
                  <a href="recover">Forgot Password?</a>
              </p>
                </div>
              </div>
            
              <div class="btn-box pt-3 pb-4">
                <button
                  type="button"
                  class="theme-btn w-100"
                  onClick={loginUser}
                >
                  Login Account
                </button>
              </div>            
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Login;
