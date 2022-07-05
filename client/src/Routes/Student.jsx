import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Dashboard } from "../Pages/User/Dashboard";
import Navbar from "../Pages/User/partials/Navbar";
import Sidebar from "../Pages/User/partials/Sidebar";
import Courses from "../Pages/User/Course";
import Department from "../Pages/User/Department";
import Program from "../Pages/User/Program";
import Teacher from "../Pages/User/Teacher";
import Details from "../Pages/Utilis/Details";
import Qec from "../Pages/Utilis/Qec";
import CourseEvaluate from "../Pages/Qec/CourseEvaluate";
import Profile from "../Pages/Utilis/Profile";
import Semester from "../Pages/User/Semester";
import Complain from "../Pages/User/Complain";
import Comment from "../Pages/User/Comments";

function Students() {
  return (
    <>
  
      <Sidebar />

      <section className="dashboard-area">
        <Navbar />
        <Fragment>
          <Routes>
            <Route path="/departments" element={<Department />} />
            <Route path="/qec" element={<CourseEvaluate />} />
            <Route path="/programs" element={<Program />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/teachers" element={<Teacher />} />
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/evaluation" element={<Qec />} />
            <Route path="/semesters" element={<Semester />} />
            <Route path="/comments" element={<Comment />} />
            <Route path="/complains" element={<Complain />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Fragment>
      </section>
    </>
  );
}

export default Students;
