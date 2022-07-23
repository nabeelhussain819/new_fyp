import React from "react";
import { Link } from "react-router-dom";
import bg from "../Assets/logo-5.png";
const Footer = () => {
  return (
    <section className="footer-area padding-top-30px padding-bottom-10px hidden-print">
      <div className="container text-light">
        <div className="row">
          <div className="col-lg-3 responsive-column">
            <div className="footer-item">
              <div className="footer-logo padding-bottom-30px">
                <a href="index.html" className="foot__logo">
                  <img src={bg} alt="logo" style={{ width: "260px" }} />
                </a>
              </div>
              <p className="footer__desc">Sindh Madressatul Islam University</p>
              <ul className="list-items pt-3 text-light">
                <li>3015 Grand Ave, Coconut Grove Cerrick Way, FL 12345</li>
                <li>+123-456-789</li>
                <li>
                  <Link to="" className="text-light">
                    smiu@edu.pk
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 responsive-column">
            <div className="footer-item">
              <h4 className=" curve-shape pb-3 margin-bottom-20px margin-top-50px">
                Main Pages
              </h4>
              <ul className="list-items list--items">
                <li>
                  <Link to="" className="text-light">
                    Department
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-light">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-light">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-light">
                    Semesters
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 responsive-column">
            <div className="footer-item">
              <h4 className=" curve-shape pb-3 margin-bottom-20px margin-top-50px">
                Other Services
              </h4>
              <ul className="list-items list--items">
                <li>
                  <Link to="" className="text-light">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-light">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-light">
                    Qec
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-light">
                    Teachers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 responsive-column">
            <div className="footer-item">
              <h4 className=" curve-shape pb-3 margin-bottom-20px margin-top-50px">
                Other Links
              </h4>
              <ul className="list-items list--items">
                <li>
                  <Link to="" className="text-light">
                    Your Program
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-light">
                    Your Department
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-light">
                    Your Courses
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-light">
                    Your Comments
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="term-box footer-item">
              <ul className="list-items list--items d-flex align-items-center">
                <li>
                  <Link to="" className="text-light">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-light">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-light">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-social-box text-right">
              <ul className="social-profile">
                <li>
                  <Link to="" className="text-light">
                    <i className="lab la-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-light">
                    <i className="lab la-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-light">
                    <i className="lab la-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-light">
                    <i className="lab la-linkedin-in"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section-block mt-4"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="copy-right padding-top-30px">
              <p className="copy__desc text-light">© Sindh Madressatul Islam University</p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="copy-right-content d-flex align-items-center justify-content-end padding-top-30px">
              <span className="la la-heart"></span>
              <a href="">NIA</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
