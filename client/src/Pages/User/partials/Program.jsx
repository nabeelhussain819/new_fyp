import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { AuthStudentProgram } from "../../../Api/SpecificData/AuthUser";
import myData from "../../Qec/question.json";
const Program = () => {
  let navigate = useNavigate();
  const [program, setCourse] = useState([]);
  console.log(program);
  useEffect(() => {
    const getData = () => {
      AuthStudentProgram().then(function (result) {
        setCourse(result);
      });
    };
    getData();
  }, []);

  return (
    <div>
      <section className="breadcrumb-area gradient-bg-gray before-none">
        <div className="breadcrumb-wrap padding-right-100px padding-left-100px">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <h2 className="sec__title text-dark">Enrolled Program</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="breadcrumb-list text-right">
                  <ul className="list-items">
                    <li>
                      <a href="/dashboard">Home</a>
                    </li>
                    <li>Program</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="card-area bg-818">
        <div className="container">
          <div className="row">
            {program.map((data) => {
              return (
                <>
                  <div className="col-lg-12">
                    <div className="card-item blog-card blog-card-layout-2 blog-single-card mb-5">
                      <div className="card-body px-0 pb-0">
                        <div className="post-categories"></div>
                        <h3 className="card-title font-size-28">
                          Program :{data.name}
                        </h3>
                        <p className="card-meta pb-3">
                          <span className="post__author">
                            Joined At{" "}
                            {new Date(data.createdAt).toLocaleDateString(
                              "en-US"
                            )}
                          </span>
                          <span className="post-dot"></span>
                          <span className="post__time">
                            Total Students {data.studentId.length}
                          </span>
                          <span className="post-dot"></span>
                          <span className="post__time">
                            {" "}
                            Total Teachers {data.teacherId.length}
                          </span>
                          <span className="post-dot"></span>
                          <span className="post__time">
                            {" "}
                            Total Semesters {data.semesterId.length}
                          </span>
                          <span className="post-dot"></span>
                          <span className="post__time">
                            {" "}
                            Session {data.sessionId.map((data) => data.name)}
                          </span>
                        </p>
                        <div className="section-block"></div>
                        {data.description ? (
                          <p className="card-text py-3">{data.description}</p>
                        ) : (
                          <p className="card-text py-3">
                            Simple point-and-shoot digital cameras can give
                            surprising quality when they have the right lenses
                            and sensors. Because they are totally automatic in
                            focus and exposure, they just have to be pointed at
                            a subject and clicked. They have limited
                            capabilities for controlling the image
                          </p>
                        )}
                        <div className="section-block"></div>
                        <div id="faq" className="page-scroll">
                          <div className="single-content-item padding-top-40px padding-bottom-40px">
                            <h3 className=" font-size-20">FAQ</h3>
                            <div
                              className="accordion accordion-item padding-top-30px"
                              id="accordionExample2"
                            >
                              {" "}
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
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Program;
