import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Utilis/SearchBar";
import { ReadCourse } from "../../Api/Course";

const Courses = () => {
  let navigate = useNavigate();
  const [course, setCourse] = useState([]);

  const handleSent = (data) => {
    let path = "../department-details/" + data._id;
    navigate(path);
  };
  useEffect(() => {
    const getData = () => {
      ReadCourse().then(function (result) {
        setCourse(result);
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
                    <h2 class="sec__title text-dark">Available Courses</h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="breadcrumb-list text-right">
                  <ul class="list-items">
                    <li>
                      <a href="/dashboard">Home</a>
                    </li>
                    <li>Courses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="card-area pt-4 bg-817">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="filter-wrap ">
                <div className="filter-top d-flex align-items-center justify-content-between">
                  <div>
                    <h3 className="font-size-24">
                      Total Courses Available {course.length}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SearchBar item={course} api="courses" />
        </div>
      </section>
    </div>
  );
};

export default Courses;
