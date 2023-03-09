import React from "react";
import HomeCard from "./HomeCard";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const CustomNext = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};
const CustomPrev = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    </div>
  );
};

const Home = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNext />,
    prevArrow: <CustomPrev />,
  };
  return (
    <div>
      <div className="homeContainer">
        <Slider {...settings}>
          {items.map((item) => (
            <HomeCard key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
