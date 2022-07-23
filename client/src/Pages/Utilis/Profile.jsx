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
<div className="dashboard-bread dashboard--bread">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="breadcrumb-content">
                            <div className="section-heading">
                                <h2 className="sec__title font-size-30 text-white">My Profile</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="breadcrumb-list text-right">
                            <ul className="list-items">
                                <li><a href="/dashboard" className="text-white">Home</a></li>
                                <li>Dashboard</li>  
                                <li>My Profile</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="dashboard-main-content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-box">
                            <div className="form-title-wrap border-bottom-0 pb-0">
                                <h3 className="title">Profile Information</h3>
                            </div>
                            <div className="form-content">
                                <div className="table-form table-responsive">
                                    <table className="table">
                                        <tbody>
                                            {name.map((data)=>{return(<>
                                                {data == false ? null: 
                                                <>
                                                <tr>
                                                <td className="pl-0">
                                                    <div className="table-content">
                                                        <h3 className="title font-weight-medium">Name</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.name}</td>
                                            </tr>                                             
                                            <tr>
                                                <td className="pl-0">
                                                    <div className="table-content">
                                                        <h3 className="title font-weight-medium">Email Address</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.email}</td>
                                            </tr>
                                            <tr>
                                                <td className="pl-0">
                                                    <div className="table-content">
                                                        <h3 className="title font-weight-medium">Phone Number</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.phone}</td>
                                            </tr>
                                            <tr>
                                                <td className="pl-0">
                                                    <div className="table-content">
                                                        <h3 className="title font-weight-medium">Joined At</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{new Date(
                                    data.createdAt
                                  ).toLocaleDateString("en-US")}
                         </td>
                                            </tr>
                                            <tr>
                                                <td className="pl-0">
                                                    <div className="table-content">
                                                        <h3 className="title font-weight-medium">University ID:</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.u_id}</td>
                                            </tr>
                                            <tr>
                                                <td className="pl-0">
                                                    <div className="table-content">
                                                        <h3 className="title font-weight-medium">Department</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.deptId.map((index)=> index.name)}</td>
                                            </tr>
                                            
                                            <tr>
                                                <td className="pl-0">
                                                    <div className="table-content">
                                                        <h3 className="title font-weight-medium">Session</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.sessionId.map((index)=> index.name)}</td>
                                            </tr>
                                            <tr>
                                                <td className="pl-0">
                                                    <div className="table-content">
                                                        <h3 className="title font-weight-medium">Program</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.programId.map((index)=> index.name)}</td>
                                            </tr>
                                            <tr>
                                                <td className="pl-0">
                                                    <div className="table-content">
                                                        <h3 className="title font-weight-medium">Semester</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.semesterId.map((index)=> index.name)}</td>
                                            </tr>
                                            <tr>
                                                <td className="pl-0">
                                                    <div className="table-content">
                                                        <h3 className="title font-weight-medium">Courses</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.courseId.map((index)=> {return (<><br/>{index.name}</>)})}</td>
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