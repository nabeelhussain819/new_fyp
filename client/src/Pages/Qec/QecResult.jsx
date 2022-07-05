import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReadQec } from "../../Api/Qec";

function QecResult(props) {
    const [show, setShow] = useState(false);
    const [dept, setDept] = useState([]);
    const [name, setName] = useState("");
    function searchData(e) {
      let item = e.target.value;
      setName(item);
    }
    const filterData = dept
    useEffect(() => {
      const getData = () => {
        ReadQec().then(function (result) {
          setDept(result);
        });
      };
      getData();
    }, []);
    return (
        <div className="dashboard-content-wrap">
        <div class="dashboard-bread dashboard--bread dashboard-bread-2">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="breadcrumb-content">
                  <div class="section-heading">
                    <h2 class="sec__title font-size-30 text-white">QEC</h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="breadcrumb-list text-right">
                  <ul class="list-items">
                    <li>
                      <Link to="/" class="text-white">
                        Home
                      </Link>
                    </li>
                    <li>Dashboard</li>
                    <li>QEC</li>
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
                    <div class="d-flex align-items-center justify-content-between">
                      <h3 class="title">QEC Results</h3>
                 
                    </div>
                  </div>
                  <div class="table-form table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">Term </th>
                          <th scope="col">Rating</th>
                          <th scope="col">to</th>
                          <th scope="col">Course</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData.map((data, i) => {
                          return (
                            <tr>
                             {(data.teacherId.map((data)=>data._id) == localStorage.getItem('id')) ? <> <th scope="row">{i + 1}</th>
                              <td>
                                <div class="table-content">
                                  <h3 class="title">{data.term} </h3>
                                </div>
                              </td>
                              <td>{data.rating}</td>
                              <td>{data.teacherId.map((data)=>data.name)}</td>
                              <td>{data.courseId.map((data)=>data.name)}</td>
                              <td>
                              <span class="badge badge-warning py-1 px-2">
                                {data.rating < 20 ? "not Good" :"GOOD"}
                                </span>
                              </td></>: null}
                             
                            </tr>
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
}

export default QecResult;