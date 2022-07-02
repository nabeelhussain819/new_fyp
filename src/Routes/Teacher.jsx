import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "../Pages/Home";
import Dashboard from "../Pages/User/Teachers/Dashboard";
import NavBar from "../Pages/User/Teachers/Partials/NavBar";
import Sidebar from "../Pages/User/Teachers/Partials/Sidebar";
import Courses from "../Pages/User/Course";
import Department from "../Pages/User/Department";
import Program from "../Pages/User/Program";
import Teache1r from "../Pages/User/Teacher";
import Details from "../Pages/Utilis/Details";

function Teacher() {
  return (
    <>
      <Sidebar />
      <section className="dashboard-area">
        <NavBar />
        <Fragment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teacher-panel" element={<Dashboard />} />
            <Route path="/departments" element={<Department />} />
            <Route path="/programs" element={<Program />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/teachers" element={<Teache1r />} />
            <Route path="/" element={<Home />} />
            <Route path="/user-panel" element={<Dashboard />} />
          </Routes>
        </Fragment>
      </section>
    </>
  );
}

export default Teacher;
