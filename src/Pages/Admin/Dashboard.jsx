import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard-content-wrap">
      <div class="dashboard-bread dashboard-bread-2">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="breadcrumb-content">
                <div class="section-heading">
                  <h2 class="sec__title font-size-30 text-white">Dashboard</h2>
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
                  <li>Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-lg-3 responsive-column-l">
              <div class="icon-box icon-layout-2 dashboard-icon-box pb-0">
                <div class="d-flex pb-3 justify-content-between">
                  <div class="info-content">
                    <p class="info__desc">Total Booking!</p>
                    <h4 class="info__title">55</h4>
                  </div>
                  <div class="info-icon icon-element bg-4">
                    <i class="la la-shopping-cart"></i>
                  </div>
                </div>
                <div class="section-block"></div>
                <a
                  href="admin-dashboard-booking.html"
                  class="d-flex align-items-center justify-content-between view-all"
                >
                  View All <i class="la la-angle-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3 responsive-column-l">
              <div class="icon-box icon-layout-2 dashboard-icon-box pb-0">
                <div class="d-flex pb-3 justify-content-between">
                  <div class="info-content">
                    <p class="info__desc">New Reviews!</p>
                    <h4 class="info__title">22</h4>
                  </div>
                  <div class="info-icon icon-element bg-3">
                    <i class="la la-star"></i>
                  </div>
                </div>
                <div class="section-block"></div>
                <a
                  href="admin-dashboard-reviews.html"
                  class="d-flex align-items-center justify-content-between view-all"
                >
                  View All <i class="la la-angle-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3 responsive-column-l">
              <div class="icon-box icon-layout-2 dashboard-icon-box pb-0">
                <div class="d-flex pb-3 justify-content-between">
                  <div class="info-content">
                    <p class="info__desc">Total Subscribers!</p>
                    <h4 class="info__title">27</h4>
                  </div>
                  <div class="info-icon icon-element bg-2">
                    <i class="la la-envelope"></i>
                  </div>
                </div>
                <div class="section-block"></div>
                <a
                  href="admin-dashboard-subscribers.html"
                  class="d-flex align-items-center justify-content-between view-all"
                >
                  View All <i class="la la-angle-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3 responsive-column-l">
              <div class="icon-box icon-layout-2 dashboard-icon-box pb-0">
                <div class="d-flex pb-3 justify-content-between">
                  <div class="info-content">
                    <p class="info__desc">New Bookmarks!</p>
                    <h4 class="info__title">25</h4>
                  </div>
                  <div class="info-icon icon-element bg-1">
                    <i class="la la-bookmark-o"></i>
                  </div>
                </div>
                <div class="section-block"></div>
                <a
                  href="admin-dashboard-wishlist.html"
                  class="d-flex align-items-center justify-content-between view-all"
                >
                  View All <i class="la la-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-main-content">
        <div class="col-lg-12">
          <div class="form-box dashboard-card">
            <div class="form-title-wrap">
              <h3 class="title">Sales earning this month for each service</h3>
            </div>
            <div class="form-content">
              <div class="row">
                <div class="col-lg-3 responsive-column-l">
                  <div class="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-1 pb-0">
                    <div class="d-flex pb-3 justify-content-between">
                      <div class="info-content">
                        <p class="info__desc">Hotels</p>
                        <h4 class="info__title">$1,455.00</h4>
                      </div>
                      <div class="info-icon icon-element bg-white text-color-2">
                        <i class="la la-hotel"></i>
                      </div>
                    </div>
                    <div class="section-block"></div>
                    <a
                      href="#"
                      class="d-flex align-items-center justify-content-between view-all"
                    >
                      View Details <i class="la la-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div class="col-lg-3 responsive-column-l">
                  <div class="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-2 pb-0">
                    <div class="d-flex pb-3 justify-content-between">
                      <div class="info-content">
                        <p class="info__desc">Cars</p>
                        <h4 class="info__title">$422.00</h4>
                      </div>
                      <div class="info-icon icon-element bg-white text-color-3">
                        <i class="la la-car"></i>
                      </div>
                    </div>
                    <div class="section-block"></div>
                    <a
                      href="#"
                      class="d-flex align-items-center justify-content-between view-all"
                    >
                      View Details <i class="la la-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div class="col-lg-3 responsive-column-l">
                  <div class="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-3 pb-0">
                    <div class="d-flex pb-3 justify-content-between">
                      <div class="info-content">
                        <p class="info__desc">Cruises</p>
                        <h4 class="info__title">$827.00</h4>
                      </div>
                      <div class="info-icon icon-element bg-white text-color-4">
                        <i class="la la-ship"></i>
                      </div>
                    </div>
                    <div class="section-block"></div>
                    <a
                      href="#"
                      class="d-flex align-items-center justify-content-between view-all"
                    >
                      View Details <i class="la la-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div class="col-lg-3 responsive-column-l">
                  <div class="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-4 pb-0">
                    <div class="d-flex pb-3 justify-content-between">
                      <div class="info-content">
                        <p class="info__desc">Flights</p>
                        <h4 class="info__title">$325.00</h4>
                      </div>
                      <div class="info-icon icon-element bg-white text-color-5">
                        <i class="la la-plane"></i>
                      </div>
                    </div>
                    <div class="section-block"></div>
                    <a
                      href="#"
                      class="d-flex align-items-center justify-content-between view-all"
                    >
                      View Details <i class="la la-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
