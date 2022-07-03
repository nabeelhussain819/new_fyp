import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReadDepartment } from "../../Api/Department";
import { GetSession } from "../../Api/Department";
import smiu from '../../Assets/smiu2.jpg'
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
  if(all == true){
    if(localStorage.getItem("isTeacher") ||localStorage.getItem("user") ){
      alert("you want To Sign Up!")
      localStorage.clear()
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
      setAll(false)
      setShow(true)
      if(localStorage.getItem("isTeacher", data._id)){
        setShow(true)
      }   
      toast.success("register Successfully");
      toast.warning("Please Fill the Extended Form");
    }
  };
 
 
  return (
    <div>
      <section class="user-area padding-top-100px padding-bottom-60px">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h3 class="title font-size-24"> Sign Up Now</h3>
              <div class="card-item user-card card-item-list mt-4 mb-0">
                <div class="card-body">
                  <h3 class="card-title">Your Information</h3>
                  
                  <p class="card-meta"></p>
                  <div class="d-flex justify-content-between pt-3">
                    <ul class="list-items list-items-2 flex-grow-1">
                      <li>
                        <span>Email:</span>{" "}
                        <input
                          class="form-control"
                          type="text"
                          name="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Type your Email"
                          required
                        />
                      </li>
                      <li>
                        <span>Phone:</span>{" "}
                        <input
                          class="form-control"
                          type="number"
                          name="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Type your Phone"
                          required
                        />
                      </li>
                      <li>
                        <span>Full Name:</span>{" "}
                        <input
                          class="form-control"
                          type="text"
                          name="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Type your username"
                          required
                        />
                      </li>
                      <li>
                        <span>University ID:</span>{" "}
                        <input
                          class="form-control"
                          type="text"
                          name="text"
                          value={u_id}
                          onChange={(e) => setUid(e.target.value)}
                          placeholder="Type your University ID"
                          required
                        />
                      </li>
                      <li>
                        <span>Password:</span>{" "}
                        <input
                          class="form-control"
                          type="password"
                          name="text"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Type your Password"
                          required
                        />
                      </li>
                    </ul>
                    <ul class="list-items flex-grow-1 pl-4">
                      <li>
                        <h3 class="title">
                          Verification of your Entered Feilds
                        </h3>
                      </li>
                      <li class="d-flex justify-content-between align-items-center">
                        <span class="color-text-2 font-weight-medium mr-2">
                          Name
                        </span>
                        <span class="theme-btn theme-btn-small theme-btn-rgb ">
                          {name}
                        </span>
                      </li>
                      <li class="d-flex justify-content-between align-items-center">
                        <span class="color-text-2 font-weight-medium mr-2">
                          Email
                        </span>
                        <span class="theme-btn theme-btn-small theme-btn-rgb">
                          {email}
                        </span>
                      </li>
                      <li class="d-flex justify-content-between align-items-center">
                        <span class="color-text-2 font-weight-medium mr-2">
                          ID Number
                        </span>
                        <span class="theme-btn theme-btn-small theme-btn-rgb">
                          {u_id}
                        </span>
                      </li>
                      <li class="d-flex justify-content-between align-items-center">
                        <span class="color-text-2 font-weight-medium mr-2">
                          Phone
                        </span>
                        <span class="theme-btn theme-btn-small theme-btn-rgb">
                          {phone}
                        </span>
                      </li>                    
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={registerUser}
                    className="theme-btn w-100"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </div>  
         
          {show &&
         <ExtendedForm/>        
          }
          
        </div>
      </section>
    </div>
  );
};

export default Register;
