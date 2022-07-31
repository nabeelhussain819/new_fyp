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
    <>
      <section class="hero6 d-flex justify-content-center align-items-center" id="section_1">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12">
                        <div class="hero-text">
                                <div class="hero-title-wrap d-flex align-items-center mb-4">
                                <p className="sec__desc text-white">Complain Box</p>
                                    <h1 class="hero-title ms-3 mb-0">Report A Complain</h1>
                                </div>
                                <h2 class="mb-4 hero-title"> Select A tab To Report</h2>
                            </div>
                        </div>
                    </div>
                </div></section>
    <div className="container mt-4">
    <div class="col-lg-12 col-12 mt-5 mt-lg-0">
                                <form action="#" method="get" class="custom-form contact-form" role="form">
                                    <div class="row">
                                      
                                        <div class="col-lg-3 col-md-6 col-6">
                                            <div class="form-check form-check-inline">
                                                <input name="website" type="checkbox" class="form-check-input" id="inlineCheckbox1" value="1"  onClick={() => change("dept")}/>

                                                <label class="form-check-label" for="inlineCheckbox1">
                                                    <i class="bi-building form-check-icon"></i>
                                                    <span class="form-check-label-text">Department</span>
                                                </label>
                                          </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-6">
                                            <div class="form-check form-check-inline">
                                                <input name="branding" type="checkbox" onClick={() => change("course")} class="form-check-input" id="inlineCheckbox2" value="1"/>

                                                <label class="form-check-label" for="inlineCheckbox2">
                                                    <i class="bi-book form-check-icon"></i>
                                                    <span class="form-check-label-text">Courses</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-6">
                                            <div class="form-check form-check-inline">
                                                <input name="ecommerce" type="checkbox"  onClick={() => change("evaluate")} class="form-check-input" id="inlineCheckbox3" value="1"/>

                                                <label class="form-check-label" for="inlineCheckbox3">
                                                    <i class="bi-phone form-check-icon"></i>
                                                    <span class="form-check-label-text">Evaluation</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-6 col-6">
                                            <div class="form-check form-check-inline me-0">
                                                <input name="seo" type="checkbox"  onClick={() => change("site")} class="form-check-input" id="inlineCheckbox4" value="1"/>

                                                <label class="form-check-label" for="inlineCheckbox4">
                                                    <i class="bi-globe form-check-icon"></i>
                                                    <span class="form-check-label-text">Site</span>
                                                   
                                                </label>
                                            </div>
                                        </div>


                                    </div>
                                </form>
                            </div>
    </div>
    <section className="hero-wrapper bread-bg ">

        <div className="pb-0">
          <div className="container ">
          <div className="col-lg-12 ">
             
              <div className="search-fields-container">
                <div className="contact-form-action">
                  <form action="#" className="row">
                    {dept && (
                      <>
                        <div className="col-lg-6 pr-0">
                          <div className="input-box">
                            <label className="label-text">Select Department</label>
                            <div className="form-group">
                             
                              <select
                                className="select-contain-select form-control"
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
                        <div className="col-lg-6 pr-0">
                          <div className="input-box">
                            <label className="label-text">Select Issue</label>
                            <div className="form-group">
                           
                              <select
                                className="select-contain-select form-control"
                                tabindex="-98"
                                onChange={(e) => setIssue(e.target.value)}
                              >
                                <option value="">Select One</option>
                                <option value="admission">Admission</option>
                                <option value="faculty">Faculty</option>
                                <option value="staff">Staff</option>
                                <option value="environment">Environment</option>
                                <option value="cleanliness">Cleanliness</option>
                                <option value="others">Others</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {course && (
                      <>
                        <div className="col-lg-6 pr-0">
                          <div className="input-box">
                            <label className="label-text">Select Courses</label>
                            <div className="form-group">
                             
                              <select
                                className="select-contain-select form-control"
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
                        <div className="col-lg-6 pr-0">
                          <div className="input-box">
                            <label className="label-text">Select Issue</label>
                            <div className="form-group">
                           
                              <select
                                className="select-contain-select form-control"
                                tabindex="-98"
                                onChange={(e) => setIssue(e.target.value)}
                              >
                                <option value="">Select One</option>
                                <option value="enrollment">Enrollment</option>
                                <option value="teacher">Criteria</option>
                                <option value="improvement">Improvement</option>                                
                                <option value="timing">Class Timings</option>
                                <option value="others">Others</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {evaluation && (
                      <>
                        <div className="col-lg-12 pr-0">
                          <div className="input-box">
                            <label className="label-text">Select Issue</label>
                            <div className="form-group">
                           
                              <select
                                className="select-contain-select form-control"
                                tabindex="-98"
                                onChange={(e) => setIssue(e.target.value)}
                              >
                                <option value="">Select One</option>
                                <option value="questions">Questions Missing</option>
                                <option value="option">Option Missing</option>
                                <option value="criteria">Evaluation Criteria</option>
                                <option value="others">Others</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {site && (
                      <>
                        <div className="col-lg-12 pr-0">
                           <p>Coming Soon!</p>
                        </div>
                      </>
                    )}
                  </form>
                  {show && (
                    <>
                      {(departId || courseId || issue) && (
                        <div className="btn-box pt-3 col-lg-12">
                          <button
                            className="custom-btn   col-lg-12"
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
        <section className="hero-wrapper bread-bg pb-4">
          <div className="pb-0">
            <div className="container ">
              <div className="col-lg-12 ">
                <div className="form-box">
                  <div className="form-title-wrap">
                    <h3 className="title">
                      <i className="la la-user mr-2 text-gray"></i>Your Complain
                    </h3>
                  </div>
                  <div className="form-content contact-form-action">
                    <div className="row MultiFile-intercepted">
                      <div className="col-lg-12 responsive-column">
                        <div className="input-box">
                          <label className="label-text">Your Complain</label>
                          <div className="form-group">
                            <span className="la la-pencil form-icon"></span>
                            <textarea
                              className="message-control form-control"
                              name="message"
                              placeholder="No HTML, no web or email address, no ALL CAPS "
                              value={complain}
                              onChange={(e) => setComplain(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-box">
                          <label className="label-text text-color-6">
                            Minimum stay* (not including holidays)
                          </label>
                          <div className="form-group d-flex align-items-center">
                            <label
                              for="radio-1"
                              className="radio-trigger mb-0 font-size-14 mr-3"
                            >
                              <input type="radio" id="radio-1" name="radio" />
                              <span className="checkmark"></span>
                              <span>3 nights or less</span>
                            </label>
                            <label
                              for="radio-2"
                              className="radio-trigger mb-0 font-size-14"
                            >
                              <input type="radio" id="radio-2" name="radio" />
                              <span className="checkmark"></span>
                              <span>More than 3 nights</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-box">
                          <label className="label-text text-color-6">
                            Minimum stay* (not including holidays)
                          </label>
                          <div className="form-group d-flex align-items-center">
                            <label
                              for="radio-1"
                              className="radio-trigger mb-0 font-size-14 mr-3"
                            >
                              <input type="radio" id="radio-1" name="radio" />
                              <span className="checkmark"></span>
                              <span>3 nights or less</span>
                            </label>
                            <label
                              for="radio-2"
                              className="radio-trigger mb-0 font-size-14"
                            >
                              <input type="radio" id="radio-2" name="radio" />
                              <span className="checkmark"></span>
                              <span>More than 3 nights</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-box">
                          <label className="label-text text-color-6">
                            Minimum stay* (not including holidays)
                          </label>
                          <div className="form-group d-flex align-items-center">
                            <label
                              for="radio-1"
                              className="radio-trigger mb-0 font-size-14 mr-3"
                            >
                              <input type="radio" id="radio-1" name="radio" />
                              <span className="checkmark"></span>
                              <span>3 nights or less</span>
                            </label>
                            <label
                              for="radio-2"
                              className="radio-trigger mb-0 font-size-14"
                            >
                              <input type="radio" id="radio-2" name="radio" />
                              <span className="checkmark"></span>
                              <span>More than 3 nights</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-box">
                          <label className="label-text text-color-6">
                            Minimum stay* (not including holidays)
                          </label>
                          <div className="form-group d-flex align-items-center">
                            <label
                              for="radio-1"
                              className="radio-trigger mb-0 font-size-14 mr-3"
                            >
                              <input type="radio" id="radio-1" name="radio" />
                              <span className="checkmark"></span>
                              <span>3 nights or less</span>
                            </label>
                            <label
                              for="radio-2"
                              className="radio-trigger mb-0 font-size-14"
                            >
                              <input type="radio" id="radio-2" name="radio" />
                              <span className="checkmark"></span>
                              <span>More than 3 nights</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-box">
                          <label className="label-text text-color-6">
                            Minimum stay* (not including holidays)
                          </label>
                          <div className="form-group d-flex align-items-center">
                            <label
                              for="radio-1"
                              className="radio-trigger mb-0 font-size-14 mr-3"
                            >
                              <input type="radio" id="radio-1" name="radio" />
                              <span className="checkmark"></span>
                              <span>3 nights or less</span>
                            </label>
                            <label
                              for="radio-2"
                              className="radio-trigger mb-0 font-size-14"
                            >
                              <input type="radio" id="radio-2" name="radio" />
                              <span className="checkmark"></span>
                              <span>More than 3 nights</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-box">
                          <label className="label-text text-color-6">
                            Minimum stay* (not including holidays)
                          </label>
                          <div className="form-group d-flex align-items-center">
                            <label
                              for="radio-1"
                              className="radio-trigger mb-0 font-size-14 mr-3"
                            >
                              <input type="radio" id="radio-1" name="radio" />
                              <span className="checkmark"></span>
                              <span>3 nights or less</span>
                            </label>
                            <label
                              for="radio-2"
                              className="radio-trigger mb-0 font-size-14"
                            >
                              <input type="radio" id="radio-2" name="radio" />
                              <span className="checkmark"></span>
                              <span>More than 3 nights</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-box">
                          <label className="label-text text-color-6">
                            Minimum stay* (not including holidays)
                          </label>
                          <div className="form-group d-flex align-items-center">
                            <label
                              for="radio-1"
                              className="radio-trigger mb-0 font-size-14 mr-3"
                            >
                              <input type="radio" id="radio-1" name="radio" />
                              <span className="checkmark"></span>
                              <span>3 nights or less</span>
                            </label>
                            <label
                              for="radio-2"
                              className="radio-trigger mb-0 font-size-14"
                            >
                              <input type="radio" id="radio-2" name="radio" />
                              <span className="checkmark"></span>
                              <span>More than 3 nights</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 responsive-column ">
                        <div className="submit-box">
                          <h3 className="title pb-3">Submit this listing</h3>
                          <div className="custom-checkbox">
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
                          <div className="btn-box pt-3">
                            <button
                              type="submit"
                              className="theme-btn"
                              onClick={ComplainDept}
                            >
                              Submit Listing{" "}
                              <i className="la la-arrow-right ml-1"></i>
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
    </>
   
  );
};

export default Complain;
