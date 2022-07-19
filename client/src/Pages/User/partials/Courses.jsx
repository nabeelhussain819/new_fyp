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
      <section class="breadcrumb-area gradient-bg-gray before-none">
        <div class="breadcrumb-wrap padding-right-100px padding-left-100px">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="breadcrumb-content">
                  <div class="section-heading">
                    <h2 class="sec__title text-dark">Enrolled Courses</h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="breadcrumb-list text-right">
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
      <section class="card-area pt-4 ">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="filter-wrap ">
                <div className="filter-top d-flex align-items-center justify-content-between">
                  <div>
                    <h3 className="font-size-24">Your Enrolled Courses </h3>
                  </div>
                </div>
                <div class="table-form table-responsive">
                  <table class="table">
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
                                <div class="table-content">
                                  <h3 class="title">{index.name}</h3>
                                </div>
                              </td>
                              <td>{index.code}</td>
                              <td>{index.studentId.length}</td>
                              <td>{index.teacherId.length}</td>
                              <td>
                                <span class="badge badge-warning py-1 px-2">
                                  {index.studentId.length < 100
                                    ? "Less Students"
                                    : "ACTIVE"}
                                </span>
                              </td>
                              <td>
                                <div class="table-content">
                                  <Link
                                    to={"/details/" + index._id}
                                    class="border-0 bg-transparent"
                                    state={{ from: index, api: "courses" }}
                                  >
                                    <i class="la la-eye"></i>
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
