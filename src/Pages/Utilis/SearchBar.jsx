import React, { useState } from "react";
import { GalleryImages } from "./Images";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = ({ item, api }) => {
  let navigate = useNavigate();
  const [searchData, setSearchData] = useState("");
  const filterData = item.filter((data) => data.name.includes(searchData));

  return (
    <div>
          <section class="projects " id="section_4">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-8 col-md-8 col-12 ms-auto">
                            <div class="section-title-wrap shadow-lg d-flex justify-content-center align-items-center mb-4">
                            <input
                    className="form-control"
                    type="text"
                    value={searchData}
                    placeholder="Search..."
                    onChange={(e) => setSearchData(e.target.value)}
                  />
                                <p class="text-white ms-4 mb-0">Search</p>
                            </div>
                        </div>

                        <div class="clearfix"></div>
                        {filterData.map((data, index) => {
                        return (
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="projects-thumb shadow-lg ">
                                <div class="projects-info">
                                <Link
                    to={"/details/" + data._id}
                    state={{ from: data }}
                    className="add-to-wishlist icon-element"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    class="projects-tag"
                    data-original-title="Save for Later"
                  >
                    See Details
                  </Link>

                                    <h3 class="projects-title">{data.name}</h3>
                                </div>

                                <Link
                      to={"/details/" + data._id}
                      state={{ from: data, api: api }}
                    >
                                {GalleryImages.map((data, key) => {
                    return (
                      key === index && (
                        <img src={data.image} alt="destination-img"class="projects-image img-fluid" />
                      )
                    );
                  })}
                                </Link>
                            </div>
                        </div>
                         )})}
                    </div>
                </div>
            </section>
    </div>
  );
};

export default SearchBar;
