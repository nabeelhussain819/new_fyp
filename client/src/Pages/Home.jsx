import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import CarouselItem from "./Utilis/Carousel";
import img from "../Assets/smiu-logo.png";
import { GalleryImages } from "../Pages/Utilis/Images";
import { ReadDepartment } from "../Api/Department";
import { ReadProgram } from "../Api/Program";
import { ReadTeacher } from "../Api/Teacher";
import MapContainer from "../Components/Map";

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
    const getDepartment = () => {
      ReadDepartment().then(function (result) {
        setDept(result);
      });
    };

    const getProgram = async () => {
      ReadProgram().then(function (result) {
        setProgram(result);
      });
    };

    const getTeacher = async () => {
      ReadTeacher().then(function (result) {
        setTeacher(result);
      });
    };

    getDepartment();
    getProgram();
    getTeacher();
  }, []);

  return (
    <>
      <CarouselItem />
      <section className="about-area padding-bottom-90px padding-top-80px overflow-hidden bg-818">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-heading margin-bottom-40px">
                <h2 className="sec__title">
                  Welcome To Sindh Madressatul Islam University (SMIU)
                </h2>

                <p className="sec__desc font-size-16 pb-3 mt-4 pt-4">
                  Sindh Madressatul Islam University (SMIU) is a chartered
                  University duly recognized by the Higher Education Commission
                  of Pakistan. It is one of the oldest institutions in South
                  Asia, which started as a school in 1885, became a college in
                  1943 and a university in February 2012.
                </p>
              </div>
            </div>
            <div className="col-lg-4 ml-auto">
              <div className="image-box about-img-box">
                <img src={img} alt="about-img" className="img__item img__item-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="destination-area section-bg3 padding-bottom-80px bg-818 ">
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
                        {GalleryImages.map((data, key) => {
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
      <section className="cta-area cta-bg section-padding text-center ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2 className="sec__title text-white font-size-50 line-height-60">
                  Prof. Dr. Mujeeb-U-Ddin Sahrai Memon Vice Chancellor
                </h2>
                <p className="sec__desc text-white pt-3">
                  It gives natural vibrations to my hands and sensations to my
                  mind when to write about this august university i.e. Sindh
                  Madressatul Islam University, Karachi. This is the institute
                  credited with production of wise persons, visionary leaders,
                  freedom fighters, educationists and founders, viz:
                  Quaid-e-Azam Mohammad Ali Jinnah, Sir Shahnawaz Bhutto, Sir
                  Abdullah Haroon, Sir Ghulam Hussain Hidayatullah, Khan Bahadur
                  Mohammad Ayub Khuhro, Allama I.I. Kazi, Allama Umer Bin
                  Mohammad Doudpota, Hanif Muhammad and to my groomer i.e. my
                  father father Taj Muhammad Sahrai.​
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
                        <Link
                          to={"/details/" + data._id}
                          state={{ from: data, api: "programs" }}
                        >
                          {GalleryImages.map((data, key) => {
                            return (
                              key === index && (
                                <img src={data.image} alt="destination-img" />
                              )
                            );
                          })}
                        </Link>
                      </div>
                      <div className="card-body">
                        <Link
                          to={"/details/" + data._id}
                          state={{ from: data, api: "programs" }}
                        >
                          {" "}
                          <h3 className="card-title">
                            Department Of {data.name}
                          </h3>
                        </Link>
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
          <div className="row"></div>
          <div className="row padding-top-20px">
            <div className="col-lg-7">
              <MapContainer />
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
