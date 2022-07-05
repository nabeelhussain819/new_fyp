import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {  GetSpecificCourse } from "../../Api/Department";
import { ReadQec } from "../../Api/Qec";
import { AuthStudent } from "../../Api/Student";
const CourseEvaluate = () => {
  const [course, setCourse] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [qecCourse, setQec] = useState([]);
  const [show, setShow] = useState(false);
  const [term, setTerm] = useState('');
  const getChange = (data) => {     
    setCourseId(data)
    getData4({data})
  
  };
  const getChange1 = (data) => {     
    setTeacherId(data)
    setShow(true)
  };
  const getData4 = ({ data }) => {
    GetSpecificCourse({ data: data }).then(function (result) {          
        setTeacher(result);
    });
  };
 
  useEffect(() => {
    const getData = () => {
        AuthStudent().then(function (result) {
            setCourse(result);
        });
      };
      const getQecCourse = () => {
        ReadQec().then(function (result) {          
            setQec(result);
        });
      };
      getQecCourse()
      getData();
  }, []);
  return (
    <div>
    <section class="hero-wrapper hero-wrapper4">
     <div class="hero-box hero-bg-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="hero-content mt-0">
                        <div class="section-heading">
                            <h2 class="sec__title">Evaluate! <br/> Your Teacher And Course</h2>
                            <p class="sec__desc pt-3 font-size-18">Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                        </div>
                    </div>               
                </div>
                <div class="col-lg-5">
                    <div class="search-fields-container search-fields-container-shape">
                        <div class="search-fields-container-inner">
                            <h3 class="title pb-3">Let's Find Your Ideal Car</h3>
                            <div class="section-block"></div>
                            <div class="contact-form-action pt-3">
                                <form action="#" class="row">
                                
                                    <div class="col-lg-12 col-sm-7">
                                        <div class="input-box">
                                            <label class="label-text">Select Courses</label>
                                            <div class="form-group">
                                                <span class="la la-calendar form-icon"></span>
                                                <select class="select-contain-select form-control" tabindex="-98"  onChange={(e) => getChange(e.target.value)}>
                                                {course.map((data)=> {return (<> 
                                                        {data == false ? null:
                                                <><option >Select One</option> {data.courseId.map((index) => {
                                                    return (
                                                        <>{index.isCourse == localStorage.getItem('id') ? <option disabled>Done</option> : <option value={index._id}>{index.name}</option>
                                                        
                                                        }
                                                        
                                                           
                                                        </>)})}</>}
                                                    
                                                    </>)})}  
                                                        </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-sm-7">
                                        <div class="input-box">
                                            <label class="label-text">Select Term</label>
                                            <div class="form-group">
                                                <span class="la la-calendar form-icon"></span>
                                                <select class="select-contain-select form-control" tabindex="-98" onChange={(e) => setTerm(e.target.value)}>
                                                <option >Select One</option>
                                                <option value="Mid">Mid Term</option>
                                                <option value="Mid">Final Term</option>
                                                        </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-sm-7">
                                        <div class="input-box">
                                            <label class="label-text">Select Teachers</label>
                                            <div class="form-group">
                                                <span class="la la-calendar form-icon"></span>
                                                <select class="select-contain-select form-control" tabindex="-98" onChange={(e) => getChange1(e.target.value)}>
                                                {teacher.map((data)=> {return (<> 
                                                        {data == false ? null:
                                                <> <option >Select One</option>{data.teacherId.map((index) => {
                                                    return (
                                                        <>
                                                        
                                                            <option value={index._id}>{index.name}</option>
                                                        </>)})}</>}
                                                    
                                                    </>)})}  
                                                        </select>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </form>
                            </div>
                            {show && <div class="btn-box pt-3">
                            <Link
                                  to={"/evaluation" }
                                  class="theme-btn theme-btn-small"
                                  state={{ courseId: courseId, teacherId: teacherId, term:term}}
                                >
                                  Evaluate Now!
                                </Link>
                            </div>}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <svg class="hero-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
            <polygon points="100 10 100 0 0 10"></polygon>
        </svg>
    </div>
</section>
    </div>
  );
};

export default CourseEvaluate;