import React, { useEffect, useState } from "react";
import { ReadComment } from "../../Api/Comment";
import { ReadCourse } from "../../Api/Course";
import { ReadStudent } from "../../Api/Student";
import { ReadTeacher } from "../../Api/Teacher";
import {Link} from 'react-router-dom'
import LineChart from "../User/partials/Charts";
import BarChart from "../User/partials/BarChart";
import { ReadProgram } from "../../Api/Program";
import LineChart2 from "./Partials/Chart";
import LineChart3 from "./Partials/Chart_1";
const Dashboard = () => {
  const [course, setCourse] = useState([]);
  const [student, setStudent] = useState([]);
  const [teacher, setTeacher] = useState([]);
   const [comment, setComment] = useState([]); 
   const [program, setProgram] = useState([]); 
  const api = "departments"
  useEffect(() => {
    const getData = () => {
      ReadCourse().then(function (result) {
        setCourse(result);
      });
      ReadStudent().then(function (result) {
        setStudent(result);
      });
      ReadTeacher().then(function (result) {
        setTeacher(result);
      });
      ReadComment({api:api}).then(function (result) {
        setComment(result);
      });
      ReadProgram({api:api}).then(function (result) {
        setProgram(result);
      });
    };
    getData();
  }, []);
  return (
    <div className="dashboard-content-wrap">
      <div class="dashboard-bread dashboard-bread-2">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="breadcrumb-content">
                <div class="section-heading">
                  <h2 class="sec__title font-size-30 text-white">Dashboard</h2>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="breadcrumb-list text-right">
                <ul class="list-items">
                  <li>
                    <a href="/dashboard" class="text-white">
                      Home
                    </a>
                  </li>
                  <li>Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-lg-3 responsive-column-l">
              <div class="icon-box icon-layout-2 dashboard-icon-box pb-0">
                <div class="d-flex pb-3 justify-content-between">
                  <div class="info-content">
                    <p class="info__desc">Total Courses!</p>
                    <h4 class="info__title">{course.length}</h4>
                  </div>
                  <div class="info-icon icon-element bg-4">
                    <i class="la la-shopping-cart"></i>
                  </div>
                </div>
                <div class="section-block"></div>
                <Link
                  to="/courses"
                  class="d-flex align-items-center justify-content-between view-all"
                >
                  View All <i class="la la-angle-right"></i>
                </Link>
              </div>
            </div>
            <div class="col-lg-3 responsive-column-l">
              <div class="icon-box icon-layout-2 dashboard-icon-box pb-0">
                <div class="d-flex pb-3 justify-content-between">
                  <div class="info-content">
                    <p class="info__desc">Total Students!</p>
                    <h4 class="info__title">{student.length}</h4>
                  </div>
                  <div class="info-icon icon-element bg-3">
                    <i class="la la-star"></i>
                  </div>
                </div>
                <div class="section-block"></div>
                <Link
                  to="/students"
                  class="d-flex align-items-center justify-content-between view-all"
                >
                  View All <i class="la la-angle-right"></i>
                </Link>
              </div>
            </div>
            <div class="col-lg-3 responsive-column-l">
              <div class="icon-box icon-layout-2 dashboard-icon-box pb-0">
                <div class="d-flex pb-3 justify-content-between">
                  <div class="info-content">
                    <p class="info__desc">Total Teachers!</p>
                    <h4 class="info__title">{teacher.length}</h4>
                  </div>
                  <div class="info-icon icon-element bg-2">
                    <i class="la la-envelope"></i>
                  </div>
                </div>
                <div class="section-block"></div>
                <Link
                  to="/teachers"
                  class="d-flex align-items-center justify-content-between view-all"
                >
                  View All <i class="la la-angle-right"></i>
                </Link>
              </div>
            </div>
            <div class="col-lg-3 responsive-column-l">
              <div class="icon-box icon-layout-2 dashboard-icon-box pb-0">
                <div class="d-flex pb-3 justify-content-between">
                  <div class="info-content">
                    <p class="info__desc">New Department Comment!</p>
                    <h4 class="info__title">{comment.length}</h4>
                  </div>
                  <div class="info-icon icon-element bg-1">
                    <i class="la la-bookmark-o"></i>
                  </div>
                </div>
                <div class="section-block"></div>
                <Link
                  to="/qec"
                  class="d-flex align-items-center justify-content-between view-all"
                >
                  View All <i class="la la-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-main-content">
        <div className="container-fluid">
          <div className="row">
          <div class="col-lg-6 responsive-column--m">
        <LineChart2 />
        </div>
        <div class="col-lg-6 responsive-column--m">
                        <div class="form-box dashboard-card">
                            <div class="form-title-wrap">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3 class="title">Notifications</h3>
                                  
                                </div>
                                
                            </div>
                            <div class="form-content p-0">
                                <div class="list-group drop-reveal-list">
                                  {comment.slice(0,5).map((data)=>{return(<>
                                                {data == false ? null: 
                                                <>{data.value > 4 && 
                                                  <div class="list-group-item list-group-item-action border-top-0">
                                                  <div class="msg-body d-flex align-items-center">
                                                      <div class="icon-element flex-shrink-0 mr-3 ml-0"><i class="la la-bell"></i></div>
                                                      <div class="msg-content w-100">
                                                          <h3 class="title pb-1">{data.comment}</h3>
                                                        
                                                      </div>
                                                      <span class="icon-element mark-as-read-btn flex-shrink-0 ml-auto mr-0" data-toggle="tooltip" data-placement="left" title="" data-original-title="Mark as read">
                                                          <i class="la la-star"></i>{data.value}
                                                      </span>
                                                  </div>
                                              </div>
                                                }</>}</>)})}
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div class="col-lg-6 responsive-column--m">
        <LineChart3 />
        </div>
        <div class="col-lg-6 responsive-column--m">
                        <div class="form-box dashboard-card">
                            <div class="form-title-wrap">
                                <h3 class="title">Server Stats</h3>
                            </div>
                            <div class="form-content pb-0">
                                <div class="dashboard-progressbar pb-4">
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: `${student.length}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p class="font-size-14 pt-1">Total students engage: {student.length} </p>
                                </div>
                                 <div class="dashboard-progressbar pb-4">
                                     <div class="progress">
                                         <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: `${teacher.length}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                     </div>
                                     <p class="font-size-14 pt-1">Total Teachers engage: {teacher.length}</p>
                                </div>
                                 <div class="dashboard-progressbar pb-4">
                                     <div class="progress">
                                         <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: `${course.length}%`}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                     </div>
                                     <p class="font-size-14 pt-1">courses: {course.length}/100</p>
                                </div>
                                 <div class="dashboard-progressbar pb-4">
                                     <div class="progress">
                                         <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: `${program.length}%`}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                     </div>
                                     <p class="font-size-14 pt-1">All Programs: {program.length}/100</p>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 responsive-column--m">
                        <div class="form-box dashboard-card">
                            <div class="form-title-wrap">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3 class="title">Notifications About Complain</h3>
                                  
                                </div>
                                
                            </div>
                            <div class="form-content p-0">
                                <div class="list-group drop-reveal-list">
                                  {comment.slice(0,5).map((data)=>{return(<>
                                                {data == false ? null: 
                                                <> <div class="list-group-item list-group-item-action border-top-0">
                                                <div class="msg-body d-flex align-items-center">
                                                    <div class="icon-element flex-shrink-0 mr-3 ml-0"><i class="la la-bell"></i></div>
                                                    <div class="msg-content w-100">
                                                        <h3 class="title pb-1">{data.complain}</h3>
                                                      
                                                    </div>
                                                    <span class="icon-element mark-as-read-btn flex-shrink-0 ml-auto mr-0" data-toggle="tooltip" data-placement="left" title="" data-original-title="Mark as read">
                                                    <i class="la la-star"></i>4
                                                    </span>
                                                </div>
                                            </div></>}</>)})}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 responsive-column--m">
                        <div class="form-box dashboard-card">
                            <div class="form-title-wrap">
                                <h3 class="title">{teacher.length + student.length} people visited this site</h3>
                            </div>
                            <div class="form-content pb-0">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="sparkline-chart-item">
                                            <span class="font-size-15">Visits</span>
                                            <h3 class="title font-size-16">{student.length}</h3>
                                            <div class="visits-chart mt-2"><canvas  style={{display: "inline-block", width: "90px", height:" 25px", verticalAlign: "top"}}></canvas></div>
                                        </div>
                                    </div>
                                     <div class="col-lg-4">
                                        <div class="sparkline-chart-item">
                                            <span class="font-size-15">Unique Visitors</span>
                                            <h3 class="title font-size-16">{teacher.length}</h3>
                                            <div class="visits-chart mt-2"><canvas  style={{display: "inline-block", width: "90px", height:" 25px", verticalAlign: "top"}}></canvas></div>
                                        </div>
                                    </div>
                                     <div class="col-lg-4">
                                        <div class="sparkline-chart-item">
                                            <span class="font-size-15">Previews</span>
                                            <h3 class="title font-size-16">{comment.length}</h3>
                                            <div class="previews-chart mt-2"><canvas  style={{display: "inline-block", width: "90px", height:" 25px", verticalAlign: "top"}}></canvas></div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="sparkline-chart-item">
                                            <span class="font-size-15">Problems</span>
                                            <h3 class="title font-size-16">{comment.length}</h3>
                                            <div class="visits-chart-2 mt-2"><canvas  style={{display: "inline-block", width: "90px", height:" 15px", verticalAlign: "top"}}></canvas></div>
                                        </div>
                                    </div>
                                     <div class="col-lg-4">
                                        <div class="sparkline-chart-item">
                                            <span class="font-size-15">Avg. Visit Duration</span>
                                            <h3 class="title font-size-16">{(teacher.length + student.length)/10}</h3>
                                            <div class="previews-chart mt-2"><canvas  style={{display: "inline-block", width: "90px", height:" 25px", verticalAlign: "top"}}></canvas></div>
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

export default Dashboard;
