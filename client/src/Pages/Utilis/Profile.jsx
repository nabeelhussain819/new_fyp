import React, { useState, useEffect } from "react";
import {AuthStudent} from '../../Api/Student'
export default function Profile(){
    const [name ,setName] =useState([])
    const user =localStorage.getItem('user')
 
    useEffect(()=>{
        const getData = () => {
            AuthStudent().then(function (result) {
                setName(result);
            });
          };
          getData();
    },[])
return(<>
<div class="dashboard-bread dashboard--bread">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="breadcrumb-content">
                            <div class="section-heading">
                                <h2 class="sec__title font-size-30 text-white">My Profile</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="breadcrumb-list text-right">
                            <ul class="list-items">
                                <li><a href="/dashboard" class="text-white">Home</a></li>
                                <li>Dashboard</li>  
                                <li>My Profile</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="dashboard-main-content">
            <div class="container-fluid">
                <div class="row">
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
        </>)
}