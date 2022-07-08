import React, { useEffect, useState } from "react";
import myData from '../Pages/Qec/question.json'
import { useNavigate, Link } from "react-router-dom";
import {
  FcBusinessman,
  FcCollaboration,
  FcDepartment,
  FcGraduationCap,
} from "react-icons/fc";
import CarouselItem from "./Utilis/Carousel";
import { carouselImage } from "../Pages/Utilis/Images";
import { ReadDepartment } from "../Api/Department";
import { ReadProgram } from "../Api/Program";
import { ReadTeacher } from "../Api/Teacher";
import Login from "./Auth/Login";
export const Home = () => {
  const [dept, setDept] = useState([]);
  const [program, setProgram] = useState([]);
  const [teacher, setTeacher] = useState([]);
  let navigate = useNavigate();

  const sentDepartment = (data) => {};
  const sentProgram = (data) => {
    console.log(data);
    let path = "../details/" + data;
    navigate(path);
  };

  useEffect(() => {
    const getData = () => {
      ReadDepartment().then(function (result) {
        setDept(result);
      });
    };

    const getData2 = async () => {
      ReadProgram().then(function (result) {
        setProgram(result);
      });
    };
    const getData3 = async () => {
      ReadTeacher().then(function (result) {
        setTeacher(result);
      });
    };
    getData3();
    getData2();
    getData();
  }, []);
  return (
    <>
      <CarouselItem />
      <section className="funfact-area section-bg4 bg-light padding-top-80px bg-819">
        <div className="container ">
          <div className="row ">
            <div className="col-lg-12 ">
              <div className="section-heading text-center">
                <h2 className="sec__title">
                  University's first ever Evaluation Portal
                </h2>
                <p className="sec__desc pt-3">
                  Where You can Evaluate your teacher
                </p>
              </div>
            </div>
          </div>
          <div className="counter-box mt-5 pb-2 shadow-lg">
            <div className="row">
              <div className="col-lg-3 responsive-column">
                <div className="counter-item d-flex">
                  <div className="counter-icon flex-shrink-0">
                    <FcGraduationCap size={42} />
                  </div>
                  <div className="counter-content">
                    <span
                      className="counter"
                      data-from="0"
                      data-to="50000"
                      data-refresh-interval="5"
                    >
                      50000
                    </span>
                    <span className="count-symbol">+</span>
                    <p className="counter__title">Students</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 responsive-column">
                <div className="counter-item d-flex">
                  <div className="counter-icon flex-shrink-0">
                    <FcBusinessman size={42} />
                  </div>
                  <div className="counter-content">
                    <span
                      className="counter"
                      data-from="0"
                      data-to="160"
                      data-refresh-interval="5"
                    >
                      200
                    </span>
                    <p className="counter__title">Teachers</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 responsive-column">
                <div className="counter-item d-flex">
                  <div className="counter-icon flex-shrink-0">
                    <FcDepartment size={42} />
                  </div>
                  <div className="counter-content">
                    <span
                      className="counter"
                      data-from="0"
                      data-to="43"
                      data-refresh-interval="5"
                    >
                      20
                    </span>
                    <p className="counter__title">Departments </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 responsive-column">
                <div className="counter-item d-flex">
                  <div className="counter-icon flex-shrink-0">
                    <FcCollaboration size={42} />
                  </div>
                  <div className="counter-content">
                    <span
                      className="counter"
                      data-from="0"
                      data-to="3500000"
                      data-refresh-interval="5"
                    >
                      350
                    </span>
                    <p className="counter__title">Courses Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="destination-area section-bg3 padding-top-130px padding-bottom-80px bg-818 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="section-heading">
                <h2 className="sec__title">Aavailable Department</h2>
                <p className="sec__desc pt-3">
                  Morbi convallis bibendum urna ut viverra Maecenas quis
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="btn-box btn--box text-right">
                <Link to="/department" className="theme-btn">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
          <div className="row padding-top-50px">
            {dept.map((item, index) => {
              return (
                <>
                  <div className="col-lg-4 responsive-column ">
                    <div className="card-item shadow-lg destination-card destination--card">
                      <div className="card-img">
                        {carouselImage.map((data, key) => {
                          return (
                            key === index && (
                              <img src={data.image} alt="destination-img" />
                            )
                          );
                        })}
                      </div>
                      <div className="card-body d-flex align-items-center justify-content-between">
                        <div>
                          <h3 className="card-title">
                            <a href="tour-details.html">{item.name}</a>
                          </h3>
                          <p className="card-meta">
                            {item.studentId.length} Activities
                          </p>
                        </div>
                        <div>
                          <Link
                            className="theme-btn theme-btn-small border-0"
                            to={"/details/" + item._id}
                            state={{ from: item, api: "departments" }}
                          >
                            see Details
                          </Link>
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
      <section className="cta-area cta-bg bg-fixed section-padding text-center ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2 className="sec__title text-white font-size-50 line-height-60">
                  Join with us. To Share Love With Your Teahcers.
                </h2>
                <p className="sec__desc text-white pt-3">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trending-area section-bg  position-relative section-padding bg-817 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <h2 className="sec__title">Trending Programs</h2>
              </div>
            </div>
          </div>
          <div className="row padding-top-50px">
            {program.slice(0, 6).map((data, index) => {
              return (
                <div className="col-lg-4">
                  <div className="owl-item active">
                    <div className="card-item shadow-lg trending-card mb-0 mb-3">
                      <div className="card-img">
                        <a href="tour-details.html" className="d-block">
                          {carouselImage.map((data, key) => {
                            return (
                              key === index && (
                                <img src={data.image} alt="destination-img" />
                              )
                            );
                          })}
                        </a>
                      </div>
                      <div className="card-body">
                        <h3 className="card-title">{data.name}</h3>
                        <p className="card-meta">Department</p>
                        <div className="card-rating">
                          <span className="badge text-white">4.4/5</span>
                          <span className="review__text">Students</span>
                          <span className="rating__text">
                            ({data.studentId.length})
                          </span>
                        </div>
                        <div className="card-price d-flex align-items-center justify-content-between">
                          <p>
                          </p>
                          <Link
                            to={"/details/" + data._id}
                            state={{ from: data, api: "programs" }}
                          >
                            see Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <svg
          className="hero-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path d="M0 10 0 0 A 90 59, 0, 0, 0, 100 0 L 100 10 Z"></path>
        </svg>
      </section>
      <section className="faq-area section-bg4  section--padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <h2 className="sec__title">Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
          <div className="row padding-top-60px">
            <div className="col-lg-7">
            <div id="faq" className="page-scroll">
                        <div className="single-content-item  padding-bottom-40px">                      
                          <div
                            className="accordion accordion-item "
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
                                          Prima causae admodum id est, ei timeam
                                          inimicus sed. Sit an meis aliquam,
                                          cetero inermis vel ut. An sit illum
                                          euismod facilisis Nullam id dolor id
                                          nibh ultricies vehicula ut id elit.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                            {myData.slice(1, 5).map((data) => {
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
                            </div>  </div>  </div>
              <div className="accordion-help-text pt-2">
                <p className="font-size-14 font-weight-regular">
                  Any questions? Just visit our{" "}
                  <a href="/about" className="color-text">
                    Help center
                  </a>{" "}
                  or{" "}
                  <a href="/contact" className="color-text">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="faq-forum pl-4">
                <div className="form-box border">
                  <div className="form-title-wrap">
                    <h3 className="">Still have question?</h3>
                  </div>
                  <div className="form-content">
                    <div className="contact-form-action">
                      <form method="post">
                        <div className="input-box ">
                          <div className="form-group label-float">
                            <input
                              type="text"
                              name="text"
                              className="fancybox-share__input"
                              placeholder="Your name"
                            />
                          </div>
                        </div>
                        <div className="input-box">
                          <div className="form-group label-float">
                            <input
                              type="email"
                              name="email"
                              className="fancybox-share__input"
                              placeholder="Email address"
                            />
                          </div>
                        </div>
                        <div className="input-box">
                          <div className="form-group">
                            <textarea
                              className="message-control fancybox-share__input"
                              name="message"
                              placeholder="Write message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="btn-box">
                          <button type="button" className="theme-btn">
                            Send Message{" "}
                            <i className="la la-arrow-right ml-1"></i>
                          </button>
                        </div>
                      </form>
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