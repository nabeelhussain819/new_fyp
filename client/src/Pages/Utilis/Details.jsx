import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Commend from "./Commend";
import Complain from "./Complain";
import myData from "../Qec/question.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Details = () => {
  const location = useLocation();
  const params = useParams();
  const [studentId, setStudentId] = useState(
    !localStorage.getItem("isTeacher") && localStorage.getItem("id")
  );
  const [teacherId, setTeacherId] = useState(
    localStorage.getItem("isTeacher") && localStorage.getItem("id")
  );
  const { from, api } = location.state;
  console.log(teacherId, studentId);

  const registerCourse = async (courseId) => {
    const res = await fetch("https://fyptes.herokuapp.com/add-course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentId,
        courseId,
        teacherId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.error("Course is not registered Successfully");
    } else {
      toast.success("Course registered Successfully");
    }
  };
  function print() {
    window.print();
  }
  return (
    <div>
      <section class="breadcrumb-area bread-bg hidden-print">
        <div class="breadcrumb-wrap">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="breadcrumb-content">
                  <div class="section-heading">
                    <h2 class="sec__title text-white">Detials</h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="breadcrumb-list text-right">
                  <ul class="list-items">
                    <li>
                      <a href="/dashboard">Home</a>
                    </li>
                    <li>Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bread-svg-box">
          <svg
            class="bread-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <polygon points="100 0 50 10 0 0 0 10 100 10"></polygon>
          </svg>
        </div>
      </section>

      <section className="card-area bg-818">
        <div className="container">
          <div className="row">
            {[from].map((data) => {
              return (
                <>
                  <div class="col-lg-8">
                    <div class="card-item blog-card blog-card-layout-2 blog-single-card mb-5">
                      <div class="card-body px-0 pb-0">
                        <div class="post-categories">
                          {localStorage.getItem("id") && (
                            <Commend data={data} />
                          )}
                          {api == "courses" && (
                            <button
                              className="theme-btn"
                              onClick={registerCourse}
                            >
                              EnroLl Now!
                            </button>
                          )}
                        </div>
                        <h3 class="card-title font-size-28">{data.name}</h3>
                        <p class="card-meta pb-3">
                          <span class="post__author">
                            Joined At{" "}
                            {new Date(data.createdAt).toLocaleDateString(
                              "en-US"
                            )}
                          </span>
                          <span class="post-dot"></span>
                          <span class="post__time">
                            {data.studentId && (
                              <a href="#" class="text-gray">
                                {data.studentId.length} Total Students
                              </a>
                            )}
                          </span>
                          <span class="post-dot"></span>
                          <span class="post__time">
                            {data.teacherId && (
                              <a href="#" class="text-gray">
                                {data.teacherId.length} Total Teachers
                              </a>
                            )}
                          </span>
                          <span class="post-dot"></span>
                          <span class="post__time">
                            {data.isTeacher && (
                              <a href="#" class="text-gray">
                                {data.email}
                              </a>
                            )}
                          </span>
                          <span class="post-dot"></span>
                          <span class="post__time">
                            {data.isTeacher == false ? (
                              <a href="#" class="text-gray">
                                {data.email}
                              </a>
                            ) : null}
                          </span>
                        </p>
                        <div class="section-block"></div>
                        {data.description ? (
                          <p class="card-text py-3">{data.description}</p>
                        ) : (
                          <p class="card-text py-3">
                            Simple point-and-shoot digital cameras can give
                            surprising quality when they have the right lenses
                            and sensors. Because they are totally automatic in
                            focus and exposure, they just have to be pointed at
                            a subject and clicked. They have limited
                            capabilities for controlling the image
                          </p>
                        )}
                        <div class="section-block"></div>
                        <div id="faq" className="page-scroll">
                          <div className="single-content-item padding-top-40px padding-bottom-40px">
                            <h3 className=" font-size-20">FAQ</h3>
                            <div
                              className="accordion accordion-item padding-top-30px"
                              id="accordionExample2"
                            >
                              {myData.slice(0, 1).map((data) => {
                                return (
                                  <>
                                    <div className="card">
                                      <div
                                        className="card-header"
                                        id="faqHeadingFour"
                                      >
                                        <h2 className="mb-0">
                                          <button
                                            className="btn btn-link d-flex align-items-center justify-content-end flex-row-reverse font-size-16"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#faqCollapseFour"
                                            aria-expanded="true"
                                            aria-controls="faqCollapseFour"
                                          >
                                            <span className="ml-3">
                                              {data.question}
                                            </span>
                                            <i className="la la-minus"></i>
                                            <i className="la la-plus"></i>
                                          </button>
                                        </h2>
                                      </div>
                                      <div
                                        id="faqCollapseFour"
                                        className="collapse show"
                                        aria-labelledby="faqHeadingFour"
                                        data-parent="#accordionExample2"
                                      >
                                        <div className="card-body d-flex">
                                          <p>
                                            Mea appareat omittantur eloquentiam
                                            ad, nam ei quas oportere democritum.
                                            Prima causae admodum id est, ei
                                            timeam inimicus sed. Sit an meis
                                            aliquam, cetero inermis vel ut. An
                                            sit illum euismod facilisis Nullam
                                            id dolor id nibh ultricies vehicula
                                            ut id elit.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                              {myData.slice(1, 4).map((data) => {
                                return (
                                  <>
                                    <div className="card">
                                      <div
                                        className="card-header"
                                        id="faqHeadingSix"
                                      >
                                        <h2 className="mb-0">
                                          <button
                                            className="btn btn-link d-flex align-items-center justify-content-end flex-row-reverse font-size-16"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#faqCollapseSix"
                                            aria-expanded="false"
                                            aria-controls="faqCollapseSix"
                                          >
                                            <span className="ml-3">
                                              {data.question}
                                            </span>
                                            <i className="la la-minus"></i>
                                            <i className="la la-plus"></i>
                                          </button>
                                        </h2>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {localStorage.getItem("isTeacher") ? (
                    ""
                  ) : (
                    <Complain data={data} api={api} />
                  )}
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
