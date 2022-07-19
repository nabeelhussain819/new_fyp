import React, { useState } from "react";
import { GalleryImages } from "./Images";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = ({ item, api }) => {
  let navigate = useNavigate();
  const [searchData, setSearchData] = useState("");
  const filterData = item.filter((data) => data.name.includes(searchData));

  return (
    <div>
      <div className="row " >
        <div className="col-lg-12">
          <div className="filter-wrap padding-bottom-60px">
            <div className="filter-bar shadow-lg d-flex align-items-center justify-content-between margin-top-30px">
              <div className="filter-bar-filter d-flex flex-wrap align-items-center">
                <div className="filter-option">
                  <h3 className="title font-size-16 ">Search by Name:</h3>
                </div>
                <div>
                  <input
                    className="fancybox-share__input"
                    type="text"
                    value={searchData}
                    placeholder="Search..."
                    onChange={(e) => setSearchData(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {filterData.map((data, index) => {
          return (
            <div className="col-lg-4  responsive-column">
              <div className="card-item ">
                <div className="card-img">
                  {GalleryImages.map((data, key) => {
                    return (
                      key === index && (
                        <img src={data.image} alt="destination-img" />
                      )
                    );
                  })}
                  <Link
                    to={"/details/" + data._id}
                    state={{ from: data }}
                    className="add-to-wishlist icon-element"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Save for Later"
                  >
                    <i className="la la-search"></i>
                  </Link>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    <Link
                      to={"/details/" + data._id}
                      state={{ from: data, api: api }}
                    >
                      {data.name}
                    </Link>
                  </h3>
                  <p className="card-meta">Joined At: {new Date(
                                    data.createdAt
                                  ).toLocaleDateString("en-US")}
                         </p>
                  <div className="card-rating">
                    <span className="badge text-white">4.4/5</span>
                    <span className="review__text">Average </span>
                  </div>

                  <span className="tour-hour mb-4 ">
                    <Link
                      to={"/details/" + data._id}
                      state={{ from: data, api: api }}
                    >
                      see Details
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
