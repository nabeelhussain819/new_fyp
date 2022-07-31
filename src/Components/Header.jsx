import React, { useState } from "react";
import logo from "../Assets/logo.png";
import logo1 from "../Assets/logo-3.png";

import logo2 from "../Assets/logo-4.png";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Logout from "./Logout";
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  const [show, setShow] = useState(false);
  const [style, setStyle] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div id="sticky-wrapper" class="sticky-wrapper " ><nav class="navbar  navbar-expand-lg" >
            <div class="container shadow black">
                <button class="navbar-toggler  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <Link to="/"  class="navbar-brand mx-auto mx-lg-0">
                        <img
                          className="img-responsive go"
                          src={logo1}
                          alt="logo.jpg"
                          style={{ width: "150px" }}
                        />
                        <img
                          className="img-responsive go1"
                          src={logo2}
                          alt="logo.jpg"
                          style={{ width: "150px" }}
                        />
                      </Link>

                <div class="d-flex align-items-center d-lg-none ">
                <Dropdown >
                          <Dropdown.Toggle variant="light" id="dropdown-basic" className="mt-1 ">
                          Pages
                          </Dropdown.Toggle>

                          <Dropdown.Menu className="black1">
                          <Dropdown.Item>
                              <Link to="/course">Course</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/program">Program</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/department">Department</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/teacher">teachers</Link>
                            </Dropdown.Item>
                          
                            <Dropdown.Item>
                       <Register />
                            </Dropdown.Item>
                            <Dropdown.Item>
                            <Login />
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                   
                </div>

                <div class="navbar-collapse collapse" id="navbarNav" >
                    <ul class="navbar-nav  ms-lg-5">
                        <li class="nav-item">
                            <a class="nav-link click-scroll active" href="/">Home</a>                      
                        </li>

                        <li class="nav-item">
                            <a class="nav-link click-scroll inactive" href="#section_2">About</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link click-scroll inactive" href="#section_3">Services</a>
                        </li>
                        

                        <li class="nav-item">
                            <a class="nav-link click-scroll inactive" href="#section_5">Contact</a>
                        </li>
                    </ul>
                  
                    <div class="d-lg-flex align-items-center d-none ms-auto">
                    <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdown-basic" className="mt-1 border-0 navColor" style={{backgroundColor:"transparent"}}>
                          PAGES
                          </Dropdown.Toggle>

                          <Dropdown.Menu >
                          <Dropdown.Item>
                              <Link to="/course">Course</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/program">Program</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/department">Department</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/teacher">teachers</Link>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                   
                        <Login />
                       <Register />
                     
                    </div>
                </div>

            </div>
        </nav></div>
      
    </>
  );
};

export default Header;
