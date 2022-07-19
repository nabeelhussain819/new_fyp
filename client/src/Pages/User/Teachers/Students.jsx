import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReadCourse } from "../../../Api/Course";
import StudentRatings from "./StudentRating";
import { AuthTeacherStudents } from "../../../Api/SpecificData/AuthUser";

const Students = () => {
  const [show, setShow] = useState(false);
  const [dept, setDept] = useState([]);
  const [name, setName] = useState("");
  const [teacher, setTeacher] = useState([]);
  function searchData(e) {
    let item = e.target.value;

    setName(item);
  }
  useEffect(() => {
    const getData = () => {
      AuthTeacherStudents().then(function (result) {
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
                  <h2 className="sec__title font-size-30 text-white">Students</h2>
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
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="title">Students Results</h3>

                    <div className="select-contain">
                      <div className="dropdown bootstrap-select select-contain-select"></div>
                    </div>
                  </div>
                </div>
                <div className="table-form table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">University Id</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dept.map((index) => {
                        return (
                          <>
                            {index.studentId.map((data, i) => {
                              return (
                                <tr>
                                  <th scope="row">{i + 1}</th>
                                  <td>
                                    <div className="table-content">
                                      <h3 className="title">{data.name}</h3>
                                    </div>
                                  </td>
                                  <td>{data.u_id}</td>
                                  <td>{data.email}</td>
                                  <td>{data.phone}</td>
                                  <td>
                                    <span className="badge badge-success py-1 px-2">
                                      Active
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-content">
                                      <Link
                                        to={"/details/" + data._id}
                                        className="btn-transparent btn-md p-2"
                                        state={{
                                          from: data,
                                          api: "programs",
                                        }}
                                      >
                                        <i className="la la-eye"></i>
                                      </Link>
                                      <StudentRatings data={data} />
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </>
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
