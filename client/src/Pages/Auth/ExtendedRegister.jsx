import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetProgram, GetSemester, ReadDepartment,GetCourse } from "../../Api/Department";
import { GetSession } from "../../Api/Department";
import smiu from '../../Assets/smiu2.jpg'
import { ReadCourse } from "../../Api/Course";

export default function ExtendedForm() {    
    const [fullscreen, setFullscreen] = useState(false);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const [program, setProgram] = useState(false);
    const [sessionId, setSessionId] = useState(""); 
    const [deptId, setDeptId] = useState("");
    const [depart, setDepart] = useState(false);
    const [session, setSession] = useState(false);
    const [programId, setProgramId] = useState("");
    const [Semester, setSemester] = useState(false);
    const [course, setCourse] = useState(false);
    const [searchData, setSearchData] = useState("");
    const [semesterId, setSemesterId] = useState("");
    const [departApi, setDepartApi] = useState([]);
    const [sessionApi, setSessionApi] = useState([]);
    const [programApi, setProgramApi] = useState([]);
    const [semesterApi, setSemesterApi] = useState([]);
    const [courseApi, setCourseApi] = useState([]);
    const [studentId, setStudentId] = useState("");
    const [teacherId, setTeacherId] = useState("");
    console.log(studentId,teacherId,semesterId,programId,sessionId,deptId)
    function handleButton(props) {
        if (props == "depart") {
            setStudentId(localStorage.getItem("user"))
            setTeacherId( localStorage.getItem("isTeacher"))
          setDepart(true);
        } else {
          setDepart(false);
        }
        if (props == "session") {
          setSession(true);
        } else {
          setSession(false);
        }
        if (props == "program") {
          setProgram(true);
        } else {
          setProgram(false);
        }
        if (props == "semester") {
          setSemester(true);
        } else {
          setSemester(false);
        }
        if (props == "course") {
          setCourse(true);
        } else {
          setCourse(false);
        }
      }
     
      const filterData = localStorage.getItem('isTeacher') ? courseApi.filter((data) => data.name.includes(searchData)) :   courseApi
      function handleNext(data) {
        setDeptId(data);
        setDepart(false);
        setSession(true);
        getData1({ data });
      }
       
      function handleNextSession(data) {
        setSessionId(data);
        setSession(false);
        setProgram(true);
        getData2({ data });
      }
      function handleNextProgram(data) {
        setProgramId(data);
        setProgram(false);
        if(localStorage.getItem('isTeacher')){
             setCourse(true);
             getData5();
        }else{
            setSemester(true);
            getData3({ data });
        }       
        
      }
      function handleNextSemester(data) {
        setSemesterId(data);
        setSemester(false);        
        setCourse(true);   
        getData4({ data });            
        
      }
      console.log(departApi)
      const extendedRegisterUser = async (e) => {               
        const res = await fetch("https://fyptes.herokuapp.com/extendedRegister", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            studentId,
            deptId,
            sessionId,
            programId,
            semesterId,
            teacherId
          }),
        });
        const data = await res.json();
        if (res.status === 400 || !data) {
          toast.error(data.error);
        } else {     
          toast.success("register Successfully");
           navigate("/");
        }
      };
      const registerCourse = async (courseId) => {
            console.log(courseId)
        const res = await fetch("https://fyptes.herokuapp.com/add-course", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            studentId,
            courseId,
            teacherId
          }),
        });
        const data = await res.json();
        if (res.status === 400 || !data) {
          toast.error("Course is not registered Successfully");
        } else {     
          toast.success("Course registered Successfully");
          setFullscreen(true)
        }
      };

      const getData5 = () => {
        ReadCourse().then(function (result) {          
            setCourseApi(result);
        });
      };
      const getData4 = ({ data }) => {
        GetCourse({ data: data }).then(function (result) {          
            setCourseApi(result);
        });
      };
      const getData3 = ({ data }) => {
        GetSemester({ data: data }).then(function (result) {
          
          setSemesterApi(result);
        });
      };
      const getData1 = ({ data }) => {
        GetSession({ data: data }).then(function (result) {
          
          setSessionApi(result);
        });
      };
      const getData2 = ({ data }) => {
        GetProgram({ data: data }).then(function (result) {
         
          setProgramApi(result);
        });
      };
      useEffect(() => {
        const getData = () => {
          ReadDepartment().then(function (result) {
            setDepartApi(result);
          });
        };
        if(localStorage.getItem("isTeacher") || localStorage.getItem("user")){
          setShow(true)
        }
        getData();
      }, []);
    return <>
     <div class="row padding-top-70px ">
            <div class="col-lg-12 ">
              <h3 class="title font-size-24">Add Yours Services</h3>
              <hr/>
              <div class="section-tab section-tab-3 pt-4 pb-5">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <button
                      class="nav-link active"
                      id="my-hotel-tab"
                      data-toggle="tab"
                      href="#my-hotel"
                      role="tab"
                      aria-controls="my-hotel"
                      aria-selected="true"
                      onClick={() => handleButton("depart")}
                    >
                      Department
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link active"
                      id="my-tour-tab"
                      data-toggle="tab"
                      href="#my-tour"
                      role="tab"
                      aria-controls="my-tour"
                      aria-selected="false"
                      onClick={() => handleButton("session")}
                    >
                      Session
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link active"
                      id="my-activity-tab"
                      data-toggle="tab"
                      href="#my-activity"
                      role="tab"
                      aria-controls="my-activity"
                      aria-selected="false"
                      onClick={() => handleButton("program")}
                    >
                      Program
                    </button>
                  </li>
                  {!localStorage.getItem('isTeacher') ?
                      <li class="nav-item">
                    <button
                      class="nav-link active"
                      id="my-car-tab"
                      data-toggle="tab"
                      href="#my-car"
                      role="tab"
                      aria-controls="my-car"
                      aria-selected="false"
                      onClick={() => handleButton("semester")}
                    >
                      Semester
                    </button>
                  </li>:null}
              
                  <li class="nav-item">
                    <button
                      class="nav-link active"
                      id="my-flight-tab"
                      data-toggle="tab"
                      href="#my-flight"
                      role="tab"
                      aria-controls="my-flight"
                      aria-selected="false"
                      onClick={() => handleButton("course")}
                    >
                      Courses
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {depart && (
    <>
      {departApi.map((data) => {
        return (
          <div class="tab-content margin-bottom-40px" id="myTabcontent">
            <div
              class="tab-pane fade active show"
              id="my-hotel"
              role="tabpanel"
              aria-labelledby="my-hotel-tab"
            >
              <div class="my-service-list">
                <div class="card-item card-item-list">
                  <div class="card-img">
                    <a href="#" class="d-block">
                      <img src={smiu} alt="hotel-img" />
                    </a>                            
                  </div>

                  <div class="card-body">
                    <h3 class="card-title">
                      <a href="#">{data.name}</a>
                    </h3>
                    <p class="card-meta">Total Students {data.studentId.length}</p>
                    <p class="card-meta">Total teachers {data.teacherId.length}</p>
                    <p class="card-meta">Total program {data.programId.length}</p>
                  
                    <div class="card-price d-flex align-items-center justify-content-between">
                   
                      <button
                        className="theme-btn"
                        onClick={() => handleNext(data._id)}
                      >
                        Enroll Now                                
                      </button>                              
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  )}
  {session && (
   <>
   { sessionApi.map((data) => {
     return (
       <>{data == false ? null:
       <> {data.sessionId.map((index) => {
           return (
             <>
               <div
                 class="tab-content margin-bottom-40px"
                 id="myTabcontent"
               >
                 <div
                   class="tab-pane fade active show"
                   id="my-hotel"
                   role="tabpanel"
                   aria-labelledby="my-hotel-tab"
                 >
                   <div class="my-service-list">
                     <div class="card-item card-item-list">
                       <div class="card-img">
                         <a href="#" class="d-block">
                         <img src={smiu} alt="hotel-img" />
                         </a>
                         <span class="badge">{index.name}</span>
                       </div>
       
                       <div class="card-body">
                         <h3 class="card-title">
                           <a href="#">
                             {index.name}
                           </a>
                         </h3>
                         <p class="card-meta">
                         Total Students :{index.studentId.length}
                         </p>
                         <p class="card-meta">
                         Total teachers :{index.teacherId.length}
                         </p>
                         <p class="card-meta">
                         Joined At :{new Date(
                                    index.createdAt
                                  ).toLocaleDateString("en-US")}
                         </p>
                      
                         <div class="card-price d-flex align-items-center justify-content-between">
                          
                           <button
                             className="theme-btn"
                             onClick={() => handleNextSession(index._id)}
                           >
                             Enroll Now
                           </button>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </>
           );
         })}</>}
        
       </>
     );
   })}
 </>
  )}
  {program && (
    <>
    { programApi.map((data) => {
      return (
        <>{data == false ? null:
        <> {data.programId.map((index) => {
            return (
              <>
                <div
                  class="tab-content margin-bottom-40px"
                  id="myTabcontent"
                >
                  <div
                    class="tab-pane fade active show"
                    id="my-hotel"
                    role="tabpanel"
                    aria-labelledby="my-hotel-tab"
                  >
                    <div class="my-service-list">
                      <div class="card-item card-item-list">
                        <div class="card-img">
                          <a href="#" class="d-block">
                          <img src={smiu} alt="hotel-img" />
                          </a>
                          <span class="badge">{index.name}</span>
                        </div>
        
                        <div class="card-body">
                          <h3 class="card-title">
                            <a href="#">
                              {index.name}
                            </a>
                          </h3>
                          <p class="card-meta">
                          Total Students :{index.studentId.length}
                          </p>
                          <p class="card-meta">
                          Total Teachers :{index.teacherId.length}
                          </p>
                          <p class="card-meta">
                         Joined At :{new Date(
                                    index.createdAt
                                  ).toLocaleDateString("en-US")}
                         </p>
                          <div class="card-price d-flex align-items-center justify-content-between">
                            
                            <button
                              className="theme-btn"
                              onClick={() => handleNextProgram(index._id)}
                            >
                              Enroll Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}</>}
         
        </>
      );
    })}
  </>
  )}
    {Semester && (
   <>
   { semesterApi.map((data) => {
     return (
       <>{data == false ? null:
       <> {data.semesterId.map((index) => {
           return (
             <>
               <div
                 class="tab-content margin-bottom-40px"
                 id="myTabcontent"
               >
                 <div
                   class="tab-pane fade active show"
                   id="my-hotel"
                   role="tabpanel"
                   aria-labelledby="my-hotel-tab"
                 >
                   <div class="my-service-list">
                     <div class="card-item card-item-list">
                       <div class="card-img">
                         <a href="#" class="d-block">
                         <img src={smiu} alt="hotel-img" />
                         </a>
                         <span class="badge">{index.studentId.length}</span>
                       </div>
       
                       <div class="card-body">
                         <h3 class="card-title">
                           <a href="#">
                             {index.name}
                           </a>
                         </h3>
                         <p class="card-meta">
                          Total Students :{index.studentId.length}
                          </p>
                          <p class="card-meta">
                          Total Teachers :{index.teacherId.length}
                          </p>
                          <p class="card-meta">
                         Joined At :{new Date(
                                    index.createdAt
                                  ).toLocaleDateString("en-US")}
                         </p>
                         <div class="card-price d-flex align-items-center justify-content-between">
                           
                           <button
                             className="theme-btn"
                             onClick={() => handleNextSemester(index._id)}
                           >
                             Enroll Now
                           </button>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </>
           );
         })}</>}
        
       </>
     );
   })}
 </>
  )}
  {course && (
   <>
   {localStorage.getItem("isTeacher") ?<><div className="container p-4">
    <h4>Search Course</h4>
    <div className="card">
    <input type="text" placeholder="Search Courses By Name" onChange={(e) => setSearchData(e.target.value)} className="form-control" />
    </div>
    </div></>   : null}
  
   { filterData.map((data) => {
     return (
       <>{localStorage.getItem("isTeacher") ?  <>
       
       <div
         class="tab-content margin-bottom-40px"
         id="myTabcontent"
       >
         <div
           class="tab-pane fade active show"
           id="my-hotel"
           role="tabpanel"
           aria-labelledby="my-hotel-tab"
         >
           <div class="my-service-list">
             <div class="card-item card-item-list">
               <div class="card-img">
                 <a href="#" class="d-block">
                 <img src={smiu} alt="hotel-img" />
                 </a>
                 <span class="badge">{data.name}</span>
               </div>

               <div class="card-body">
                 <h3 class="card-title">
                   <a href="#">
                     {data.name}
                   </a>
                 </h3>
                 <p class="card-meta">
                          Total Students :{data.studentId.length}
                          </p>
                          <p class="card-meta">
                          Total Teachers :{data.teacherId.length}
                          </p>
                          <p class="card-meta">
                         Joined At :{new Date(
                                    data.createdAt
                                  ).toLocaleDateString("en-US")}
                         </p>
               
                 <div class="card-price d-flex align-items-center justify-content-between">
                  
                   <button
                     className="theme-btn"
                     onClick={() => registerCourse(data._id)}
                   >
                     Enroll Now
                   </button>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </> : <> {data == false ? null:
       <> {data.courseId.map((index) => {
           return (
             <>
               <div
                 class="tab-content margin-bottom-40px"
                 id="myTabcontent"
               >
                
                 <div
                   class="tab-pane fade active show"
                   id="my-hotel"
                   role="tabpanel"
                   aria-labelledby="my-hotel-tab"
                 >
                   <div class="my-service-list">
                     <div class="card-item card-item-list">
                       <div class="card-img">
                         <a href="#" class="d-block">
                         <img src={smiu} alt="hotel-img" />
                         </a>
                         <span class="badge"> {index.name}</span>
                       </div>
       
                       <div class="card-body">
                         <h3 class="card-title">
                           <a href="#">
                             {index.name}
                           </a>
                         </h3>
                         <p class="card-meta">
                          Total Students :{data.studentId.length}
                          </p>
                          <p class="card-meta">
                          Total Teachers :{data.teacherId.length}
                          </p>
                          <p class="card-meta">
                         Joined At :{new Date(
                                    data.createdAt
                                  ).toLocaleDateString("en-US")}
                         </p>
                        
                         <div class="card-price d-flex align-items-center justify-content-between">
                          
                           <button
                             className="theme-btn"
                             onClick={() => registerCourse(index._id)}
                           >
                             Enroll Now
                           </button>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </>
           );
         })}</>}</>} 
     
        
       </>
     );
   })}
 </>
  )}
  {fullscreen && <button
    class="theme-btn col-lg-12"
    
    onClick={() => extendedRegisterUser()}
  >
    Done!
  </button>}
      
    </>
}