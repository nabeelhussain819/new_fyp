import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { AuthUser } from "../../../Api/SpecificData/AuthUser";
import myData from "../../Qec/question.json";
import Department from "./Department";
import Program from "./Program";
import Semester from "./Semester";
const Enrolled = () => {
  let navigate = useNavigate();
  const [department, setDepartment] = useState([]);
  console.log(department);
  useEffect(() => {
    const getData = () => {
        AuthUser().then(function (result) {
        setDepartment([result]);
      });
    };
    getData();
  }, []);

  return (
    <div> <div className="top"></div>
        <section class="projects section-padding" id="section_4">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-8 col-md-8 col-12 ms-auto">
                            <div class="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                                <img src="images/white-desk-work-study-aesthetics.jpg" class="avatar-image img-fluid" alt=""/>

                                <h2 class="text-white ms-4 mb-0">Enrolled</h2>
                            </div>
                        </div>

                        <div class="clearfix"></div>

                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="projects-thumb">
                                <div class="projects-info">
                                    <small class="projects-tag"><Department/></small>

                                    <h3 class="projects-title">{department.map((data)=>data.deptId.map((data)=>data.name))}</h3>
                                </div>

                                <a href="images/projects/nikhil-KO4io-eCAXA-unsplash.jpg" class="popup-image">
                                    <img src="images/projects/nikhil-KO4io-eCAXA-unsplash.jpg" class="projects-image img-fluid" alt=""/>
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="projects-thumb">
                                <div class="projects-info">
                                <small class="projects-tag"><Program/></small>

                                    <h3 class="projects-title">{department.map((data)=>data.programId.map((data)=>data.name))}</h3>
                                </div>

                                <a href="images/projects/the-5th-IQYR7N67dhM-unsplash.jpg" class="popup-image">
                                    <img src="images/projects/the-5th-IQYR7N67dhM-unsplash.jpg" class="projects-image img-fluid" alt=""/>
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="projects-thumb">
                                <div class="projects-info">
                                <small class="projects-tag"><Semester/></small>
                                    <h3 class="projects-title">Semester-{department.map((data)=>data.semesterId.map((data)=>data.name))}</h3>
                                </div>

                                <a href="images/projects/true-agency-9Bjog5FZ-oc-unsplash.jpg" class="popup-image">
                                    <img src="images/projects/true-agency-9Bjog5FZ-oc-unsplash.jpg" class="projects-image img-fluid" alt=""/>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    </div>
  );
};

export default Enrolled;
