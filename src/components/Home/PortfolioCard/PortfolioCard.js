import React from "react";
import { Carousel } from "react-responsive-carousel";
import carousel1 from "../../../images/carousel-1.png";
import carousel2 from "../../../images/carousel-2.png";
import carousel3 from "../../../images/carousel-3.jpg";
import carousel4 from "../../../images/carousel-4.png";
import carousel5 from "../../../images/carousel-5.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./PortfolioCard.css";
import Slider from "react-slick";

const PortfolioCard = () => {
  return (
    <div
      className="container"  style={{ width: 700, height: 500, marginTop: 50  }}
    >
      <Carousel className="slide" style={{ borderRadius: 15 }}  >
        <div>
          <img src={carousel2} alt="" />
        </div>
        <div>
          <img src={carousel1} alt="" />
        </div>
        <div>
          <img src={carousel3} alt="" />
        </div>
        <div>
          <img src={carousel5} alt="" />
        </div>
        <div>
          <img src={carousel4} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default PortfolioCard;
