import React from "react";
import { slider1 } from "./common/Helper";
import Header from "./Header";

function Slider() {
  return (
    <>
      <Header />
      <section className="vh-100  bg-info text-center ">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h1 className="text_style text-light">Slider</h1>
            </div>
          </div>
        </div>
        <div className="overflow-x-hidden">
          <div>
            <div className="slider-straight pt-4 adjust justify-content-start">
              <div className="slide-track-straight  position-relative z-index-1">
                {slider1.map((obj, index) => (
                  <div className="slide" key={index}>
                    <img src={obj.imgUrl} alt="SliderImg" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slider;
