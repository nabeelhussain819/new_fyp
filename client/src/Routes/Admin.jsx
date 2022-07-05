import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Dashboard from "../Pages/Admin/Dashboard";
import Comments from "../Pages/Admin/Index/Comment";
import Complains from "../Pages/Admin/Index/Complain";
import Courses from "../Pages/Admin/Index/Courses";
import Departments from "../Pages/Admin/Index/Departments";
import Programs from "../Pages/Admin/Index/Programs";
import QEC from "../Pages/Admin/Index/Qec";
import Semesters from "../Pages/Admin/Index/Semester";
import Sessions from "../Pages/Admin/Index/Sessions";
import Students from "../Pages/Admin/Index/Students";
import Teachers from "../Pages/Admin/Index/Teachers";
import Details from "../Pages/Admin/Partials/Details";
import Header from "../Pages/Admin/Partials/Header";
import Sidebar from "../Pages/Admin/Partials/Sidebar";
import { Home } from "../Pages/Home";

// import AdminDashboard from "../Pages/AdminTeacher/Dashboard/Admin";
// import Navbar from "../Components/Header/Navbar";
// import SideBar from "../Components/Header/Sidebar";
// import Course from "../Pages/AdminTeacher/Index/Course";
// import Department from "../Pages/AdminTeacher/Index/Department";
// import Department1 from "../Pages/User/Details/Department";
// import Program from "../Pages/AdminTeacher/Index/Program";
// import Semester from "../Pages/AdminTeacher/Index/Semester";
// import Teachers from "../Pages/AdminTeacher/Index/Teacher";
// import { Profile } from "../Pages/AdminTeacher/Profile/Profile";
// import DepartmentCreate from "../Pages/AdminTeacher/Create/Department";
// import CourseCreate from "../Pages/AdminTeacher/Create/Course";
// import ProgramCreate from "../Pages/AdminTeacher/Create/Program";
// import SemesterCreate from "../Pages/AdminTeacher/Create/Semester";
// import SessionCreate from "../Pages/AdminTeacher/Create/Session";
// import AvailableQec from "../Pages/AdminTeacher/Index/AvailableQec";
// import Students from "../Pages/AdminTeacher/Index/Students";
// import SectionCreate from "../Pages/AdminTeacher/Create/Section";
// import Allcreate from "../Pages/AdminTeacher/Create/AllCreate";
// import Home from "../Pages/Home";

function Admin() {
  return (
    <>
      <section className="dashboard-area">
        {/* <SideBar />
        <Navbar /> */}
        <Sidebar />
        <Header />
        <Fragment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/Programs" element={<Programs />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/students" element={<Students />} />
            <Route path="/semesters" element={<Semesters />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/complains" element={<Complains />} />
            <Route path="/qec" element={<QEC />} />
            <Route path="/details/:id" element={<Details />} />
            {/* <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/program" element={<Program />} />
            <Route path="/semester" element={<Semester />} />
            <Route path="/course" element={<Course />} />
            <Route path="/teacher" element={<Teachers />} />
            <Route path="/department" element={<Department />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/students" element={<Students />} />
            <Route path="/departmentCreate" element={<DepartmentCreate />} />
            <Route path="/create-program" element={<ProgramCreate />} />
            <Route path="/courseCreate" element={<CourseCreate />} />
            <Route path="/sessionCreate" element={<SessionCreate />} />
            <Route path="/sectionCreate" element={<SectionCreate />} />
            <Route path="/semesterCreate" element={<SemesterCreate />} />
            <Route exact path="/avaliable-qec" element={<AvailableQec />} />
            <Route exact path="/all-create" element={<Allcreate />} />
            <Route path="/department-details/:id" element={<Department1 />} /> */}
          </Routes>
        </Fragment>
      </section>
    </>
  );
}

export default Admin;
