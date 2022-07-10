import React, { useState, useEffect } from "react";
import { ReadQec } from "../../Api/Qec";
import { AuthStudent } from "../../Api/Student";
import BarChart from "./partials/BarChart";

export const Dashboard = () => {
  const [name, setName] = useState([]);
  const [qec, setQec] = useState("");
  const [depart, setDepart] = useState(false);
  const [session, setSession] = useState(false);
  const [Semester, setSemester] = useState(false);
  const [course, setCourse] = useState(false);
  const [program, setProgram] = useState(false);
  console.log(qec);
  function handleButton(props) {
    if (props == "depart") {
      setDepart(true);
    } else {
      setDepart(false);
    }
    if (props == "session") {
      setSession(true);
    } else {
      setSession(false);
    }
    if (props == "program") {
      setProgram(true);
    } else {
      setProgram(false);
    }
    if (props == "semester") {
      setSemester(true);
    } else {
      setSemester(false);
    }
    if (props == "course") {
      setCourse(true);
    } else {
      setCourse(false);
    }
  }
  useEffect(() => {
    const getData = () => {
      AuthStudent().then(function (result) {
        setName(result);
      });
      ReadQec().then(function (result) {
        result.map((index) =>
          index.studentId.map(
            (data) => data._id == localStorage.getItem("id") && setQec(index)
          )
        );
      });
    };
    getData();
  }, []);
  return (
    <>
      <section className="dashboard-content-wrap  bg-818">
        <div class="dashboard-bread">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="breadcrumb-content">
                  <div class="section-heading">
                    <h2 class="sec__title font-size-30 text-white">
                      Hi, {localStorage.getItem("data")} Welcome Back!
                    </h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="breadcrumb-list text-right">
                  <ul class="list-items">
                    <li>Home</li>
                    <li>User Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-lg-3 responsive-column-m">
                <div class="icon-box icon-layout-2 dashboard-icon-box">
                  <div class="d-flex">
                    <div class="info-icon icon-element flex-shrink-0">
                      <i class="la la-shopping-cart"></i>
                    </div>
                    <div class="info-content">
                      <p class="info__desc">Enrolled Courses</p>
                      <h4 class="info__title">
                        {name.map((data) => {
                          return (
                            <>
                              {data == false ? null : (
                                <>{data.courseId.length}</>
                              )}
                            </>
                          );
                        })}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 responsive-column-m">
                <div class="icon-box icon-layout-2 dashboard-icon-box">
                  <div class="d-flex">
                    <div class="info-icon icon-element bg-2 flex-shrink-0">
                      <i class="la la-bookmark"></i>
                    </div>
                    <div class="info-content">
                      <p class="info__desc">You Logged In </p>
                      <h4 class="info__title">
                        {name.map((data) => {
                          return (
                            <>
                              {data == false ? null : <>{data.tokens.length}</>}
                            </>
                          );
                        })}{" "}
                        times
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 responsive-column-m">
                <div class="icon-box icon-layout-2 dashboard-icon-box">
                  <div class="d-flex">
                    <div class="info-icon icon-element bg-3 flex-shrink-0">
                      <i class="la la-plane"></i>
                    </div>
                    <div class="info-content">
                      <p class="info__desc">Comment</p>
                      <h4 class="info__title">
                        {name.map((data) => {
                          return (
                            <>
                              {data == false ? null : (
                                <>
                                  {data.DepartmentComment.length +
                                    data.CourseComment.length +
                                    data.TeacherComment.length +
                                    data.SemesterComment.length}
                                </>
                              )}
                            </>
                          );
                        })}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 responsive-column-m">
                <div class="icon-box icon-layout-2 dashboard-icon-box">
                  <div class="d-flex">
                    <div class="info-icon icon-element bg-4 flex-shrink-0">
                      <i class="la la-star"></i>
                    </div>
                    <div class="info-content">
                      <p class="info__desc">Rating</p>
                      <h4 class="info__title">
                        {name.map((data) => {
                          return (
                            <>
                              {data == false ? null : <>{data.rating.length}</>}
                            </>
                          );
                        })}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-main-content">
          <div className="container-fluid">
            <div class="row">
              <div class="col-lg-12 responsive-column--m">
                <div class="form-box">
                  <div class="form-title-wrap">
                    <h3 class="title">Statics Results</h3>
                  </div>
                  <div class="col-lg-12 responsive-column--m">
                    <div>
                      <div>
                        <h3 class="title">
                          {name.map((data) => {
                            return (
                              <>
                                {data == false ? null : (
                                  <>{data.tokens.length}</>
                                )}
                              </>
                            );
                          })}{" "}
                          times you visited this site
                        </h3>
                      </div>
                      <div class="form-content pb-0">
                        <div class="row">
                          <div class="col-lg-4">
                            <div class="sparkline-chart-item">
                              <span class="font-size-15">
                                Evaluated Courses
                              </span>
                              <h3 class="title font-size-16">
                                {qec &&
                                  [qec].map((data) =>
                                    data.courseId.map((data) => data.name)
                                  )}
                              </h3>
                              <div class="visits-chart mt-2"></div>
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="sparkline-chart-item">
                              <span class="font-size-15">
                                Enrolled Courses{" "}
                              </span>
                              <h3 class="title font-size-16">
                                {name.map((data) => {
                                  return (
                                    <>
                                      {data == false ? null : (
                                        <>{data.courseId.length}</>
                                      )}
                                    </>
                                  );
                                })}
                              </h3>
                              <div class="visits-chart mt-2"></div>
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="sparkline-chart-item">
                              <span class="font-size-15">Your Teachers </span>
                              <h3 class="title font-size-16">
                                {name.map((data) => {
                                  return (
                                    <>
                                      {data == false ? null : (
                                        <>
                                          {data.courseId.map(
                                            (data) => data.teacherId.length
                                          )}
                                        </>
                                      )}
                                    </>
                                  );
                                })}
                              </h3>
                              <div class="previews-chart mt-2"></div>
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="sparkline-chart-item">
                              <span class="font-size-15">Your Department</span>
                              <h3 class="title font-size-16">
                                {name.map((data) => {
                                  return (
                                    <>
                                      {data == false ? null : (
                                        <>
                                          {data.deptId.map((data) => data.name)}
                                        </>
                                      )}
                                    </>
                                  );
                                })}
                              </h3>
                              <div class="visits-chart-2 mt-2"></div>
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="sparkline-chart-item">
                              <span class="font-size-15">Joined At</span>
                              <h3 class="title font-size-16">
                                {name.map((data) => {
                                  return (
                                    <>
                                      {data == false ? null : (
                                        <>
                                          {new Date(
                                            data.createdAt
                                          ).toLocaleDateString("en-US")}
                                        </>
                                      )}
                                    </>
                                  );
                                })}
                              </h3>
                              <div class="previews-chart mt-2"></div>
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="sparkline-chart-item">
                              <span class="font-size-15">CGPA</span>
                              <h3 class="title font-size-16">
                                {name.map((data) => {
                                  return (
                                    <>
                                      {data == false ? null : <>{data.cgpa}</>}
                                    </>
                                  );
                                })}
                              </h3>
                              <div class="previews-chart mt-2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div class="row padding-top-30px ">
                  <div class="col-lg-12 ">
                    <h3 class="title font-size-24">Add Yours Services</h3>
                    <hr />
                    <div class="section-tab section-tab-3 pt-4 pb-5">
                      <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                          <button
                            class="nav-link active"
                            id="my-hotel-tab"
                            data-toggle="tab"
                            href="#my-hotel"
                            role="tab"
                            aria-controls="my-hotel"
                            aria-selected="true"
                            onClick={() => handleButton("depart")}
                          >
                            Department
                          </button>
                        </li>
                        <li class="nav-item">
                          <button
                            class="nav-link active"
                            id="my-tour-tab"
                            data-toggle="tab"
                            href="#my-tour"
                            role="tab"
                            aria-controls="my-tour"
                            aria-selected="false"
                            onClick={() => handleButton("session")}
                          >
                            Session
                          </button>
                        </li>
                        <li class="nav-item">
                          <button
                            class="nav-link active"
                            id="my-activity-tab"
                            data-toggle="tab"
                            href="#my-activity"
                            role="tab"
                            aria-controls="my-activity"
                            aria-selected="false"
                            onClick={() => handleButton("program")}
                          >
                            Program
                          </button>
                        </li>
                        {!localStorage.getItem("isTeacher") ? (
                          <li class="nav-item">
                            <button
                              class="nav-link active"
                              id="my-car-tab"
                              data-toggle="tab"
                              href="#my-car"
                              role="tab"
                              aria-controls="my-car"
                              aria-selected="false"
                              onClick={() => handleButton("semester")}
                            >
                              Semester
                            </button>
                          </li>
                        ) : null}

                        <li class="nav-item">
                          <button
                            class="nav-link active"
                            id="my-flight-tab"
                            data-toggle="tab"
                            href="#my-flight"
                            role="tab"
                            aria-controls="my-flight"
                            aria-selected="false"
                            onClick={() => handleButton("course")}
                          >
                            Courses
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {depart && (
                  <>
                    {name.map((data) => {
                      return (
                        <>
                          {data == false ? null : (
                            <>
                              {data.deptId.map((data) => {
                                return (
                                  <>
                                    <div
                                      class="tab-content margin-bottom-40px"
                                      id="myTabcontent"
                                    >
                                      <div
                                        class="tab-pane fade active show"
                                        id="my-hotel"
                                        role="tabpanel"
                                        aria-labelledby="my-hotel-tab"
                                      >
                                        <div class="my-service-list">
                                          <div class="card-item card-item-list">
                                            <div class="card-img">
                                              <a href="#" class="d-block">
                                                {/* <img
                                                  src={smiu}
                                                  alt="hotel-img"
                                                /> */}
                                              </a>
                                            </div>

                                            <div class="card-body">
                                              <h3 class="card-title">
                                                <a href="#">{data.name}</a>
                                              </h3>
                                              <p class="card-meta">
                                                Total Students{" "}
                                                {data.studentId.length}
                                              </p>
                                              <p class="card-meta">
                                                Total teachers{" "}
                                                {data.teacherId.length}
                                              </p>
                                              <p class="card-meta">
                                                Total program{" "}
                                                {data.programId.length}
                                              </p>

                                              <div class="card-price d-flex align-items-center justify-content-between">
                                                <button className="theme-btn">
                                                  Enroll Now
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </>
                          )}
                        </>
                      );
                    })}
                  </>
                )}
                {session && (
                  <>
                    {name.map((data) => {
                      return (
                        <>
                          {data == false ? null : (
                            <>
                              {data.sessionId.map((index) => {
                                return (
                                  <>
                                    <div
                                      class="tab-content margin-bottom-40px"
                                      id="myTabcontent"
                                    >
                                      <div
                                        class="tab-pane fade active show"
                                        id="my-hotel"
                                        role="tabpanel"
                                        aria-labelledby="my-hotel-tab"
                                      >
                                        <div class="my-service-list">
                                          <div class="card-item card-item-list">
                                            <div class="card-img">
                                              <a href="#" class="d-block">
                                                <img
                                                  // src={smiu}
                                                  alt="hotel-img"
                                                />
                                              </a>
                                              <span class="badge">
                                                {index.name}
                                              </span>
                                            </div>

                                            <div class="card-body">
                                              <h3 class="card-title">
                                                <a href="#">{index.name}</a>
                                              </h3>
                                              <p class="card-meta">
                                                Total Students :
                                                {index.studentId.length}
                                              </p>
                                              <p class="card-meta">
                                                Total teachers :
                                                {index.teacherId.length}
                                              </p>
                                              <p class="card-meta">
                                                Joined At :
                                                {new Date(
                                                  index.createdAt
                                                ).toLocaleDateString("en-US")}
                                              </p>

                                              <div class="card-price d-flex align-items-center justify-content-between">
                                                <button className="theme-btn">
                                                  Enroll Now
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>{" "}
                                  </>
                                );
                              })}
                            </>
                          )}
                        </>
                      );
                    })}
                  </>
                )}
                {program && (
                  <>
                    {name.map((data) => {
                      return (
                        <>
                          {data == false ? null : (
                            <>
                              {data.programId.map((index) => {
                                return (
                                  <>
                                    <div
                                      class="tab-content margin-bottom-40px"
                                      id="myTabcontent"
                                    >
                                      <div
                                        class="tab-pane fade active show"
                                        id="my-hotel"
                                        role="tabpanel"
                                        aria-labelledby="my-hotel-tab"
                                      >
                                        <div class="my-service-list">
                                          <div class="card-item card-item-list">
                                            <div class="card-img">
                                              <a href="#" class="d-block">
                                                <img
                                                  // src={smiu}
                                                  alt="hotel-img"
                                                />
                                              </a>
                                              <span class="badge">
                                                {index.name}
                                              </span>
                                            </div>

                                            <div class="card-body">
                                              <h3 class="card-title">
                                                <a href="#">{index.name}</a>
                                              </h3>
                                              <p class="card-meta">
                                                Total Students :
                                                {index.studentId.length}
                                              </p>
                                              <p class="card-meta">
                                                Total teachers :
                                                {index.teacherId.length}
                                              </p>
                                              <p class="card-meta">
                                                Joined At :
                                                {new Date(
                                                  index.createdAt
                                                ).toLocaleDateString("en-US")}
                                              </p>

                                              <div class="card-price d-flex align-items-center justify-content-between">
                                                <button className="theme-btn">
                                                  Enroll Now
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>{" "}
                                  </>
                                );
                              })}
                            </>
                          )}
                        </>
                      );
                    })}
                  </>
                )}
                {Semester && (
                  <>
                    {name.map((data) => {
                      return (
                        <>
                          {data == false ? null : (
                            <>
                              {data.semesterId.map((index) => {
                                return (
                                  <>
                                    <div
                                      class="tab-content margin-bottom-40px"
                                      id="myTabcontent"
                                    >
                                      <div
                                        class="tab-pane fade active show"
                                        id="my-hotel"
                                        role="tabpanel"
                                        aria-labelledby="my-hotel-tab"
                                      >
                                        <div class="my-service-list">
                                          <div class="card-item card-item-list">
                                            <div class="card-img">
                                              <a href="#" class="d-block">
                                                <img
                                                  // src={smiu}
                                                  alt="hotel-img"
                                                />
                                              </a>
                                              <span class="badge">
                                                {index.name}
                                              </span>
                                            </div>

                                            <div class="card-body">
                                              <h3 class="card-title">
                                                <a href="#">
                                                  semester-{index.name}
                                                </a>
                                              </h3>
                                              <p class="card-meta">
                                                Total Students :
                                                {index.studentId.length}
                                              </p>
                                              <p class="card-meta">
                                                Total teachers :
                                                {index.teacherId.length}
                                              </p>
                                              <p class="card-meta">
                                                Joined At :
                                                {new Date(
                                                  index.createdAt
                                                ).toLocaleDateString("en-US")}
                                              </p>

                                              <div class="card-price d-flex align-items-center justify-content-between">
                                                <button className="theme-btn">
                                                  Enroll Now
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </>
                          )}
                        </>
                      );
                    })}
                  </>
                )}
                {course && (
                  <>
                    {name.map((data) => {
                      return (
                        <>
                          {data == false ? null : (
                            <>
                              {data.courseId.map((index) => {
                                return (
                                  <>
                                    <div
                                      class="tab-content margin-bottom-40px"
                                      id="myTabcontent"
                                    >
                                      <div
                                        class="tab-pane fade active show"
                                        id="my-hotel"
                                        role="tabpanel"
                                        aria-labelledby="my-hotel-tab"
                                      >
                                        <div class="my-service-list">
                                          <div class="card-item card-item-list">
                                            <div class="card-img">
                                              <a href="#" class="d-block">
                                                <img
                                                  // src={smiu}
                                                  alt="hotel-img"
                                                />
                                              </a>
                                              <span class="badge">
                                                {index.name}
                                              </span>
                                            </div>

                                            <div class="card-body">
                                              <h3 class="card-title">
                                                <a href="#">{index.name}</a>
                                              </h3>
                                              <p class="card-meta">
                                                Total Students :
                                                {index.studentId.length}
                                              </p>
                                              <p class="card-meta">
                                                Total teachers :
                                                {index.teacherId.length}
                                              </p>
                                              <p class="card-meta">
                                                Joined At :
                                                {new Date(
                                                  index.createdAt
                                                ).toLocaleDateString("en-US")}
                                              </p>

                                              <div class="card-price d-flex align-items-center justify-content-between">
                                                <button className="theme-btn">
                                                  Enroll Now
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </>
                          )}
                        </>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
