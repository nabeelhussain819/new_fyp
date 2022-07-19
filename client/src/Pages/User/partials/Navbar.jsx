import React, { useState } from "react";
import logo1 from "../../../Assets/logo-6.png";
import { Link } from "react-router-dom";
import Logout from "../../../Components/Logout";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="wrapper ">
        <div className="multi_color_border "></div>
        <div className="top_nav ">
          <div className="left">
            <div className="logo">
              <img
                className="img-responsive"
                src={logo1}
                alt="logo.jpg"
                style={{ width: "150px" }}
              />
            </div>
          </div>
          <div className="menu-toggler">
            {show == false ? (
              <button
                className="bg-transparent border-0"
                onClick={() => setShow(true)}
              >
                <i className="la la-bars"></i>
              </button>
            ) : (
              <>
                <button
                  className="bg-transparent border-0"
                  onClick={() => setShow(false)}
                >
                  <i className="la la-bars"></i>
                </button>
              </>
            )}
          </div>
          <div className="right main-menu-content">
            <ul>
              <li>
                <Link to="dashboard">
                  <i className="la la-area-chart mr-2 text-color-3"></i>
                  <span>Dashboard</span>
                </Link>
              </li>

              <li>
                <Link to="profile">
                  <span className="font-size-16 mb-2">
                    {localStorage.getItem("data")}
                  </span>
                </Link>
              </li>
              <li>
                <a href="recover">Change Password?</a>
              </li>
              <li className="mt-2">
                <Logout />
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom_nav header-top-bar">
          <ul className="list-items">
            <li>
              <Link to="qec">
                <i className="la la-dashboard mr-2"></i>Evaluation
              </Link>
            </li>
            <li>
              <Link to="departments ">
                <i className="la la-shopping-cart mr-2 text-color"></i>Departments
              </Link>
            </li>
            <li>
              <Link to="programs">
                <i className="la la-list mr-2 text-color-2"></i>Programs
              </Link>
            </li>
            <li>
              <Link to="teachers">
                <i className="la la-users mr-2 text-color-3"></i>Teachers
              </Link>
            </li>
            <li>
              <Link to="Courses">
                <i className="la la-text-width mr-2 text-color-3"></i>Courses
              </Link>
            </li>
            <li>
              <Link to="complains">
                <i className="la la-area-chart mr-2 text-color-3"></i>Complians
              </Link>
            </li>
            <li>
              <Link to="comments">
                <i className="la la-area-chart mr-2 text-color-3"></i>Comments
              </Link>
            </li>
            {localStorage.getItem("isTeacher") && (
              <li>
                <Link to="students">
                  <i className="la la-area-chart mr-2 text-color-3"></i>Students
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      {show && (
        <header className="header-wrapper bg-dark pt-3">
          <div className="header-nav d-xl-none">
            <div className="container">
              <div className="header-nav-wrapper d-md-flex d-sm-flex d-xl-flex d-lg-flex justify-content-between">
                <div className="header-menu-nav">
                  <ul>
                    <li className="pb-2">
                      <Link to="qec">
                        <i className="la la-dashboard mr-2"></i>{" "}
                        <span>Evaluation</span>
                      </Link>
                    </li>
                    <li className="pb-2">
                      <Link to="dashboard">
                        <i className="la la-area-chart mr-2 text-color-3"></i>
                        <span>Dashboard</span>
                      </Link>
                    </li>
                    <li className="pb-2">
                      <Link to="departments ">
                        <i className="la la-shopping-cart mr-2 text-color"></i>{" "}
                        <span>Departments</span>
                      </Link>
                    </li>
                    <li className="pb-2">
                      <Link to="programs">
                        <i className="la la-list mr-2 text-color-2"></i>
                        <span>Programs</span>
                      </Link>
                    </li>
                    <li className="pb-2">
                      <Link to="teachers">
                        <i className="la la-users mr-2 text-color-3"></i>
                        <span>Teachers</span>
                      </Link>
                    </li>
                    <li className="pb-2">
                      <Link to="Courses">
                        <i className="la la-text-width mr-2 text-color-3"></i>
                        <span>Courses</span>
                      </Link>
                    </li>
                    <li className="pb-2">
                      <Link to="complains">
                        <i className="la la-area-chart mr-2 text-color-3"></i>
                        <span>Complians</span>
                      </Link>
                    </li>
                    <li className="pb-2">
                      <Link to="comments">
                        <i className="la la-area-chart mr-2 text-color-3"></i>
                        <span>Comments</span>
                      </Link>
                    </li>
                    {localStorage.getItem("isTeacher") && (
                      <li className="pb-2">
                        <Link to="students">
                          <i className="la la-area-chart mr-2 text-color-3"></i>
                          Students
                        </Link>
                      </li>
                    )}
                    <li className="pb-2">
                      <Link to="profile">
                        <i className="la la-area-chart mr-2 text-color-3"></i>
                        <span>Profile</span>
                      </Link>
                    </li>
                    <li className="pb-2">
                      <Logout />
                    </li>
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

export default Navbar;
