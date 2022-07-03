import React from "react";

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
                      Discover Trizen's Luxury Living
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
      <section class="gallery-area section--padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading text-center">
                <h2 class="sec__title">Gallery Grid</h2>
                <p class="sec__desc pt-2">
                  We used bootstrap grid layout format You can change grid
                  format from 2 to 5 responsive-columns
                </p>
              </div>
            </div>
          </div>
          <div class="row padding-top-50px">
            <div class="col-lg-4">
              <div class="gallery-card">
                <a
                  class="d-block"
                  data-fancybox="gallery"
                  href="images/img5.jpg"
                  data-caption="Showing image 1"
                >
                  <img src="images/img5.jpg" />
                </a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="gallery-card">
                <a
                  class="d-block"
                  data-fancybox="gallery"
                  href="images/img29.jpg"
                  data-caption="Showing image 2"
                >
                  <img src="images/img29.jpg" />
                </a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="gallery-card">
                <a
                  class="d-block"
                  data-fancybox="gallery"
                  href="images/img30.jpg"
                  data-caption="Showing image 3"
                >
                  <img src="images/img30.jpg" />
                </a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="gallery-card">
                <a
                  class="d-block"
                  data-fancybox="gallery"
                  href="images/img31.jpg"
                  data-caption="Showing image 4"
                >
                  <img src="images/img31.jpg" />
                </a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="gallery-card">
                <a
                  class="d-block"
                  data-fancybox="gallery"
                  href="images/img32.jpg"
                  data-caption="Showing image 5"
                >
                  <img src="images/img32.jpg" />
                </a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="gallery-card">
                <a
                  class="d-block"
                  data-fancybox="gallery"
                  href="images/img33.jpg"
                  data-caption="Showing image 6"
                >
                  <img src="images/img33.jpg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
