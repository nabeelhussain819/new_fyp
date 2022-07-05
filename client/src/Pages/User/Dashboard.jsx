import React, { useState, useEffect } from "react";
import { AuthStudent } from "../../Api/Student";
import BarChart from "./partials/BarChart";

export const Dashboard = () => {

  const [name ,setName] =useState([])
console.log(name)
  useEffect(()=>{
      const getData = () => {
          AuthStudent().then(function (result) {
              setName(result);
          });
        };
        getData();
  },[])
  return (
    <>
      <section className="dashboard-content-wrap bg-818">
        <div class="dashboard-bread">
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
            <div class="row mt-4">
              <div class="col-lg-3 responsive-column-m">
                <div class="icon-box icon-layout-2 dashboard-icon-box">
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
                                                <>{(data.rating).length}</>}</>)})}</h4>
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
                    <div class="col-lg-12 responsive-column--m">
                        <div class="form-box">
                            <div class="form-title-wrap">
                                <h3 class="title">Statics Results</h3>                                
                            </div>
                            <div class="col-lg-12 responsive-column--m">
                        <div >
                            <div >
                                <h3 class="title">{name.map((data)=>{return(<>
                                                {data == false ? null: 
                                                <>{(data.tokens).length}</>}</>)})} times you visited this site</h3>
                            </div>
                            <div class="form-content pb-0">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="sparkline-chart-item">
                                            <span class="font-size-15">You Commented</span>
                                            <h3 class="title font-size-16">{name.map((data)=>{return(<>
                                                {data == false ? null: 
                                                <>{(data.comment).length}</>}</>)})} times</h3>
                                            <div class="visits-chart mt-2"></div>
                                        </div>
                                    </div>
                                     <div class="col-lg-4">
                                        <div class="sparkline-chart-item">
                                            <span class="font-size-15">Your Courses </span>
                                            <h3 class="title font-size-16">{name.map((data)=>{return(<>
                                                {data == false ? null: 
                                                <>{data.courseId.length}</>}</>)})}</h3>
                                            <div class="visits-chart mt-2"></div>
                                        </div>
                                    </div>
                                     <div class="col-lg-4">
                                        <div class="sparkline-chart-item">
                                            <span class="font-size-15">Your Teachers </span>
                                            <h3 class="title font-size-16">{name.map((data)=>{return(<>
                                                {data == false ? null: 
                                                <>{data.courseId.map((data)=>data.teacherId.length)}</>}</>)})}</h3>
                                            <div class="previews-chart mt-2"></div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="sparkline-chart-item">
                                            <span class="font-size-15">Your Department</span>
                                            <h3 class="title font-size-16">{name.map((data)=>{return(<>
                                                {data == false ? null: 
                                                <>{data.deptId.map((data)=>data.name)}</>}</>)})}</h3>
                                            <div class="visits-chart-2 mt-2"></div>
                                        </div>
                                    </div>
                                     <div class="col-lg-4">
                                        <div class="sparkline-chart-item">
                                            <span class="font-size-15">Joined At</span>
                                            <h3 class="title font-size-16">{name.map((data)=>{return(<>
                                                {data == false ? null: 
                                                <>{new Date(
                                                  data.createdAt
                                                ).toLocaleDateString("en-US")}</>}</>)})}</h3>
                                            <div class="previews-chart mt-2"></div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="sparkline-chart-item">
                                            <span class="font-size-15">CGPA</span>
                                            <h3 class="title font-size-16">{name.map((data)=>{return(<>
                                                {data == false ? null: 
                                                <>{data.cgpa}</>}</>)})}</h3>
                                            <div class="previews-chart mt-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div> 
                    <div class="col-lg-12">
                        <div class="form-box">
                            <div class="form-title-wrap border-bottom-0 pb-0">
                                <h3 class="title">Profile Information</h3>
                            </div>
                            <div class="form-content">
                                <div class="table-form table-responsive">
                                    <table class="table">
                                        <tbody>
                                            {name.map((data)=>{return(<>
                                                {data == false ? null: 
                                                <>
                                                <tr>
                                                <td class="pl-0">
                                                    <div class="table-content">
                                                        <h3 class="title font-weight-medium">Name</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.name}</td>
                                            </tr>                                             
                                            <tr>
                                                <td class="pl-0">
                                                    <div class="table-content">
                                                        <h3 class="title font-weight-medium">Email Address</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.email}</td>
                                            </tr>
                                            <tr>
                                                <td class="pl-0">
                                                    <div class="table-content">
                                                        <h3 class="title font-weight-medium">Phone Number</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.phone}</td>
                                            </tr>
                                            <tr>
                                                <td class="pl-0">
                                                    <div class="table-content">
                                                        <h3 class="title font-weight-medium">Joined At</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{new Date(
                                    data.createdAt
                                  ).toLocaleDateString("en-US")}
                         </td>
                                            </tr>
                                            <tr>
                                                <td class="pl-0">
                                                    <div class="table-content">
                                                        <h3 class="title font-weight-medium">University ID:</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.u_id}</td>
                                            </tr>
                                            <tr>
                                                <td class="pl-0">
                                                    <div class="table-content">
                                                        <h3 class="title font-weight-medium">Department</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.deptId.map((index)=> index.name)}</td>
                                            </tr>
                                            
                                            <tr>
                                                <td class="pl-0">
                                                    <div class="table-content">
                                                        <h3 class="title font-weight-medium">Session</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.sessionId.map((index)=> index.name)}</td>
                                            </tr>
                                            <tr>
                                                <td class="pl-0">
                                                    <div class="table-content">
                                                        <h3 class="title font-weight-medium">Program</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.programId.map((index)=> index.name)}</td>
                                            </tr>
                                            <tr>
                                                <td class="pl-0">
                                                    <div class="table-content">
                                                        <h3 class="title font-weight-medium">Semester</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.semesterId.map((index)=> index.name)}</td>
                                            </tr>
                                            <tr>
                                                <td class="pl-0">
                                                    <div class="table-content">
                                                        <h3 class="title font-weight-medium">Courses</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.courseId.map((index)=> index.name)}</td>
                                            </tr>
                                            
                                            </>}
                                            </>)})}
                                            
                                        </tbody>
                                    </table>
                                </div>
                            
                            </div>
                        </div>
                    </div>                              
                </div>
          
          </div>
        </div>
      </section>
    </>
  );
};
