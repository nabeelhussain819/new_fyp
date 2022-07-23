import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { AuthUser } from "../../../Api/SpecificData/AuthUser";
const Courses = () => {
  let navigate = useNavigate();
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const getData = () => {
      AuthUser().then(function (result) {
        setCourse([result]);
      });
    };
    getData();
  }, []);

  return (
    <div>
      <section className="breadcrumb-area dashboard-bread ">
        <div className="breadcrumb-wrap padding-right-100px padding-left-100px">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <h2 className="sec__title text-light pt-4">Enrolled Courses</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="breadcrumb-list text-right">
                  <Link to="/Enrollment">
                    <Button className="theme-btn border-0">
                      Enroll New Course
                    </Button>
                  </Link>
                </div>
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
                    <h3 className="font-size-24 text-light">Your Enrolled Courses </h3>
                  </div>
                </div>
                <div className="table-form table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Code</th>
                        <th scope="col">Total Students</th>
                        <th scope="col">Total Teachers</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.map((data) =>
                        data.courseId.map((index, i) => {
                          return (
                            <tr>
                              <th scope="row">{i + 1}</th>
                              <td>
                                <div className="table-content">
                                  <h3 className="title">{index.name}</h3>
                                </div>
                              </td>
                              <td>{index.code}</td>
                              <td>{index.studentId.length}</td>
                              <td>{index.teacherId.length}</td>
                              <td>
                                <span className="badge badge-warning py-1 px-2">
                                  {index.studentId.length < 100
                                    ? "Less Students"
                                    : "ACTIVE"}
                                </span>
                              </td>
                              <td>
                                <div className="table-content">
                                  <Link
                                    to={"/details/" + index._id}
                                    className="border-0 bg-transparent"
                                    state={{ from: index, api: "courses" }}
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

export default Courses;
