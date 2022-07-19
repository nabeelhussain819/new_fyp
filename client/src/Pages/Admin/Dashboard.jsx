import React, { useEffect, useState } from "react";
import { ReadComplain } from "../../Api/Complain";
import { ReadCourse } from "../../Api/Course";
import { ReadStudent } from "../../Api/Student";
import { ReadTeacher } from "../../Api/Teacher";
import { Link } from "react-router-dom";
import LineChart from "../User/partials/Charts";
import BarChart from "../User/partials/BarChart";
import { ReadProgram } from "../../Api/Program";
import { ReadQec } from "../../Api/Qec";
import LineChart2 from "./Partials/Chart";
import QecChart from "./Partials/QecChart";
import QecGraph_1 from "./Partials/QecGraph_1";
import LineChart3 from "./Partials/Chart_1";
const Dashboard = () => {
  const [course, setCourse] = useState([]);
  const [student, setStudent] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [comment, setComment] = useState([]);
  const [program, setProgram] = useState([]);
  const [qec, setQec] = useState([]);
  console.log(
    qec.reduce((accumulator, object) => {
      return accumulator + object.rating;
    }, 0)
  );
  const api = "departments";
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
      ReadComplain({ api: api }).then(function (result) {
        setComment(result);
      });
      ReadProgram({ api: api }).then(function (result) {
        setProgram(result);
      });
      ReadQec().then(function (result) {
        setQec(result);
      });
    };
    getData();
  }, []);
  return (
    <div className="dashboard-content-wrap">
      <div className="dashboard-bread dashboard-bread-2">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="breadcrumb-content">
                <div className="section-heading">
                  <h2 className="sec__title font-size-30 text-white">Dashboard</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="breadcrumb-list text-right">
                <ul className="list-items">
                  <li>
                    <a href="/dashboard" className="text-white">
                      Home
                    </a>
                  </li>
                  <li>Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-3 responsive-column-l">
              <div className="icon-box icon-layout-2 dashboard-icon-box pb-0">
                <div className="d-flex pb-3 justify-content-between">
                  <div className="info-content">
                    <p className="info__desc">Total Courses!</p>
                    <h4 className="info__title">{course.length}</h4>
                  </div>
                  <div className="info-icon icon-element bg-4">
                    <i className="la la-shopping-cart"></i>
                  </div>
                </div>
                <div className="section-block"></div>
                <Link
                  to="/courses"
                  className="d-flex align-items-center justify-content-between view-all"
                >
                  View All <i className="la la-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 responsive-column-l">
              <div className="icon-box icon-layout-2 dashboard-icon-box pb-0">
                <div className="d-flex pb-3 justify-content-between">
                  <div className="info-content">
                    <p className="info__desc">Total Students!</p>
                    <h4 className="info__title">{student.length}</h4>
                  </div>
                  <div className="info-icon icon-element bg-3">
                    <i className="la la-star"></i>
                  </div>
                </div>
                <div className="section-block"></div>
                <Link
                  to="/students"
                  className="d-flex align-items-center justify-content-between view-all"
                >
                  View All <i className="la la-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 responsive-column-l">
              <div className="icon-box icon-layout-2 dashboard-icon-box pb-0">
                <div className="d-flex pb-3 justify-content-between">
                  <div className="info-content">
                    <p className="info__desc">Total Teachers!</p>
                    <h4 className="info__title">{teacher.length}</h4>
                  </div>
                  <div className="info-icon icon-element bg-2">
                    <i className="la la-envelope"></i>
                  </div>
                </div>
                <div className="section-block"></div>
                <Link
                  to="/teachers"
                  className="d-flex align-items-center justify-content-between view-all"
                >
                  View All <i className="la la-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 responsive-column-l">
              <div className="icon-box icon-layout-2 dashboard-icon-box pb-0">
                <div className="d-flex pb-3 justify-content-between">
                  <div className="info-content">
                    <p className="info__desc">Evaluation Recieved!</p>
                    <h4 className="info__title">{qec.length}</h4>
                  </div>
                  <div className="info-icon icon-element bg-1">
                    <i className="la la-bookmark-o"></i>
                  </div>
                </div>
                <div className="section-block"></div>
                <Link
                  to="/qec"
                  className="d-flex align-items-center justify-content-between view-all"
                >
                  View All <i className="la la-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-main-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 responsive-column--m">
              <LineChart2 />
            </div>
            <div className="col-lg-6 responsive-column--m">
              <QecGraph_1 />
            </div>
            <div className="col-lg-6 responsive-column--m">
              <QecChart />
            </div>
            <div className="col-lg-6 responsive-column--m">
              <LineChart3 />
            </div>
            <div className="col-lg-6 responsive-column--m">
              <div className="form-box dashboard-card">
                <div className="form-title-wrap">
                  <h3 className="title">Server Stats</h3>
                </div>
                <div className="form-content pb-0">
                  <div className="dashboard-progressbar pb-4">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: `${student.length}px` }}
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="1000"
                      ></div>
                    </div>
                    <p className="font-size-14 pt-1">
                      Total students engage: {student.length}{" "}
                    </p>
                  </div>
                  <div className="dashboard-progressbar pb-4">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped bg-success"
                        role="progressbar"
                        style={{ width: `${teacher.length}px` }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="font-size-14 pt-1">
                      Total Teachers engage: {teacher.length}
                    </p>
                  </div>
                  <div className="dashboard-progressbar pb-4">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped bg-info"
                        role="progressbar"
                        style={{ width: `${course.length}%` }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="font-size-14 pt-1">
                      courses: {course.length}/100
                    </p>
                  </div>
                  <div className="dashboard-progressbar pb-4">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped bg-warning"
                        role="progressbar"
                        style={{ width: `${program.length}%` }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="font-size-14 pt-1">
                      All Programs: {program.length}/100
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 responsive-column--m">
              <div className="form-box dashboard-card">
                <div className="form-title-wrap">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="title">Notifications About Complain</h3>
                  </div>
                </div>
                <div className="form-content p-0">
                  <div className="list-group drop-reveal-list">
                    {comment.slice(0, 5).map((data) => {
                      return (
                        <>
                          {data == false ? null : (
                            <>
                              {" "}
                              <div className="list-group-item list-group-item-action border-top-0">
                                <div className="msg-body d-flex align-items-center">
                                  <div className="icon-element flex-shrink-0 mr-3 ml-0">
                                    <i className="la la-bell"></i>
                                  </div>
                                  <div className="msg-content w-100">
                                    <h3 className="title pb-1 text-dark">
                                      {data.complain}
                                    </h3>
                                  </div>
                                  <span
                                    className="icon-element mark-as-read-btn flex-shrink-0 ml-auto mr-0"
                                    data-toggle="tooltip"
                                    data-placement="left"
                                    title=""
                                    data-original-title="Mark as read"
                                  >
                                    {data.replay ? (
                                      <i className="la la-star"></i>
                                    ) : (
                                      "Not"
                                    )}
                                  </span>
                                </div>
                              </div>
                            </>
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 responsive-column--m">
              <div className="form-box dashboard-card">
                <div className="form-title-wrap">
                  <h3 className="title">
                    {teacher.length + student.length} people Registered this
                    site
                  </h3>
                </div>
                <div className="form-content pb-0">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="sparkline-chart-item">
                        <span className="font-size-15">Registered As A stdent</span>
                        <h3 className="title font-size-16">{student.length}</h3>
                        <div className="visits-chart mt-2">
                          <canvas
                            style={{
                              display: "inline-block",
                              width: "90px",
                              height: " 25px",
                              verticalAlign: "top",
                            }}
                          ></canvas>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="sparkline-chart-item">
                        <span className="font-size-15">Register As A Teacher</span>
                        <h3 className="title font-size-16">{teacher.length}</h3>
                        <div className="visits-chart mt-2">
                          <canvas
                            style={{
                              display: "inline-block",
                              width: "90px",
                              height: " 25px",
                              verticalAlign: "top",
                            }}
                          ></canvas>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="sparkline-chart-item">
                        <span className="font-size-15">Evaluated Students</span>
                        <h3 className="title font-size-16">{qec.length}</h3>
                        <div className="previews-chart mt-2">
                          <canvas
                            style={{
                              display: "inline-block",
                              width: "90px",
                              height: " 25px",
                              verticalAlign: "top",
                            }}
                          ></canvas>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="sparkline-chart-item">
                        <span className="font-size-15">Complains </span>
                        <h3 className="title font-size-16">{comment.length}</h3>
                        <div className="visits-chart-2 mt-2">
                          <canvas
                            style={{
                              display: "inline-block",
                              width: "90px",
                              height: " 15px",
                              verticalAlign: "top",
                            }}
                          ></canvas>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="sparkline-chart-item">
                        <span className="font-size-15">Non Evaluated Students</span>
                        <h3 className="title font-size-16">
                          {student.length - qec.length}
                        </h3>
                        <div className="previews-chart mt-2">
                          <canvas
                            style={{
                              display: "inline-block",
                              width: "90px",
                              height: " 25px",
                              verticalAlign: "top",
                            }}
                          ></canvas>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="sparkline-chart-item">
                        <span className="font-size-15">
                          Total Rating By Evaluation (All Teachers)
                        </span>
                        <h3 className="title font-size-16">
                          {qec.reduce((accumulator, object) => {
                            return accumulator + object.rating;
                          }, 0)}
                        </h3>
                        <div className="previews-chart mt-2">
                          <canvas
                            style={{
                              display: "inline-block",
                              width: "90px",
                              height: " 25px",
                              verticalAlign: "top",
                            }}
                          ></canvas>
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

export default Dashboard;
