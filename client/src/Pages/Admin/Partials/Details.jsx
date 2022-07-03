import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useLocation } from "react-router-dom";
import Edit from "../Edit/Edit";
import { useNavigate } from "react-router-dom";
import Delete from "../Delete/Delete";

const Details = () => {
  const location = useLocation();
  const { from, api } = location.state;
  const [id, setId] = useState([from].map((data) => data._id));

  return (
    <div>
      <div class="dashboard-bread dashboard--bread dashboard-bread-2">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="breadcrumb-content">
                <div class="section-heading">
                  <h2 class="sec__title font-size-30 text-white">
                    Full Details
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="breadcrumb-list text-right">
                <ul class="list-items">
                  <li>
                    <a href="index.html" class="text-white">
                      Home
                    </a>
                  </li>
                  <li>Dashboard</li>
                  <li> Full Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dashboard-main-content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="form-box">
                <div class="form-title-wrap">
                  <h3 class="title"> Full Details Lists</h3>
                </div>
                {[from].map((data) => {
                  return (
                    <>
                      <div className="container-fluid ">
                        <div class="btn-box mt-4 ">
                          <Edit data={from} />
                          <Delete id={id} api={api} />
                        </div>
                      </div>

                      <div class="form-content">
                        <ul class="list-items list-items-2 list-items-flush">
                          <li>
                            <span>ID</span>
                            {data._id}
                          </li>
                          <li>
                            <span>Name</span>
                            {data.name}
                          </li>
                          <li>
                            <span>Code</span>
                            {data.code}
                          </li>
                          <li>
                            <span>ID</span>
                            {data._id}
                          </li>
                          <li>
                            <span>ID</span>
                            {data._id}
                          </li>
                          <li>
                            <span>ID</span>
                            {data._id}
                          </li>
                          <li>
                            <span>ID</span>
                            {data._id}
                          </li>
                        </ul>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div class="border-top mt-5"></div>
          <div class="row align-items-center">
            <div class="col-lg-7">
              <div class="copy-right padding-top-30px">
                <p class="copy__desc">
                  © Copyright Trizen 2020. Made with
                  <span class="la la-heart"></span> by{" "}
                  <a href="https://themeforest.net/user/techydevs/portfolio">
                    TechyDevs
                  </a>
                </p>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="copy-right-content text-right padding-top-30px">
                <ul class="social-profile">
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
    </div>
  );
};

export default Details;
