import React, { useState } from "react";
import ProgressBar from "../Qec/ProgressBar";
import myData from "../Qec/question.json";
import logo1 from "../../Assets/logo.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation } from "react-router-dom";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar, Doughnut } from "react-chartjs-2";

const Graph = () => {
  const [show, setShow] = useState([]);
  const location = useLocation();
  const { rating, question, value } = location.state;
  var number = 35;
  var percent = Math.round((rating / number) * 100);

  const state = {
    labels: [
      1, 2, 3, 45, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
    datasets: [
      {
        label: "Rating Graph ",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: value,
      },
    ],
  };

  return (
    <>
      <div className="dashboard-bread gradient-bg-gray ">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="breadcrumb-content">
                <div className="section-heading">
                  <h2 className="sec__title font-size-30 text-dark">
                    EVALUATION FORM Result
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-right">
                <ul className="list-items">
                  <img src={logo1} alt="logo" style={{ width: "200px" }} />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-3 responsive-column-m">
            <div className="icon-box icon-layout-2 dashboard-icon-box">
              <div className="d-flex">
                <div className="info-icon icon-element flex-shrink-0">
                  <i className="la la-shopping-cart"></i>
                </div>
                <div className="info-content">
                  <p className="info__desc">Average Result</p>
                  <h4 className="info__title">{percent}%</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 responsive-column-m">
            <div className="icon-box icon-layout-2 dashboard-icon-box">
              <div className="d-flex">
                <div className="info-icon icon-element bg-2 flex-shrink-0">
                  <i className="la la-bookmark"></i>
                </div>
                <div className="info-content">
                  <p className="info__desc">Total Marks</p>
                  <h4 className="info__title">{rating}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 responsive-column-m">
            <div className="icon-box icon-layout-2 dashboard-icon-box">
              <div className="d-flex">
                <div className="info-icon icon-element bg-3 flex-shrink-0">
                  <i className="la la-plane"></i>
                </div>
                <div className="info-content">
                  <p className="info__desc">Status</p>
                  <h4 className="info__title">
                    {rating == 12
                      ? "BEST"
                      : rating >= 10
                      ? "EXCELLENT"
                      : rating >= 7
                      ? "GOOD"
                      : rating <= 6
                      ? "AVERAGE"
                      : "NOT BAD"}{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 responsive-column-m">
            <div className="icon-box icon-layout-2 dashboard-icon-box">
              <div className="d-flex">
                <div className="info-icon icon-element bg-4 flex-shrink-0">
                  <i className="la la-star"></i>
                </div>
                <div className="info-content">
                  <p className="info__desc">Rating</p>
                  <h4 className="info__title">
                    {rating == 12 ? (
                      <i className="la la-star">5</i>
                    ) : rating == 11 ? (
                      <i className="la la-star">4</i>
                    ) : rating >= 9 ? (
                      <i className="la la-star">3</i>
                    ) : rating >= 7 ? (
                      <i className="la la-star">2</i>
                    ) : (
                      <i className="la la-star">1</i>
                    )}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-main-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 responsive-column--m mt-4">
              <div className="form-box">
                <div className="form-content">
                  <Bar
                    data={state}
                    options={{
                      title: {
                        display: true,
                        text: "Average rating per month",
                        fontSize: 20,
                      },
                      legend: {
                        display: true,
                        position: "right",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 responsive-column--m mt-4">
              <div className="form-box">
                <div className="form-content">
                  <Line
                    data={state}
                    options={{
                      title: {
                        display: true,
                        text: "Average rating per month",
                        fontSize: 20,
                      },
                      legend: {
                        display: true,
                        position: "right",
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 responsive-column--m mt-4">
              <div className="form-box dashboard-card">
                <div className="form-content pb-0">
                  <div className="dashboard-progressbar pb-4">
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: `${percent}%` }}
                        aria-valuenow="1"
                        aria-valuemin="0"
                        aria-valuemax="1"
                      ></div>
                    </div>
                    <p className="font-size-14 pt-1">Rating : {percent}% </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 responsive-column--m">
              <div className="form-box dashboard-card">
                <div className="form-title-wrap">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="title">Rating Procedure</h3>
                  </div>
                </div>
                <div className="form-content p-0">
                  <div className="list-group drop-reveal-list">
                    <div className="list-group-item list-group-item-action border-top-0">
                      <div className="msg-body d-flex align-items-center">
                        <div className="icon-element flex-shrink-0 mr-3 ml-0">
                          <i className="la la-bell"></i>
                        </div>
                        <div className="msg-content w-100">
                          <h3 className="title pb-1">"SS</h3>
                        </div>
                        <span
                          className="icon-element mark-as-read-btn flex-shrink-0 ml-auto mr-0"
                          data-toggle="tooltip"
                          data-placement="left"
                          title=""
                          data-original-title="Mark as read"
                        >
                          <i className="la la-star"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 responsive-column--m">
              <div className="form-box">
                <div className="form-title-wrap">
                  <h3 className="title">Statics Results</h3>
                </div>
                <div className="col-lg-12 responsive-column--m">
                  <div>
                    <div className="form-content pb-0">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="sparkline-chart-item">
                            <span className="font-size-15">Given Rating </span>
                            <h3 className="title font-size-16">
                              {rating == 12 ? (
                                <i className="la la-star">5</i>
                              ) : rating == 11 ? (
                                <i className="la la-star">4</i>
                              ) : rating >= 9 ? (
                                <i className="la la-star">3</i>
                              ) : rating >= 7 ? (
                                <i className="la la-star">2</i>
                              ) : (
                                <i className="la la-star">1</i>
                              )}
                            </h3>
                            <div className="visits-chart mt-2"></div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="sparkline-chart-item">
                            <span className="font-size-15">Given Status </span>
                            <h3 className="title font-size-16">
                              {rating > 12
                                ? "BEST"
                                : rating > 10
                                ? "EXCELLENT"
                                : rating < 10
                                ? "GOOD"
                                : rating > 7
                                ? "AVERAGE"
                                : "NOT BAD"}{" "}
                            </h3>
                            <div className="visits-chart mt-2"></div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="sparkline-chart-item">
                            <span className="font-size-15">Marks Achieved </span>
                            <h3 className="title font-size-16">{rating}</h3>
                            <div className="previews-chart mt-2"></div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="sparkline-chart-item">
                            <span className="font-size-15">Average Of Marks</span>
                            <h3 className="title font-size-16">{percent}%</h3>
                            <div className="visits-chart-2 mt-2"></div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="sparkline-chart-item">
                            <span className="font-size-15">Joined At</span>
                            <h3 className="title font-size-16">
                              {new Date(Date.now()).toLocaleDateString("en-US")}
                            </h3>
                            <div className="previews-chart mt-2"></div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="sparkline-chart-item">
                            <div className="previews-chart mt-2 ">
                              <button className="theme-btn btn-lg col-lg-12">
                                <Link to="/dashboard" className="text-white">
                                  Finish!
                                </Link>
                              </button>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graph;
