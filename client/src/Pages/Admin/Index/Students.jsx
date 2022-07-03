import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Allcreate from "../Create/Department";
import Edit from "../Edit/StudentEdit";
import Delete from "../Delete/Delete";
import { ReadStudent } from "../../../Api/Student";

const Students = () => {
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
      ReadStudent().then(function (result) {
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
                  <h2 class="sec__title font-size-30 text-white">Students</h2>
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
                  <li>Students</li>
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
                    <h3 class="title">Students Results</h3>
                    <input
                      type="text"
                      className="form-control col-lg-4"
                      placeholder="Search Students"
                      onChange={searchData}
                    />
                    <div class="select-contain">
                      <div class="dropdown bootstrap-select select-contain-select"></div>
                    </div>
                  </div>
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
                                <h3 class="title">{data.name}</h3>
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
                                  state={{ from: data, api: "programs" }}
                                >
                                  <i class="la la-eye"></i>
                                </Link>
                                <Edit data={data} />
                                <Delete id={data._id} api={"programs"} />
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

export default Students;
