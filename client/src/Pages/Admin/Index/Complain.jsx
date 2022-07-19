import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Delete from "../Delete/Delete";
import { ReadComplain } from "../../../Api/Complain";
import Replay from "../Edit/ComplainReply";

const Complains = () => {
  const [dept, setDept] = useState([]);
  const [name, setName] = useState("");
  function searchData(e) {
    let item = e.target.value;

    setName(item);
  }
  const filterData = dept.filter((data) =>
    data.complain.toLowerCase().includes(name)
  );

  const getData = () => {
    ReadComplain().then(function (result) {
      setDept(result);
    });
  };
  useEffect(() => {
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
                  </div>
                </div>
                <div class="table-form table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Complain</th>
                        <th scope="col">Issue</th>
                        <th scope="col">Department</th>
                        <th scope="col">Course</th>
                        <th scope="col">Student</th>
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
                            <td>{data.issue}</td>
                            {data.departId ? (
                              <td>{data.departId.map((data) => data.name)}</td>
                            ) : (
                              <td>Not Found</td>
                            )}
                            {data.courseId ? (
                              <td>{data.courseId.map((data) => data.name)}</td>
                            ) : (
                              <td>Not Found</td>
                            )}
                            <td>{data.studentId.map((data) => data.name)}</td>
                            <td>
                              {data.reply ? (
                                <span class="badge badge-success py-1 px-2">
                                  Resolved
                                </span>
                              ) : (
                                <span class="badge badge-warning py-1 px-2">
                                  Un Resolved
                                </span>
                              )}
                            </td>

                            <td>
                              <div class="table-content">
                                <Link
                                  to={"/details/" + data._id}
                                  class="bg-transparent border-0"
                                  state={{ from: data, api: "complains" }}
                                >
                                  <i class="la la-eye"></i>
                                </Link>
                                {data.complain ? (
                                  <Replay
                                    id={data._id}
                                    data={data}
                                    api={"complains"}
                                  />
                                ) : (
                                  <Delete id={data._id} api={"complains"} />
                                )}
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
