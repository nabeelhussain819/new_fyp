import React, { useState } from "react";
import logo from "../Assets/logo.png";
import logo1 from "../Assets/logo.png";
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

  return (
    <div>
      <header class="header-wrapper hidden-print">
        <header class="header-area">
          <div class="header-top-bar padding-right-100px padding-left-100px ">
            <div class="container-fluid">
              <div class="row align-items-center">
                <div class="col-lg-6">
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
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="header-top-content">
                    <div class="header-right d-flex align-items-center justify-content-end">
                      <div class="header-right-action">
                        {!localStorage.getItem("token") ? (
                          <>
                            <Login />
                            <Link to="signup" className="theme-btn btn-lg">
                              Sign Up
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link
                              to="user-panel"
                              className="theme-btn btn-lg mr-2"
                            >
                              Dashboard
                            </Link>
                            <Logout />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header-menu-wrapper sticky-top padding-right-100px padding-left-100px bg-warning">
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
                          style={{width:"200px"}}
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
                    <div class="main-menu-content">
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
        <header class="header-wrapper">
          <div class="header-nav d-xl-none">
            <div class="container">
              <div class="header-nav-wrapper d-md-flex d-sm-flex d-xl-flex d-lg-flex justify-content-between">
                <div class="header-static-nav">
                  <p>Welcome you to Rozer Store!</p>
                </div>
                <div class="header-menu-nav">
                  <ul class="menu-nav">
                    <li className="p-2">
                      <Link to="/" class="color-dark">
                        Home
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link to="departmnet" class="color-dark">
                        Department
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link to="lprogram" class="color-dark">
                        Programs
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link to="course" class="color-dark">
                        Courses
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link to="about" class="color-dark">
                        About
                      </Link>
                    </li>
                    <li className="p-2">
                    <Link to="signup" className="theme-btn btn-lg">
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
    </div>
  );
};

export default Header;
