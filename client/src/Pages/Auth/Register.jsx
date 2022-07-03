import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReadDepartment } from "../../Api/Department";
import { GetSession } from "../../Api/Department";

const Register = () => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [program, setProgram] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [u_id, setUid] = useState("");
  const [deptId, setDeptId] = useState("");
  const [depart, setDepart] = useState(false);
  const [session, setSession] = useState(false);
  const [search, setSearch] = useState("");
  const [programId, setProgramId] = useState("");
  const [Semester, setSemester] = useState(false);
  const [course, setCourse] = useState(false);
  const [semesterId, setSemesterId] = useState("");
  const [sectionId, setSectionId] = useState("");
  const [section, setSection] = useState([]);
  const [departApi, setDepartApi] = useState([]);
  const [sessionApi, setSessionApi] = useState([]);
  //   const filterDepart = depart.filter((data) => data.name.includes(search));
  function handleButton(props) {
    if (props == "depart") {
      console.log(departApi);
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
  function handleNext(data) {
    setDeptId(data);
    setDepart(false);
    setSession(true);
    getData1({ data });
  }
  const registerUser = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        u_id,
        phone,
        deptId,
        sessionId,
        programId,
        semesterId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.error(data.error);
    } else {
      {
        data.isTeacher === true
          ? localStorage.setItem("teacher", data._id)
          : localStorage.setItem("user", data._id);
      }
      toast("register Successfully");
      // navigate("/extendedForm");
    }
  };
  const getData1 = ({ data }) => {
    GetSession({ data: data }).then(function (result) {
      console.log(result);
      setSessionApi(result);
    });
  };
  useEffect(() => {
    const getData = () => {
      ReadDepartment().then(function (result) {
        setDepartApi(result);
      });
    };

    getData();
  }, []);
  return (
    <div>
      <section class="user-area padding-top-100px padding-bottom-60px">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h3 class="title font-size-24"> Sign Up Now</h3>
              <div class="card-item user-card card-item-list mt-4 mb-0">
                <div class="card-body">
                  <h3 class="card-title">Your Information</h3>
                  <p class="card-meta"></p>
                  <div class="d-flex justify-content-between pt-3">
                    <ul class="list-items list-items-2 flex-grow-1">
                      <li>
                        <span>Email:</span>{" "}
                        <input
                          class="form-control"
                          type="text"
                          name="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Type your Email"
                          required
                        />
                      </li>
                      <li>
                        <span>Phone:</span>{" "}
                        <input
                          class="form-control"
                          type="number"
                          name="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Type your Phone"
                          required
                        />
                      </li>
                      <li>
                        <span>Full Name:</span>{" "}
                        <input
                          class="form-control"
                          type="text"
                          name="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Type your username"
                          required
                        />
                      </li>
                      <li>
                        <span>University ID:</span>{" "}
                        <input
                          class="form-control"
                          type="text"
                          name="text"
                          value={u_id}
                          onChange={(e) => setUid(e.target.value)}
                          placeholder="Type your University ID"
                          required
                        />
                      </li>
                      <li>
                        <span>Password:</span>{" "}
                        <input
                          class="form-control"
                          type="password"
                          name="text"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Type your Password"
                          required
                        />
                      </li>
                    </ul>
                    <ul class="list-items flex-grow-1 pl-4">
                      <li>
                        <h3 class="title">
                          Verification of your Entered Feilds
                        </h3>
                      </li>
                      <li class="d-flex justify-content-between align-items-center">
                        <span class="color-text-2 font-weight-medium mr-2">
                          Name
                        </span>
                        <span class="theme-btn theme-btn-small theme-btn-rgb ">
                          {name}
                        </span>
                      </li>
                      <li class="d-flex justify-content-between align-items-center">
                        <span class="color-text-2 font-weight-medium mr-2">
                          Email
                        </span>
                        <span class="theme-btn theme-btn-small theme-btn-rgb">
                          {email}
                        </span>
                      </li>
                      <li class="d-flex justify-content-between align-items-center">
                        <span class="color-text-2 font-weight-medium mr-2">
                          ID Number
                        </span>
                        <span class="theme-btn theme-btn-small theme-btn-rgb">
                          {u_id}
                        </span>
                      </li>
                      <li class="d-flex justify-content-between align-items-center">
                        <span class="color-text-2 font-weight-medium mr-2">
                          Phone
                        </span>
                        <span class="theme-btn theme-btn-small theme-btn-rgb">
                          {phone}
                        </span>
                      </li>
                      <li class="d-flex justify-content-between align-items-center">
                        <span class="color-text-2 font-weight-medium mr-2">
                          Department
                        </span>
                        <span class="theme-btn theme-btn-small theme-btn-rgb">
                          {deptId}
                        </span>
                      </li>
                      <li class="d-flex justify-content-between align-items-center">
                        <span class="color-text-2 font-weight-medium mr-2">
                          Session
                        </span>
                        <span class="theme-btn theme-btn-small theme-btn-rgb">
                          {deptId}
                        </span>
                      </li>
                      <li class="d-flex justify-content-between align-items-center">
                        <span class="color-text-2 font-weight-medium mr-2">
                          Program
                        </span>
                        <span class="theme-btn theme-btn-small theme-btn-rgb">
                          {deptId}
                        </span>
                      </li>
                      <li class="d-flex justify-content-between align-items-center">
                        <span class="color-text-2 font-weight-medium mr-2">
                          Semester
                        </span>
                        <span class="theme-btn theme-btn-small theme-btn-rgb">
                          {deptId}
                        </span>
                      </li>
                      <li class="d-flex justify-content-between align-items-center">
                        <span class="color-text-2 font-weight-medium mr-2">
                          Course
                        </span>
                        <span class="theme-btn theme-btn-small theme-btn-rgb">
                          {deptId}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={registerUser}
                    className="theme-btn w-100"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row padding-top-70px">
            <div class="col-lg-12">
              <h3 class="title font-size-24">Add Services</h3>
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
              {departApi.map((data) => {
                return (
                  <div class="tab-content margin-bottom-40px" id="myTabcontent">
                    <div
                      class="tab-pane fade active show"
                      id="my-hotel"
                      role="tabpanel"
                      aria-labelledby="my-hotel-tab"
                    >
                      <div class="my-service-list">
                        <div class="card-item card-item-list">
                          <div class="card-img">
                            <a href="hotel-single.html" class="d-block">
                              <img src="images/img1.jpg" alt="hotel-img" />
                            </a>
                            <span class="badge">Featured</span>
                          </div>

                          <div class="card-body">
                            <h3 class="card-title">
                              <a href="hotel-single.html">{data.name}</a>
                            </h3>
                            <p class="card-meta">Total Students</p>
                            <div class="card-rating d-flex align-items-center pt-1">
                              <span class="rating__text">Hotel star</span>
                              <span class="ratings d-flex align-items-center mx-2">
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                              </span>
                              <span class="rating__text">5 of 5</span>
                            </div>
                            <div class="card-price d-flex align-items-center justify-content-between">
                              <p>
                                <span class="price__from">Price from</span>
                                <span class="price__num">$00.00</span>
                              </p>
                              <button
                                className="theme-btn"
                                onClick={() => handleNext(data._id)}
                              >
                                Enroll Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
          {session && (
            <>
              {sessionApi.map((data) => {
                return (
                  <>
                    {data.sessionId.map(([i, index]) => {
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
                                    <a href="hotel-single.html" class="d-block">
                                      <img
                                        src="images/img1.jpg"
                                        alt="hotel-img"
                                      />
                                    </a>
                                    <span class="badge">Featured</span>
                                  </div>

                                  <div class="card-body">
                                    <h3 class="card-title">
                                      <a href="hotel-single.html">
                                        {index.name}
                                      </a>
                                    </h3>
                                    <p class="card-meta">
                                      124 E Huron St, New york
                                    </p>
                                    <div class="card-rating d-flex align-items-center pt-1">
                                      <span class="rating__text">
                                        Hotel star
                                      </span>
                                      <span class="ratings d-flex align-items-center mx-2">
                                        <i class="la la-star"></i>
                                        <i class="la la-star"></i>
                                        <i class="la la-star"></i>
                                        <i class="la la-star"></i>
                                        <i class="la la-star"></i>
                                      </span>
                                      <span class="rating__text">5 of 5</span>
                                    </div>
                                    <div class="card-price d-flex align-items-center justify-content-between">
                                      <p>
                                        <span class="price__from">
                                          Price from
                                        </span>
                                        <span class="price__num">$00.00</span>
                                      </p>
                                      <button
                                        className="theme-btn"
                                        onClick={() => handleNext(sessionId)}
                                      >
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
                );
              })}
            </>
          )}
          {program && (
            <div class="tab-content margin-bottom-40px" id="myTabcontent">
              <div
                class="tab-pane fade active show"
                id="my-hotel"
                role="tabpanel"
                aria-labelledby="my-hotel-tab"
              >
                <div class="my-service-list">
                  <div class="card-item card-item-list">
                    <div class="card-img">
                      <a href="hotel-single.html" class="d-block">
                        <img src="images/img1.jpg" alt="hotel-img" />
                      </a>
                      <span class="badge">Featussred</span>
                    </div>
                    <div class="card-body">
                      <h3 class="card-title">
                        <a href="hotel-single.html">
                          The Millennium Hilton New York
                        </a>
                      </h3>
                      <p class="card-meta">124 E Huron St, New york</p>
                      <div class="card-rating d-flex align-items-center pt-1">
                        <span class="rating__text">Hotel star</span>
                        <span class="ratings d-flex align-items-center mx-2">
                          <i class="la la-star"></i>
                          <i class="la la-star"></i>
                          <i class="la la-star"></i>
                          <i class="la la-star"></i>
                          <i class="la la-star"></i>
                        </span>
                        <span class="rating__text">5 of 5</span>
                      </div>
                      <div class="card-price d-flex align-items-center justify-content-between">
                        <p>
                          <span class="price__from">Price from</span>
                          <span class="price__num">$00.00</span>
                        </p>
                        <button
                          className="theme-btn"
                          onClick={() => handleNext()}
                        >
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {Semester && (
            <div class="tab-content margin-bottom-40px" id="myTabcontent">
              <div
                class="tab-pane fade active show"
                id="my-hotel"
                role="tabpanel"
                aria-labelledby="my-hotel-tab"
              >
                <div class="my-service-list">
                  <div class="card-item card-item-list">
                    <div class="card-img">
                      <a href="hotel-single.html" class="d-block">
                        <img src="images/img1.jpg" alt="hotel-img" />
                      </a>
                      <span class="badge">dd</span>
                    </div>
                    <div class="card-body">
                      <h3 class="card-title">
                        <a href="hotel-single.html">
                          The Millennium Hilton New York
                        </a>
                      </h3>
                      <p class="card-meta">124 E Huron St, New york</p>
                      <div class="card-rating d-flex align-items-center pt-1">
                        <span class="rating__text">Hotel star</span>
                        <span class="ratings d-flex align-items-center mx-2">
                          <i class="la la-star"></i>
                          <i class="la la-star"></i>
                          <i class="la la-star"></i>
                          <i class="la la-star"></i>
                          <i class="la la-star"></i>
                        </span>
                        <span class="rating__text">5 of 5</span>
                      </div>
                      <div class="card-price d-flex align-items-center justify-content-between">
                        <p>
                          <span class="price__from">Price from</span>
                          <span class="price__num">$00.00</span>
                        </p>
                        <button
                          className="theme-btn"
                          onClick={() => handleNext()}
                        >
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {course && (
            <div class="tab-content margin-bottom-40px" id="myTabcontent">
              <div
                class="tab-pane fade active show"
                id="my-hotel"
                role="tabpanel"
                aria-labelledby="my-hotel-tab"
              >
                <div class="my-service-list">
                  <div class="card-item card-item-list">
                    <div class="card-img">
                      <a href="hotel-single.html" class="d-block">
                        <img src="images/img1.jpg" alt="hotel-img" />
                      </a>
                      <span class="badge">Featured</span>
                    </div>
                    <div class="card-body">
                      <h3 class="card-title">
                        <a href="hotel-single.html">
                          The Millennium Hilton New York
                        </a>
                      </h3>
                      <p class="card-meta">124 E Huron St, New york</p>
                      <div class="card-rating d-flex align-items-center pt-1">
                        <span class="rating__text">Hotel star</span>
                        <span class="ratings d-flex align-items-center mx-2">
                          <i class="la la-star"></i>
                          <i class="la la-star"></i>
                          <i class="la la-star"></i>
                          <i class="la la-star"></i>
                          <i class="la la-star"></i>
                        </span>
                        <span class="rating__text">5 of 5</span>
                      </div>
                      <div class="card-price d-flex align-items-center justify-content-between">
                        <p>
                          <span class="price__from">Price from</span>
                          <span class="price__num">$00.00</span>
                        </p>
                        <button
                          className="theme-btn"
                          onClick={() => handleNext()}
                        >
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Register;
