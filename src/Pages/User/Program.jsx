import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaThList,
  FaBorderNone,
  FaEye,
  FaTrashAlt,
  FaPen,
} from "react-icons/fa";
import SearchBar from "../Utilis/SearchBar";
import { ReadProgram } from "../../Api/Program";
const Program = () => {
  let navigate = useNavigate();
  const [program, setProgram] = useState([]);

  const handleSent = (data) => {
    let path = "../department-details/" + data._id;
    navigate(path);
  };
  useEffect(() => {
    const getData = () => {
      ReadProgram().then(function (result) {
        setProgram(result);
      });
    };
    getData();
  }, []);

  return (
    <div>
      <div className="top"></div>
    <section class="services" id="section_3">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-10 col-12 mx-auto pt-4">
                            <div class="section-title-wrap d-flex shadow-lg  justify-content-center align-items-center mb-5">

                                <h2 class="text-white ms-4 mb-0">Prograrms  </h2>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <SearchBar item={program} api="programs" />
            </section>
     
    </div>
  );
};

export default Program;
