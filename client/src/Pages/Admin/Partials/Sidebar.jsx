import React from "react";
import logo1 from "../../../Assets/logo.png";
import Logout from "../../../Components/Logout";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div>
      <div class="sidebar-nav sidebar--nav hidden-print">
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
                <h4 class="author__title">ADMIN</h4>
                <span class="author__meta">Welcome to Admin Panel</span>
              </div>
            </div>
          </div>
          <div class="sidebar-menu-wrap">
            <ul class="sidebar-menu toggle-menu list-items">
              <li class="page-active">
                <Link to="dashboard">
                  <i class="la la-dashboard mr-2"></i>Dashboard
                </Link>
              </li>
              <li>
                <Link to="departments">
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
                <Link to="students">
                  <i class="la la-users mr-2 text-color-3"></i>Students
                </Link>
              </li>
              <li>
                <Link to="sessions">
                  <i class="la la-star mr-2 text-color-3"></i>Sessions
                </Link>
              </li>
              <li>
                <Link to="semesters">
                  <i class="la la-heart mr-2 text-color-3"></i>Semesters
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
                  <i class="la la-area-chart mr-2 text-color-3"></i>QEC results
                </Link>
              </li>
              <li>
                <a href="admin-dashboard-settings.html">
                  <i class="la la-cog mr-2 text-color-10"></i>Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
