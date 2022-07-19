import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function ChangePass() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [u_id, setUid] = useState("");
  const [pass, setPass] = useState("");
  const [cPass, setCPass] = useState("");
  const navigate = useNavigate();
  const check = async () => {
    const res = await fetch("https://fyptes.herokuapp.com/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        u_id,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.error(data.error);
    } else {
      setShow(true);
      toast.success("Account Verified!");
    }
  };
  const Done = async () => {
    if (cPass !== pass) {
      toast.error("Both Password Must be Similar");
    } else if (cPass.length < 6 || pass.length < 6) {
      toast.error("Password Must Be Maximum Of 6 digits");
    } else {
      const res = await fetch("https://fyptes.herokuapp.com/forget", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pass,
          email,
          u_id,
        }),
      });
      const data = await res.json();
      if (res.status === 400 || !data) {
        toast.error(data.error);
      } else {
        setShow(true);
        toast.success("Password Updated Successfully");
        navigate("/");
      }
    }
  };

  return (
    <>
      <section className="breadcrumb-area bread-bg">
        <div className="breadcrumb-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <h2 className="sec__title text-white">Recover Password</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="breadcrumb-list text-right">
                  <ul className="list-items">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Recover Password</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bread-svg-box">
          <svg
            className="hero-svg"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
          >
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
          </svg>
        </div>
      </section>
      <section className="contact-area padding-top-40px ">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="form-box">
                <div className="form-title-wrap">
                  <h3 className="title">Check Your Account</h3>
                  <p className="font-size-15 pt-2">
                    Enter the email of your account to reset password. Then you
                    will receive a link to email to reset the password.If you
                    have any issue about reset password
                    <a href="contact.html" className="text-color">
                      contact us
                    </a>
                  </p>
                </div>
                <div className="form-content ">
                  <div className="contact-form-action">
                    <form method="post">
                      <div className="input-box">
                        <label className="label-text">Your Email</label>
                        <div className="form-group">
                          <span className="la la-envelope-o form-icon"></span>
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email address"
                          />
                        </div>
                      </div>
                      <div className="input-box">
                        <label className="label-text">Your Unviersity ID</label>
                        <div className="form-group">
                          <span className="la la-envelope-o form-icon"></span>
                          <input
                            className="form-control"
                            type="text"
                            name="email"
                            onChange={(e) => setUid(e.target.value)}
                            placeholder="Enter Your University ID"
                          />
                        </div>
                      </div>
                      <div className="btn-box">
                        <button type="button" className="theme-btn" onClick={check}>
                          Check Account
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {show && (
        <section className="contact-area ">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mx-auto">
                <div className="form-box">
                  <div className="form-title-wrap">
                    <h3 className="title">Recover Password</h3>
                  </div>
                  <div className="form-content ">
                    <div className="contact-form-action">
                      <form method="post">
                        <div className="input-box">
                          <label className="label-text">New Password</label>
                          <div className="form-group">
                            <span className="la la-user-o form-icon"></span>
                            <input
                              className="form-control"
                              type="password"
                              name="email"
                              onChange={(e) => setPass(e.target.value)}
                              placeholder="Enter new Password"
                            />
                          </div>
                        </div>
                        <div className="input-box">
                          <label className="label-text">Confirm New Password</label>
                          <div className="form-group">
                            <span className="la la-user-o form-icon"></span>
                            <input
                              className="form-control"
                              type="password"
                              name="email"
                              onChange={(e) => setCPass(e.target.value)}
                              placeholder="Confirm Your Password"
                            />
                          </div>
                        </div>
                        <div className="btn-box">
                          <button
                            type="button"
                            className="theme-btn"
                            onClick={Done}
                          >
                            Reset Password
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
