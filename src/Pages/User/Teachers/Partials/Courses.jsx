import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { AuthTeacher } from "../../../../Api/SpecificData/AuthUser";
const Courses = () => {
  let navigate = useNavigate();
  const [course, setCourse] = useState([]);
  console.log(course)
  useEffect(() => {
    const getData = () => {
        AuthTeacher().then(function (result) {
        setCourse([result]);
      });
    };
    getData();
  }, []);

  return (
    <div>
       <div className="top"></div>
      <section class="services section-padding" id="section_3">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-10 col-12 mx-auto">
                            <div class="section-title-wrap d-flex justify-content-center align-items-center mb-5">

                                <h2 class="text-white ms-4 mb-0">Enrolled Courses</h2>
                                
                            </div>
                            <Link to="/Enrollment">
                    <Button className="custom-btn border-0">
                      Enroll New Course
                    </Button>
                  </Link>
                            <div class="row pt-lg-5">
                            {course.map((data) =>
                        data.courseId.map((index, i) => {
                          return (
                                <div class="col-lg-6 col-12">
                                    <div class="services-thumb">
                                        <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                            <h3 class="mb-0">{index.name}</h3>

                                            <div class="services-price-wrap ms-auto">
                                                <p class="services-price-text mb-0">{i + 1}</p>
                                                <div class="services-price-overlay"></div>
                                            </div>
                                        </div>

                                        <p>{index.description}</p>
                                        <Link
                                    to={"/details/" + index._id}
                                    class="custom-btn custom-border-btn btn mt-3"
                                    state={{ from: index, api: "courses" }}
                                  >
                                  Discover More
                                  </Link>
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
