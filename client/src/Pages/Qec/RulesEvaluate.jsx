import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const RuleEvaluation = () => {
  return (
    <div>
      <div className="breadcrumb-area dashboard-bread">
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
                      <div className="col-lg-12">
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
                    </div>
                  </div>
                  <section className="info-area info-bg ">
                
                     
                    <div className="post-tag-wrap d-flex align-items-center justify-content-between py-4">
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
