import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import slide4 from "../../assets/slide4.png";

const list = [slide1, slide2, slide3, slide4,slide1, slide2, slide3, slide4];

function Show() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <div>
      <Slider {...settings}>
        {list.map((slide, index) => (
          <div key={index} className="md:w-[458px]">
            <img src={slide} alt={`slide-${index}`} className="w-full h-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Show;
