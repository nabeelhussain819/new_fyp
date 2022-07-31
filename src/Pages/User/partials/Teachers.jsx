import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { AuthStudentTeacher } from "../../../Api/SpecificData/AuthUser";
const Teachers = () => {
  let navigate = useNavigate();
  const [teachers, setCourse] = useState([]);
  console.log(teachers);
  useEffect(() => {
    const getData = () => {
      AuthStudentTeacher().then(function (result) {
        setCourse(result);
      });
    };
    getData();
  }, []);

  return (
    <div> <div className="top"></div>
       <section class="services section-padding" id="section_3">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-10 col-12 mx-auto">
                            <div class="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                                <h2 class="text-white ms-4 mb-0">Enrolled Teacher</h2>
                            </div>
                          
                            <div class="row pt-lg-5">
                            {teachers.map((data) =>
                        data.teacherId.map((index, i) => {
                          return (
                                <div class="col-lg-6 col-12">
                                    <div class="services-thumb">
                                        <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                            <h3 class="mb-0">{index.name}</h3>

                                            <div class="services-price-wrap ms-auto">
                                                <div class="services-price-overlay"></div>
                                            </div>
                                        </div>
                                        <p>{index.email}</p>
                                        <p>{index.phone}</p>
                                        
                                        <Link
                                    to={"/details/" + index._id}
                                    class="custom-btn custom-border-btn btn mt-3"
                                    state={{ from: index, api: "teachers" }}
                                  >
                                <span>Discover More</span>
                                  </Link>
                                        

                                        <div class="services-icon-wrap d-flex justify-content-center align-items-center">
                                        <i class="services-icon bi-lightbulb"></i>
                                        </div>
                                    </div>
                                </div>
                          )}))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  );
};

export default Teachers;
