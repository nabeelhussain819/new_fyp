import React from "react";
import logo1 from "../../../../Assets/logo.png";
import { Link } from "react-router-dom";
import Logout from "../../../../Components/Logout";

const Sidebar = () => {
  return (
    <div class="sidebar-nav bg-warning ">
      <div class="sidebar-nav-body">
        <div class="side-menu-close">
          <i class="la la-times"></i>
        </div>
        <div class="author-content">
          <div class="d-flex align-items-center">
            <div class="author-img avatar-sm">
              <img src={logo1} alt="testimonial image" />
            </div>
            <div class="author-bio">
              <h4 class="author__title">{localStorage.getItem("data")}</h4>
            </div>
          </div>
        </div>
        <div class="sidebar-menu-wrap ">
          <ul class="sidebar-menu toggle-menu list-items">
            <li class="page-active text-light">
              <Link to="dashboard">
                <i class="la la-dashboard mr-2"></i>Dashboard
              </Link>
            </li>
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
              <li>
                <Link to="profile">
                  <i class="la la-area-chart mr-2 text-color-3"></i>Profile
                </Link>
              </li>
            <hr />
            <li className="mt-4 col-lg-12">
              <Logout />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
