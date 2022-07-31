import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import CarouselItem from "./Utilis/Carousel";
import img from "../Assets/smiu-logo.png";
import ser from "../Assets/service.jpg";
import { ReadDepartment } from "../Api/Department";
import { ReadProgram } from "../Api/Program";
import { ReadTeacher } from "../Api/Teacher";
import { ReadCourse } from "../Api/Course";
import MapContainer from "../Components/Map";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Home = () => {
  const [dept, setDept] = useState([]);
  const [program, setProgram] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [course, setCourse] = useState([]);
  let navigate = useNavigate();

  const sentDepartment = (data) => {};
  const sentProgram = (data) => {
    console.log(data);
    let path = "../details/" + data;
    navigate(path);
  };
console.log(dept.length)
  useEffect(() => {
    const getDepartment = () => {
      ReadDepartment().then(function (result) {
        setDept(result);
      });
    };

    const getProgram = async () => {
      ReadProgram().then(function (result) {
        setProgram(result);
      });
    };

    const getTeacher = async () => {
      ReadTeacher().then(function (result) {
        setTeacher(result);
      });
      ReadCourse().then(function (result) {
        setCourse(result);
      });
    };

    getDepartment();
    getProgram();
    getTeacher();
  }, []);

  return (
    <>
      <CarouselItem />
     
      <section class="about section-padding" id="section_2">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-12">
                        
                        <p>Quality enhancement in higher education is a process of building stakeholders' confidence that fulfils expectations as well as minimum requirements of education, learning and research. Quality assurance is the term covering all the policies, processes, procedures and actions through which quality of higher education is not simply maintained, but developed and enhanced.</p>
                            <p>Sindh Madressatul Islam University has prime focus on quality education and a strong emphasis on high standards of teaching, learning, research and overall institutional quality. Through systematic mechanism of monitoring and evaluation. Accreditation and Quality Enhancement Cell, in line with the standards set by Higher Education Commission,</p>
                        </div>

                        <div class="col-lg-6 col-12 mt-5 mt-lg-0">
                            <div class="about-thumb">

                                <div class="section-title-wrap shadow-lg  d-flex justify-content-end align-items-center mb-4">
                                    <h2 class="text-white me-4 mb-0">T&SE With SMIU</h2>

                                    <img src={img} class="avatar-image img-fluid" alt=""/>
                                </div>

                                <h3 class="pt-2 mb-3">A little bit about SMIU</h3>

                                <p>Sindh Madressatul Islam University is a chartered University, duly recognized by the Higher Education Commission (HEC) of Pakistan. It is one of the oldest institutions in South Asia. The Founder of Pakistan, Quaid-e-Azam Mohammad Ali Jinnah, studied at this institution for about four and a half years from 1887-92</p>
                            </div>
                        </div>

                    </div>
                </div>
          </section>
      <section class="clients shadow-lg section-padding">
                <div class="container">
                    <div class="row align-items-center">

                        <div class="col-lg-12 col-12">
                        <h2 className="sec__title  font-size-50 line-height-60">
                  Prof. Dr. Mujeeb-U-Ddin Sahrai Memon Vice Chancellor
                </h2>
                <p className="sec__desc  pt-3">
                  It gives natural vibrations to my hands and sensations to my
                  mind when to write about this august university i.e. Sindh
                  Madressatul Islam University, Karachi. This is the institute
                  credited with production of wise persons, visionary leaders,
                  freedom fighters, educationists and founders, viz:
                  Quaid-e-Azam Mohammad Ali Jinnah, Sir Shahnawaz Bhutto, Sir
                  Abdullah Haroon, Sir Ghulam Hussain Hidayatullah, Khan Bahadur
                  Mohammad Ayub Khuhro, Allama I.I. Kazi, Allama Umer Bin
                  Mohammad Doudpota, Hanif Muhammad and to my groomer i.e. my
                  father father Taj Muhammad Sahrai.​
                </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="services section-padding" id="section_3">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-10 col-12 mx-auto">
                            <div class="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                                <img src={ser} class="avatar-image img-fluid" alt=""/>

                                <h2 class="text-white ms-4 mb-0">Services</h2>
                            </div>

                            <div class="row pt-lg-5">
                                <div class="col-lg-6 col-12">
                                    <div class="services-thumb">
                                        <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                            <h3 class="mb-0">Departments</h3>

                                            <div class="services-price-wrap ms-auto">
                                                <p class="services-price-text mb-0">{dept.length}</p>
                                                <div class="services-price-overlay"></div>
                                            </div>
                                        </div>

                                        <p>You Can See Many Department Available Here.</p>

                                        <Link to="/department" class="custom-btn custom-border-btn btn mt-3">Discover More</Link>

                                        <div class="services-icon-wrap d-flex justify-content-center align-items-center">
                                            <i class="services-icon bi-globe"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-12">
                                    <div class="services-thumb services-thumb-up">
                                        <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                            <h3 class="mb-0">Programs</h3>

                                            <div class="services-price-wrap ms-auto">
                                                <p class="services-price-text mb-0">{program.length}</p>
                                                <div class="services-price-overlay"></div>
                                            </div>
                                        </div>

                                        <p>You can explore more CSS templates on TemplateMo website by browsing through different tags.</p>

                                        <Link to="/program" class="custom-btn custom-border-btn btn mt-3">Discover More</Link>

                                        <div class="services-icon-wrap d-flex justify-content-center align-items-center">
                                            <i class="services-icon bi-lightbulb"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-12">
                                    <div class="services-thumb">
                                        <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                            <h3 class="mb-0">Teachers</h3>

                                            <div class="services-price-wrap ms-auto">
                                                <p class="services-price-text mb-0">{teacher.length}</p>
                                                <div class="services-price-overlay"></div>
                                            </div>
                                        </div>

                                        <p>If you need a customized ecommerce website for your business, feel free to discuss with me.</p>

                                        <Link to="/teacher" class="custom-btn custom-border-btn btn mt-3">Discover More</Link>

                                        <div class="services-icon-wrap d-flex justify-content-center align-items-center">
                                            <i class="services-icon bi-phone"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-12">
                                    <div class="services-thumb services-thumb-up">
                                        <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                            <h3 class="mb-0">Courses</h3>

                                            <div class="services-price-wrap ms-auto">
                                                <p class="services-price-text mb-0">{course.length}</p>
                                                <div class="services-price-overlay"></div>
                                            </div>
                                        </div>

                                        <p>To list your website first on any search engine, we will work together. First Portfolio is one-page CSS Template for free download.</p>

                                        <Link to="/course" class="custom-btn custom-border-btn btn mt-3">Discover More</Link>

                                        <div class="services-icon-wrap d-flex justify-content-center align-items-center">
                                            <i class="services-icon bi-google"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact section-padding" id="section_5">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-3 col-md-6 col-12 pe-lg-0">
                                <div class="contact-info contact-info-border-start d-flex flex-column">
                                    <strong class="site-footer-title d-block mb-3">Links</strong>

                                    <ul class="footer-menu">
                                        <li class="footer-menu-item"><a href="#" class="footer-menu-link">Courses</a></li>

                                        <li class="footer-menu-item"><a href="#" class="footer-menu-link">Teachers</a></li>

                                        <li class="footer-menu-item"><a href="#" class="footer-menu-link">Department</a></li>

                                        <li class="footer-menu-item"><a href="#" class="footer-menu-link">Program</a></li>
                                    </ul>

                                    <strong class="site-footer-title d-block mt-4 mb-3">Stay connected</strong>

                                    <ul class="social-icon">
                                        <li class="social-icon-item"><a href="https://twitter.com/" class="social-icon-link bi-twitter"></a></li>

                                        <li class="social-icon-item"><a href="#" class="social-icon-link bi-instagram"></a></li>

                                        <li class="social-icon-item"><a href="#" class="social-icon-link bi-pinterest"></a></li>

                                        <li class="social-icon-item"><a href="https://www.youtube.com/" class="social-icon-link bi-youtube"></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 ps-lg-0">
                                <div class="contact-info d-flex flex-column">
                                    <strong class="site-footer-title d-block mb-3">About</strong>

                                    <p class="mb-2">
                                        Teacher And Student Evaluation System For Sindh MadressatulIslam University
                              </p>

                                    <strong class="site-footer-title d-block mt-4 mb-3">Email</strong>

                                    <p>
                                        <a href="admission@smiu.edu.pk">
                                            admission@smiu.edu.pk
                                        </a>
                                    </p>

                                    <strong class="site-footer-title d-block mt-4 mb-3">Call</strong>

                                    <p class="mb-0">
                                        <a href="tel: 021)-111-11-1885">
                                        (021)-111-11-1885
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-6 col-12 mt-5 mt-lg-0">
                                <form action="#" method="get" class="custom-form contact-form" role="form">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <div class="form-floating">
                                                <input type="text" name="name" id="name" class="form-control" placeholder="Name" required=""/>
                                                
                                                <label for="floatingInput">Name</label>
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-12"> 
                                            <div class="form-floating">
                                                <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Email address" required=""/>
                                                
                                                <label for="floatingInput">Email address</label>
                                            </div>
                                        </div>


                                        

                                        <div class="col-lg-12 col-12">
                                            <div class="form-floating">
                                                <textarea class="form-control" id="message" name="message" placeholder="Tell me about the project"></textarea>
                                                
                                                <label for="floatingTextarea">Tell me </label>
                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-12 ms-auto">
                                            <button class="custom-btn" onClick={()=>toast.success("Message Has Been Send")}>Send</button>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                
            </section>
    </>
  );
};
