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
      <section className="breadcrumb-area gradient-bg-gray before-none">
        <div className="breadcrumb-wrap padding-right-100px padding-left-100px">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <h2 className="sec__title text-dark">Available Courses</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="breadcrumb-list text-right">
                  <ul className="list-items">
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
      <section className="card-area pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="filter-wrap ">
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
