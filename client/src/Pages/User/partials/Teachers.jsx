import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { AuthStudentTeacher } from "../../../Api/SpecificData/AuthUser";
const Teachers = () => {
  let navigate = useNavigate();
  const [teachers, setCourse] = useState([]);
  console.log(teachers);
  useEffect(() => {
    const getData = () => {
      AuthStudentTeacher().then(function (result) {
        setCourse(result);
      });
    };
    getData();
  }, []);

  return (
    <div>
      <section className="breadcrumb-area gradient-bg-gray before-none">
        <div className="breadcrumb-wrap padding-right-100px padding-left-100px">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <h2 className="sec__title text-dark">Your Teachers</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="breadcrumb-list text-right"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="card-area pt-4 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="filter-wrap ">
                <div className="filter-top d-flex align-items-center justify-content-between">
                  <div>
                    <h3 className="font-size-24">Your Enrolled Teachers </h3>
                  </div>
                </div>
                <div className="table-form table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teachers.map((data) =>
                        data.teacherId.map((index, i) => {
                          return (
                            <tr>
                              <th scope="row">{i + 1}</th>
                              <td>
                                <div className="table-content">
                                  <h3 className="title">{index.name}</h3>
                                </div>
                              </td>
                              <td>{index.email}</td>
                              <td>{index.phone}</td>
                              <td>
                                <span className="badge badge-success py-1 px-2">
                                  Active
                                </span>
                              </td>
                              <td>
                                <div className="table-content">
                                  <Link
                                    to={"/details/" + index._id}
                                    className="theme-btn theme-btn-small "
                                    state={{ from: index, api: "teachers" }}
                                  >
                                    <i className="la la-eye"></i>
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;
