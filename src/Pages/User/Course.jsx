import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Utilis/SearchBar";
import { ReadCourse } from "../../Api/Course";

const Courses = () => {
  let navigate = useNavigate();
  const [course, setCourse] = useState([]);

  const handleSent = (data) => {
    let path = "../department-details/" + data._id;
    navigate(path);
  };
  useEffect(() => {
    const getData = () => {
      ReadCourse().then(function (result) {
        setCourse(result);
      });
    };
    getData();
  }, []);

  return (
    <div >
      <div className="top"></div>
     <section class="services " id="section_3">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-10 col-12 mx-auto pt-4 ">
                            <div class="section-title-wrap d-flex shadow-lg    justify-content-center align-items-center mb-5">

                                <h2 class="text-white ms-4 mb-0">Courses  </h2>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <SearchBar item={course} api="courses" />
            </section>
    </div>
  );
};

export default Courses;
