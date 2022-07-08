import React from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Contact = () => {
  return (
    <div>
      <section class="breadcrumb-area bread-bg-5">
        <div class="breadcrumb-wrap">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="breadcrumb-content">
                  <div class="section-heading">
                    <h2 class="sec__title text-white">Contact us</h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="breadcrumb-list text-right">
                  <ul class="list-items">
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
      <section class="contact-area section--padding bg-817">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="form-box">
                <div class="form-title-wrap">
                  <h3 class="title">We'd love to hear from you</h3>
                  <p class="font-size-15">
                    Send us a message and we'll respond as soon as possible
                  </p>
                </div>
                <div class="form-content ">
                  <div class="contact-form-action">
                    <form method="post" class="row">
                      <div class="col-lg-6 responsive-column">
                        <div class="input-box">
                          <label class="label-text">Your Name</label>
                          <div class="form-group">
                            <span class="la la-user form-icon"></span>
                            <input
                              class="form-control"
                              type="text"
                              name="text"
                              placeholder="Your name"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 responsive-column">
                        <div class="input-box">
                          <label class="label-text">Your Email</label>
                          <div class="form-group">
                            <span class="la la-envelope-o form-icon"></span>
                            <input
                              class="form-control"
                              type="email"
                              name="email"
                              placeholder="Email address"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="input-box">
                          <label class="label-text">Message</label>
                          <div class="form-group">
                            <span class="la la-pencil form-icon"></span>
                            <textarea
                              class="message-control form-control"
                              name="message"
                              placeholder="Write message"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="input-box">
                          <div class="recapcha-box pb-4 d-flex align-items-center">
                            <label class="label-text flex-shrink-0 mr-3 mb-0">
                              What is? 3 + 5 =
                            </label>
                            <input
                              class="form-control"
                              type="text"
                              name="text"
                              placeholder="Type answer"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="btn-box">
                          <button type="button" class="theme-btn" onClick={()=>toast.success("MESSAGE HAS BEEN SENT")}>
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="form-box">
                <div class="form-title-wrap">
                  <h3 class="title">Contact Us</h3>
                </div>
                <div class="form-content">
                  <div class="address-book">
                    <ul class="list-items contact-address">
                      <li>
                        <i class="la la-map-marker icon-element"></i>
                        <h5 class="title font-size-16 pb-1">Address</h5>
                        <p class="map__desc">
                          SINDH MADRESSATUL ISLAM UNIVERSITY
                        </p>
                      </li>
                      <li>
                        <i class="la la-phone icon-element"></i>
                        <h5 class="title font-size-16 pb-1">Phone</h5>
                        <p class="map__desc">Telephone: 2800 256 508</p>
                        <p class="map__desc">Mobile: 666 777 888</p>
                      </li>
                      <li>
                        <i class="la la-envelope-o icon-element"></i>
                        <h5 class="title font-size-16 pb-1">Email</h5>
                        <p class="map__desc">smiu@email.com</p>
                        <p class="map__desc">smiu@edu.pk.com</p>
                      </li>
                    </ul>
                    <ul class="social-profile text-center">
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
                      <li>
                        <a href="#">
                          <i class="lab la-youtube"></i>
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