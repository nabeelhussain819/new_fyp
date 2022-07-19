import React, { useState, useEffect } from "react";
import { ReadQec } from "../../Api/Qec";
import { AuthUser, AuthStudentRating } from "../../Api/SpecificData/AuthUser";
import GpaGraph from "./partials/gpaGraph";
import Graph from "./partials/Graph";

export const Dashboard = () => {
  const [name, setName] = useState([]);
  const [qec, setQec] = useState("");
  const [rating, setRating] = useState([]);

  useEffect(() => {
    const getData = () => {
      AuthUser().then(function (result) {
        setName([result]);
      });
      AuthStudentRating().then(function (result) {
        setRating(result);
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
                              <>{data.courseId.length}</>
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
                          return <>{data.tokens.length}</>;
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
                              {data.DepartmentComment.length +
                                data.CourseComment.length +
                                data.TeacherComment.length +
                                data.SemesterComment.length}
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
                        {}
                        {rating.map((data) => data.rating)}
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
              <div class="col-lg-6 responsive-column--m">
                <div class="form-box shadow-lg">
                  <div class="form-title-wrap">
                    <h3 class="title">Rating Given By Teachers</h3>
                  </div>
                </div>
                <GpaGraph />
              </div>
              <div class="col-lg-6 responsive-column--m">
                <div class="form-box shadow-lg">
                  <div class="form-title-wrap">
                    <h3 class="title">Your Evaluation Results Graph</h3>
                  </div>
                </div>
                <Graph data={name && name.map((data) => data.qec)} qec={name} />
              </div>
              <div class="col-lg-12 responsive-column--m">
                <div class="form-box">
                  <div class="form-title-wrap"></div>
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
                                {name &&
                                  name.map((data) =>
                                    data == false ? null : data.qec.length
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
                                          {
                                            data.courseId.map(
                                              (data) => data.teacherId
                                            ).length
                                          }
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
