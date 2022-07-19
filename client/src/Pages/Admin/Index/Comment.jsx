import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <div className="dashboard-bread dashboard--bread dashboard-bread-2">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="breadcrumb-content">
                <div className="section-heading">
                  <h2 className="sec__title font-size-30 text-white">Comments</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="breadcrumb-list text-right">
                <ul className="list-items">
                  <li>
                    <Link to="/" className="text-white">
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
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="title">Comments Results</h3>
                    <input
                      type="text"
                      className="form-control col-lg-4"
                      placeholder="Search Comments By Comment"
                      onChange={searchData}
                    />
                    <div className="select-contain">
                      <div className="dropdown bootstrap-select select-contain-select">
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
                      <div className="container-fluid">
                        <div className="dashboard-card">
                          <div className="">
                            <h3 className="title">Select Comments</h3>
                          </div>
                          <div className="form-content">
                            <div className="row">
                              <div className="col-lg-3 responsive-column-l">
                                <div className="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-1 pb-0">
                                  <div className="d-flex pb-3 justify-content-between">
                                    <div className="info-content">
                                      <p className="info__desc">
                                        Department Comments
                                      </p>
                                    </div>
                                    <button
                                      className="bg-transparent border-0 p-0"
                                      onClick={() => getData("departments")}
                                    >
                                      <div className="info-icon icon-element bg-white text-color-5">
                                        <i className="la la-home"></i>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-3 responsive-column-l">
                                <div className="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-3 pb-0">
                                  <div className="d-flex pb-3 justify-content-between">
                                    <div className="info-content">
                                      <p className="info__desc">
                                        Teachers Comments
                                      </p>
                                    </div>

                                    <button
                                      className="bg-transparent border-0 p-0"
                                      onClick={() => getData("teachers")}
                                    >
                                      <div className="info-icon icon-element bg-white text-color-5">
                                        <i className="la la-users"></i>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3 responsive-column-l">
                                <div className="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-4 pb-0">
                                  <div className="d-flex pb-3 justify-content-between">
                                    <div className="info-content">
                                      <p className="info__desc">Courses Comments</p>
                                    </div>

                                    <button
                                      className="bg-transparent border-0 p-0"
                                      onClick={() => getData("courses")}
                                    >
                                      <div className="info-icon icon-element bg-white text-color-5">
                                        <i className="la la-book"></i>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3 responsive-column-l">
                                <div className="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-5 pb-2">
                                  <div className="d-flex pb-3 justify-content-between">
                                    <div className="info-content">
                                      <p className="info__desc">
                                        Semesters Comments
                                      </p>
                                    </div>
                                    <button
                                      className="bg-transparent border-0 p-0"
                                      onClick={() => getData("semesters")}
                                    >
                                      <div className="info-icon icon-element bg-white text-color-5">
                                        <i className="la la-dashboard"></i>
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
                <div className="table-form table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Comment</th>
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
                              <div className="table-content">
                                <h3 className="title">{data.comment}</h3>
                              </div>
                            </td>
                            <td>
                              <span className="badge badge-success py-1 px-2">
                                Active
                              </span>
                            </td>
                            <td>
                              <div className="table-content">
                                <Link
                                  to={"/details/" + data._id}
                                  className="bg-transparent border-0 p-1 "
                                  state={{ from: data, api: "comments" }}
                                >
                                  <i className="la la-eye"></i>
                                </Link>

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
