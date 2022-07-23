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

  return (
    <>
      <header className="header-wrapper hidden-print wrapper">
        <header className="header-area ">
          <div className="header-top-bar">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="header-top-content">
                    <div className="header-left">
                      <ul className="list-items">
                        <li>
                          <a href="#">
                            <i className="la la-phone mr-1"></i>(123) 123-456
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="la la-envelope mr-1"></i>
                            hnabeel570@gmail.com
                          </a>
                        </li>
                        <li>
                          <Login />
                        </li>
                        <li>
                          <Link to="signup">SIGN UP</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header-menu-wrapper sticky-top padding-right-100px padding-left-100px">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="menu-wrapper">
                    <div className="logo">
                      <Link to="/">
                        <img
                          className="img-responsive"
                          src={logo1}
                          alt="logo.jpg"
                          style={{ width: "150px" }}
                        />
                      </Link>
                      <div className="menu-toggler">
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
                    <div className="right main-menu-content mt-4">
                      <nav>
                        <ul>
                          <li>
                            <Link to="/">HOME</Link>
                          </li>
                          <li>
                            <Link to="/">
                              PAGES
                              <ul className="dropdown-menu-item">
                                <li>
                                  <Link to="/teacher">TEACHERS</Link>
                                </li>
                                <li>
                                  <Link to="/course">COURSES</Link>
                                </li>
                                <li>
                                  <Link to="/program">PROGRAMS</Link>
                                </li>
                                <li>
                                  <Link to="/department">DEPARTMENT</Link>
                                </li>
                              </ul>
                            </Link>
                          </li>
                          <li>
                            <Link to="/blog">GALLERY</Link>
                          </li>
                          <li>
                            <Link to="/about">ABOUT US</Link>
                          </li>
                          <li>
                            <Link to="/contact">CONTACT US</Link>
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
        <header className="header-wrapper">
          <div className="header-nav d-xl-none">
            <div className="container">
              <div className="header-nav-wrapper d-md-flex d-sm-flex d-xl-flex d-lg-flex justify-content-between">
                <div className="header-static-nav text-light">
                  <p>Welcome you to T&S Evaluation System!</p>
                </div>
                <div className="header-menu-nav">
                  <ul>
                    <li className="p-2">
                      <Link to="/" className="text-light">
                        Home
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link to="/teacher" className="text-light">
                        Teachers
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link to="/course" className="text-light">
                        Courses
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link to="/program" className="text-light">
                        Programs
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link to="/department" className="text-light">
                        Department
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link to="about" className="text-light">
                        About
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link to="blog" className="text-light">
                        Gellery
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link to="contact" className="text-light">
                        Contact
                      </Link>
                    </li>
                    <li className="p-2">
                      <Link to="signup" className="text-light">
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
