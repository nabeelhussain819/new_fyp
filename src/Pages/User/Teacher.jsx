import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaThList,
  FaBorderNone,
  FaEye,
  FaTrashAlt,
  FaPen,
} from "react-icons/fa";
import SearchBar from "../Utilis/SearchBar";
import { ReadProgram } from "../../Api/Program";
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
                    <h2 class="sec__title text-white">Tour Full Width</h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="breadcrumb-list text-right">
                  <ul class="list-items">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Tour</li>
                    <li>Tour Full Width</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bread-svg-box">
          <svg
            class="bread-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <polygon points="100 0 50 10 0 0 0 10 100 10"></polygon>
          </svg>
        </div>
      </section>
      <section class="card-area section--padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="filter-wrap ">
                <div className="filter-top d-flex align-items-center justify-content-between">
                  <div>
                    <h3 className="font-size-24">
                      Total Teacher Available {teacher.length}
                    </h3>
                    <p className="font-size-14 line-height-20 pt-1">
                      Select your best view
                    </p>
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
