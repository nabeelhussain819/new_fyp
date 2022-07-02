import React from "react";

const About = () => {
  return (
    <div>
      <section class="breadcrumb-area bread-bg-9">
        <div class="breadcrumb-wrap">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="breadcrumb-content">
                  <div class="section-heading">
                    <h2 class="sec__title line-height-50 text-white">
                      Trizen.com is Your Trusted <br /> Travel Companion.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bread-svg-box">
          <svg
            class="bread-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <polygon points="100 0 50 10 0 0 0 10 100 10"></polygon>
          </svg>
        </div>
      </section>
      <section class="about-area padding-bottom-90px overflow-hidden">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="section-heading margin-bottom-40px">
                <h2 class="sec__title">About Us</h2>
                <h4 class="title font-size-16 line-height-26 pt-4 pb-2">
                  Since 2002, TRIZEN has been revolutionising the travel
                  industry. Metasearch for travel? No one was doing it. Until we
                  did.
                </h4>
                <p class="sec__desc font-size-16 pb-3">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <p class="sec__desc font-size-16 pb-3">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
                <p class="sec__desc font-size-16">
                  Vivamus a mauris vel nunc tristique volutpat. Aenean eu
                  faucibus enim. Aenean blandit arcu lectus, in cursus elit
                  porttitor non. Curabitur risus eros,{" "}
                </p>
              </div>
            </div>
            <div class="col-lg-5 ml-auto">
              <div class="image-box about-img-box">
                <img
                  src="images/img24.jpg"
                  alt="about-img"
                  class="img__item img__item-1"
                />
                <img
                  src="images/img25.jpg"
                  alt="about-img"
                  class="img__item img__item-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="funfact-area padding-bottom-70px">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading text-center">
                <h2 class="sec__title">Our Numbers Say Everything</h2>
              </div>
            </div>
          </div>
          <div class="counter-box counter-box-2 margin-top-60px mb-0">
            <div class="row">
              <div class="col-lg-3 responsive-column">
                <div class="counter-item counter-item-layout-2 d-flex">
                  <div class="counter-icon flex-shrink-0">
                    <i class="la la-users"></i>
                  </div>
                  <div class="counter-content">
                    <div>
                      <span
                        class="counter"
                        data-from="0"
                        data-to="200"
                        data-refresh-interval="5"
                      >
                        200
                      </span>
                      <span class="count-symbol">+</span>
                    </div>
                    <p class="counter__title">Partners</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 responsive-column">
                <div class="counter-item counter-item-layout-2 d-flex">
                  <div class="counter-icon flex-shrink-0">
                    <i class="la la-building"></i>
                  </div>
                  <div class="counter-content">
                    <div>
                      <span
                        class="counter"
                        data-from="0"
                        data-to="3"
                        data-refresh-interval="5"
                      >
                        3
                      </span>
                      <span class="count-symbol">k</span>
                    </div>
                    <p class="counter__title">Properties</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 responsive-column">
                <div class="counter-item counter-item-layout-2 d-flex">
                  <div class="counter-icon flex-shrink-0">
                    <i class="la la-globe"></i>
                  </div>
                  <div class="counter-content">
                    <div>
                      <span
                        class="counter"
                        data-from="0"
                        data-to="400"
                        data-refresh-interval="5"
                      >
                        400
                      </span>
                      <span class="count-symbol">+</span>
                    </div>
                    <p class="counter__title">Destinations</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 responsive-column">
                <div class="counter-item counter-item-layout-2 d-flex">
                  <div class="counter-icon flex-shrink-0">
                    <i class="la la-check-circle"></i>
                  </div>
                  <div class="counter-content">
                    <div>
                      <span
                        class="counter"
                        data-from="0"
                        data-to="40"
                        data-refresh-interval="5"
                      >
                        40
                      </span>
                      <span class="count-symbol">k</span>
                    </div>
                    <p class="counter__title">Booking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="info-area padding-top-100px padding-bottom-60px text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading">
                <h2 class="sec__title">Our Dedicated Team</h2>
              </div>
            </div>
          </div>
          <div class="row padding-top-100px">
            <div class="col-lg-4 responsive-column">
              <div class="card-item team-card">
                <div class="card-img">
                  <img src="images/team1.jpg" alt="team-img" />
                </div>
                <div class="card-body">
                  <h3 class="card-title">David Roberts</h3>
                  <p class="card-meta">Founder &amp; Director</p>
                  <p class="card-text font-size-15 pt-2">
                    Ligula vehicula enenatis semper, magna lorem aliquet lacusin
                    ante dapibus dictum fugats vitaes nemo minima.
                  </p>
                  <ul class="social-profile padding-top-20px pb-2">
                    <li>
                      <a href="#">
                        <i class="lab la-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lab la-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lab la-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lab la-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 responsive-column">
              <div class="card-item team-card">
                <div class="card-img">
                  <img src="images/team2.jpg" alt="team-img" />
                </div>
                <div class="card-body">
                  <h3 class="card-title">Augusta Silva</h3>
                  <p class="card-meta">Chief Operating Officer</p>
                  <p class="card-text font-size-15 pt-2">
                    Ligula vehicula enenatis semper, magna lorem aliquet lacusin
                    ante dapibus dictum fugats vitaes nemo minima.
                  </p>
                  <ul class="social-profile padding-top-20px pb-2">
                    <li>
                      <a href="#">
                        <i class="lab la-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lab la-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lab la-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lab la-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 responsive-column">
              <div class="card-item team-card">
                <div class="card-img">
                  <img src="images/team3.jpg" alt="team-img" />
                </div>
                <div class="card-body">
                  <h3 class="card-title">Bernice Lucas</h3>
                  <p class="card-meta">Account Manager</p>
                  <p class="card-text font-size-15 pt-2">
                    Ligula vehicula enenatis semper, magna lorem aliquet lacusin
                    ante dapibus dictum fugats vitaes nemo minima.
                  </p>
                  <ul class="social-profile padding-top-20px pb-2">
                    <li>
                      <a href="#">
                        <i class="lab la-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lab la-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lab la-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="lab la-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="cta-area cta-bg-2 bg-fixed section-padding text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading">
                <h2 class="sec__title mb-3 text-white">
                  Interested in a career <br /> at Trizen.
                </h2>
                <p class="sec__desc text-white">
                  We’re always looking for talented individuals and
                  <br /> people who are hungry to do great work.
                </p>
              </div>
              <div class="btn-box padding-top-35px">
                <a href="#" class="theme-btn border-0">
                  Join Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
