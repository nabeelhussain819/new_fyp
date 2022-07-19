import React, { useState, useEffect } from "react";
import { AuthTeacher } from "../../../Api/Teacher";
export default function Profile(){
    const [name ,setName] =useState([])
    const user =localStorage.getItem('user')
 console.log(name)
    useEffect(()=>{
        const getData = () => {
            AuthTeacher().then(function (result) {
                setName(result);
            });
          };
          getData();
    },[])
return(<>
<div className="breadcrumb-area bread-bg">
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
                                                        <h3 className="title font-weight-medium">HelpFull Rating</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.isHelpfull.length}</td>
                                            </tr>
                                            <tr>
                                                <td className="pl-0">
                                                    <div className="table-content">
                                                        <h3 className="title font-weight-medium">Friendly Rating</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.isFriendly.length}</td>
                                            </tr>
                                            <tr>
                                                <td className="pl-0">
                                                    <div className="table-content">
                                                        <h3 className="title font-weight-medium">Professional Rating</h3>
                                                    </div>
                                                </td>
                                                <td>:</td>
                                                <td>{data.isProfessional.length}</td>
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
                                                        <h3 className="title font-weight-medium">Courses</h3>
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