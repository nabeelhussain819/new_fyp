import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReadProgram } from "../../../Api/Program";

const Course = () => {
  const [name, setName] = useState([]);
  const [programId, setProgramId] = useState("");
  const [depart, setDepart] = useState([]);
  const [session, setSession] = useState([]);
  const [semesterId, setSemester] = useState([]);
  const [description, setDescription] = useState("");
  const [formValues, setFormValues] = useState([{ subject: "" }]);
  const [move, setMove] = useState(false);
  const registerProgram = async (e) => {
    e.preventDefault();
    const res = await fetch("https://fyptes.herokuapp.com/create-course", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        description,
        semesterId,
        programId,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      toast.warning("Invalid Credentials");
    } else if (res.status === 401) {
      toast.warning("Invalid entry!");
    } else {
      setFormValues([...formValues, { subject: "" }]);
      setMove(true);
      setName("");
      toast.success("Semester Created Successfully");
    }
  };
  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  let handleSubmit = (e) => {
    if (move == true) {
      alert(
        "Semester Created Successfully",
        toast.success("Semester Created Successfully")
      );
      window.location.reload();
    } else {
      toast.warning("Invalid entry! Or Add a Feild First!");
    }
  };
  const getChange = (value) => {
    setProgramId(value);
    depart.map((data) => (data._id == value ? setSession([data]) : null));
  };

  useEffect(() => {
    const getData = () => {
      ReadProgram().then(function (result) {
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
                {formValues.map((element, index) => (
                  <>
                    <div className="row">
                      <div className="col-lg-12 responsive-column">
                        <div className="input-box">
                          <label className="label-text">Course Name</label>
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="text"
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 responsive-column">
                        <div className="input-box">
                          <label className="label-text">Course Description</label>
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="text"
                              onChange={(e) => setDescription(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 responsive-column">
                        <div className="input-box">
                          <label className="label-text">Select program</label>
                          <div className="form-group">
                            <select
                              className="form-control p-3"
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
                          <label className="label-text">Select Semester</label>
                          <div className="form-group">
                            <select
                              className="form-control p-3"
                              onChange={(e) => setSemester(e.target.value)}
                            >
                              <option>----select-one----</option>
                              {session.map((data) => {
                                return (
                                  <>
                                    {data.semesterId.map((item) => {
                                      return (
                                        <option
                                          className="option"
                                          value={item._id}
                                        >
                                          {item.name}
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
                            {index ? (
                              <button
                                type="button"
                                className="btn-danger theme-btn btn-round mt-4"
                                onClick={() => removeFormFields(index)}
                              >
                                remove
                              </button>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
                <button
                  type="button"
                  className="btn-success theme-btn btn-round mt-4 col-lg-12"
                  onClick={() => handleSubmit()}
                >
                  Finish
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
