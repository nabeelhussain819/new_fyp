import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetSpecificCourse } from "../../Api/Department";
import { ReadQec } from "../../Api/Qec";
import { AuthStudent } from "../../Api/Student";
import video4 from "../../Assets/video4.mp4";
const Evaluation = () => {
  return (
    <div>
      <div className="breadcrumb-area dashboard-bread ">
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
                      <p className="info__desc">How To Evaluate</p>
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
      <section className="card-item ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-5 ">
                <div className="card-img before-none"></div>
                <div className="card-body px-0 pb-0">
                  <h3 className="card-title font-size-28">
                    When Traveling Avoid Expensive Hotels &amp; Resorts
                  </h3>
                  <p className="card-meta pb-3">
                    <span className="post__author">
                      By{" "}
                      <a href="#" className="text-gray">
                        John Doe
                      </a>
                    </span>
                    <span className="post-dot"></span>
                    <span className="post__date"> 1 January, 2020</span>
                    <span className="post-dot"></span>
                    <span className="post__time">
                      <a href="#" className="text-gray">
                        4 Comments
                      </a>
                    </span>
                    <span className="post-dot"></span>
                    <span className="post__time">
                      <a href="#" className="text-gray">
                        202 Likes
                      </a>
                    </span>
                  </p>
                  <p className="card-text py-3">
                    Simple point-and-shoot digital cameras can give surprising
                    quality when they have the right lenses and sensors. Because
                    they are totally automatic in focus and exposure, they just
                    have to be pointed at a subject and clicked. They have
                    limited capabilities for controlling the image
                  </p>
                  <p className="card-text pb-3">
                    Suspendisse ullamcorper lacus et commodo laoreet. Sed
                    sodales aliquet felis, quis volutpat massa imperdiet in.
                    Praesent rutrum malesuada risus, ullamcorper pretium tortor
                  </p>
                  <div className="post-tag-wrap d-flex align-items-center justify-content-between py-4">
               
                    <div>
                      <Link className="theme-btn" to="/howEvaluation">
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

export default Evaluation;
