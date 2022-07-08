import React, { useState } from 'react'
import ProgressBar from "../Qec/ProgressBar";
import myData from "../Qec/question.json";
import logo1 from '../../Assets/logo.png'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  useLocation,Link } from "react-router-dom";

const Qec = () => {
    const [question, setQuestion] = useState(1);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [bg, setBg] = useState(" bg-light");
    const [btn, setBtn] = useState(true);
    const [btnF, setBtnF] = useState(false);
    const [value, setValue] = useState([]);
    const [rating, setScore] = useState(1);
    const location = useLocation();
    const { courseId, teacherId,term } = location.state;
    const studentId = localStorage.getItem('id')
    const answerClick = async(e) => {
        const nextQuestion = question + 1;
        if (nextQuestion < myData.length) {
            setShow(false);
            setBtn(true) 
            setQuestion(nextQuestion);
        } else {   
            setBtn(true) 
            setShow1(true)
            e.preventDefault();
            const res = await fetch("https://fyptes.herokuapp.com/qec", {
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
            setQuestion(0);
            setShow(false)
            setBg("bg-success")
            setBtn(false) 
            setBtnF(true)
        }
    };
    console.log(value)
    const result = (isCorrect) => {
       
        if (isCorrect) {
            const newScore = rating + Number(isCorrect);
            setScore(newScore);
            setValue([...value,isCorrect])
        }     
        setBtn(false) 
        setShow(true);
        
    };
   
    return (
        <>
        <div class="dashboard-bread gradient-bg-gray ">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="breadcrumb-content">
                            <div class="section-heading">
                                <h2 class="sec__title font-size-30 text-dark">EVALUATION FORM</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="text-right">
                            <ul class="list-items">
                                <img src={logo1} alt="logo"style={{width:"200px"}} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
              <section className={bg}>
                <div className="row">
            <div className="col-lg-12">
            <div className="cart-wrap">
                <div className="form-box">
                <div class="form-title-wrap">
                                <h3 class="title">Evaluation Form</h3>
                                <p class="font-size-14">Showing 12 of 12 Questions</p>
                            </div>
                    <div >
                        <ProgressBar data={question}/>
                        <div class="form-box shadow-lg">
                        <div className="container">
                            <div class="form-content">
                                <div class="comments-list">
                                    <div class="comment"> 
                                     <div >
                                        <div class="meta-data">
                                                <h3 class="comment__author">Question :{question}</h3>
                                                <div class="meta-data-inner d-flex">
                                                    <p class="comment__meta mr-1">About: {myData[question].category}</p>     
                                                </div>
                                            </div>
                                            <p class="comment-content font-size-20">
                                            "{myData[question].question}"
                                            </p>
                                            <div class="comment-reply margin-top-40px">
                                            <div class="section-tab section-tab-3 traveler-tab">
                                            <ul class="nav nav-tabs ml-0" id="myTab" role="tablist">  
                                            {btn && <> <li class="nav-item ">
                                                <button class="nav-link" onClick={()=>result("1")}>
                                                        Agree
                                                    </button>
                                                </li>
                                                <li class="nav-item">
                                                <button class="nav-link " onClick={()=>result("0")}>
                                                       Neutral
                                                    </button>
                                                </li>
                                                <li class="nav-item">
                                                <button class="nav-link" onClick={()=>result("-1")}>
                                                        Dis Agree
                                                    </button>
                                                </li></>}                                            
                                               
                                                {show &&
                                                  <li class="nav-item">
                                                  <button class="nav-link active" onClick={answerClick}>
                                                          Next
                                                      </button>
                                                  </li>}
                                                  {btnF &&
                                                    <Link
                                                    to={"/qec-graph" }
                                                    class="nav-link active"
                                                    state={{ rating: rating, question: question.length, value:value}}
                                                    >
                                                    Proceed To Completion!
                                                    </Link>
                                                  }
                                            </ul>
                                        </div>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    </div>
            </div></div></div></section>       
        </>
    )
}

export default Qec