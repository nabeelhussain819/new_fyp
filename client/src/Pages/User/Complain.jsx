import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetSpecificCourse } from "../../Api/Department";
import { ReadQec } from "../../Api/Qec";
import { AuthUser } from "../../Api/SpecificData/AuthUser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Complain = () => {
  const [student, setStudent] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [departId, setDepartId] = useState("");
  const [issue, setIssue] = useState("");
  const [complain, setComplain] = useState("");
  const [show, setShow] = useState(true);
  const [step, setNext] = useState(false);
  const [dept, setDept] = useState(false);
  const [course, setCourse] = useState(false);
  const [evaluation, setEvaluation] = useState(false);
  const [site, setSite] = useState(false);

  function next() {
    if ((!departId && !courseId) || !issue) {
      toast.warning("Add All Feilds");
    } else {
      setShow(false);
      setNext(true);
    }
  }
  const ComplainDept = async (e) => {
    e.preventDefault();
    console.log(issue, complain);

    const res = await fetch("http://localhost:5000/complain", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        issue,
        complain,
        studentId: localStorage.getItem("id"),
        courseId,
        departId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning(data.error);
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      toast.success("Complain Submitted Successfully");
    }
  };
  function change(data) {
    if (data == "dept") {
      setDept(true);
      setCourse(false);
      setEvaluation(false);
      setNext(false);
      setSite(false);
    }
    if (data == "course") {
      setDept(false);
      setCourse(true);
      setEvaluation(false);
      setNext(false);
      setSite(false);
    }
    if (data == "teach") {
      setDept(false);
      setCourse(false);
      setEvaluation(false);
      setNext(false);
      setSite(false);
    }
    if (data == "evaluate") {
      setDept(false);
      setCourse(false);
      setEvaluation(true);
      setNext(false);
      setSite(false);
    }
    if (data == "site") {
      setDept(false);
      setCourse(false);
      setEvaluation(false);
      setSite(true);
      setNext(false);
    }
  }
  useEffect(() => {
    const getData = () => {
      AuthUser().then(function (result) {
        setStudent([result]);
      });
    };
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
                  <p class="sec__desc pb-2">Complain Box</p>
                  <h2 class="sec__title">Report A Complain</h2>
                  <p class="sec__desc">
                    Select A tab For Which You To Report A Complain
                  </p>
                </div>
              </div>
              <div class="section-tab text-center pl-4">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <button
                      class="nav-link d-flex align-items-center"
                      id="flight-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="flight"
                      aria-selected="true"
                      onClick={() => change("dept")}
                    >
                      <i class="la la-plane mr-1"></i>Department
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link d-flex align-items-center"
                      id="hotel-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="hotel"
                      aria-selected="false"
                      onClick={() => change("course")}
                    >
                      <i class="la la-hotel mr-1"></i>Courses
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link d-flex align-items-center"
                      id="cruise-tab"
                      data-toggle="tab"
                      onClick={() => change("evaluate")}
                      role="tab"
                      aria-controls="cruise"
                      aria-selected="false"
                    >
                      <i class="la la-ship mr-1"></i>Evaluation
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link d-flex align-items-center"
                      id="tour-tab"
                      data-toggle="tab"
                      onClick={() => change("site")}
                      role="tab"
                      aria-controls="tour"
                      aria-selected="false"
                    >
                      <i class="la la-globe mr-1"></i>Site
                    </button>
                  </li>
                </ul>
              </div>
              <div class="search-fields-container">
                <div class="contact-form-action">
                  <form action="#" class="row">
                    {dept && (
                      <>
                        <div class="col-lg-6 pr-0">
                          <div class="input-box">
                            <label class="label-text">Select Department</label>
                            <div class="form-group">
                              <span class="la la-map-marker form-icon"></span>
                              <select
                                class="select-contain-select form-control"
                                tabindex="-98"
                                onChange={(e) => setDepartId(e.target.value)}
                              >
                                <option value="">Select One</option>
                                {student.map((data) =>
                                  data.deptId.map((item) => {
                                    return (
                                      <option value={item._id}>
                                        Department Of {item.name}
                                      </option>
                                    );
                                  })
                                )}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 pr-0">
                          <div class="input-box">
                            <label class="label-text">Select Issue</label>
                            <div class="form-group">
                              <span class="la la-map-marker form-icon"></span>
                              <select
                                class="select-contain-select form-control"
                                tabindex="-98"
                                onChange={(e) => setIssue(e.target.value)}
                              >
                                <option value="">Select One</option>
                                <option value="admission">Admission</option>
                                <option value="others">Others</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {course && (
                      <>
                        <div class="col-lg-6 pr-0">
                          <div class="input-box">
                            <label class="label-text">Select Courses</label>
                            <div class="form-group">
                              <span class="la la-calendar form-icon"></span>
                              <select
                                class="select-contain-select form-control"
                                tabindex="-98"
                                onChange={(e) => setCourseId(e.target.value)}
                              >
                                <option value="">Select One</option>
                                {student.map((data) =>
                                  data.courseId.map((item) => {
                                    return (
                                      <option value={item._id}>
                                        Course-{item.name}
                                      </option>
                                    );
                                  })
                                )}
                              </select>
                            </div>
                          </div>
                        </div>{" "}
                        <div class="col-lg-6 pr-0">
                          <div class="input-box">
                            <label class="label-text">Select Issue</label>
                            <div class="form-group">
                              <span class="la la-map-marker form-icon"></span>
                              <select
                                class="select-contain-select form-control"
                                tabindex="-98"
                                onChange={(e) => setIssue(e.target.value)}
                              >
                                <option value="">Select One</option>
                                <option value="admission">Admission</option>
                                <option value="others">Others</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {evaluation && (
                      <>
                        <div class="col-lg-12 pr-0">
                          <div class="input-box">
                            <label class="label-text">Select Issue</label>
                            <div class="form-group">
                              <span class="la la-calendar form-icon"></span>
                              <select
                                class="select-contain-select form-control"
                                tabindex="-98"
                                onChange={(e) => setIssue(e.target.value)}
                              >
                                <option value="">Select One</option>
                                <option value="admission">Admission</option>
                                <option value="others">Others</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {site && (
                      <>
                        <div class="col-lg-12 pr-0">
                          <div class="input-box">
                            <label class="label-text">Select Issue</label>
                            <div class="form-group">
                              <span class="la la-calendar form-icon"></span>
                              <select
                                class="select-contain-select form-control"
                                tabindex="-98"
                                onChange={(e) => setIssue(e.target.value)}
                              >
                                <option value="">Select One</option>
                                <option value="admission">Admission</option>
                                <option value="others">Others</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </form>
                  {show && (
                    <>
                      {(departId || courseId || issue) && (
                        <div class="btn-box pt-3 col-lg-12">
                          <button
                            class="theme-btn theme-btn-small col-lg-12"
                            onClick={next}
                          >
                            Report Now!
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {step && (
        <section class="hero-wrapper bread-bg pb-4">
          <div class="pb-0">
            <div class="container pt-4">
              <div class="col-lg-12 pt-4">
                <div class="form-box">
                  <div class="form-title-wrap">
                    <h3 class="title">
                      <i class="la la-user mr-2 text-gray"></i>Your Complain
                    </h3>
                  </div>
                  <div class="form-content contact-form-action">
                    <div class="row MultiFile-intercepted">
                      <div class="col-lg-12 responsive-column">
                        <div class="input-box">
                          <label class="label-text">Your Complain</label>
                          <div class="form-group">
                            <span class="la la-pencil form-icon"></span>
                            <textarea
                              class="message-control form-control"
                              name="message"
                              placeholder="No HTML, no web or email address, no ALL CAPS "
                              value={complain}
                              onChange={(e) => setComplain(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="input-box">
                          <label class="label-text text-color-6">
                            Minimum stay* (not including holidays)
                          </label>
                          <div class="form-group d-flex align-items-center">
                            <label
                              for="radio-1"
                              class="radio-trigger mb-0 font-size-14 mr-3"
                            >
                              <input type="radio" id="radio-1" name="radio" />
                              <span class="checkmark"></span>
                              <span>3 nights or less</span>
                            </label>
                            <label
                              for="radio-2"
                              class="radio-trigger mb-0 font-size-14"
                            >
                              <input type="radio" id="radio-2" name="radio" />
                              <span class="checkmark"></span>
                              <span>More than 3 nights</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="input-box">
                          <label class="label-text text-color-6">
                            Minimum stay* (not including holidays)
                          </label>
                          <div class="form-group d-flex align-items-center">
                            <label
                              for="radio-1"
                              class="radio-trigger mb-0 font-size-14 mr-3"
                            >
                              <input type="radio" id="radio-1" name="radio" />
                              <span class="checkmark"></span>
                              <span>3 nights or less</span>
                            </label>
                            <label
                              for="radio-2"
                              class="radio-trigger mb-0 font-size-14"
                            >
                              <input type="radio" id="radio-2" name="radio" />
                              <span class="checkmark"></span>
                              <span>More than 3 nights</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="input-box">
                          <label class="label-text text-color-6">
                            Minimum stay* (not including holidays)
                          </label>
                          <div class="form-group d-flex align-items-center">
                            <label
                              for="radio-1"
                              class="radio-trigger mb-0 font-size-14 mr-3"
                            >
                              <input type="radio" id="radio-1" name="radio" />
                              <span class="checkmark"></span>
                              <span>3 nights or less</span>
                            </label>
                            <label
                              for="radio-2"
                              class="radio-trigger mb-0 font-size-14"
                            >
                              <input type="radio" id="radio-2" name="radio" />
                              <span class="checkmark"></span>
                              <span>More than 3 nights</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="input-box">
                          <label class="label-text text-color-6">
                            Minimum stay* (not including holidays)
                          </label>
                          <div class="form-group d-flex align-items-center">
                            <label
                              for="radio-1"
                              class="radio-trigger mb-0 font-size-14 mr-3"
                            >
                              <input type="radio" id="radio-1" name="radio" />
                              <span class="checkmark"></span>
                              <span>3 nights or less</span>
                            </label>
                            <label
                              for="radio-2"
                              class="radio-trigger mb-0 font-size-14"
                            >
                              <input type="radio" id="radio-2" name="radio" />
                              <span class="checkmark"></span>
                              <span>More than 3 nights</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="input-box">
                          <label class="label-text text-color-6">
                            Minimum stay* (not including holidays)
                          </label>
                          <div class="form-group d-flex align-items-center">
                            <label
                              for="radio-1"
                              class="radio-trigger mb-0 font-size-14 mr-3"
                            >
                              <input type="radio" id="radio-1" name="radio" />
                              <span class="checkmark"></span>
                              <span>3 nights or less</span>
                            </label>
                            <label
                              for="radio-2"
                              class="radio-trigger mb-0 font-size-14"
                            >
                              <input type="radio" id="radio-2" name="radio" />
                              <span class="checkmark"></span>
                              <span>More than 3 nights</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="input-box">
                          <label class="label-text text-color-6">
                            Minimum stay* (not including holidays)
                          </label>
                          <div class="form-group d-flex align-items-center">
                            <label
                              for="radio-1"
                              class="radio-trigger mb-0 font-size-14 mr-3"
                            >
                              <input type="radio" id="radio-1" name="radio" />
                              <span class="checkmark"></span>
                              <span>3 nights or less</span>
                            </label>
                            <label
                              for="radio-2"
                              class="radio-trigger mb-0 font-size-14"
                            >
                              <input type="radio" id="radio-2" name="radio" />
                              <span class="checkmark"></span>
                              <span>More than 3 nights</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="input-box">
                          <label class="label-text text-color-6">
                            Minimum stay* (not including holidays)
                          </label>
                          <div class="form-group d-flex align-items-center">
                            <label
                              for="radio-1"
                              class="radio-trigger mb-0 font-size-14 mr-3"
                            >
                              <input type="radio" id="radio-1" name="radio" />
                              <span class="checkmark"></span>
                              <span>3 nights or less</span>
                            </label>
                            <label
                              for="radio-2"
                              class="radio-trigger mb-0 font-size-14"
                            >
                              <input type="radio" id="radio-2" name="radio" />
                              <span class="checkmark"></span>
                              <span>More than 3 nights</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12 responsive-column pt-4">
                        <div class="submit-box">
                          <h3 class="title pb-3">Submit this listing</h3>
                          <div class="custom-checkbox">
                            <input type="checkbox" id="agreeChb" />
                            <label for="agreeChb">
                              Check this box to certify that you are an official
                              representative of the property for which you are
                              submitting this listing and that the information
                              you have submitted is correct. In submitting a
                              photo, you also certify that you have the right to
                              use the photo on the web and agree to hold Trizen
                              harmless for any and all copyright issues arising
                              from your use of the image.
                            </label>
                          </div>
                          <div class="btn-box pt-3">
                            <button
                              type="submit"
                              class="theme-btn"
                              onClick={ComplainDept}
                            >
                              Submit Listing{" "}
                              <i class="la la-arrow-right ml-1"></i>
                            </button>
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
      )}
    </div>
  );
};

export default Complain;
