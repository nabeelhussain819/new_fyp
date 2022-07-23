import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { doLogin, updateDataInStore } from "../../setup/service/Auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Error from "../../Components/Utils/Messages/Error";
import Input from "../../Components/UI/Forms/Input";

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
      return;
    }

    updateDataInStore(data);
    toast.success("Logged In Successfully");

    if (localStorage.getItem("isAdmin")) {
      navigate("/");
      window.location.reload();
    }
    if (localStorage.getItem("isTeacher")) {
      navigate("/");
      window.location.reload();
    }
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="bg-transparent border-0 text-light"
      >
        LOG IN
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false} centered >
        <div className="modal-content ">
          <div className="modal-header">
            <div>
              <h5 className="modal-title title" id="exampleModalLongTitle2">
                Login
              </h5>
              <p className="font-size-14 text-light">Hello! Welcome to your account</p>
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
                <Input
                  title="Email"
                  type="email"
                  name="email"
                  hook={register("email")}
                  errors={errors.email?.message}
                  icon="la la-user form-icon"
                  placeholder="Type your email"
                  hasIcon
                />
                <Input
                  title="Password"
                  type="password"
                  name="password"
                  hook={register("password")}
                  errors={errors.password?.message}
                  icon="la la-lock form-icon"
                  placeholder="Type password"
                  hasIcon
                />

                <div className="d-flex align-items-center justify-content-between">
                  <div className="custom-checkbox mb-0"></div>
                  <p className="forgot-password ">
                    <a href="recover">Forgot Password?</a>
                  </p>
                </div>

                <div className="btn-box pt-3 pb-4">
                  <button type="submit" className="theme-btn w-100">
                    Login Account
                  </button>
                </div>
                <div className="action-box text-center">
                  <p className="font-size-14 text-light">
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
