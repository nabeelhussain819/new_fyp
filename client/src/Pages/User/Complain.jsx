import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReadComplain } from "../../Api/Complain";

const Complain = () => {
  const [semester, setProgram] = useState([]);
  const [name, setName] = useState("");
  function searchData(e) {
    let item = e.target.value;

    setName(item);
  }
  const getData = (api) => {
    ReadComplain({api:api }).then(function (result) {
        setProgram(result);
    });
  };
  const filterData = semester.filter((data) =>
  data.complain.toLowerCase().includes(name)
);
  return (
    <div>
      <section class="breadcrumb-area bread-bg">
        <div class="breadcrumb-wrap padding-right-100px padding-left-100px">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="breadcrumb-content">
                  <div class="section-heading">
                    <h2 class="sec__title text-white">Your Complains</h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="breadcrumb-list text-right">
                  <ul class="list-items">
                    <li>
                      <a href="/dashboard">Dashboard</a>
                    </li>
                    <li>Your Complains</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="bread-svg-box">
        <svg class="hero-svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path></svg>
        </div>
        </div>
      </section>
      <div>
                      <div class="container-fluid pt-4">
                        <div class="dashboard-card">
                          <div class="pl-4">
                            <h2 class="title">Select Complains</h2>
                     
                          </div>
                       
                          <div class="form-content">
                            <div class="row">
                              <div class="col-lg-3 responsive-column-l">
                                <div class="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-1 pb-0">
                                  <div class="d-flex pb-3 justify-content-between">
                                    <div class="info-content">
                                      <p class="info__desc">
                                        Department Complains
                                      </p>
                                    </div>
                                    <button
                                      className="bg-transparent border-0 p-0"
                                      onClick={() => getData("departments")}
                                    >
                                      <div class="info-icon icon-element bg-white text-color-5">
                                        <i class="la la-home"></i>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-3 responsive-column-l">
                                <div class="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-2 pb-0">
                                  <div class="d-flex pb-3 justify-content-between">
                                    <div class="info-content">
                                      <p class="info__desc">
                                        Programs Complains
                                      </p>
                                    </div>

                                    <button
                                      className="bg-transparent border-0 p-0"
                                      onClick={() => getData("programs")}
                                    >
                                      <div class="info-icon icon-element bg-white text-color-5">
                                        <i class="la la-heart"></i>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-3 responsive-column-l">
                                <div class="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-3 pb-0">
                                  <div class="d-flex pb-3 justify-content-between">
                                    <div class="info-content">
                                      <p class="info__desc">
                                        Teachers Complains
                                      </p>
                                    </div>

                                    <button
                                      className="bg-transparent border-0 p-0"
                                      onClick={() => getData("teachers")}
                                    >
                                      <div class="info-icon icon-element bg-white text-color-5">
                                        <i class="la la-users"></i>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-3 responsive-column-l">
                                <div class="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-4 pb-0">
                                  <div class="d-flex pb-3 justify-content-between">
                                    <div class="info-content">
                                      <p class="info__desc">
                                        Courses Complains
                                      </p>
                                    </div>

                                    <button
                                      className="bg-transparent border-0 p-0"
                                      onClick={() => getData("courses")}
                                    >
                                      <div class="info-icon icon-element bg-white text-color-5">
                                        <i class="la la-book"></i>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-3 responsive-column-l">
                                <div class="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-5 pb-2">
                                  <div class="d-flex pb-3 justify-content-between">
                                    <div class="info-content">
                                      <p class="info__desc">
                                        Semesters Complains
                                      </p>
                                    </div>
                                    <button
                                      className="bg-transparent border-0 p-0"
                                      onClick={() => getData("semesters")}
                                    >
                                      <div class="info-icon icon-element bg-white text-color-5">
                                        <i class="la la-dashboard"></i>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
      <section class="card-area ">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="filter-wrap ">
                <div className="filter-top d-flex align-items-center justify-content-between">
                  <div>
                    <h3 className="font-size-24">
                       Your Total Complains {semester.length}
                    </h3>                  
                    <input
                      type="text"
                      className="form-control col-lg-12 mb-4"
                      placeholder="Search Complains"
                      onChange={searchData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="table-form table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Complain</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filterData.map((data, i) => {
                        return (
                          <tr>
                            <th scope="row">{i + 1}</th>
                            <td>
                              <div class="table-content">
                                <h3 class="title">{data.complain}</h3>
                              </div>
                            </td>
                          
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
        </div>
      </section>
    </div>
  );
};

export default Complain;
