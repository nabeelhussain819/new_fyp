import React, { useState, useEffect } from "react";
import { Link,Navigate, useNavigate } from "react-router-dom";
import { GetSpecificCourse } from "../../Api/Department";
import { ReadSetting } from "../../Api/Qec";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthQec, AuthStudentTeacher,AuthNonEvaluateCourse,AuthUser } from "../../Api/SpecificData/AuthUser";
const CourseEvaluate = () => {
  const [course, setCourse] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [qecCourse, setQec] = useState([]);
  const [qecCourse1, setQec1] = useState([]);
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);
  const [term, setTerm] = useState("");
  const [termV, setTermV] = useState("");
  const navigate = useNavigate()
  const same = qecCourse1.map((item)=>item._id )
  console.log(term)
  const getChange = (data) => { 
    const jack = same.filter((item)=>item.includes(data))
    if(jack.length > 0 ){
      toast.warning("You Cannot Evaluate An Evaluated Course")
      toast.info("Please Select A Course Which is not Evaluated")
    }else{
      if(user.semesterId.map((data)=> data.name) == 1){
        toast.warning("You Cannot Evaluate A Course ")
        toast.info("1st Semester Student Cannot Evaluate!")
      }else{
        setCourseId(data);
      getData4({ data });
      }
   
    }
  };
  const getChange1 = (data) => {
    setTeacherId(data);
    setShow(true);
  };
  const getData4 = ({ data }) => {
    GetSpecificCourse({ data: data }).then(function (result) {
      setTeacher(result);
    });
  };

  useEffect(() => {
    const getData = () => {
      AuthStudentTeacher().then(function (result) {
        setCourse(result);
      });
    };
    const getQecCourse = () => {
      AuthQec().then(function (result) {
        setQec(result);
      });
      AuthUser().then(function (result) {
        setUser(result);
      });
      AuthNonEvaluateCourse().then(function (result) {
        setQec1(result);
      });
      ReadSetting().then(function (result) {
        const sms= result.map((data)=>JSON.stringify(data.Evaluate))
        
        if(sms.includes('false')){
         toast.info("You Cannot Evaluate Now!");
         navigate('/qec')
        }
        setTermV(result.map((data)=>data.Term))
       });
    };
    getQecCourse();
    getData();
  }, []);
  return (
    <div className="bread-bg">
      <section className="hero-wrapper bread-bg pb-4">
        <div className="pb-0">
          <div className="container pt-4">
            <div className="col-lg-12 pt-4">
              <div className="hero-content pb-5 pt-4">
                <div className="section-heading">
                  <p className="sec__desc pb-2">Evaluation Form</p>
                  <h2 className="sec__title">
                    Are You Ready To Evaluate? <br /> Select Course & Teacher To
                    Evaluate
                  </h2>
                </div>
              </div>
              <div className="search-fields-container">
                <div className="contact-form-action">
                  <form action="#" className="row">
                    <div className="col-lg-4 pr-0">
                      <div className="input-box">
                        <label className="label-text">
                          Select Enrolled Course{" "}
                        </label>
                        <div className="form-group">
                          <span className="la la-map-marker form-icon"></span>
                          <select
                            className="select-contain-select form-control"
                            tabindex="-98"
                            onChange={(e) => getChange(e.target.value)}
                          >
                            <option>Select One</option>

                            {course.map((data) => {
                              return (
                                <>
                                  <option value={data._id} name={data.name}>
                                    {data.name} {qecCourse1.map((item)=>item._id == data._id && "Done!" )}
                                  </option>
                                </>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 pr-0">
                      <div className="input-box">
                        <label className="label-text">Select Term</label>
                        <div className="form-group">
                          <span className="la la-calendar form-icon"></span>
                          <select
                            className="select-contain-select form-control"
                            tabindex="-98"
                            onChange={(e) => setTerm(e.target.value)}
                          >
                            <option>Select One</option>
                            
                                <option value={termV}>{termV}</option>
                            
                            
                            
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 pr-0">
                      <div className="input-box">
                        <label className="label-text">Select Teachers</label>
                        <div className="form-group">
                          <span className="la la-calendar form-icon"></span>
                          <select
                            className="select-contain-select form-control"
                            tabindex="-98"
                            onChange={(e) => getChange1(e.target.value)}
                          >
                            {teacher.map((data) => {
                              return (
                                <>
                                  {data == false ? null : (
                                    <>
                                      <option>Select One</option>
                                      {data.teacherId.map((index) => {
                                        return (
                                          <>
                                            <option value={index._id}>
                                              {index.name}
                                            </option>
                                          </>
                                        );
                                      })}
                                    </>
                                  )}
                                </>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    </div>
                  </form>
                  {show && (
                    <div className="btn-box pt-3">
                      <Link
                        to={"/qec-evaluate"}
                        className="theme-btn theme-btn-small"
                        state={{
                          courseId: courseId,
                          teacherId: teacherId,
                          term: term,
                        }}
                      >
                        Evaluate Now!
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default CourseEvaluate;
