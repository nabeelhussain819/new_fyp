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
const Program = () => {
  let navigate = useNavigate();
  const [program, setProgram] = useState([]);

  const handleSent = (data) => {
    let path = "../department-details/" + data._id;
    navigate(path);
  };
  useEffect(() => {
    const getData = () => {
      ReadProgram().then(function (result) {
        setProgram(result);
      });
    };
    getData();
  }, []);

  return (
    <div>
      <section className="breadcrumb-area bread-bg">
        <div className="breadcrumb-wrap padding-right-100px padding-left-100px">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="breadcrumb-content">
                  <div className="section-heading">
                    <h2 className="sec__title text-white">Available Programs</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="breadcrumb-list text-right">
                  <ul className="list-items">
                    <li>
                      <a href="/dashboard">Home</a>
                    </li>
                    <li>Programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
           <div className="bread-svg-box">
        <svg className="hero-svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path></svg>
        </div>
        </div>
       
      </section>
      <section className="card-area pt-4 bg-817">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="filter-wrap ">
                <div className="filter-top d-flex align-items-center justify-content-between">
                  <div>
                    <h3 className="font-size-24">
                      Total Program Available {program.length}
                    </h3>
                    <p className="font-size-14 line-height-20 pt-1">
                      Select your best view
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SearchBar item={program} api="programs" />
        </div>
      </section>
    </div>
  );
};

export default Program;
