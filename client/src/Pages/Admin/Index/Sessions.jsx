import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Edit from "../Edit/SessionEdit";
import Delete from "../Delete/Delete";
import Session from "../Create/Session";
import { ReadSession } from "../../../Api/Session";

const Sessions = () => {
  const [show, setShow] = useState(false);
  const [dept, setDept] = useState([]);
  const [name, setName] = useState("");
  function searchData(e) {
    let item = e.target.value;

    setName(item);
  }
  const filterData = dept.filter((data) =>
    data.name.toLowerCase().includes(name)
  );
  useEffect(() => {
    const getData = () => {
      ReadSession().then(function (result) {
        setDept(result);
      });
    };
    getData();
  }, []);

  return (
    <div className="dashboard-content-wrap">
      <div class="dashboard-bread dashboard--bread dashboard-bread-2">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="breadcrumb-content">
                <div class="section-heading">
                  <h2 class="sec__title font-size-30 text-white">Sessions</h2>
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
                  <li>Sessions</li>
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
                    <h3 class="title">Session Results</h3>
                    <input
                      type="text"
                      className="form-control col-lg-4"
                      placeholder="Search Sessions"
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
                            Create Session
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  {show && <Session />}
                </div>
                <div class="table-form table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Total Students</th>
                        <th scope="col">Total Teachers</th>
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
                                <h3 class="title">{data.name}</h3>
                              </div>
                            </td>
                            <td>{data.departmentId.map((data1)=>data1.name)}</td>
                            <td>{data.studentId.length}</td>
                            <td>{data.teacherId.length}</td>
                            <td>
                            <span class="badge badge-warning py-1 px-2">
                              {data.studentId.length < 100 ? "Less Students" :"ACTIVE"}
                              </span>
                            </td>
                            <td>
                              <div class="table-content">
                                <Link
                                  to={"/details/" + data._id}
                                  class="theme-btn theme-btn-small "
                                  state={{ from: data, api: "sessions" }}
                                >
                                  <i class="la la-eye"></i>
                                </Link>
                                <Edit data={data} />
                                <Delete id={data._id} api={"sessions"} />
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

export default Sessions;