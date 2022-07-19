import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AuthUser,
  AuthStudentProgram,
  AuthStudentCourse,
} from "../../Api/SpecificData/AuthUser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Enrollment() {
  const [name, setName] = useState([]);
  const [semester, setSemester] = useState([]);
  const [course, setCourse] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [formValues, setFormValues] = useState([{ subject: "" }]);
  const [move, setMove] = useState(false);

  const registerCourse = async () => {
    const res = await fetch("https://fyptes.herokuapp.com/add-course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentId: localStorage.getItem("id"),
        courseId,
        teacherId:
          localStorage.getItem("isTeacher") && localStorage.getItem("id"),
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.error("Course is not registered Successfully");
    } else {
      setFormValues([...formValues, { subject: "" }]);
      setMove(true);
      setCourseId("");
      toast.success("Course registered Successfully");
    }
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const GetData = () => {
    AuthStudentProgram().then(function (result) {
      setSemester(result);
    });
  };
  const GetCourses = (semesterId) => {
    console.log(semesterId);
    AuthStudentCourse({ semesterId: semesterId }).then(function (result) {
      setCourse(result);
    });
  };
  useEffect(() => {
    const getData = () => {
      AuthUser().then(function (result) {
        setName([result]);
      });
    };
    getData();
    GetData();
  }, []);
  return (
    <>
      <section className="breadcrumb-area gradient-bg-gray before-none">
        <div className="breadcrumb-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between">
                  <div className="section-heading text-left">
                    <h2 className="sec__title">Enroll Courses</h2>
                    <p className="sec__desc font-weight-regular pb-2">
                      Select Your New Courses To Enroll
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="listing-form mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <div className="form-box">
                <div className="form-title-wrap">
                  <h3 className="title">
                    <i className="la la-user mr-2 text-gray"></i>Your information
                  </h3>
                </div>
                {name.map((data, i) => {
                  return (
                    <div className="form-content contact-form-action">
                      <div className="row MultiFile-intercepted">
                        <div className="col-lg-6 responsive-column">
                          <div className="input-box">
                            <label className="label-text">Your Name</label>
                            <div className="form-group">
                              <span className="la la-user form-icon"></span>
                              <input
                                className="form-control"
                                type="text"
                                name="text"
                                value={data.name}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 responsive-column">
                          <div className="input-box">
                            <label className="label-text">Your Email</label>
                            <div className="form-group">
                              <span className="la la-envelope-o form-icon"></span>
                              <input
                                className="form-control"
                                type="email"
                                name="email"
                                value={data.email}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 responsive-column">
                          <div className="input-box">
                            <label className="label-text">Your Department</label>
                            <div className="form-group">
                              <span className="la la-envelope-o form-icon"></span>
                              <input
                                className="form-control"
                                type="email"
                                name="email"
                                value={data.deptId.map((data) => data.name)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 responsive-column">
                          <div className="input-box">
                            <label className="label-text">Your Session</label>
                            <div className="form-group">
                              <span className="la la-envelope-o form-icon"></span>
                              <input
                                className="form-control"
                                type="email"
                                name="email"
                                value={data.sessionId.map((data) => data.name)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 responsive-column">
                          <div className="input-box">
                            <label className="label-text">Your Program</label>
                            <div className="form-group">
                              <span className="la la-envelope-o form-icon"></span>
                              <input
                                className="form-control"
                                type="email"
                                name="email"
                                value={data.programId.map((data) => data.name)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 responsive-column">
                          <div className="input-box">
                            <label className="label-text">Select Semester</label>
                            <select
                              className="select-contain-select form-control"
                              tabindex="-98"
                              onChange={(e) => GetCourses(e.target.value)}
                            >
                              <option>Select one</option>
                              {semester.map((data) => {
                                return (
                                  <>
                                    {data.semesterId.map((index) => {
                                      return (
                                        <option value={index._id}>
                                          semester-{index.name}
                                        </option>
                                      );
                                    })}
                                  </>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-12 responsive-column mt-4">
                          <h3 className="title">Select Courses Now!</h3>
                        </div>
                        {formValues.map((element, index) => (
                          <>
                            <div className="col-lg-6 responsive-column">
                              <div className="input-box">
                                <label className="label-text">
                                  Select Course({index + 1}):
                                </label>
                                <select
                                  className="select-contain-select form-control"
                                  tabindex="-98"
                                  onChange={(e) => setCourseId(e.target.value)}
                                >
                                  <option value="1">Select one</option>
                                  {course.map((data) => {
                                    return (
                                      <>
                                        {data.courseId.map((data) => {
                                          return (
                                            <option value={data._id}>
                                              {data.name}
                                            </option>
                                          );
                                        })}
                                      </>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-6 responsive-column">
                              <label className="label-text">
                                Click Add To Enroll in Course!
                              </label>
                              <div className="input-box mt-2">
                                <div className="form-group">
                                  <button
                                    type="submit"
                                    className="border-0 bg-transparent"
                                    onClick={registerCourse}
                                  >
                                    Add!
                                  </button>
                                  {index ? (
                                    <button
                                      type="button"
                                      className="border-0 bg-transparent text-danger pl-4"
                                      onClick={() => removeFormFields(index)}
                                    >
                                      Remove!
                                    </button>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          </>
                        ))}
                        {move && (
                          <div className="col-lg-12 responsive-column mt-4">
                            <Link to="/dashboard">
                              <button
                                type="button"
                                className="btn-success theme-btn btn-round mt-4 col-lg-12"
                              >
                                Finish
                              </button>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
