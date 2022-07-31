import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReadDepartment } from "../../../Api/Department";

const Session = () => {
  const [name, setName] = useState([]);
  const [departmentId, setDepartmentId] = useState("");
  const [description, setDescription] = useState("");
  const [depart, setDepart] = useState([]);
  const registerSession = async (e) => {
    e.preventDefault();
    const res = await fetch("https://fyptes.herokuapp.com/create-session", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        departmentId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      alert(
        "Session Created Successfully",
        toast.success("Session Created Successfully")
      );
      window.location.reload();
    }
  };

  useEffect(() => {
    const getData = () => {
      ReadDepartment().then(function (result) {
        setDepart(result);
      });
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
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Session Name</label>
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
                  <div className="col-lg-6 responsive-column">
                    <div className="input-box">
                      <label className="label-text">Session Description</label>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          value={name}
                          onChange={(e) => setDescription(e.target.value)}
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
                          onChange={(e) => setDepartmentId(e.target.value)}
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
                  <div className="col-lg-12 responsive-column">
                    <div className="input-box">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="theme-btn"
                          onClick={registerSession}
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

export default Session;
