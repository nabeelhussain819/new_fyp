import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import About from "../Pages/About";
import ChangePass from "../Pages/Auth/ChangePass";
import Register from "../Pages/Auth/Register";
import { Blog } from "../Pages/Blog";
import { Contact } from "../Pages/Contact";
import { Home } from "../Pages/Home";
import Courses from "../Pages/User/Course";
import Department from "../Pages/User/Department";
import Program from "../Pages/User/Program";
import Teacher from "../Pages/User/Teacher";
import Details from "../Pages/Utilis/Details";


function Guest() {
  return (
    <>
    
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
          <Route path="/recover" element={<ChangePass />} />
        </Routes>
      </Fragment>
      <Footer />
    </>
  );
}

export default Guest;
