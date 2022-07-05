import React from "react";
import logo1 from "../../../Assets/logo.png";
import Logout from "../../../Components/Logout";
const Header = () => {
  return (
    <div>
      <div className="dashboard-nav dashboard--nav hidden-print">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="menu-wrapper">
                <div className="logo mr-5">
                  <a href="index.html">
                    <img src={logo1} alt="testimonial image" style={{width:"200px"}}/>
                  </a>
                  <div className="menu-toggler">
                    <i className="la la-bars"></i>
                    <i className="la la-times"></i>
                  </div>
                  <div className="user-menu-open">
                    <i className="la la-user"></i>
                  </div>
                </div>

                <div className="nav-btn ml-auto">
                  <div className="notification-wrap d-flex align-items-center">
                    <div className="notification-item">
                      <div className="dropdown">
                        <a
                          href="#"
                          className="dropdown-toggle"
                          id="userDropdownMenu"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm flex-shrink-0 mr-2">
                              <img src={logo1} alt="testimonial image" />
                            </div>
                            <span className="font-size-14 font-weight-bold">
                              Royel Admin
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="notification-item ml-3">
                      <div className="dropdown">
                        <div className="d-flex align-items-center">
                          <span className="font-size-14 font-weight-bold">
                            <Logout />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
