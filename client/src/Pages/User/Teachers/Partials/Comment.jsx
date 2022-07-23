import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import { AuthTeacherComment } from "../../../../Api/SpecificData/AuthUser";
const Courses = () => {
  let navigate = useNavigate();
  const [course, setCourse] = useState([]);
  console.log(course)
  useEffect(() => {
    const getData = () => {
        AuthTeacherComment().then(function (result) {
        setCourse(result);
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
                    <h2 className="sec__title text-light pt-4">Comments Related To You</h2>
                  </div>
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
                    <h3 className="font-size-24 text-light">Comments Related To You</h3>
                  </div>
                </div>
                <div className="table-form table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Comment</th>
                        <th scope="col">Student</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.map((data,i) =>
                     
                            <tr>
                              <th scope="row">{i + 1}</th>
                              <td>
                                <div className="table-content">
                                  <h3 className="title">{data.comment}</h3>
                                </div>
                              </td>
                              <td>{data.studentId.map((data)=>data.name)}</td>
                              <td>
                                <span className="badge badge-warning py-1 px-2">
                                  {data.value < 5
                                    ? "Excellent"
                                    : "Good"}
                                </span>
                              </td>
                            </tr>
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
