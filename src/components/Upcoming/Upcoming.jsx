import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Ucard from "./Ucard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const Upcoming = ({ items, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNext />,
    prevArrow: <CustomPrev />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="upcome">
        <div className="container">
          <div className="heading flexSB">
            <h1>{title}</h1>
            <Link to="/">View All</Link>
          </div>
          <div className="content">
            <Slider {...settings}>
              {items.map((item) => (
                <Ucard key={item.id} item={item} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Upcoming;
