import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {  GetSpecificCourse } from "../../Api/Department";
import { ReadQec } from "../../Api/Qec";
import { AuthStudent } from "../../Api/Student";
import img from '../../Assets/img21.jpg'
import spr1 from '../../Assets/img22.jpg'
import spr from '../../Assets/img23.jpg'
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
    <div className="">
<section class="breadcrumb-area gradient-bg-gray before-none">
    <div class="breadcrumb-wrap">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div class="breadcrumb-content">
                        <div class="section-heading">
                            <p class="sec__desc pb-2">124 roles in 44 locations</p>
                            <h2 class="sec__title font-size-45">What's Your Next <br/> Destination?</h2>
                        </div>
                        <div class="btn-box padding-top-35px">
                            <a href="#job-area" class="theme-btn">Explore Roles</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="image-box image-box-layout-2">
                        <a class="img__item img__item-1 shadow hover-y" data-fancybox="gallery" href="images/img21.jpg" data-caption="Showing image 1">
                            <img src={img} class="w-100 h-100 radius-round-full" alt=""/>
                        </a>
                        <a class="img__item img__item-2 shadow hover-y" data-fancybox="gallery" href="images/img22.jpg" data-caption="Showing image 2">
                            <img src={spr1} class="w-100 h-100 radius-round-full" alt=""/>
                        </a>
                        <a class="img__item img__item-3 shadow hover-y" data-fancybox="gallery" href="images/img23.jpg" data-caption="Showing image 3">
                            <img src={spr} class="w-100 h-100 radius-round-full" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bread-svg-box">
        <svg class="bread-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none"><polygon points="100 0 50 10 0 0 0 10 100 10"></polygon></svg>
    </div>
</section>
<div class="col-lg-11">
                   <div class="search-fields-container search-fields-container-shape shadow-lg">
                       <div class="search-fields-container-inner ">
                           <h3 class="title pb-3">Find Your Courses And Teachers</h3>
                           <div class="section-block"></div>
                           <div class="contact-form-action pt-3 ">
                               <form action="#" class="row">
                               <div class="col-lg-4 col-sm-6 pr-0">
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
                                   <div class="col-lg-4 col-sm-6 pr-0">
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
                                   <div class="col-lg-4 col-sm-6 pr-0">
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
                                 to={"/qec-evaluate" }
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
  );
};

export default CourseEvaluate;