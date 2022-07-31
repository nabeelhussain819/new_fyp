import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ChangePass from "../Pages/Auth/ChangePass";
import Register from "../Pages/Auth/Register";
import { Home } from "../Pages/Home";
import Courses from "../Pages/User/Course";
import Department from "../Pages/User/Department";
import Program from "../Pages/User/Program";
import Teacher from "../Pages/User/Teacher";
import Details from "../Pages/Utilis/Details";
import ExtendedForm from "../Pages/Auth/ExtendedRegister";
import ForgetPass from "../Pages/Auth/forgetPass";

function Guest() {
  return (
    <>
    
      <Header />
      <Fragment>
        <Routes>
        {localStorage.getItem('verify') &&  <Route path="/extended-form" element={<ExtendedForm />} />}
          <Route path="/" element={<Home />} />
          <Route path="/department" element={<Department />} />
          <Route path="/program" element={<Program />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/teacher" element={<Teacher />} />
          
          <Route path="/signup" element={<Register />} />
          {localStorage.getItem('forgetId') && <Route path="/forget-password" element={<ForgetPass />} />}
          <Route path="/recover" element={<ChangePass />} />
         
        </Routes>
      </Fragment>
      {/* <Footer /> */}
    </>
  );
}

export default Guest;
