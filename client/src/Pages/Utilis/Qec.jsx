import React, { useState } from 'react'
import ProgressBar from "../Qec/ProgressBar";
import myData from "../Qec/question.json";
import logo1 from '../../Assets/logo.png'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  useLocation } from "react-router-dom";

const Qec = () => {
    const [question, setQuestion] = useState(0);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [rating, setScore] = useState(1);
    const location = useLocation();
    const { courseId, teacherId,term } = location.state;
    const studentId = localStorage.getItem('id')
    const answerClick = () => {
        const nextQuestion = question + 1;
        if (nextQuestion < myData.length) {
            setShow(false);
            setQuestion(nextQuestion);
        } else {        
            setShow1(true)
            setQuestion(1);
        }
    };
    const result = (isCorrect) => {
        console.log(isCorrect)
        if (isCorrect) {
            const newScore = rating + Number(isCorrect);
            setScore(newScore);
        }     
        setShow(true);
    };
    console.log(studentId,courseId,teacherId,rating)
    const registerQec = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/qec", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            courseId,
            teacherId,
            studentId,
            rating,
            term
          }),
        });
        const data = await res.json();
        if (res.status === 400 || !data) {
          toast.warning(data.error);
        } else if (res.status === 401) {
          toast.warning("Invalid entry!");
        } else {
          toast.success("Qec Submmited Successfully");
        }
      };
    return (
        <>
    <section class="">
    <div class="coming-inner d-flex align-items-center text-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="coming-soon-content ">
                        <div class="logo justify-content-center pb-4 mb-4">
                        <img src={logo1} alt="logo"style={{width:"600px"}} />
                       
                        </div>
                        <div class="section-heading">
                            <h2 class="sec__title font-size-55 line-height-70 text-white">QEC FORM <br/>Question {question} Out of {myData.length} </h2>
                        </div> <ProgressBar data={question} />
                        <div class="col-lg-12 padding-top-35px padding-bottom-60px d-flex justify-content-center">
                            <div class="countdown-item">
                                <span class="count-text">{myData[question].category}</span>
                                <h2 class="sec__title  line-height-30 text-white">"{myData[question].question}"</h2>
                            </div>
                           
                            
                        </div>
                        <div className="social text-center ">
                        <button className="btn btn-round btn-twitter text-light" onClick={(e)=>result(e.target.value)}
                                        value="2"
                                    >
                                      Strongly Agree
                                    </button>
                        <button className="btn btn-round btn-twitter text-light" onClick={(e)=>result(e.target.value)}
                                        value="1"
                                    >
                                    Agree
                                    </button>
                                    <button className="btn btn-round btn-twitter text-light" onClick={(e)=>result(e.target.value)}
                                        value="0.5"
                                    >
                                        Neutral
                                    </button>
                                    <button className="btn btn-round btn-twitter text-light" onClick={(e)=>result(e.target.value)}
                                        value="-1"
                                    >
                                        Dis Agree
                                    </button>
                                    <button className="btn btn-round btn-twitter text-light" onClick={(e)=>result(e.target.value)}
                                        value="-2"
                                    >
                                        Strongly DisAgree
                                    </button>
                        </div> 
                        <ul class="social-profile social--profile">
                    <li>  {show &&
                            <><div className="text-center">

                                <button className="btn btn-primary btn-round mt-4" onClick={answerClick}>
                                    next Question
                                </button>
                            </div>
                            </>
                        }</li>
                          <li>  {show1 &&
                            <><div className="text-center">

                                <button className="btn btn-primary btn-round mt-4" onClick={registerQec}>
                                    Finish
                                </button>
                            </div>
                            </>
                        }</li>
                        </ul>                     
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>          
        </>
    )
}

export default Qec