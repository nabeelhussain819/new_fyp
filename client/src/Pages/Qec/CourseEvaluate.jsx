import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetSpecificCourse } from "../../Api/Department";
import { AuthQec, AuthStudentTeacher } from "../../Api/SpecificData/AuthUser";
const CourseEvaluate = () => {
  const [course, setCourse] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [qecCourse, setQec] = useState([]);
  const [show, setShow] = useState(false);
  const [term, setTerm] = useState("");

  const getChange = (data) => {
    setCourseId(data);
    getData4({ data });
  };
  const getChange1 = (data) => {
    setTeacherId(data);
    setShow(true);
  };
  const getData4 = ({ data }) => {
    GetSpecificCourse({ data: data }).then(function (result) {
      setTeacher(result);
    });
  };

  useEffect(() => {
    const getData = () => {
      AuthStudentTeacher().then(function (result) {
        setCourse(result);
      });
    };
    const getQecCourse = () => {
      AuthQec().then(function (result) {
        setQec(result);
      });
    };
    getQecCourse();
    getData();
  }, []);
  return (
    <div className="bread-bg">
      <section class="hero-wrapper bread-bg pb-4">
        <div class="pb-0">
          <div class="container pt-4">
            <div class="col-lg-12 pt-4">
              <div class="hero-content pb-5 pt-4">
                <div class="section-heading">
                  <p class="sec__desc pb-2">Evalation Form</p>
                  <h2 class="sec__title">
                    Are You Ready To Evaluate? <br /> Select Course & Teacher To
                    Evaluate
                  </h2>
                </div>
              </div>
              <div class="search-fields-container">
                <div class="contact-form-action">
                  <form action="#" class="row">
                    <div class="col-lg-4 pr-0">
                      <div class="input-box">
                        <label class="label-text">
                          Select Enrolled Course{" "}
                        </label>
                        <div class="form-group">
                          <span class="la la-map-marker form-icon"></span>
                          <select
                            class="select-contain-select form-control"
                            tabindex="-98"
                            onChange={(e) => getChange(e.target.value)}
                          >
                            <option>Select One</option>

                            {course.map((data) => {
                              return (
                                <>
                                  <option value={data._id} name={data.name}>
                                    {data.name}
                                  </option>
                                </>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 pr-0">
                      <div class="input-box">
                        <label class="label-text">Select Term</label>
                        <div class="form-group">
                          <span class="la la-calendar form-icon"></span>
                          <select
                            class="select-contain-select form-control"
                            tabindex="-98"
                            onChange={(e) => setTerm(e.target.value)}
                          >
                            <option>Select One</option>
                            <option value="Mid">Mid Term</option>
                            <option value="Mid">Final Term</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 pr-0">
                      <div class="input-box">
                        <label class="label-text">Select Teachers</label>
                        <div class="form-group">
                          <span class="la la-calendar form-icon"></span>
                          <select
                            class="select-contain-select form-control"
                            tabindex="-98"
                            onChange={(e) => getChange1(e.target.value)}
                          >
                            {teacher.map((data) => {
                              return (
                                <>
                                  {data == false ? null : (
                                    <>
                                      <option>Select One</option>
                                      {data.teacherId.map((index) => {
                                        return (
                                          <>
                                            <option value={index._id}>
                                              {index.name}
                                            </option>
                                          </>
                                        );
                                      })}
                                    </>
                                  )}
                                </>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    </div>
                  </form>
                  {show && (
                    <div class="btn-box pt-3">
                      <Link
                        to={"/qec-evaluate"}
                        class="theme-btn theme-btn-small"
                        state={{
                          courseId: courseId,
                          teacherId: teacherId,
                          term: term,
                        }}
                      >
                        Evaluate Now!
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="hero-wrapper bread-bg pb-4">
        <div class="pb-0">
          <div class="container pt-4">
            <div class="col-lg-12 pt-4"></div>
          </div>
        </div>
      </section>
      <section class="hero-wrapper bread-bg pb-4">
        <div class="pb-0">
          <div class="container pt-4">
            <div class="col-lg-12 pt-4"></div>
          </div>
        </div>
      </section>
      <section class="hero-wrapper bread-bg pb-4">
        <div class="pb-0">
          <div class="container pt-4">
            <div class="col-lg-12 pt-4"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseEvaluate;
