import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetSpecificCourse } from "../../Api/Department";
import { ReadQec } from "../../Api/Qec";
import { AuthStudent } from "../../Api/Student";
import img from "../../Assets/cta-bg-3.jpg";
import img1 from "../../Assets/img24.jpg";
import spr from "../../Assets/img25.jpg";
import update from "../../Assets/update.png";
import lay from "../../Assets/layout.png";
import sup from "../../Assets/support.png";
import valid from "../../Assets/valid.png";
import document from "../../Assets/document.png";
import browser from "../../Assets/browser.png";
const RuleEvaluation = () => {
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
                      <p className="info__desc">
                        Rules To Evaluate <i className="la la-check"></i>
                      </p>
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
              <div className="row">
                <div className="col-lg-12">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="section-heading margin-bottom-40px">
                          <h2 className="sec__title">What Are The Rules</h2>
                          <h4 className="title font-size-16 line-height-26 pt-4 pb-2">
                            industry. Metasearch for travel? No one was doing
                            it. Until we did.
                          </h4>
                          <p className="sec__desc font-size-16 pb-3">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
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
                            Vivamus a mauris vel nunc tristique volutpat. Aenean
                            eu faucibus enim. Aenean blandit arcu lectus, in
                            cursus elit porttitor non. Curabitur risus eros,{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-5 ml-auto">
                        <div className="image-box about-img-box image-box-layout-3">
                          <img
                            src={img1}
                            alt="about-img"
                            className="img__item img__item-1"
                          />
                          <img src={spr} className="img__item img__item-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="image-box padding-bottom-100px mt-3">
                    <img src={img} alt="about-img" className="img__item hover-y" />
                  </div>
                  <section className="info-area info-bg padding-top-100px padding-bottom-70px">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-4 responsive-column">
                          <div className="icon-box icon-layout-2 d-flex">
                            <div className="info-icon flex-shrink-0 bg-rgb">
                              <img src={update} className="w-50" alt="" />
                            </div>
                            <div className="info-content">
                              <h4 className="info__title">
                                Comprehensive health plans
                              </h4>
                              <p className="info__desc">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 responsive-column">
                          <div className="icon-box icon-layout-2 d-flex">
                            <div className="info-icon flex-shrink-0 bg-rgb-2">
                              <img src={lay} className="w-50" alt="" />
                            </div>
                            <div className="info-content">
                              <h4 className="info__title">Paid volunteer time</h4>
                              <p className="info__desc">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 responsive-column">
                          <div className="icon-box icon-layout-2 d-flex">
                            <div className="info-icon flex-shrink-0 bg-rgb-3">
                              <img src={sup} className="w-50" alt="" />
                            </div>
                            <div className="info-content">
                              <h4 className="info__title">
                                Healthy food and snacks
                              </h4>
                              <p className="info__desc">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 responsive-column">
                          <div className="icon-box icon-layout-2 d-flex">
                            <div className="info-icon flex-shrink-0 bg-rgb-4">
                              <img src={valid} className="w-50" alt="" />
                            </div>
                            <div className="info-content">
                              <h4 className="info__title">
                                Generous parental and family leave
                              </h4>
                              <p className="info__desc">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 responsive-column">
                          <div className="icon-box icon-layout-2 d-flex">
                            <div className="info-icon flex-shrink-0 bg-rgb-5">
                              <img src={document} className="w-50" alt="" />
                            </div>
                            <div className="info-content">
                              <h4 className="info__title">
                                Learning and development
                              </h4>
                              <p className="info__desc">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 responsive-column">
                          <div className="icon-box icon-layout-2 d-flex">
                            <div className="info-icon flex-shrink-0 bg-rgb-6">
                              <img src={browser} className="w-50" alt="" />
                            </div>
                            <div className="info-content">
                              <h4 className="info__title">
                                Annual travel and experiences credit
                              </h4>
                              <p className="info__desc">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            className="theme-btn text-light"
                            to="/ruleEvaluation"
                          >
                            Rules
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            className="theme-btn btn-light"
                            to="/evaluation"
                          >
                            Evaluate
                          </Link>
                        </li>
                      </ul>
                      <div>
                        <Link className="theme-btn" to="/evaluation">
                          NEXT PAGE
                        </Link>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RuleEvaluation;
