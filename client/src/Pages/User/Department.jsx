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
import { ReadDepartment } from "../../Api/Department";
const Department = () => {
  let navigate = useNavigate();
  const [dept, setDept] = useState([]);
  useEffect(() => {
    const getData = () => {
      ReadDepartment().then(function (result) {
        setDept(result);
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
                    <h2 className="sec__title text-white">Departments</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="breadcrumb-list text-right">
                  <ul className="list-items">
                    <li>
                      <a href="/dashboard">Home</a>
                    </li>
                    <li>Departments</li>
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
                      Total Departments Available
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SearchBar item={dept} api="departments" />
        </div>
      </section>
    </div>
  );
};

export default Department;
