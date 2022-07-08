import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Delete from "../Delete/Delete";

const Details = () => {
  const location = useLocation();
  const { from, api } = location.state;
  const [id, setId] = useState([from].map((data) => data._id));
console.log(from)
  return (
    <div>
      <div class="dashboard-bread dashboard--bread dashboard-bread-2">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="breadcrumb-content">
                <div class="section-heading">
                  <h2 class="sec__title font-size-30 text-white">
                    Full Details
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="breadcrumb-list text-right">
                <ul class="list-items">
                  <li>
                    <a href="index.html" class="text-white">
                      Home
                    </a>
                  </li>
                  <li>Dashboard</li>
                  <li> Full Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dashboard-main-content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="form-box">
                <div class="form-title-wrap">
                  <h3 class="title"> Full Details Lists</h3>
                </div>
                {[from].map((data) => {
                  return (
                    <>
                      <div className="container-fluid ">
                        <div class="btn-box mt-4 ">      
                        {!data.u_id &&  <Delete id={id} api={api} />}                   
                         
                          <button className="btn-primary btn ml-2 hidden-print" onClick={()=>window.print()}>Print</button>
                        </div>
                      </div>

                      <div class="form-content">
                        <ul class="list-items list-items-2 list-items-flush">
                          <li>
                            <span>ID</span>
                            {data._id}
                          </li>
                          {data.name && <li>
                            <span>Name</span>
                            {data.name}
                          </li>} 
                          {data.u_id && <li>
                            <span>University ID</span>
                            {data.u_id}
                          </li>} 
                          {data.email && <li>
                            <span>email</span>
                            {data.email}
                          </li>} 
                          {data.phone && <li>
                            <span>phone</span>
                            {data.phone}
                          </li>}  
                          {data.cgpa && <li>
                            <span>CGPA</span>
                            {data.cgpa}
                          </li> }
                          {data.departmentId && <li>
                            <span>Department</span>
                            {data.departmentId.map((data)=>data.name)}
                          </li>} 
                          {data.deptId && <li>
                            <span>Department</span>
                            {data.deptId.map((data)=>data.name)}
                          </li>} 
                          {data.courseId && <li>
                            <span>Courses</span>
                            {data.courseId.map((data)=>data.name ,)}
                          </li>} 
                          {data.complain && <><li>
                            <span>Complain</span>
                            {data.complain}
                          </li><li>
                            <span>Student</span>
                            {data.studentId.map((data)=>data.name)}
                          </li></>} 
                          {data.comment && <><li>
                            <span>Comment</span>
                            {data.complain}
                          </li>
                          {data.studentId &&   <li>
                            <span>Student</span>
                            {data.studentId.map((data)=>data.name)}
                          </li>}
                        
                          </>}   
                          {data.semesterId && <li>
                            <span>Semester</span>
                            {data.semesterId.map((data)=>data.name)}
                          </li>}   
                          {data.isHelpfull && <li>
                            <span>isHelpfull</span>
                            {data.isHelpfull.length}
                          </li>}
                          {data.isFriendly && <li>
                            <span>isFriendly</span>
                            {data.isFriendly.length}
                          </li>}  
                          {data.isProfessional && <li>
                            <span>isProfessional</span>
                            {data.isProfessional.length}
                          </li>}                       
                          {data.code && <li>
                            <span>Code</span>
                            {data.code}
                          </li>}
                          {data.programId && <li>
                            <span>Program</span>
                            {data.programId.map((data)=>data.name)}
                          </li>}
                          {data.sessionId && <li>
                            <span>Session</span>
                            {data.sessionId.map((data)=>data.name )}
                          </li> }
                          {!data.complain && <>{data.studentId && <li>
                            <span>Total Students</span>
                            {data.studentId.length}
                          </li> }</> }
                          {!data.complain && <>{data.teacherId && <li>
                            <span>Total Teachers</span>
                            {data.teacherId.length}
                          </li> }</>}
                          {!data.comment && <>{data.teacherId && <li>
                            <span>Total Teachers</span>
                            {data.teacherId.length}
                          </li> }</>}
                          {!data.comment && <>{data.studentId && <li>
                            <span>Total Students</span>
                            {data.studentId.length}
                          </li> }</> }
                          {data.tokens && <li>
                            <span>Loged In</span>
                            {data.tokens.length} times
                          </li>} 
                          {data.rating && <li>
                            <span>Rating</span>
                            {data.rating}
                          </li> }
                          {data.createdAt && <li>
                            <span>Created At</span>
                            {new Date(
                                    data.createdAt
                                  ).toLocaleDateString("en-US")}
                          </li> }
                        
                        </ul>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div class="border-top mt-5"></div>
          <div class="row align-items-center hidden-print">
            <div class="col-lg-7">
              <div class="copy-right padding-top-30px">
                <p class="copy__desc">
                  © Copyright Nabeel Imrar Ali 2022. Made with
                  <span class="la la-heart"></span> by{" "}
                  <a href="https://themeforest.net/user/techydevs/portfolio">
                    NIA
                  </a>
                </p>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="copy-right-content text-right padding-top-30px">
                <ul class="social-profile">
                  <li>
                    <a href="#">
                      <i class="lab la-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lab la-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lab la-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lab la-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
