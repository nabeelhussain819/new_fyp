import React, { useState } from "react";
import logo1 from "../../../Assets/logo.jpg";
import { Link } from "react-router-dom";
import Logout from "../../../Components/Logout";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div class="dashboard-nav bg-light">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="menu-wrapper">
                <div class="logo mr-5">
                  <a href="index.html">
                    <img src={logo1} alt="logo" />
                  </a>
                  <div class="menu-toggler">
                    {show == false ? (
                      <button
                        className="bg-transparent border-0"
                        onClick={() => setShow(true)}
                      >
                        <i class="la la-bars"></i>
                      </button>
                    ) : (
                      <>
                        <button
                          className="bg-transparent border-0"
                          onClick={() => setShow(false)}
                        >
                          <i class="la la-bars"></i>
                        </button>
                      </>
                    )}
                  </div>
                </div>
                {show && (
                  <header class="header-wrapper">
                    <div class="header-nav d-xl-none">
                      <div class="container">
                        <div class="header-nav-wrapper d-md-flex d-sm-flex d-xl-flex d-lg-flex justify-content-between">
                          <div class="header-menu-nav">
                            <ul class="menu-nav">
                              <li className="p-2">
                                <Link to="login.html" class="text-light">
                                  Home
                                </Link>
                              </li>

                              <li className="p-2">
                                <Link to="login.html" class="text-light">
                                  Department
                                </Link>
                              </li>
                              <li className="p-2">
                                <Link to="login.html" class="text-light">
                                  Programs
                                </Link>
                              </li>
                              <li className="p-2">
                                <Link to="login.html" class="text-light">
                                  Courses
                                </Link>
                              </li>
                              <li className=" p-2">
                                <Link to="login.html" class="text-light">
                                  About
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Logout />
                  </header>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
