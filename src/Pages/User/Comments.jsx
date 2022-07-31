import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReadComment } from "../../Api/Comment";
import { ReadComplain } from "../../Api/Complain";

const Comment = () => {
  const [semester, setProgram] = useState([]);
  const [name, setName] = useState("");
  function searchData(e) {
    let item = e.target.value;

    setName(item);
  }
  const getData = (api) => {
    ReadComment({ api: api }).then(function (result) {
      setProgram(result);
    });
  };
  const filterData = semester.filter((data) =>
    data.comment.toLowerCase().includes(name)
  );
  return (
    <div>
      <section className="breadcrumb-area bread-bg">
        <div className="breadcrumb-wrap padding-right-100px padding-left-100px">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <h2 className="sec__title text-white">Comments</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="breadcrumb-list text-right">
                  <ul className="list-items">
                    <li>
                      <a href="/dashboard">Dashboard</a>
                    </li>
                    <li> Comments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                        <p className="info__desc">Department Comments</p>
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
                        <p className="info__desc">Teachers Comments</p>
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
                        <p className="info__desc">Semesters Comments</p>
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
      <section className="card-area ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="filter-wrap ">
                <div className="filter-top d-flex align-items-center justify-content-between">
                  <div>
                    <h3 className="font-size-24">
                      Total Comments {semester.length}
                    </h3>
                    <input
                      type="text"
                      className="form-control col-lg-12 mb-4"
                      placeholder="Search Comments"
                      onChange={searchData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table-form table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">comment</th>
                </tr>
              </thead>
              <tbody>
                {filterData.map((data, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>
                        <div className="table-content">
                          <h3 className="title">{data.comment}</h3>
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

export default Comment;
