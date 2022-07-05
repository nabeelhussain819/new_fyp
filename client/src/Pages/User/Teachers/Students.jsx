import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReadCourse } from "../../../Api/Course";
import StudentRatings from "./StudentRating";

const Students = () => {
  const [show, setShow] = useState(false);
  const [dept, setDept] = useState([]);
  const [name, setName] = useState("");
  const [teacher, setTeacher] = useState([]);
  function searchData(e) {
    let item = e.target.value;

    setName(item);
  }
  useEffect(() => {
    const getData = () => {
      ReadCourse().then(function (result) {
        result.map((data)=>setTeacher(data.teacherId) )
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
                  <h2 class="sec__title font-size-30 text-white">Students</h2>
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
                  <li>Students</li>
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
                    <h3 class="title">Students Results</h3>
                  
                    <div class="select-contain">
                      <div class="dropdown bootstrap-select select-contain-select"></div>
                    </div>
                  </div>
                </div>
                <div class="table-form table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">University Id</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teacher.map((data, i) => {
                        return (
                            <> {data._id == localStorage.getItem('id') ?
                            <>{dept.map((index)=>{return(<>{index.studentId.map((data)=>{return(  <tr><th scope="row">{i + 1}</th>
                            <td>
                              <div class="table-content">
                                <h3 class="title">{data.name}</h3>
                              </div>
                            </td>
                            <td>{data.u_id}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td>
                              <span class="badge badge-success py-1 px-2">
                                Active
                              </span>
                            </td>
                            <td>
                              <div class="table-content">
                                <Link
                                  to={"/details/" + data._id}
                                  class="theme-btn theme-btn-small "
                                  state={{ from: data, api: "programs" }}
                                >
                                  <i class="la la-eye"></i>
                                </Link>
                                <StudentRatings data={data}/>
                              </div>
                            </td></tr>)})}
                          </>)})}
                                
                              </>
                             :null}
                            </>
                         
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
};

export default Students;
