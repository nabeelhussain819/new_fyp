import React from "react";
import { Carousel } from "react-bootstrap";
import video4 from "../../Assets/video4.mp4";

const CarouselItem = () => {
  return (
    <div>
      <video
        playsInline
        autoPlay
        muted
        loop
        poster={video4}
        className="vedio-bg"
      >
        Your browser does not support the video tag.
        <source src={video4} type="video/webm" />
      </video>
    </div>
  );
};

export default CarouselItem;
