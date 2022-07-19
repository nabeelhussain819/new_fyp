import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetSpecificCourse } from "../../Api/Department";
import { ReadQec } from "../../Api/Qec";
import { AuthStudent } from "../../Api/Student";
import video4 from "../../Assets/video4.mp4";
import img from "../../Assets/img24.jpg";
import spr from "../../Assets/img25.jpg";
const HowEvaluation = () => {
  return (
    <div>
      <div className="dashboard-bread">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="breadcrumb-content">
                <div className="section-heading">
                  <h2 className="sec__title font-size-30 text-white">
                    Evaluation!
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="breadcrumb-list text-right">
                <ul className="list-items">
                  <li>Home</li>
                  <li>Evaluation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 responsive-column-l">
              <div className="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-2 pb-0">
                <div className="d-flex pb-3 justify-content-between">
                  <div className="info-content">
                    <Link to="/qec">
                      <p className="info__desc">
                        When To Evaluate <i className="la la-check"></i>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 responsive-column-l">
              <div className="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-3 pb-0">
                <div className="d-flex pb-3 justify-content-between">
                  <div className="info-content">
                    <Link to="/howEvaluation">
                      {" "}
                      <p className="info__desc">
                        How To Evaluate <i className="la la-check"></i>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 responsive-column-l">
              <div className="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-4 pb-0">
                <div className="d-flex pb-3 justify-content-between">
                  <div className="info-content">
                    <Link to="/ruleEvaluation">
                      {" "}
                      <p className="info__desc">Rules To Evaluate</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 responsive-column-l">
              <div className="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-1 pb-0">
                <div className="d-flex pb-3 justify-content-between">
                  <div className="info-content">
                    <Link to="../evaluation">
                      {" "}
                      <p className="info__desc">Evaluate Now</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="card-area ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card-item blog-card blog-card-layout-2 blog-single-card mb-5">
                <div className="card-body px-0 pb-0">
                  <section className="about-area padding-bottom-90px overflow-hidden bg-817">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="section-heading margin-bottom-40px">
                            <h2 className="sec__title">How To Evaluate</h2>
                            <h4 className="title font-size-16 line-height-26 pt-4 pb-2">
                              industry. Metasearch for travel? No one was doing
                              it. Until we did.
                            </h4>
                            <p className="sec__desc font-size-16 pb-3">
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using
                              'Content here, content here', making it look like
                              readable English.
                            </p>
                            <p className="sec__desc font-size-16 pb-3">
                              Many desktop publishing packages and web page
                              editors now use Lorem Ipsum as their default model
                              text, and a search for 'lorem ipsum' will uncover
                              many web sites still in their infancy.
                            </p>
                            <p className="sec__desc font-size-16">
                              Vivamus a mauris vel nunc tristique volutpat.
                              Aenean eu faucibus enim. Aenean blandit arcu
                              lectus, in cursus elit porttitor non. Curabitur
                              risus eros,{" "}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-5 ml-auto">
                          <div className="image-box about-img-box">
                            <img
                              src={img}
                              alt="about-img"
                              className="img__item img__item-1"
                            />
                            <img src={spr} className="img__item img__item-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className="photo-block-gallery">
                    <h3 className="title pb-2">Travelling Highlight</h3>
                    <p className="card-text pb-4">
                      Quodsi sanctus pro eu, ne audire scripserit quo. Vel an
                      enim offendit salutandi, in eos quod omnes epicurei, ex
                      veri qualisque scriptorem mei.
                    </p>
                    <section className="cta-area cta-bg bg-fixed section-padding text-center ">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="section-heading">
                              <h2 className="sec__title text-white font-size-50 line-height-60">
                                Join with us. To Share Love With Your Teahcers.
                              </h2>
                              <p className="sec__desc text-white pt-3">
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  <div className="post-tag-wrap d-flex align-items-center justify-content-between py-4">
                    <ul className="tag-list">
                      <li>
                        {" "}
                        <Link className="theme-btn text-light" to="/qec">
                          When
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          className="theme-btn text-light"
                          to="/howEvaluation"
                        >
                          How
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          className="theme-btn btn-light"
                          to="/ruleEvaluation"
                        >
                          Rules
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link className="theme-btn btn-light" to="#">
                          Evaluate
                        </Link>
                      </li>
                    </ul>
                    <div>
                      <Link className="theme-btn" to="/ruleEvaluation">
                        NEXT PAGE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowEvaluation;
