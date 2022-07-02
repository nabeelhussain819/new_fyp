import React, { useState } from "react";
import { Link } from "react-router-dom";
import Edit from "../Edit/Edit";
import Delete from "../Delete/Delete";
import { ReadComment } from "../../../Api/Comment";

const Comments = () => {
  const [show, setShow] = useState(false);
  const [dept, setDept] = useState([]);
  const [name, setName] = useState("");
  function searchData(e) {
    let item = e.target.value;

    setName(item);
  }
  const filterData = dept.filter((data) =>
    data.comment.toLowerCase().includes(name)
  );
  const getData = (api) => {
    ReadComment({ api: api }).then(function (result) {
      setDept(result);
    });
  };

  return (
    <div className="dashboard-content-wrap">
      <div class="dashboard-bread dashboard--bread dashboard-bread-2">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="breadcrumb-content">
                <div class="section-heading">
                  <h2 class="sec__title font-size-30 text-white">Comments</h2>
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
                  <li>Comments</li>
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
                    <h3 class="title">Comments Results</h3>
                    <input
                      type="text"
                      className="form-control col-lg-4"
                      placeholder="Search Comments By Comment"
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
                            Select Comments
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
                            <h3 class="title">Select Comments</h3>
                          </div>
                          <div class="form-content">
                            <div class="row">
                              <div class="col-lg-3 responsive-column-l">
                                <div class="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-1 pb-0">
                                  <div class="d-flex pb-3 justify-content-between">
                                    <div class="info-content">
                                      <p class="info__desc">
                                        Department Comments
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
                                <div class="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-3 pb-0">
                                  <div class="d-flex pb-3 justify-content-between">
                                    <div class="info-content">
                                      <p class="info__desc">
                                        Teachers Comments
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
                                      <p class="info__desc">Courses Comments</p>
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
                                        Semesters Comments
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
                                <h3 class="title">{data.comment}</h3>
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
                                  state={{ from: data, api: "comments" }}
                                >
                                  <i class="la la-eye"></i>
                                </Link>
                                <Edit data={data} />
                                <Delete id={data._id} api={"comments"} />
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

export default Comments;
