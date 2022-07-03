import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Complain from "./Complain";

const Details = () => {
  const location = useLocation();
  const params = useParams();
  const { from, api } = location.state;

  return (
    <div>
      <section class="breadcrumb-area bread-bg-9">
        <div class="breadcrumb-wrap">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="breadcrumb-content">
                  <div class="section-heading">
                    <h2 class="sec__title text-white">Detials</h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="breadcrumb-list text-right">
                  <ul class="list-items">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Details</li>
                  </ul>
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

      <section className="card-area section--padding">
        <div className="container">
          <div className="row">
            {[from].map((data) => {
              return (
                <>
                  <div class="col-lg-8">
                    <div class="card-item blog-card blog-card-layout-2 blog-single-card mb-5">
                      <div class="card-img before-none">
                        <img src="images/img20.jpg" alt="blog-img" />
                      </div>
                      <div class="card-body px-0 pb-0">
                        <div class="post-categories">
                          <a href="#" class="badge">
                            Travel
                          </a>
                          <a href="#" class="badge">
                            lifestyle
                          </a>
                        </div>
                        <h3 class="card-title font-size-28">{data.name}</h3>
                        <p class="card-meta pb-3">
                          <span class="post__author">
                            By{" "}
                            <a href="#" class="text-gray">
                              John Doe
                            </a>
                          </span>
                          <span class="post-dot"></span>
                          <span class="post__date"> 1 January, 2020</span>
                          <span class="post-dot"></span>
                          <span class="post__time">
                            <a href="#" class="text-gray">
                              4 Comments
                            </a>
                          </span>
                          <span class="post-dot"></span>
                          <span class="post__time">
                            <a href="#" class="text-gray">
                              202 Likes
                            </a>
                          </span>
                        </p>
                        <div class="section-block"></div>
                        <p class="card-text py-3">
                          Simple point-and-shoot digital cameras can give
                          surprising quality when they have the right lenses and
                          sensors. Because they are totally automatic in focus
                          and exposure, they just have to be pointed at a
                          subject and clicked. They have limited capabilities
                          for controlling the image
                        </p>
                        <p class="card-text pb-3">
                          Suspendisse ullamcorper lacus et commodo laoreet. Sed
                          sodales aliquet felis, quis volutpat massa imperdiet
                          in. Praesent rutrum malesuada risus, ullamcorper
                          pretium tortor
                        </p>
                        <div class="photo-block-gallery">
                          <h3 class="title pb-2">Travelling Highlight</h3>
                          <p class="card-text pb-4">
                            Quodsi sanctus pro eu, ne audire scripserit quo. Vel
                            an enim offendit salutandi, in eos quod omnes
                            epicurei, ex veri qualisque scriptorem mei.
                          </p>
                          <div class="row">
                            <div class="col-lg-4 responsive-column">
                              <div class="photo-block-item">
                                <a
                                  href="images/destination-img2.jpg"
                                  data-fancybox="gallery"
                                  data-caption="Showing image - 01"
                                  data-speed="700"
                                >
                                  <img
                                    src="images/destination-img2.jpg"
                                    alt="img"
                                  />
                                </a>
                              </div>
                            </div>
                            <div class="col-lg-4 responsive-column">
                              <div class="photo-block-item">
                                <a
                                  href="images/destination-img3.jpg"
                                  data-fancybox="gallery"
                                  data-caption="Showing image - 02"
                                  data-speed="700"
                                >
                                  <img
                                    src="images/destination-img3.jpg"
                                    alt="img"
                                  />
                                </a>
                              </div>
                            </div>
                            <div class="col-lg-4 responsive-column">
                              <div class="photo-block-item">
                                <a
                                  href="images/destination-img4.jpg"
                                  data-fancybox="gallery"
                                  data-caption="Showing image - 03"
                                  data-speed="700"
                                >
                                  <img
                                    src="images/destination-img4.jpg"
                                    alt="img"
                                  />
                                </a>
                              </div>
                            </div>
                            <div class="col-lg-6 responsive-column">
                              <div class="photo-block-item">
                                <a
                                  href="images/destination-img5.jpg"
                                  data-fancybox="gallery"
                                  data-caption="Showing image - 04"
                                  data-speed="700"
                                >
                                  <img
                                    src="images/destination-img5.jpg"
                                    alt="img"
                                  />
                                </a>
                              </div>
                            </div>
                            <div class="col-lg-6 responsive-column">
                              <div class="photo-block-item">
                                <a
                                  href="images/destination-img6.jpg"
                                  data-fancybox="gallery"
                                  data-caption="Showing image - 05"
                                  data-speed="700"
                                >
                                  <img
                                    src="images/destination-img6.jpg"
                                    alt="img"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p class="card-text padding-bottom-35px">
                          Duis mollis, est non commodo luctus, nisi erat
                          porttitor ligula, eget lacinia odio sem nec elit. Cras
                          mattis consectetur purus sit amet fermentum. Morbi leo
                          risus, porta ac consectetur ac, vestibulum at eros.
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur et.
                        </p>
                        <div class="blockquote-item margin-bottom-35px">
                          <blockquote class="mb-0">
                            <p class="blockquote__text">
                              Creativity is just connecting things. When you ask
                              creative people how they did something, they feel
                              a little guilty because they didn't really do it,
                              they just saw something. It seemed obvious to them
                              after a while. That's because they were able to
                              connect experiences they've had and synthesize new
                              things.
                            </p>
                            <h4 class="blockquote__meta">
                              - Steve Jobs <span>Founder of Apple Inc.</span>
                            </h4>
                          </blockquote>
                        </div>
                        <h3 class="title">Make better travel decisions</h3>
                        <p class="card-text pt-3 pb-4">
                          Duis mollis, est non commodo luctus, nisi erat
                          porttitor ligula, eget lacinia odio sem nec elit. Cras
                          mattis consectetur purus sit amet fermentum. Morbi leo
                          risus, porta ac consectetur ac, vestibulum at eros.
                          Vestibulum id ligula porta felis euismod semper. Donec
                          id elit non mi porta gravida at eget metus. Vestibulum
                          id ligula porta felis euismod semper
                        </p>
                        <div class="section-block"></div>
                      </div>
                    </div>
                  </div>

                  <Complain data={data} api={api} />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
