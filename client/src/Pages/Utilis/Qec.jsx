import React, { useState, useEffect } from "react";
import logo1 from "../../Assets/logo.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, Link } from "react-router-dom";
import { AuthQec, AuthUser } from "../../Api/SpecificData/AuthUser";
import { ReadCourse } from "../../Api/Course";
const Qec = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState([]);
  const [rating, setScore] = useState(0);
  const [user, setUser] = useState([]);
  const [qec, setQec] = useState([]);
  const [course, setCourse] = useState([]);
  const location = useLocation();
  const { courseId, teacherId, term } = location.state;
  const studentId = localStorage.getItem("id");

  const answerClick = async (e) => {
    e.preventDefault();
    const res = await fetch("https://fyptes.herokuapp.com/qec", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        courseId,
        teacherId,
        studentId,
        rating,
        term,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning(data.error);
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      toast.success("Qec Submmited Successfully");
    }
  };
  console.log(rating, value);
  const result = (isCorrect) => {
    if (isCorrect) {
      const newScore = rating + Number(isCorrect);
      console.log(isCorrect);
      setScore(newScore);
      setValue([...value, isCorrect]);
    }
    if (rating > 43) {
      alert("Fill Again You Are Changing Your Desicion Too Many Times");
      window.location.reload();
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    const getData = () => {
      AuthUser().then(function (result) {
        setUser([result]);
      });
    };
    const getQecCourse = () => {
      AuthQec().then(function (result) {
        setQec(result);
      });
    };
    const getCourse = () => {
      ReadCourse().then(function (result) {
        setCourse(result);
      });
    };
    getQecCourse();
    getCourse();
    getData();
  }, []);
  return (
    <>
      <div className="dashboard-bread gradient-bg-gray ">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="breadcrumb-content">
                <div className="section-heading">
                  <h2 className="sec__title font-size-30 text-light">
                    EVALUATION FORM
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-right">
                <ul className="list-items">
                  <img src={logo1} alt="logo" style={{ width: "200px" }} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-0">
        <div className="container pt-4">
          <div className="col-lg-12 pt-4">
            <div className="form-box">
              <div className="form-title-wrap">
                <h3 className="title">
                  <i className="la la-user mr-2 text-gray"></i>About Student
                </h3>
              </div>
              <div className="form-content contact-form-action">
                <form method="post" className="row MultiFile-intercepted">
                  {user.map((data) => {
                    return (
                      <>
                        <div className="col-lg-6">
                          <div className="input-box">
                            <label className="label-text">Full Name</label>
                            <div className="form-group">
                              <span className="la la-user form-icon"></span>
                              <input
                                className="form-control"
                                type="text"
                                value={data.name}
                                placeholder="+1(1)8547632521"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-box">
                            <label className="label-text">Phone</label>
                            <div className="form-group">
                              <span className="la la-phone form-icon"></span>
                              <input
                                className="form-control"
                                type="text"
                                value={data.phone}
                                placeholder="+1(1)1147521433"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-box">
                            <label className="label-text">Email</label>
                            <div className="form-group">
                              <span className="la la-envelope-o form-icon"></span>
                              <input
                                className="form-control"
                                type="text"
                                value={data.email}
                                placeholder="Email for customer inquiries"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-box">
                            <label className="label-text">University ID</label>
                            <div className="form-group">
                              <span className="la la-globe form-icon"></span>
                              <input
                                className="form-control"
                                type="text"
                                value={data.u_id}
                                placeholder="https://www.techydevs.com/"
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-0">
        <div className="container pt-4">
          <div className="col-lg-12 pt-4">
            <div className="form-box">
              <div className="form-title-wrap">
                <h3 className="title">
                  <i className="la la-user mr-2 text-gray"></i>About Course
                </h3>
              </div>
              <div className="form-content contact-form-action">
                <form method="post" className="row MultiFile-intercepted">
                  {course.map((data) => {
                    return (
                      <>
                        {data._id == courseId ? (
                          <>
                            {" "}
                            <div className="col-lg-6">
                              <div className="input-box">
                                <label className="label-text">Course</label>
                                <div className="form-group">
                                  <span className="la la-user form-icon"></span>
                                  <input
                                    className="form-control"
                                    type="text"
                                    value={data.name}
                                    placeholder="+1(1)8547632521"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-box">
                                <label className="label-text">Teacher</label>
                                <div className="form-group">
                                  <span className="la la-phone form-icon"></span>
                                  <input
                                    className="form-control"
                                    type="text"
                                    value={data.teacherId.map((data) =>
                                      data._id == teacherId ? data.name : null
                                    )}
                                    placeholder="+1(1)1147521433"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-box">
                                <label className="label-text">Semester</label>
                                <div className="form-group">
                                  <span className="la la-envelope-o form-icon"></span>
                                  <input
                                    className="form-control"
                                    type="text"
                                    value={data.semesterId.map(
                                      (data) => "semester" - data.name
                                    )}
                                    placeholder="Email for customer inquiries"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="input-box">
                                <label className="label-text">Code</label>
                                <div className="form-group">
                                  <span className="la la-globe form-icon"></span>
                                  <input
                                    className="form-control"
                                    type="text"
                                    value={data.code}
                                    placeholder="https://www.techydevs.com/"
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        ) : null}
                      </>
                    );
                  })}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-0">
        <div className="container pt-4">
          <div className="col-lg-12 pt-4">
            <div className="form-box">
              <div className="form-title-wrap">
                <h3 className="title">
                  <i className="la la-building-o mr-2 text-gray"></i>Information
                  about your Instructor
                </h3>
              </div>
              <div className="form-content contact-form-action">
                <form method="post" className="row MultiFile-intercepted">
                  <div className="col-lg-4">
                    <div className="input-box">
                      <label className="label-text">Rate The Teacher</label>
                      <div className="rate-stars-option">
                        <span className="ratings d-flex align-items-center mr-1">
                          <input
                            type="checkbox"
                            id="lst1"
                            value="5"
                            onChange={(e) => result(e.target.value)}
                          />
                          <label for="lst1"></label>
                          <input
                            type="checkbox"
                            id="lst2"
                            value="4"
                            onChange={(e) => result(e.target.value)}
                          />
                          <label for="lst2"></label>
                          <input
                            type="checkbox"
                            id="lst3"
                            value="3"
                            onChange={(e) => result(e.target.value)}
                          />
                          <label for="lst3"></label>
                          <input
                            type="checkbox"
                            id="lst4"
                            value="2"
                            onChange={(e) => result(e.target.value)}
                          />
                          <label for="lst4"></label>
                          <input
                            type="checkbox"
                            id="lst5"
                            value="1"
                            onChange={(e) => result(e.target.value)}
                          />
                          <label for="lst5"></label>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="input-box">
                      <label className="label-text">
                        Select a Teacher Category
                      </label>
                      <div className="form-group">
                        <span className="la la-calendar form-icon"></span>
                        <select
                          className="select-contain-select form-control"
                          tabindex="-98"
                          onChange={(e) => result(e.target.value)}
                        >
                          <option>Select One</option>
                          <option value="3">Highly Rated</option>
                          <option value="2">Recommended</option>
                          <option value="1">Under Rated</option>
                          <option value="0">Over Rated</option>
                          <option value="0">None Of The Above</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-box">
                      <label className="label-text mb-0 line-height-20">
                        Describe Your Teacher In Your Own Word(Optional)
                      </label>
                      <p className="font-size-13 mb-3 line-height-20">
                        400 character limit
                      </p>
                      <div className="form-group">
                        <span className="la la-pencil form-icon"></span>
                        <textarea
                          className="message-control form-control"
                          name="message"
                          placeholder="In English only, no HTML, no web or email address, no ALL CAPS           "
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-box">
                      <label className="label-text text-color-6">
                        The instructor was well prepared for class *
                      </label>
                      <div className="form-group d-flex align-items-center">
                        <label
                          for="radio-1"
                          className="radio-trigger mb-0 font-size-14 mr-3"
                        >
                          <input
                            type="radio"
                            id="radio-1"
                            name="radio"
                            value="1"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>yes</span>
                        </label>
                        <label
                          for="radio-2"
                          className="radio-trigger mb-0 font-size-14"
                        >
                          <input
                            type="radio"
                            id="radio-2"
                            name="radio"
                            value="0"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>No</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-box">
                      <label className="label-text text-color-6">
                        Individual class meetings were well prepared *
                      </label>
                      <div className="form-group d-flex align-items-center">
                        <label
                          for="radio-3"
                          className="radio-trigger mb-0 font-size-14 mr-3"
                        >
                          <input
                            type="radio"
                            id="radio-3"
                            name="radio1"
                            value="1"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>On site</span>
                        </label>
                        <label
                          for="radio-4"
                          className="radio-trigger mb-0 font-size-14"
                        >
                          <input
                            type="radio"
                            id="radio-4"
                            name="radio1"
                            value="0"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>None</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-box">
                      <label className="label-text text-color-6">
                        The instructor used class time effectively *
                      </label>
                      <div className="form-group d-flex align-items-center">
                        <label
                          for="radio-5"
                          className="radio-trigger mb-0 font-size-14 mr-3"
                        >
                          <input
                            type="radio"
                            id="radio-5"
                            name="radio2"
                            value="1"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>Yes</span>
                        </label>
                        <label
                          for="radio-6"
                          className="radio-trigger mb-0 font-size-14"
                        >
                          <input
                            type="radio"
                            id="radio-6"
                            name="radio2"
                            value="0"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>No</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-box">
                      <label className="label-text text-color-6">
                        The instructor was organized, well prepared, and used
                        class time efficiently *
                      </label>
                      <div className="form-group d-flex align-items-center">
                        <label
                          for="radio-7"
                          className="radio-trigger mb-0 font-size-14 mr-3"
                        >
                          <input
                            type="radio"
                            id="radio-7"
                            name="radio3"
                            value="1"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>Included in room rate</span>
                        </label>
                        <label
                          for="radio-8"
                          className="radio-trigger mb-0 font-size-14"
                        >
                          <input
                            type="radio"
                            id="radio-8"
                            name="radio3"
                            value="0"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>Additional Fee</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-box">
                      <label className="label-text text-color-6">
                        The instructor communicated clearly and was easy to
                        understand *
                      </label>
                      <div className="form-group d-flex align-items-center">
                        <label
                          for="radio-9"
                          className="radio-trigger mb-0 font-size-14 mr-3"
                        >
                          <input
                            type="radio"
                            id="radio-9"
                            name="radio4"
                            value="2"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>Daily</span>
                        </label>
                        <label
                          for="radio-10"
                          className="radio-trigger mb-0 font-size-14 mr-3"
                        >
                          <input
                            type="radio"
                            id="radio-10"
                            name="radio4"
                            value="1"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>Weekly</span>
                        </label>
                        <label
                          for="radio-11"
                          className="radio-trigger mb-0 font-size-14 mr-3"
                        >
                          <input
                            type="radio"
                            id="radio-11"
                            name="radio"
                            value="0"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>Bi-weekly</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-box">
                      <label className="label-text text-color-6">
                        The instructor encouraged student participation in class
                        *
                      </label>
                      <div className="form-group d-flex align-items-center">
                        <label
                          for="radio-13"
                          className="radio-trigger mb-0 font-size-14 mr-3"
                        >
                          <input
                            type="radio"
                            id="radio-13"
                            name="radio5"
                            value="1"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>24-hour staffing</span>
                        </label>
                        <label
                          for="radio-14"
                          className="radio-trigger mb-0 font-size-14 mr-3"
                        >
                          <input
                            type="radio"
                            id="radio-14"
                            name="radio5"
                            value="0"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>Limited hours staffing</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-box">
                      <label className="label-text text-color-6">
                        The instructor presented course material in a clear
                        manner that facilitated understanding *
                      </label>
                      <div className="form-group d-flex align-items-center">
                        <label
                          for="radio-126"
                          className="radio-trigger mb-0 font-size-14 mr-3"
                        >
                          <input
                            type="radio"
                            id="radio-126"
                            name="radio6"
                            value="2"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>All en suite</span>
                        </label>
                        <label
                          for="radio-127"
                          className="radio-trigger mb-0 font-size-14 mr-3"
                        >
                          <input
                            type="radio"
                            id="radio-127"
                            name="radio6"
                            value="1"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>Some en suite</span>
                        </label>
                        <label
                          for="radio-128"
                          className="radio-trigger mb-0 font-size-14"
                        >
                          <input
                            type="radio"
                            id="radio-128"
                            name="radio6"
                            value="0"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>Shared</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-box">
                      <label className="label-text text-color-6">
                        The instructor effectively organized and facilitated
                        well-run learning activities *
                      </label>
                      <div className="form-group d-flex align-items-center">
                        <label
                          for="radio-116"
                          className="radio-trigger mb-0 font-size-14 mr-3"
                        >
                          <input
                            type="radio"
                            id="radio-116"
                            name="radio7"
                            value="2"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>All en suite</span>
                        </label>
                        <label
                          for="radio-117"
                          className="radio-trigger mb-0 font-size-14 mr-3"
                        >
                          <input
                            type="radio"
                            id="radio-117"
                            name="radio7"
                            value="1"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>Some en suite</span>
                        </label>
                        <label
                          for="radio-118"
                          className="radio-trigger mb-0 font-size-14"
                        >
                          <input
                            type="radio"
                            id="radio-118"
                            name="radio7"
                            value="0"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>Shared</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-box">
                      <label className="label-text text-color-6">
                        The instructor’s teaching methods were effective *
                      </label>
                      <div className="form-group d-flex align-items-center">
                        <label
                          for="radio-16"
                          className="radio-trigger mb-0 font-size-14 mr-3"
                        >
                          <input
                            type="radio"
                            id="radio-16"
                            name="radio8"
                            value="2"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>All en suite</span>
                        </label>
                        <label
                          for="radio-17"
                          className="radio-trigger mb-0 font-size-14 mr-3"
                        >
                          <input
                            type="radio"
                            id="radio-17"
                            name="radio8"
                            value="1"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>Some en suite</span>
                        </label>
                        <label
                          for="radio-18"
                          className="radio-trigger mb-0 font-size-14"
                        >
                          <input
                            type="radio"
                            id="radio-18"
                            name="radio8"
                            value="0"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>Shared</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-box">
                      <label className="label-text text-color-6">
                        The instructor’s teaching methods aided my learning *
                      </label>
                      <div className="form-group d-flex align-items-center">
                        <label
                          for="radio-19"
                          className="radio-trigger mb-0 font-size-14 mr-3"
                        >
                          <input
                            type="radio"
                            id="radio-19"
                            name="radio9"
                            value="2"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>All en suite</span>
                        </label>
                        <label
                          for="radio-20"
                          className="radio-trigger mb-0 font-size-14 mr-3"
                        >
                          <input
                            type="radio"
                            id="radio-20"
                            name="radio9"
                            value="1"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>Some en suite</span>
                        </label>
                        <label
                          for="radio-21"
                          className="radio-trigger mb-0 font-size-14"
                        >
                          <input
                            type="radio"
                            id="radio-21"
                            name="radio9"
                            value="0"
                            onChange={(e) => result(e.target.value)}
                          />
                          <span className="checkmark"></span>
                          <span>Shared</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-0">
        <div className="container pt-4">
          <div className="col-lg-12 pt-4">
            <div className="form-box">
              <div className="form-title-wrap">
                <h3 className="title">
                  <i className="la la-gear mr-2 text-gray"></i>Ability And
                  Limitations
                </h3>
              </div>
              <div className="form-content contact-form-action">
                <form method="post" className="row MultiFile-intercepted">
                  <div className="col-lg-6">
                    <div className="custom-checkbox">
                      <input type="checkbox" id="AirportTransportation" />
                      <label for="AirportTransportation">Well Influnced</label>
                    </div>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="BarLounge"
                        value="1"
                        onChange={(e) => result(e.target.value)}
                      />
                      <label for="BarLounge">Well Dressed</label>
                    </div>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="Beach"
                        value="1"
                        onChange={(e) => result(e.target.value)}
                      />
                      <label for="Beach">Punctual</label>
                    </div>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="BeverageSelection"
                        value="1"
                        onChange={(e) => result(e.target.value)}
                      />
                      <label for="BeverageSelection">Clearity In Voice</label>
                    </div>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="SwimmingPool"
                        value="1"
                        onChange={(e) => result(e.target.value)}
                      />
                      <label for="SwimmingPool">Understandable</label>
                    </div>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="WIFI"
                        value="1"
                        onChange={(e) => result(e.target.value)}
                      />
                      <label for="WIFI"></label>
                    </div>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="Coffee"
                        value="1"
                        onChange={(e) => result(e.target.value)}
                      />
                      <label for="Coffee">Coffee</label>
                    </div>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="AirConditioning"
                        value="1"
                        onChange={(e) => result(e.target.value)}
                      />
                      <label for="AirConditioning">Air Conditioning</label>
                    </div>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="Entertainment"
                        value="1"
                        onChange={(e) => result(e.target.value)}
                      />
                      <label for="Entertainment">Entertainment</label>
                    </div>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="ElevatorInBuilding"
                        value="1"
                        onChange={(e) => result(e.target.value)}
                      />
                      <label for="ElevatorInBuilding">
                        Elevator In Building
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="WheelchairAccess"
                        value="1"
                        onChange={(e) => result(e.target.value)}
                      />
                      <label for="WheelchairAccess">Wheelchair access</label>
                    </div>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="FitnessFacility"
                        value="1"
                        onChange={(e) => result(e.target.value)}
                      />
                      <label for="FitnessFacility">Fitness Facility</label>
                    </div>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="Breakfast"
                        value="1"
                        onChange={(e) => result(e.target.value)}
                      />
                      <label for="Breakfast">Breakfast</label>
                    </div>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="HandicapAccessible"
                        value="1"
                        onChange={(e) => result(e.target.value)}
                      />
                      <label for="HandicapAccessible">
                        Handicap Accessible
                      </label>
                    </div>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="PetsAllowed"
                        value="1"
                        onChange={(e) => result(e.target.value)}
                      />
                      <label for="PetsAllowed">Pets Allowed</label>
                    </div>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="SuitableForEvents"
                        value="1"
                        onChange={(e) => result(e.target.value)}
                      />
                      <label for="SuitableForEvents">Suitable For Events</label>
                    </div>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="Restaurant"
                        value="1"
                        onChange={(e) => result(e.target.value)}
                      />
                      <label for="Restaurant">Restaurant</label>
                    </div>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="Doorman"
                        value="1"
                        onChange={(e) => result(e.target.value)}
                      />
                      <label for="Doorman">Doorman</label>
                    </div>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="FreeParking"
                        value="1"
                        onChange={(e) => result(e.target.value)}
                      />
                      <label for="FreeParking">Free Parking</label>
                    </div>
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id="WineBar"
                        value="1"
                        onChange={(e) => result(e.target.value)}
                      />
                      <label for="WineBar">Wine Bar</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {show && (
            <Link
              to={"/qec-graph"}
              className="theme-btn"
              state={{
                rating: rating,
                value: value,
              }}
            >
              Proceed To Completion!
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Qec;
