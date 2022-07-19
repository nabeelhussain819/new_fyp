import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { doLogin } from "../../setup/service/Auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().max(32).required(),
  })
  .required();

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const loginUser = async (e) => {
    const res = await doLogin(e);
    const data = await res.json();

    if (res.status === 400 || !data || res.status === 401) {
      toast.warning(data.message);
    }

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
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="bg-transparent border-0 text-dark"
      >
        LOG IN
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false} centered>
        <div className="modal-content">
          <div className="modal-header">
            <div>
              <h5 className="modal-title title" id="exampleModalLongTitle2">
                Login
              </h5>
              <p className="font-size-14">Hello! Welcome to your account</p>
            </div>
            <button
              type="button"
              className="la la-close border-0 bg-transparent"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setShow(false)}
            ></button>
          </div>
          <div className="modal-body">
            <div className="contact-form-action">
              <form
                method="post"
                className="MultiFile-intercepted"
                onSubmit={handleSubmit(loginUser)}
              >
                <div className="input-box">
                  <label className="label-text">Email</label>
                  <div className="form-group">
                    <span className="la la-user form-icon"></span>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Type your email"
                      {...register("email")}
                    />
                    <p className="text-danger m-1">{errors.email?.message}</p>
                  </div>
                </div>
                <div className="input-box">
                  <label className="label-text">Password</label>
                  <div className="form-group mb-2">
                    <span className="la la-lock form-icon"></span>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Type password"
                      {...register("password")}
                    />
                    <p className="text-danger m-1">{errors.password?.message}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="custom-checkbox mb-0"></div>
                    <p className="forgot-password">
                      <a href="recover">Forgot Password?</a>
                    </p>
                  </div>
                </div>
                <div className="btn-box pt-3 pb-4">
                  <button type="submit" className="theme-btn w-100">
                    Login Account
                  </button>
                </div>
                <div className="action-box text-center">
                  <p className="font-size-14">
                    {" "}
                    Don't Have Any Account ?{" "}
                    <Link to="/signup">Register Now </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Login;
