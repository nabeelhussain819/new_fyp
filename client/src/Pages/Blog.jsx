import React from "react";
import { carouselImage, GalleryImages } from "./Utilis/Images";

export const Blog = () => {
  return (
    <div>
      <section className="breadcrumb-area bread-bg-10">
        <div className="breadcrumb-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content text-center">
                  <div className="section-heading">
                    <h2 className="sec__title text-white">
                      SMIU Gallery
                    </h2>
                  </div>
                  <span className="arrow-blink">
                    <i className="la la-arrow-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
      <section className="gallery-area section--padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <h2 className="sec__title">Gallery Grid</h2>
                <p className="sec__desc pt-2">
               Sindh Madressatul Islam University Pictures Gallery
                </p>
              </div>
            </div>
          </div>
          <div className="row padding-top-50px">
            {carouselImage.map((data)=>{return(
  <div className="col-lg-4">
  <div className="gallery-card">
  
      <img src={data.image} />
    
  </div>
</div>
            )})}          
       
          </div>
        </div>
      </section>
    </div>
  );
};
