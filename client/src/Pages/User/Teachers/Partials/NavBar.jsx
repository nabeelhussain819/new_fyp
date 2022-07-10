import React, { useState } from "react";
import logo1 from "../../../../Assets/logo-6.png";
import { Link } from "react-router-dom";
import Logout from "../../../../Components/Logout";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div class="wrapper">
        <div class="multi_color_border "></div>
        <div class="top_nav">
          <div class="left">
            <div class="logo">
              <img
                class="img-responsive"
                src={logo1}
                alt="logo.jpg"
                style={{ width: "150px" }}
              />
            </div>
          </div>
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
          <div class="right main-menu-content">
            <ul>
              <li>
                <Link to="dashboard">
                  <i class="la la-area-chart mr-2 text-color-3"></i>
                  <span className="text-white">Dashboard</span>
                </Link>
              </li>

              <li>
                <Link to="profile">
                  <span class="font-size-16 mb-2">
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
        <div class="bottom_nav header-top-bar shadow-lg">
          <ul className="list-items">
            <li>
              <Link to="departments ">
                <i class="la la-shopping-cart mr-2 text-color"></i>Departments
              </Link>
            </li>
            <li>
              <Link to="programs">
                <i class="la la-list mr-2 text-color-2"></i>Programs
              </Link>
            </li>
            <li>
              <Link to="teachers">
                <i class="la la-users mr-2 text-color-3"></i>Teachers
              </Link>
            </li>
            <li>
              <Link to="Courses">
                <i class="la la-text-width mr-2 text-color-3"></i>Courses
              </Link>
            </li>
            <li>
              <Link to="complains">
                <i class="la la-area-chart mr-2 text-color-3"></i>Complians
              </Link>
            </li>
            <li>
              <Link to="comments">
                <i class="la la-area-chart mr-2 text-color-3"></i>Comments
              </Link>
            </li>
            <li>
              <Link to="qec">
                <i class="la la-area-chart mr-2 text-color-3"></i>QEC Result
              </Link>
            </li>
            <li>
              <Link to="students">
                <i class="la la-area-chart mr-2 text-color-3"></i>Students
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {show && (
        <header class="header-wrapper bg-dark pt-3">
          <div class="header-nav d-xl-none">
            <div class="container">
              <div class="header-nav-wrapper d-md-flex d-sm-flex d-xl-flex d-lg-flex justify-content-between">
                <div class="header-menu-nav">
                  <ul>
                    <li className="text-white">
                      <li>
                        <Link to="dashboard">
                          <i class="la la-area-chart mr-2 text-color-3"></i>
                          <span className="text-white">Dashboard</span>
                        </Link>
                      </li>
                      <Link to="departments ">
                        <i class="la la-shopping-cart mr-2 text-color"></i>{" "}
                        <span className="text-white">Departments</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="programs">
                        <i class="la la-list mr-2 text-color-2"></i>
                        <span className="text-white">Programs</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="teachers">
                        <i class="la la-users mr-2 text-color-3"></i>
                        <span className="text-white">Teachers</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="Courses">
                        <i class="la la-text-width mr-2 text-color-3"></i>
                        <span className="text-white">Courses</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="complains">
                        <i class="la la-area-chart mr-2 text-color-3"></i>
                        <span className="text-white">Complians</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="comments">
                        <i class="la la-area-chart mr-2 text-color-3"></i>
                        <span className="text-white">Comments</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="qec">
                        <i class="la la-area-chart mr-2 text-color-3"></i>
                        <span className="text-white">QEC Result</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="students">
                        <i class="la la-area-chart mr-2 text-color-3"></i>
                        <span className="text-white">Students</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="profile">
                        <i class="la la-area-chart mr-2 text-color-3"></i>
                        <span className="text-white">Profile</span>
                      </Link>
                    </li>
                    <li>
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
