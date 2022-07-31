import React from "react";
import logo1 from "../../Assets/logo-5.png";
const CarouselItem = () => {
  return (
    <div>
        <section class="">
        <div className="hero6 hero-wrapper d-flex justify-content-center align-items-center">
         <div class="container section-padding" style={{marginTop: "150px"}}>
                    <div class="row">
                        <div class="col-lg-7 col-12">
                            <div class="hero-text"> 
                                <div class="hero-title-wrap d-flex  align-items-center mb-4">

                                    <h1 class="hero-title ms-3 shadow-lg  mb-0">Hello Students!</h1>
                                </div>

                                <h2 class="mb-4 shadow-lg p-3 hero-title ">Welcome To Evaluation System.</h2>
                            </div>
                        </div>

                        <div class="col-lg-5 col-12 position-relative">
                       <img src={logo1} class="hero-image img-fluid" alt=""/>
                        </div>

                    </div>
                </div>
</div>
</section>
       
    </div>
  );
};

export default CarouselItem;
