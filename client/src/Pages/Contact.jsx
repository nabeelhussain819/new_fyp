import React from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Contact = () => {
  return (
    <div>
      <section className="breadcrumb-area bread-bg-5">
        <div className="breadcrumb-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <h2 className="sec__title text-white">Contact us</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="breadcrumb-list text-right">
                  <ul className="list-items">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Pages</li>
                    <li>Contact us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
      <section className="contact-area section--padding ">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="form-box">
                <div className="form-title-wrap">
                  <h3 className="title">We'd love to hear from you</h3>
                  <p className="font-size-15">
                    Send us a message and we'll respond as soon as possible
                  </p>
                </div>
                <div className="form-content ">
                  <div className="contact-form-action">
                    <form method="post" className="row">
                      <div className="col-lg-6 responsive-column">
                        <div className="input-box">
                          <label className="label-text">Your Name</label>
                          <div className="form-group">
                            <span className="la la-user form-icon"></span>
                            <input
                              className="form-control"
                              type="text"
                              name="text"
                              placeholder="Your name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 responsive-column">
                        <div className="input-box">
                          <label className="label-text">Your Email</label>
                          <div className="form-group">
                            <span className="la la-envelope-o form-icon"></span>
                            <input
                              className="form-control"
                              type="email"
                              name="email"
                              placeholder="Email address"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-box">
                          <label className="label-text">Message</label>
                          <div className="form-group">
                            <span className="la la-pencil form-icon"></span>
                            <textarea
                              className="message-control form-control"
                              name="message"
                              placeholder="Write message"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-box">
                          <div className="recapcha-box pb-4 d-flex align-items-center">
                            <label className="label-text flex-shrink-0 mr-3 mb-0">
                              What is? 3 + 5 =
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="text"
                              placeholder="Type answer"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="btn-box">
                          <button type="button" className="theme-btn" onClick={()=>toast.success("MESSAGE HAS BEEN SENT")}>
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-box">
                <div className="form-title-wrap">
                  <h3 className="title">Contact Us</h3>
                </div>
                <div className="form-content">
                  <div className="address-book">
                    <ul className="list-items contact-address">
                      <li>
                        <i className="la la-map-marker icon-element"></i>
                        <h5 className="title font-size-16 pb-1">Address</h5>
                        <p className="map__desc">
                          SINDH MADRESSATUL ISLAM UNIVERSITY
                        </p>
                      </li>
                      <li>
                        <i className="la la-phone icon-element"></i>
                        <h5 className="title font-size-16 pb-1">Phone</h5>
                        <p className="map__desc">Telephone: 2800 256 508</p>
                        <p className="map__desc">Mobile: 666 777 888</p>
                      </li>
                      <li>
                        <i className="la la-envelope-o icon-element"></i>
                        <h5 className="title font-size-16 pb-1">Email</h5>
                        <p className="map__desc">smiu@email.com</p>
                        <p className="map__desc">smiu@edu.pk.com</p>
                      </li>
                    </ul>
                    <ul className="social-profile text-center">
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
                      <li>
                        <a href="#">
                          <i className="lab la-youtube"></i>
                        </a>
                      </li>
                    </ul>
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
