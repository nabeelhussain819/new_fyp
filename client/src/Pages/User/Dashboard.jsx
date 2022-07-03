import React, { useState, useEffect } from "react";

export const Dashboard = () => {
  const [program, setProgram] = useState(false);
  const [depart, setDepart] = useState(false);
  const [session, setSession] = useState(false);
  const [Semester, setSemester] = useState(false);
  const [course, setCourse] = useState(false);

  function handleButton(props) {
    if (props == "depart") {
      setDepart(true);
    } else {
      setDepart(false);
    }
    if (props == "session") {
      setSession(true);
    } else {
      setSession(false);
    }
    if (props == "program") {
      setProgram(true);
    } else {
      setProgram(false);
    }
    if (props == "semester") {
      setSemester(true);
    } else {
      setSemester(false);
    }
    if (props == "course") {
      setCourse(true);
    } else {
      setCourse(false);
    }
  }
  function handleNext(data) {}
  return (
    <>
      <section className="">
        <div class="dashboard-bread">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="breadcrumb-content">
                  <div class="section-heading">
                    <h2 class="sec__title font-size-30 text-white">
                      Hi, Ali Welcome Back!
                    </h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="breadcrumb-list text-right">
                  <ul class="list-items">
                    <li>
                      <a href="/" class="text-white">
                        Home
                      </a>
                    </li>
                    <li>Pages</li>
                    <li>User Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-lg-3 responsive-column-m">
                <div class="icon-box icon-layout-2 dashboard-icon-box">
                  <div class="d-flex">
                    <div class="info-icon icon-element flex-shrink-0">
                      <i class="la la-shopping-cart"></i>
                    </div>
                    <div class="info-content">
                      <p class="info__desc">Total Booking</p>
                      <h4 class="info__title">44</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 responsive-column-m">
                <div class="icon-box icon-layout-2 dashboard-icon-box">
                  <div class="d-flex">
                    <div class="info-icon icon-element bg-2 flex-shrink-0">
                      <i class="la la-bookmark"></i>
                    </div>
                    <div class="info-content">
                      <p class="info__desc">Wishlist</p>
                      <h4 class="info__title">15</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 responsive-column-m">
                <div class="icon-box icon-layout-2 dashboard-icon-box">
                  <div class="d-flex">
                    <div class="info-icon icon-element bg-3 flex-shrink-0">
                      <i class="la la-plane"></i>
                    </div>
                    <div class="info-content">
                      <p class="info__desc">Total Travel</p>
                      <h4 class="info__title">25</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 responsive-column-m">
                <div class="icon-box icon-layout-2 dashboard-icon-box">
                  <div class="d-flex">
                    <div class="info-icon icon-element bg-4 flex-shrink-0">
                      <i class="la la-star"></i>
                    </div>
                    <div class="info-content">
                      <p class="info__desc">Reviews</p>
                      <h4 class="info__title">20</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div class="col-lg-12">
              <h3 class="title font-size-24">Welcome To User Panel</h3>
              <div class="card-item user-card card-item-list mt-4 mb-0">
                <div class="card-img">
                  <img src="images/team7.jpg" alt="user image" class="h-auto" />
                </div>
                <div class="card-body">
                  <h3 class="card-title">ss</h3>
                  <p class="card-meta">Member since April 2016</p>
                  <div class="d-flex justify-content-between pt-3">
                    <ul class="list-items list-items-2 flex-grow-1">
                      <li>
                        <span>Email:</span>contact@techydevs.com
                      </li>
                      <li>
                        <span>Phone:</span>+22 12345678
                      </li>
                      <li>
                        <span>Paypal Email:</span>contact@techydevs.com
                      </li>
                      <li>
                        <span>Home Airport:</span>Knoxville, TN 37920, USA
                      </li>
                      <li>
                        <span>Address:</span>2701 Spence Pl, Knoxville, USA
                      </li>
                      <li>
                        <span>Website:</span>
                        <a href="#">techydevs.com</a>
                      </li>
                    </ul>
                    <ul class="list-items flex-grow-1">
                      <li>
                        <h3 class="title">Verifications</h3>
                      </li>
                      <li class="d-flex justify-content-between align-items-center">
                        <span class="color-text-2 font-weight-medium mr-2">
                          Phone
                        </span>
                        <span class="theme-btn theme-btn-small theme-btn-rgb ">
                           verified
                        </span>
                      </li>
                      <li class="d-flex justify-content-between align-items-center">
                        <span class="color-text-2 font-weight-medium mr-2">
                          Email
                        </span>
                        <span class="theme-btn theme-btn-small theme-btn-rgb">
                          Verified
                        </span>
                      </li>
                      <li class="d-flex justify-content-between align-items-center">
                        <span class="color-text-2 font-weight-medium mr-2">
                          ID Card
                        </span>
                        <span class="theme-btn theme-btn-small theme-btn-rgb">
                          Verified
                        </span>
                      </li>
                      <li class="d-flex justify-content-between align-items-center">
                        <span class="color-text-2 font-weight-medium mr-2">
                          Name
                        </span>
                        <span class="theme-btn theme-btn-small theme-btn-rgb">
                          Verified
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row padding-top-70px">
            <div className="col-lg-9">
              <h3 class="title font-size-24">Partner's Service</h3>
              <div class="section-tab section-tab-3 pt-4 pb-5">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <button
                      class="nav-link active"
                      id="my-hotel-tab"
                      data-toggle="tab"
                      href="#my-hotel"
                      role="tab"
                      aria-controls="my-hotel"
                      aria-selected="true"
                      onClick={() => handleButton("depart")}
                    >
                      Department
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link active"
                      id="my-tour-tab"
                      data-toggle="tab"
                      href="#my-tour"
                      role="tab"
                      aria-controls="my-tour"
                      aria-selected="false"
                      onClick={() => handleButton("session")}
                    >
                      Session
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link active"
                      id="my-activity-tab"
                      data-toggle="tab"
                      href="#my-activity"
                      role="tab"
                      aria-controls="my-activity"
                      aria-selected="false"
                      onClick={() => handleButton("program")}
                    >
                      Program
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link active"
                      id="my-car-tab"
                      data-toggle="tab"
                      href="#my-car"
                      role="tab"
                      aria-controls="my-car"
                      aria-selected="false"
                      onClick={() => handleButton("semester")}
                    >
                      Semester
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link active"
                      id="my-flight-tab"
                      data-toggle="tab"
                      href="#my-flight"
                      role="tab"
                      aria-controls="my-flight"
                      aria-selected="false"
                      onClick={() => handleButton("course")}
                    >
                      Courses
                    </button>
                  </li>
                </ul>
              </div>
              {depart && (
                <>
                  <div class="tab-content margin-bottom-40px" id="myTabcontent">
                    <div
                      class="tab-pane fade active show"
                      id="my-hotel"
                      role="tabpanel"
                      aria-labelledby="my-hotel-tab"
                    >
                      <div class="my-service-list">
                        <div class="card-item card-item-list">
                          <div class="card-img">
                            <a href="hotel-single.html" class="d-block">
                              <img src="images/img1.jpg" alt="hotel-img" />
                            </a>
                            <span class="badge">Featured</span>
                          </div>

                          <div class="card-body">
                            <h3 class="card-title">
                              <a href="hotel-single.html"></a>
                            </h3>
                            <p class="card-meta">Total Students</p>
                            <div class="card-rating d-flex align-items-center pt-1">
                              <span class="rating__text">Hotel star</span>
                              <span class="ratings d-flex align-items-center mx-2">
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                              </span>
                              <span class="rating__text">5 of 5</span>
                            </div>
                            <div class="card-price d-flex align-items-center justify-content-between">
                              <p>
                                <span class="price__from">Price from</span>
                                <span class="price__num">$00.00</span>
                              </p>
                              <button
                                className="theme-btn"
                                onClick={() => handleNext()}
                              >
                                Enroll Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {session && (
                <>
                  <div class="tab-content margin-bottom-40px" id="myTabcontent">
                    <div
                      class="tab-pane fade active show"
                      id="my-hotel"
                      role="tabpanel"
                      aria-labelledby="my-hotel-tab"
                    >
                      <div class="my-service-list">
                        <div class="card-item card-item-list">
                          <div class="card-img">
                            <a href="hotel-single.html" class="d-block">
                              <img src="images/img1.jpg" alt="hotel-img" />
                            </a>
                            <span class="badge">Featured</span>
                          </div>

                          <div class="card-body">
                            <h3 class="card-title">
                              <a href="hotel-single.html"></a>
                            </h3>
                            <p class="card-meta">124 E Huron St, New york</p>
                            <div class="card-rating d-flex align-items-center pt-1">
                              <span class="rating__text">Hotel star</span>
                              <span class="ratings d-flex align-items-center mx-2">
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                              </span>
                              <span class="rating__text">5 of 5</span>
                            </div>
                            <div class="card-price d-flex align-items-center justify-content-between">
                              <p>
                                <span class="price__from">Price from</span>
                                <span class="price__num">$00.00</span>
                              </p>
                              <button
                                className="theme-btn"
                                onClick={() => handleNext()}
                              >
                                Enroll Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {program && (
                <div class="tab-content margin-bottom-40px" id="myTabcontent">
                  <div
                    class="tab-pane fade active show"
                    id="my-hotel"
                    role="tabpanel"
                    aria-labelledby="my-hotel-tab"
                  >
                    <div class="my-service-list">
                      <div class="card-item card-item-list">
                        <div class="card-img">
                          <a href="hotel-single.html" class="d-block">
                            <img src="images/img1.jpg" alt="hotel-img" />
                          </a>
                          <span class="badge">Featussred</span>
                        </div>
                        <div class="card-body">
                          <h3 class="card-title">
                            <a href="hotel-single.html">
                              The Millennium Hilton New York
                            </a>
                          </h3>
                          <p class="card-meta">124 E Huron St, New york</p>
                          <div class="card-rating d-flex align-items-center pt-1">
                            <span class="rating__text">Hotel star</span>
                            <span class="ratings d-flex align-items-center mx-2">
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                            </span>
                            <span class="rating__text">5 of 5</span>
                          </div>
                          <div class="card-price d-flex align-items-center justify-content-between">
                            <p>
                              <span class="price__from">Price from</span>
                              <span class="price__num">$00.00</span>
                            </p>
                            <button
                              className="theme-btn"
                              onClick={() => handleNext()}
                            >
                              Enroll Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {Semester && (
                <div class="tab-content margin-bottom-40px" id="myTabcontent">
                  <div
                    class="tab-pane fade active show"
                    id="my-hotel"
                    role="tabpanel"
                    aria-labelledby="my-hotel-tab"
                  >
                    <div class="my-service-list">
                      <div class="card-item card-item-list">
                        <div class="card-img">
                          <a href="hotel-single.html" class="d-block">
                            <img src="images/img1.jpg" alt="hotel-img" />
                          </a>
                          <span class="badge">dd</span>
                        </div>
                        <div class="card-body">
                          <h3 class="card-title">
                            <a href="hotel-single.html">
                              The Millennium Hilton New York
                            </a>
                          </h3>
                          <p class="card-meta">124 E Huron St, New york</p>
                          <div class="card-rating d-flex align-items-center pt-1">
                            <span class="rating__text">Hotel star</span>
                            <span class="ratings d-flex align-items-center mx-2">
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                            </span>
                            <span class="rating__text">5 of 5</span>
                          </div>
                          <div class="card-price d-flex align-items-center justify-content-between">
                            <p>
                              <span class="price__from">Price from</span>
                              <span class="price__num">$00.00</span>
                            </p>
                            <button
                              className="theme-btn"
                              onClick={() => handleNext()}
                            >
                              Enroll Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {course && (
                <div class="tab-content margin-bottom-40px" id="myTabcontent">
                  <div
                    class="tab-pane fade active show"
                    id="my-hotel"
                    role="tabpanel"
                    aria-labelledby="my-hotel-tab"
                  >
                    <div class="my-service-list">
                      <div class="card-item card-item-list">
                        <div class="card-img">
                          <a href="hotel-single.html" class="d-block">
                            <img src="images/img1.jpg" alt="hotel-img" />
                          </a>
                          <span class="badge">Featured</span>
                        </div>
                        <div class="card-body">
                          <h3 class="card-title">
                            <a href="hotel-single.html">
                              The Millennium Hilton New York
                            </a>
                          </h3>
                          <p class="card-meta">124 E Huron St, New york</p>
                          <div class="card-rating d-flex align-items-center pt-1">
                            <span class="rating__text">Hotel star</span>
                            <span class="ratings d-flex align-items-center mx-2">
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                              <i class="la la-star"></i>
                            </span>
                            <span class="rating__text">5 of 5</span>
                          </div>
                          <div class="card-price d-flex align-items-center justify-content-between">
                            <p>
                              <span class="price__from">Price from</span>
                              <span class="price__num">$00.00</span>
                            </p>
                            <button
                              className="theme-btn"
                              onClick={() => handleNext()}
                            >
                              Enroll Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div class="col-lg-3">
              <div class="review-summary mt-2 section-bg">
                <p>Average Rating</p>
                <h2>
                  4.5<span>/5</span>
                </h2>
                <span class="ratings d-flex justify-content-center align-items-center font-size-17">
                  <i class="la la-star"></i>
                  <i class="la la-star"></i>
                  <i class="la la-star"></i>
                  <i class="la la-star"></i>
                  <i class="la la-star-half-alt"></i>
                </span>
                <span class="font-size-14">(Based on 199 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
