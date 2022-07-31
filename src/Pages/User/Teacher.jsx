import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Utilis/SearchBar";
import { ReadTeacher } from "../../Api/Teacher";
const Teacher = () => {
  let navigate = useNavigate();
  const [teacher, setTeacher] = useState([]);

  const handleSent = (data) => {
    let path = "../department-details/" + data._id;
    navigate(path);
  };
  useEffect(() => {
    const getData = () => {
      ReadTeacher().then(function (result) {
        setTeacher(result);
      });
    };
    getData();
  }, []);

  return (
    <div>
       <div className="top"></div>
     <section class="services " id="section_3">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-10 col-12 mx-auto pt-4">
                            <div class="section-title-wrap d-flex shadow-lg  justify-content-center align-items-center mb-5">

                                <h2 class="text-white ms-4 mb-0">Teachers  </h2>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <SearchBar item={teacher} api="teachers" />
            </section>
    </div>
  );
};

export default Teacher;
