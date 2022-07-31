import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function ForgetPass(props){
  const [pass, setPass] = useState("");
  const [cPass, setCPass] = useState("");
  const navigate = useNavigate();

  const Done = async () => {
    if (cPass !== pass) {
      toast.error("Both Password Must be Similar");
    } else if (cPass.length < 6 || pass.length < 6) {
      toast.error("Password Must Be Maximum Of 6 digits");
    } else {
      const res = await fetch("http://localhost:5000/forget", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pass,
          id:JSON.parse(localStorage.getItem("forgetId"))
        }),
      });
      const data = await res.json();
      if (res.status === 400 || !data) {
        toast.error(data.error);
      } else {
        localStorage.removeItem("forgetId")
        toast.success("Password Updated Successfully");
        navigate("/");
      }
    }
  };
    return(<>
    <div className=" section-padding">
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-7 mx-auto ">
          <div className="form-box ">
            <div className="form-title-wrap">
              <h3 className="title">Recover Password</h3>
            </div>
            <div className="form-content ">
              <div className="contact-form-action">
                <form method="post">
                  <div className="input-box">
                    <label className="label-text">New Password</label>
                    <div className="form-group">
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
  </div></>)
}