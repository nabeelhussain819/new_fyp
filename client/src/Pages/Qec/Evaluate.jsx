import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {  GetSpecificCourse } from "../../Api/Department";
import { ReadQec } from "../../Api/Qec";
import { AuthStudent } from "../../Api/Student";
import video4 from "../../Assets/video4.mp4";
const Evaluation = () => {

  return (
    <div>
 <div class="dashboard-bread">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="breadcrumb-content">
                  <div class="section-heading">
                    <h2 class="sec__title font-size-30 text-white">
                    Evaluation!
                    </h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="breadcrumb-list text-right">
                  <ul class="list-items">
                    <li>
                        Home
                    </li>
                    <li>Evaluation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
            <div class="col-lg-3 responsive-column-l">
                                        <div class="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-2 pb-0">
                                            <div class="d-flex pb-3 justify-content-between">
                                                <div class="info-content">
                                                    <p class="info__desc">When To Evaluate           <i class="la la-check"></i></p>
                                          
                                                </div>
                                                </div>
                                        </div>
                                    </div>
              <div class="col-lg-3 responsive-column-l">
                                        <div class="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-3 pb-0">
                                            <div class="d-flex pb-3 justify-content-between">
                                                <div class="info-content">
                                                    <p class="info__desc">How To Evaluate</p>
                                                </div>
                                                </div>
                                        </div>
                                    </div>
              <div class="col-lg-3 responsive-column-l">
                                        <div class="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-4 pb-0">
                                            <div class="d-flex pb-3 justify-content-between">
                                                <div class="info-content">
                                                    <p class="info__desc">Rules To Evaluate</p>
                                                </div>
                                                </div>
                                        </div>
                                    </div>
              <div class="col-lg-3 responsive-column-l">
                                        <div class="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-1 pb-0">
                                            <div class="d-flex pb-3 justify-content-between">
                                                <div class="info-content">
                                                    <p class="info__desc">Evaluate Now</p>
                                                </div>
                                                </div>
                                        </div>
                                    </div>
            </div>
          </div>
        </div>
        <section className="card-area ">
            <div className="container"><div className="row">
                <div className="col-lg-12">
                    <div className="card-item blog-card blog-card-layout-2 blog-single-card mb-5 bg-817">
                    <div class="card-img before-none">
             
                    </div>
                    <div className="card-body px-0 pb-0">
                    <h3 class="card-title font-size-28">When Traveling Avoid Expensive Hotels &amp; Resorts</h3>
                    <p class="card-meta pb-3">
                            <span class="post__author">By <a href="#" class="text-gray">John Doe</a></span>
                            <span class="post-dot"></span>
                            <span class="post__date"> 1 January, 2020</span>
                            <span class="post-dot"></span>
                            <span class="post__time"><a href="#" class="text-gray">4 Comments</a></span>
                            <span class="post-dot"></span>
                            <span class="post__time"><a href="#" class="text-gray">202 Likes</a></span>
                        </p>
                        <p class="card-text py-3">Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors. Because they are totally automatic in focus and exposure, they just have to be pointed at a subject and clicked. They have limited capabilities for controlling the image</p>
                        <p class="card-text pb-3">Suspendisse ullamcorper lacus et commodo laoreet. Sed sodales aliquet felis, quis volutpat massa imperdiet in. Praesent rutrum malesuada risus, ullamcorper pretium tortor</p>
                        <div class="photo-block-gallery">
                            <h3 class="title pb-2">Travelling Highlight</h3>
                            <p class="card-text pb-4">Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
                            <video
        playsInline
        autoPlay
        muted
        loop
        poster={video4}
        className="vedio-bg"
      >
        Your browser does not support the video tag.
        <source src={video4} type="video/webm" />
      </video>
                        </div>

                        <div class="post-tag-wrap d-flex align-items-center justify-content-between py-4">
                            <ul class="tag-list">
                            <li>    <Link className="theme-btn text-light" to="/qec">When</Link></li>
                                <li>    <Link className="theme-btn btn-light" to="/howEvaluation">How</Link></li>
                                <li>    <Link className="theme-btn btn-light" to="/ruleEvaluation">Rules</Link></li>
                                <li>    <Link className="theme-btn btn-light" to="#">Evaluate</Link></li>
                            </ul>
                            <div>
                                <Link className="theme-btn" to="/howEvaluation">NEXT PAGE</Link>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
                </div></div>
        </section>
  
    </div>
  );
};

export default Evaluation;