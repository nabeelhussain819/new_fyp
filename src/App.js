
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Admin from "./Routes/Admin";
import Teacher from "./Routes/Teacher";
import Guest from "./Routes/Guest";
import User from "./Routes/Student";
// import ExtendedRegisterForm from "./Pages/Authentication/ExtendedRegisterForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";

let token = localStorage.getItem("token");
let isAdmin = localStorage.getItem("isAdmin");
let isTeacher = localStorage.getItem("isTeacher");
function App() {
  return (
    <>
      <ToastContainer theme="colored" />
      <BrowserRouter>
        <Routes>
          {!token ? (
            <>
              <Route exact path="/*" element={<Guest />} />
              {/* <Route
                exact
                path="/extendedForm"
                element={<ExtendedRegisterForm />}
              /> */}
            </>
          ) : isAdmin ? (
            <>
              <Route exact path="/*" element={<Admin />} />
            </>
          ) : isTeacher ? (
            <>
              <Route exact path="/*" element={<Teacher />} />
            </>
          ) : (
            <>
              <Route exact path="/*" element={<User />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
 
    </>
  );
}

export default App;
