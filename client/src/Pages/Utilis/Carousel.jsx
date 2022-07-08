import React from "react";
import { Carousel } from "react-bootstrap";
import { carouselImage } from "../Utilis/Images";
const CarouselItem = () => {
  return (
    <div>
      <Carousel>
        {carouselImage.map((data) => {
          return (
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={data.image}
                alt="First slide"
              />             
            </Carousel.Item>
          );
        })}
      </Carousel>
      {/* <section className="hero-wrapper hero-wrapper3">
        <div className="hero-box pb-0 hero-bg-3 ripple-bg bg-fixed jquery-ripples">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-content pb-5 hero-content-3 text-center">
                  <div className="section-heading">
                    <h2 className="sec__title">
                      Open Your Eyes to the Hidden World
                    </h2>
                    <p className="sec__desc pt-1">
                      Book incredible things to do around the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CarouselItem;
