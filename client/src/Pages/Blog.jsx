import React from "react";
import { carouselImage, GalleryImages } from "./Utilis/Images";

export const Blog = () => {
  return (
    <div>
      <section class="breadcrumb-area bread-bg-10">
        <div class="breadcrumb-wrap">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="breadcrumb-content text-center">
                  <div class="section-heading">
                    <h2 class="sec__title text-white">
                      SMIU Gallery
                    </h2>
                  </div>
                  <span class="arrow-blink">
                    <i class="la la-arrow-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bread-svg-box">
          <svg
            class="bread-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <polygon points="100 0 50 10 0 0 0 10 100 10"></polygon>
          </svg>
        </div>
      </section>
      <section class="gallery-area section--padding bg-817">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading text-center">
                <h2 class="sec__title">Gallery Grid</h2>
                <p class="sec__desc pt-2">
               Sindh Madressatul Islam University Pictures Gallery
                </p>
              </div>
            </div>
          </div>
          <div class="row padding-top-50px">
            {carouselImage.map((data)=>{return(
  <div class="col-lg-4">
  <div class="gallery-card">
  
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
