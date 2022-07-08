import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Utilis/SearchBar";
import { ReadTeacher } from "../../Api/Teacher";
const Teacher = () => {
  let navigate = useNavigate();
  const [teacher, setTeacher] = useState([]);

  const handleSent = (data) => {
    let path = "../department-details/" + data._id;
    navigate(path);
  };
  useEffect(() => {
    const getData = () => {
      ReadTeacher().then(function (result) {
        setTeacher(result);
      });
    };
    getData();
  }, []);

  return (
    <div>
      <section class="breadcrumb-area bread-bg">
        <div class="breadcrumb-wrap padding-right-100px padding-left-100px">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="breadcrumb-content">
                  <div class="section-heading">
                    <h2 class="sec__title text-white">Available Teachers</h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="breadcrumb-list text-right">
                  <ul class="list-items">
                    <li>
                      <a href="/dashboard">Home</a>
                    </li>
                    <li>Teachers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="bread-svg-box">
        <svg class="hero-svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path></svg>
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
                      Total Teacher Available {teacher.length}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SearchBar item={teacher} api="teachers" />
        </div>
      </section>
    </div>
  );
};

export default Teacher;
