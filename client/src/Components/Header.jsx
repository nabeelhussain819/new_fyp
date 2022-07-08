import React, { useState } from "react";
import logo from "../Assets/logo.png";
import logo1 from "../Assets/logo-5.png";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Logout from "./Logout";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (<>
       
      <header class="header-wrapper hidden-print wrapper">
        <header class="header-area ">
        <div class="header-top-bar">
            <div class="container-fluid">
              <div class="row align-items-center">
                <div class="col-lg-12">
                  <div class="header-top-content">
                    <div class="header-left">
                      <ul class="list-items">
                        <li>
                          <a href="#">
                            <i class="la la-phone mr-1"></i>(123) 123-456
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="la la-envelope mr-1"></i>
                            hnabeel570@gmail.com
                          </a>
                        </li>
                        <li>
                        <Login />
                        </li>
                        <li>
                        <Link to="signup">
                              Sign Up
                            </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div class="header-menu-wrapper sticky-top padding-right-100px padding-left-100px bg-info">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12">
                  <div class="menu-wrapper">
                    <div class="logo">
                      <Link to="/">
                        <img
                          class="img-responsive"
                          src={logo1}
                          alt="logo.jpg"
                          style={{width:"150px"}}
                        />
                      </Link>
                      <div class="menu-toggler">
                        {show == false ? (
                          <Button
                            className="bg-transparent border-0"
                            onClick={handleShow}
                          >
                            <FaChevronDown size={12} />
                          </Button>
                        ) : (
                          <Button
                            className="bg-transparent border-0"
                            onClick={handleClose}
                          >
                            <FaChevronUp />
                          </Button>
                        )}
                      </div>
                    </div>
                    <div class="right main-menu-content mt-4">
                      <nav>
                        <ul>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/">
                              Pages
                              <ul class="dropdown-menu-item">
                                <li>
                                  <Link to="/teacher">Teachers</Link>
                                </li>
                                <li>
                                  <Link to="/course">Courses</Link>
                                </li>
                                <li>
                                  <Link to="/program">Programs</Link>
                                </li>
                                <li>
                                  <Link to="/department">Department</Link>
                                </li>
                              </ul>
                            </Link>
                          </li>
                          <li>
                            <Link to="/blog">Gallery</Link>
                          </li>
                          <li>
                            <Link to="/about">About Us</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact Us</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </header>
        
      </header>
      {show && (
        <header class="header-wrapper bg-info">
          <div class="header-nav d-xl-none">
            <div class="container">
              <div class="header-nav-wrapper d-md-flex d-sm-flex d-xl-flex d-lg-flex justify-content-between">
                <div class="header-static-nav">
                  <p>Welcome you to T&S Evaluation System!</p>
                </div>
                <div class="header-menu-nav">
                  <ul >
                    <li className="p-2">
                      <Link to="/" class="text-white">
                        Home
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link to="/teacher" class="text-white">Teachers</Link>
                    </li>
                    <li className="p-2">
                      <Link to="/course" class="text-white">Courses</Link>
                    </li>
                    <li className="p-2">
                      <Link to="/program" class="text-white">Programs</Link>
                    </li>
                    <li className="p-2">
                      <Link to="/department" class="text-white">Department</Link>
                    </li>
                    <li className="p-2">
                      <Link to="about" class="text-white">
                        About
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link to="blog" class="text-white">
                        Gellery
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link to="contact" class="text-white">
                        Contact
                      </Link>
                    </li>
                    <li className="p-2">
                    <Link to="signup" class="text-white">
                              Sign Up
                            </Link>
                    </li>
                    <Login />    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
    
  );
};

export default Header;
