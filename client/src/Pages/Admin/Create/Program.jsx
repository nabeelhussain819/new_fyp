import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTimesCircle, FaPlusCircle } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

const Program = () => {
  const [name, setName] = useState([]);
  const [departmentId, setDepartmentId] = useState("");
  const [depart, setDepart] = useState([]);
  const [sessionId, setSessionId] = useState("");
  const [description, setDEscription] = useState("");
  const [session, setSession] = useState([]);
  const registerProgram = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/create-program", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        departmentId,
        sessionId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      alert(
        "Program Created Successfully",
        toast.success("Program Created Successfully")
      );
      window.location.reload();
    }
  };
  const getChange = (value) => {
    setDepartmentId(value);
    depart.map((data) => (data._id == value ? setSession([data]) : null));
  };

  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch("http://localhost:5000/departments")
      ).json();
      setDepart(response);
    };

    getData();
  }, []);
  return (
    <>
      <div className="col-lg-12 pt-4">
        <div className="">
          <div className="form-content">
            <div className="user-profile-action d-flex align-items-center pb-2">
              <div className="upload-btn-box"></div>
            </div>
            <div className="contact-form-action">
              <form action="#" className="MultiFile-intercepted">
                <div className="row">
                  <div className="col-lg-12 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Program Name</label>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Program Description</label>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          value={name}
                          onChange={(e) => setDEscription(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Select Department</label>
                      <div className="form-group">
                        <select
                          className="form-control p-3"
                          value={departmentId}
                          onChange={(e) => getChange(e.target.value)}
                        >
                          <option>----select-one----</option>
                          {depart.map((data) => {
                            return (
                              <>
                                <option className="option" value={data._id}>
                                  {data.name}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Select Session</label>
                      <div className="form-group">
                        <select
                          className="form-control p-3"
                          value={sessionId}
                          onChange={(e) => setSessionId(e.target.value)}
                        >
                          <option>----select-one----</option>
                          {session.map((data) => {
                            return (
                              <>
                                {data.sessionId.map((data) => {
                                  return (
                                    <option className="option" value={data._id}>
                                      {data.name}
                                    </option>
                                  );
                                })}
                              </>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 responsive-column">
                    <div className="input-box">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="theme-btn"
                          onClick={registerProgram}
                        >
                          Add!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
