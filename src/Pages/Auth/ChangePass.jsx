import React, { useState,useRef  } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';
export default function ChangePass() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [u_id, setUid] = useState("");
  const form = useRef();
  const check = async () => {
  
    const res = await fetch("http://localhost:5000/check", {
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
      console.log(data)
      localStorage.setItem("forgetId",JSON.stringify(data))
      emailjs.sendForm('gmail', 'template_0r4t64g', form.current, '5oXuwAxMmEQAP5LSx')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      setShow(true);
      toast.success("Account Verified!");
      toast.info("Email Has Been Sent");
    }
  };

  return (
    <>
      <section className="contact-area section-padding ">
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="form-box shadow-lg">
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
                    <form method="post" ref={form}>
                      <div className="input-box">
                        <label className="label-text">Your Email</label>
                        <div className="form-group">
                          
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
                        {!show ? <button type="button" className="theme-btn" onClick={check}>
                          Check Account
                        </button>: <p className="text-dark">Please Check Your Email For Verification</p>}
                        
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
}
