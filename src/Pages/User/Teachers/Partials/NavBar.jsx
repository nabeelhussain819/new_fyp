import React, { useState } from "react";
import logo1 from "../../../../Assets/logo-4.png";
import { Link } from "react-router-dom";
import Logout from "../../../../Components/Logout";
import Dropdown from 'react-bootstrap/Dropdown';
const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
       <div id="sticky-wrapper" class="sticky-wrapper" >
      <nav class="navbar navbar-expand-lg" >
            <div class="container shadow-lg">

                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <Link to="/"  class="navbar-brand mx-auto mx-lg-0">
                        <img
                          className="img-responsive"
                          src={logo1}
                          alt="logo.jpg"
                          style={{ width: "150px" }}
                        />
                      </Link>

                <div class="d-flex align-items-center d-lg-none">
                <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdown-basic" className="mt-1 border-0" style={{backgroundColor:"white"}}>
                          Profile
                          </Dropdown.Toggle>

                          <Dropdown.Menu >
                          <Dropdown.Item > <Link to="profile">
                Profile
                </Link></Dropdown.Item>
              <Dropdown.Item href="recover"> Change Password?</Dropdown.Item>
              <Dropdown.Item > <Logout /></Dropdown.Item>
              <Dropdown.Item > <Link to="dashboard">
                  <span>Dashboard</span>
                </Link></Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                   
                </div>

                <div class="navbar-collapse collapse" id="navbarNav" >
                    <ul class="navbar-nav  ms-lg-5">
                        
            <li class="nav-item">
              <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdown-basic" className="mt-1 border-0" style={{backgroundColor:"white"}}>
                         Enrolled
                          </Dropdown.Toggle>

                          <Dropdown.Menu >
                          <Dropdown.Item >     <Link to="programs">
                Programs
              </Link></Dropdown.Item>
              <Dropdown.Item > <Link to="departments ">
                Departments
              </Link></Dropdown.Item>
                          </Dropdown.Menu>
              </Dropdown>
            </li>
            <li class="nav-item">
            <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdown-basic" className="mt-1 border-0" style={{backgroundColor:"white"}}>
                         Pages
                          </Dropdown.Toggle>

                          <Dropdown.Menu >
                          <Dropdown.Item >   <Link to="Courses">
               Courses
              </Link></Dropdown.Item>
              <Dropdown.Item >  <Link to="teachers">
               Teachers
              </Link></Dropdown.Item>
              <Dropdown.Item >  <Link to="students">
               Students
              </Link></Dropdown.Item>
                          </Dropdown.Menu>
              </Dropdown>
            </li>
            <li class="nav-item">
             
              <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdown-basic" className="mt-1 border-0" style={{backgroundColor:"white"}}>
                         Report
                          </Dropdown.Toggle>

                          <Dropdown.Menu >
              <Dropdown.Item ><Link to="complains">
              Complians
              </Link></Dropdown.Item>
              <Dropdown.Item> <Link to="qec">
                <i className="la la-area-chart mr-2 text-color-3"></i>QEC Result
              </Link></Dropdown.Item>
                          </Dropdown.Menu>
              </Dropdown>
            </li>
           
            
                    </ul>
                  
                    <div class="d-lg-flex align-items-center d-none ms-auto">
                   
                        <div  >
                        <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdown-basic" className="mt-1 border-0" style={{backgroundColor:"white"}}>
                          {localStorage.getItem("data")}
                          </Dropdown.Toggle>

                          <Dropdown.Menu >
                          <Dropdown.Item > <Link to="profile">
                Profile
                </Link></Dropdown.Item>
              <Dropdown.Item href="recover"> Change Password?</Dropdown.Item>
              <Dropdown.Item > <Logout /></Dropdown.Item>
              <Dropdown.Item > <Link to="dashboard">
                  <i className="la la-area-chart mr-2 text-color-3"></i>
                  <span>Dashboard</span>
                </Link></Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        </div>
                    </div>
                </div>

            </div>
        </nav></div>
    </>
  );
};

export default Navbar;
