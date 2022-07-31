import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { AuthUser } from "../../../Api/SpecificData/AuthUser";
const Courses = () => {
  let navigate = useNavigate();
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const getData = () => {
      AuthUser().then(function (result) {
        setCourse([result]);
      });
    };
    getData();
  }, []);

  return (
    <div> <div className="top"></div>
       <section class="services section-padding" id="section_3">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-10 col-12 mx-auto mt-4">
                            <div class="section-title-wrap shadow-lg d-flex justify-content-center align-items-center mb-5">
                                <h2 class="text-white ms-4 mb-0">Enrolled Courses</h2>
                                <Link to="/Enrollment">
                                  <Button className="bg-primary border-0 ms-4">
                                    Enroll New Course
                                  </Button>
                                </Link>
                            </div>
                          
                            <div class="row pt-lg-5">
                            {course.map((data) =>
                        data.courseId.map((index, i) => {
                          return (
                                <div class="col-lg-6 col-12">
                                    <div class="services-thumb">
                                        <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                            <h3 class="mb-0">{index.name}</h3>

                                            <div class="services-price-wrap ms-auto">
                                                <p class="services-price-text mb-0">{index.code}</p>
                                                <div class="services-price-overlay"></div>
                                            </div>
                                        </div>

                                        <p>{index.description}</p>
                                        <Link
                                    to={"/details/" + index._id}
                                    className="border-0 bg-transparent"
                                    state={{ from: index, api: "courses" }}
                                  >
                                <span class="custom-btn custom-border-btn btn mt-3">Discover More</span>
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

export default Courses;
