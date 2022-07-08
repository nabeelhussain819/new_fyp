import React, { useState, useEffect } from "react";
import {  AuthTeacher } from "../../../Api/Teacher";
import LineChart from "../partials/Charts";
import LineChart1 from "../partials/LineChart";
import LineChart2 from "../partials/LineChart_1";

function Dashboard() {
  const [rating ,setRating] =useState([])
  const [name ,setName] =useState([])
console.log(name)
  useEffect(()=>{
      const getData = () => {
        AuthTeacher().then(function (result) {
          result.map((data)=> data == false ? null : setName([data]))
        });
        };
      
        getData();
  },[])
  return (
    <>
      <section className="dashboard-content-wrap ">
        <div class="breadcrumb-area bread-bg">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="breadcrumb-content">
                  <div class="section-heading">
                    <h2 class="sec__title font-size-30 text-white">
                      Hi, {localStorage.getItem('data')} Welcome Back!
                    </h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="breadcrumb-list text-right">
                  <ul class="list-items">
                    <li>
                        Home
                    </li>
                    <li>User Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row mt-4 ">
              <div class="col-lg-3 responsive-column-m ">
                <div class="icon-box shadow-lg icon-layout-2 dashboard-icon-box">
                  <div class="d-flex">
                    <div class="info-icon icon-element flex-shrink-0">
                      <i class="la la-shopping-cart"></i>
                    </div>
                    <div class="info-content">
                      <p class="info__desc">Total Courses</p>
                      <h4 class="info__title">{name.map((data)=>{return(<>
                                                {data == false ? null: 
                                                <>{data.courseId.length}</>}</>)})}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 responsive-column-m">
                <div class="icon-box icon-layout-2 dashboard-icon-box">
                  <div class="d-flex">
                    <div class="info-icon icon-element bg-2 flex-shrink-0">
                      <i class="la la-bookmark"></i>
                    </div>
                    <div class="info-content">
                      <p class="info__desc">You Loged In </p>
                      <h4 class="info__title">{name.map((data)=>{return(<>
                                                {data == false ? null: 
                                                <>{(data.tokens).length}</>}</>)})} times</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 responsive-column-m">
                <div class="icon-box icon-layout-2 dashboard-icon-box">
                  <div class="d-flex">
                    <div class="info-icon icon-element bg-3 flex-shrink-0">
                      <i class="la la-plane"></i>
                    </div>
                    <div class="info-content">
                      <p class="info__desc">Comment</p>
                      <h4 class="info__title">{name.map((data)=>{return(<>
                                                {data == false ? null: 
                                                <>{(data.comment).length}</>}</>)})}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 responsive-column-m">
                <div class="icon-box icon-layout-2 dashboard-icon-box">
                  <div class="d-flex">
                    <div class="info-icon icon-element bg-4 flex-shrink-0">
                      <i class="la la-star"></i>
                    </div>
                    <div class="info-content">
                      <p class="info__desc">Rating</p>
                      <h4 class="info__title">{name.map((data)=>{return(<>
                                                {data == false ? null: 
                                                <>{(data.rating)}</>}</>)})}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-main-content">
          <div className="container-fluid">
          <div class="row">
                    <div class="col-lg-6 responsive-column--m">
                        <div class="form-box shadow-lg">
                            <div class="form-title-wrap">
                                <h3 class="title">Statics Results</h3>
                                
                            </div>
                           
                        </div>
                        <LineChart data={name}/>
                    </div>
                    <div class="col-lg-6 responsive-column--m">
                        <div class="form-box dashboard-card shadow-lg">
                            <div class="form-title-wrap">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3 class="title">Notifications</h3>
                                  
                                </div>
                                
                            </div>
                            <div class="form-content p-0">
                                <div class="list-group drop-reveal-list">
                                  {name.slice(0,5).map((data)=>{return(<>
                                                {data == false ? null: 
                                                <> <div class="list-group-item list-group-item-action border-top-0">
                                                <div class="msg-body d-flex align-items-center">
                                                    <div class="icon-element flex-shrink-0 mr-3 ml-0"><i class="la la-bell"></i></div>
                                                    <div class="msg-content w-100">
                                                        <h3 class="title pb-1">{data.comment}</h3>
                                                      
                                                    </div>
                                                    <span class="icon-element mark-as-read-btn flex-shrink-0 ml-auto mr-0" data-toggle="tooltip" data-placement="left" title="" data-original-title="Mark as read">
                                                        <i class="la la-check-square"></i>
                                                    </span>
                                                </div>
                                            </div></>}</>)})}
                                </div>
                            </div>
                        </div>
                    </div>     
                    <div class="col-lg-6 responsive-column--m">
                        <div class="form-box shadow-lg">
                            <div class="form-title-wrap">
                                <h3 class="title">Statics Results</h3>
                                
                            </div>
                           
                        </div>
                        <LineChart1 />
                    </div>
                    <div class="col-lg-6 responsive-column--m">
                        <div class="form-box shadow-lg">
                            <div class="form-title-wrap">
                                <h3 class="title">Statics Results</h3>
                                
                            </div>
                           
                        </div>
                        <LineChart2 />
                    </div>        
                </div>
          
          </div>
        </div>
      </section>
    </>
  );
};
export default Dashboard;