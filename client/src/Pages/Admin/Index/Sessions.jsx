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
      <div className="dashboard-bread dashboard--bread dashboard-bread-2">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="breadcrumb-content">
                <div className="section-heading">
                  <h2 className="sec__title font-size-30 text-white">Sessions</h2>
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
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="title">Session Results</h3>
                    <input
                      type="text"
                      className="form-control col-lg-4"
                      placeholder="Search Sessions"
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
                            Create Session
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  {show && <Session />}
                </div>
                <div className="table-form table-responsive">
                  <table className="table">
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
                              <div className="table-content">
                                <h3 className="title">{data.name}</h3>
                              </div>
                            </td>
                            <td>
                              {data.departmentId.map((data1) => data1.name)}
                            </td>
                            <td>{data.studentId.length}</td>
                            <td>{data.teacherId.length}</td>
                            <td>
                              <span className="badge badge-warning py-1 px-2">
                                {data.studentId.length < 100
                                  ? "Less Students"
                                  : "ACTIVE"}
                              </span>
                            </td>
                            <td>
                              <div className="table-content">
                                <Link
                                  to={"/details/" + data._id}
                                  className="bg-transparent border-0 p-1"
                                  state={{ from: data, api: "sessions" }}
                                >
                                  <i className="la la-eye"></i>
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
