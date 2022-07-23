import React from "react";
import imrar from '../Assets/imrar.jpg'
import ali from '../Assets/ali.jpg'
import nabeel from '../Assets/nabeel.jpg'
import img from '../Assets/img22.jpg'
import spr from '../Assets/support.png'
const About = () => {
  return (
    <div>
      <section className="breadcrumb-area bread-bg-9">
        <div className="breadcrumb-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <h2 className="sec__title line-height-50 text-white">
                      TES Evaluation System is Your Trusted <br /> Evaluation Companion.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-area padding-bottom-90px overflow-hidden ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading margin-bottom-40px">
                <h2 className="sec__title">About Us</h2>
                <h4 className="title font-size-16 line-height-26 pt-4 pb-2">
                  industry. Metasearch for travel? No one was doing it. Until we
                  did.
                </h4>
                <p className="sec__desc font-size-16 pb-3">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <p className="sec__desc font-size-16 pb-3">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
                <p className="sec__desc font-size-16">
                  Vivamus a mauris vel nunc tristique volutpat. Aenean eu
                  faucibus enim. Aenean blandit arcu lectus, in cursus elit
                  porttitor non. Curabitur risus eros,{" "}
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
                <img
                  src={spr}
                  className="img__item img__item-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="funfact-area padding-bottom-70px">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <h2 className="sec__title">Our Numbers Say Everything</h2>
              </div>
            </div>
          </div>
          <div className="counter-box counter-box-2 margin-top-60px mb-0">
            <div className="row">
              <div className="col-lg-3 responsive-column">
                <div className="counter-item counter-item-layout-2 d-flex">
                  <div className="counter-icon flex-shrink-0">
                    <i className="la la-users"></i>
                  </div>
                  <div className="counter-content">
                    <div>
                      <span
                        className="counter"
                        data-from="0"
                        data-to="200"
                        data-refresh-interval="5"
                      >
                        200
                      </span>
                      <span className="count-symbol">+</span>
                    </div>
                    <p className="counter__title">teachers</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 responsive-column">
                <div className="counter-item counter-item-layout-2 d-flex">
                  <div className="counter-icon flex-shrink-0">
                    <i className="la la-building"></i>
                  </div>
                  <div className="counter-content">
                    <div>
                      <span
                        className="counter"
                        data-from="0"
                        data-to="3"
                        data-refresh-interval="5"
                      >
                        3
                      </span>
                      <span className="count-symbol">k</span>
                    </div>
                    <p className="counter__title">Students</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 responsive-column">
                <div className="counter-item counter-item-layout-2 d-flex">
                  <div className="counter-icon flex-shrink-0">
                    <i className="la la-globe"></i>
                  </div>
                  <div className="counter-content">
                    <div>
                      <span
                        className="counter"
                        data-from="0"
                        data-to="400"
                        data-refresh-interval="5"
                      >
                        400
                      </span>
                      <span className="count-symbol">+</span>
                    </div>
                    <p className="counter__title">Courses</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 responsive-column">
                <div className="counter-item counter-item-layout-2 d-flex">
                  <div className="counter-icon flex-shrink-0">
                    <i className="la la-check-circle"></i>
                  </div>
                  <div className="counter-content">
                    <div>
                      <span
                        className="counter"
                        data-from="0"
                        data-to="40"
                        data-refresh-interval="5"
                      >
                        40
                      </span>
                      <span className="count-symbol">+</span>
                    </div>
                    <p className="counter__title">Departments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="info-area padding-top-100px padding-bottom-60px text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2 className="sec__title">Our Dedicated Team</h2>
              </div>
            </div>
          </div>
          <div className="row padding-top-100px">
            <div className="col-lg-4 responsive-column">
              <div className="card-item team-card">
                <div className="card-img">
                  <img src={nabeel} alt="team-img" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">NABEEL HUSSAIN</h3>
                  <p className="card-meta">Founder &amp; Developer</p>
                  <p className="card-text font-size-15 pt-2">
                    Ligula vehicula enenatis semper, magna lorem aliquet lacusin
                    ante dapibus dictum fugats vitaes nemo minima.
                  </p>
                  <ul className="social-profile padding-top-20px pb-2">
                    <li>
                      <a href="#">
                        <i className="lab la-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lab la-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lab la-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lab la-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 responsive-column">
              <div className="card-item team-card">
                <div className="card-img">
                  <img src={ali} alt="team-img" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">ALI SHAHZAD</h3>
                  <p className="card-meta">UI/UX Designer</p>
                  <p className="card-text font-size-15 pt-2">
                    Ligula vehicula enenatis semper, magna lorem aliquet lacusin
                    ante dapibus dictum fugats vitaes nemo minima.
                  </p>
                  <ul className="social-profile padding-top-20px pb-2">
                    <li>
                      <a href="#">
                        <i className="lab la-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lab la-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lab la-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lab la-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 responsive-column">
              <div className="card-item team-card">
                <div className="card-img">
                  <img src={imrar} alt="team-img" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">IMRAR KHAN</h3>
                  <p className="card-meta">Manager / SEO</p>
                  <p className="card-text font-size-15 pt-2">
                    Ligula vehicula enenatis semper, magna lorem aliquet lacusin
                    ante dapibus dictum fugats vitaes nemo minima.
                  </p>
                  <ul className="social-profile padding-top-20px pb-2">
                    <li>
                      <a href="#">
                        <i className="lab la-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lab la-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lab la-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lab la-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-area cta-bg-2 bg-fixed section-padding text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2 className="sec__title mb-3 text-white">
                  Interested in a Evaluation <br /> at TES.
                </h2>
                <p className="sec__desc text-white">
                  We’re always looking for talented individuals and
                  <br /> people who are hungry to do great work.
                </p>
              </div>
              <div className="btn-box padding-top-35px">
                <a href="#" className="theme-btn border-0">
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
