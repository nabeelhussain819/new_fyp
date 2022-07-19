import React from "react";
import logo1 from "../../../Assets/logo.png";
import { Link } from "react-router-dom";
import Logout from "../../../Components/Logout";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar-nav bg-warning">
        <div className="sidebar-nav-body">
          <div className="side-menu-close">
            <i className="la la-times"></i>
          </div>
          <div className="author-content">
            <div className="d-flex align-items-center">
              <div className="author-img avatar-sm">
                <img src={logo1} alt="testimonial image" />
              </div>
              <div className="author-bio">
                <h4 className="author__title">{localStorage.getItem("data")}</h4>
              </div>
            </div>
          </div>
          <div className="sidebar-menu-wrap">
            <ul className="sidebar-menu toggle-menu list-items">
              <li className="page-active">
                <Link to="dashboard">
                  <i className="la la-dashboard mr-2"></i>Dashboard
                </Link>
              </li>
              <li >
                <Link to="qec">
                  <i className="la la-dashboard mr-2"></i>Evaluation
                </Link>
              </li>
              <li>
                <Link to="departments">
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
                <Link to="semesters">
                  <i className="la la-heart mr-2 text-color-3"></i>Semesters
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
              <li>
                <Link to="profile">
                  <i className="la la-area-chart mr-2 text-color-3"></i>Profile
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
    </div>
  );
};

export default Sidebar;
