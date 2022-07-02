import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import About from "../Pages/About";
import Register from "../Pages/Auth/Register";
import { Blog } from "../Pages/Blog";
import { Contact } from "../Pages/Contact";
import { Home } from "../Pages/Home";
import Courses from "../Pages/User/Course";
import Department from "../Pages/User/Department";
import Program from "../Pages/User/Program";
import Teacher from "../Pages/User/Teacher";
import Details from "../Pages/Utilis/Details";
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

function Guest() {
  return (
    <>
      {/* <SideBar />
        <Navbar /> */}
      <Header />
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/department" element={<Department />} />
          <Route path="/program" element={<Program />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/signup" element={<Register />} />
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
      <Footer />
    </>
  );
}

export default Guest;
