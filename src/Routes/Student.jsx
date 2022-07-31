import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Dashboard } from "../Pages/User/Dashboard";
import Navbar from "../Pages/User/partials/Navbar";
import Department from "../Pages/User/partials/Department";
import Program from "../Pages/User/partials/Program";
import Details from "../Pages/Utilis/Details";
import Qec from "../Pages/Utilis/Qec";
import CourseEvaluate from "../Pages/Qec/CourseEvaluate";
import Semester from "../Pages/User/Semester";
import Complain from "../Pages/User/Complain";
import Comment from "../Pages/User/Comments";
import Evaluation from "../Pages/Qec/Evaluate";
import Graph from "../Pages/Qec/Graph";
import ChangePass from "../Pages/Auth/ChangePass";
import Enrollment from "../Pages/User/Enrollment";
import Courses from "../Pages/User/partials/Courses";
import Teachers from "../Pages/User/partials/Teachers";
import Enrolled from "../Pages/User/partials/Enrolled";
function Students() {
  return (
    <>
      <Navbar />
      <Fragment>
        <Routes>
          <Route path="/departments" element={<Department />} />
          <Route path="/qec" element={<Evaluation />} />
          <Route path="/programs" element={<Program />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/qec-evaluate" element={<Qec />} />
          <Route path="/qec-graph" element={<Graph />} />
          <Route path="/evaluation" element={<CourseEvaluate />} />
          <Route path="/semesters" element={<Semester />} />
          <Route path="/comments" element={<Comment />} />
          <Route path="/complains" element={<Complain />} />
          <Route path="/recover" element={<ChangePass />} />
          
          <Route path="/Enrolled" element={<Enrolled />} />
          <Route path="/Enrollment" element={<Enrollment />} />
        </Routes>
      </Fragment>
    </>
  );
}

export default Students;
