import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReadDepartment } from "../../Api/Department";
import { GetSession } from "../../Api/Department";
import smiu from "../../Assets/smiu2.jpg";
import ExtendedForm from "./ExtendedRegister";
const Register = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [u_id, setUid] = useState("");
  const [all, setAll] = useState(true);
  //   const filterDepart = depart.filter((data) => data.name.includes(search));
  if (all == true) {
    if (localStorage.getItem("isTeacher") || localStorage.getItem("user")) {
      alert("you want To Sign Up!");
      localStorage.clear();
    }
  }

  const registerUser = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        u_id,
        phone,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.error(data.error);
    } else {
      {
        data.isTeacher === true
          ? localStorage.setItem("isTeacher", data._id)
          : localStorage.setItem("user", data._id);
      }
      setAll(false);
      setShow(true);
      if (localStorage.getItem("isTeacher", data._id)) {
        setShow(true);
      }
      toast.success("register Successfully");
      toast.warning("Please Fill the Extended Form");
    }
  };

  return (
    <>
      <section className="listing-form section--padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              {!show && (
                <>
                  <div class="listing-header pb-4">
                    <h3 class="title font-size-28 pb-2">
                      SignUp To T&S Evaluation Form
                    </h3>
                    <p class="font-size-14">
                      Enter Your Valid Information Then Click On Next
                    </p>
                    <p class="font-size-14">
                      You Will Move To Anoter Step Where You Enter Your
                      Information About Yourself
                    </p>
                  </div>

                  <div class="form-box">
                    <div class="form-title-wrap">
                      <h3 class="title">
                        <i class="la la-user mr-2 text-gray"></i>Your
                        information
                      </h3>
                    </div>
                    <div class="form-content contact-form-action">
                      <form method="post" class="row MultiFile-intercepted">
                        <div class="col-lg-6 responsive-column">
                          <div class="input-box">
                            <label class="label-text">Your Email</label>
                            <div class="form-group">
                              <span class="la la-user form-icon"></span>
                              <input
                                class="form-control"
                                type="text"
                                name="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Type your Email"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 responsive-column">
                          <div class="input-box">
                            <label class="label-text">Your Phone Number</label>
                            <div class="form-group">
                              <span class="la la-envelope-o form-icon"></span>
                              <input
                                class="form-control"
                                type="number"
                                name="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Type your Phone"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 responsive-column">
                          <div class="input-box">
                            <label class="label-text">Your Full Name</label>
                            <div class="form-group">
                              <span class="la la-envelope-o form-icon"></span>
                              <input
                                class="form-control"
                                type="text"
                                name="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Type your username"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 responsive-column">
                          <div class="input-box">
                            <label class="label-text">Your Universty ID</label>
                            <div class="form-group">
                              <span class="la la-envelope-o form-icon"></span>
                              <input
                                class="form-control"
                                type="text"
                                name="text"
                                value={u_id}
                                onChange={(e) => setUid(e.target.value)}
                                placeholder="Type your University ID"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 responsive-column">
                          <div class="input-box">
                            <label class="label-text">Your Password</label>
                            <div class="form-group">
                              <span class="la la-envelope-o form-icon"></span>
                              <input
                                class="form-control"
                                type="password"
                                name="text"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Type your Password"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 responsive-column">
                          <button
                            type="button"
                            onClick={registerUser}
                            className="theme-btn w-100"
                          >
                            Create Account
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              )}
              {show && <ExtendedForm />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
