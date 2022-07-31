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
      <section className="">
        <div className="top">
        </div>
        <div className="container-fluid"></div>
        <div className="row mb-4">
              <div className="col-lg-3 responsive-column-m">
                <div className="icon-box icon-layout-2 dashboard-icon-box">
                  <div className="d-flex">
                    <div className="info-icon icon-element flex-shrink-0">
                      <i className="la la-shopping-cart"></i>
                    </div>
                    <div className="info-content">
                      <p className="info__desc">Enrolled Courses</p>
                      <h4 className="info__title">
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
              <div className="col-lg-3 responsive-column-m">
                <div className="icon-box icon-layout-2 dashboard-icon-box">
                  <div className="d-flex">
                    <div className="info-icon icon-element bg-2 flex-shrink-0">
                      <i className="la la-bookmark"></i>
                    </div>
                    <div className="info-content">
                      <p className="info__desc">You Logged In </p>
                      <h4 className="info__title">
                        {name.map((data) => {
                          return <>{data.tokens.length}</>;
                        })}{" "}
                        times
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 responsive-column-m">
                <div className="icon-box icon-layout-2 dashboard-icon-box">
                  <div className="d-flex">
                    <div className="info-icon icon-element bg-3 flex-shrink-0">
                      <i className="la la-plane"></i>
                    </div>
                    <div className="info-content">
                      <p className="info__desc">Comment</p>
                      <h4 className="info__title">
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
              <div className="col-lg-3 responsive-column-m">
                <div className="icon-box icon-layout-2 dashboard-icon-box">
                  <div className="d-flex">
                    <div className="info-icon icon-element bg-4 flex-shrink-0">
                      <i className="la la-star"></i>
                    </div>
                    <div className="info-content">
                      <p className="info__desc">Rating</p>
                      <h4 className="info__title">
                        {}
                        {rating.map((data) => data.rating)}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <div className="dashboard-main-content mt-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 responsive-column--m">
                <div className="form-box shadow-lg">
                  <div className="form-title-wrap">
                    <h3 className="title">Rating Given By Teachers</h3>
                  </div>
                </div>
                <GpaGraph />
              </div>
              <div className="col-lg-6 responsive-column--m">
                <div className="form-box shadow-lg">
                  <div className="form-title-wrap">
                    <h3 className="title">Your Evaluation Results Graph</h3>
                  </div>
                </div>
                <Graph data={name && name.map((data) => data.qec)} qec={name} />
              </div>
              <div className="col-lg-12 responsive-column--m">
                <div className="form-box">
                  <div className="form-title-wrap"></div>
                  <div className="col-lg-12 responsive-column--m">
                    <div>
                      <div>
                        <h3 className="title">
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
                      <div className="form-content pb-0">
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="sparkline-chart-item">
                              <span className="font-size-15">
                                Evaluated Courses
                              </span>
                              <h3 className="title font-size-16">
                                {name &&
                                  name.map((data) =>
                                    data == false ? null : data.qec.length
                                  )}
                              </h3>
                              <div className="visits-chart mt-2"></div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="sparkline-chart-item">
                              <span className="font-size-15">
                                Enrolled Courses{" "}
                              </span>
                              <h3 className="title font-size-16">
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
                              <div className="visits-chart mt-2"></div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="sparkline-chart-item">
                              <span className="font-size-15">Your Teachers </span>
                              <h3 className="title font-size-16">
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
                              <div className="previews-chart mt-2"></div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="sparkline-chart-item">
                              <span className="font-size-15">Your Department</span>
                              <h3 className="title font-size-16">
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
                              <div className="visits-chart-2 mt-2"></div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="sparkline-chart-item">
                              <span className="font-size-15">Joined At</span>
                              <h3 className="title font-size-16">
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
                              <div className="previews-chart mt-2"></div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="sparkline-chart-item">
                              <span className="font-size-15">CGPA</span>
                              <h3 className="title font-size-16">
                                {name.map((data) => {
                                  return (
                                    <>
                                      {data == false ? null : <>{data.cgpa}</>}
                                    </>
                                  );
                                })}
                              </h3>
                              <div className="previews-chart mt-2"></div>
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
