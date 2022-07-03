import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Delete from "../Delete/Delete";
import { ReadCourse } from "../../../Api/Course";
import Course from "../Create/Course";
import { ReadComplain } from "../../../Api/Complain";

const Complains = () => {
  const [show, setShow] = useState(false);
  const [dept, setDept] = useState([]);
  const [api, setApi] = useState("");
  const [name, setName] = useState("");
  function searchData(e) {
    let item = e.target.value;

    setName(item);
  }
  const filterData = dept.filter((data) =>
    data.complain.toLowerCase().includes(name)
  );

  const getData = (api) => {
    ReadComplain({ api: api }).then(function (result) {
      setDept(result);
    });
  };

  console.log(dept);

  return (
    <div className="dashboard-content-wrap">
      <div class="dashboard-bread dashboard--bread dashboard-bread-2">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="breadcrumb-content">
                <div class="section-heading">
                  <h2 class="sec__title font-size-30 text-white">Complains</h2>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="breadcrumb-list text-right">
                <ul class="list-items">
                  <li>
                    <Link to="/" class="text-white">
                      Home
                    </Link>
                  </li>
                  <li>Dashboard</li>
                  <li>Complains</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-main-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-box">
                <div className="form-title-wrap">
                  <div class="d-flex align-items-center justify-content-between">
                    <h3 class="title">Complains Results</h3>
                    <input
                      type="text"
                      className="form-control col-lg-4"
                      placeholder="Search Complains"
                      onChange={searchData}
                    />
                    <div class="select-contain">
                      <div class="dropdown bootstrap-select select-contain-select">
                        {show ? (
                          <button
                            className="btn dropdown-toggle btn-dark"
                            onClick={() => setShow(false)}
                          >
                            Close
                          </button>
                        ) : (
                          <button
                            className="btn dropdown-toggle btn-dark"
                            onClick={() => setShow(true)}
                          >
                            Select Complain
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  {show && (
                    <div>
                      <div class="container-fluid">
                        <div class="dashboard-card">
                          <div class="">
                            <h3 class="title">Select Complains</h3>
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
                  )}
                </div>
                <div class="table-form table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Country</th>
                        <th scope="col">City</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
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
                            <td>{}</td>
                            <td>United States</td>
                            <td>New York</td>
                            <td>
                              <span class="badge badge-success py-1 px-2">
                                Active
                              </span>
                            </td>
                            <td>
                              <div class="table-content">
                                <Link
                                  to={"/details/" + data._id}
                                  class="theme-btn theme-btn-small "
                                  state={{ from: data, api: "complains" }}
                                >
                                  <i class="la la-eye"></i>
                                </Link>
                                <Delete id={data._id} api={"complains"} />
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complains;
