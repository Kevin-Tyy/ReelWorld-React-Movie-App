import { faPlay, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
const HomeCard = ({
  item: { id, cover, name, rating, time, desc, starring, genres, tags, video },
}) => {
  return (
    <>
      <div className="box">
        <div className="coverImage">
          <img src={cover} alt="" />
        </div>
        <div className="content flex">
          <div className="details row">
            <h1>{name}</h1>
            <div className="rating flex">
              <FontAwesomeIcon icon={faStar} className="icons" />
              <FontAwesomeIcon icon={faStar} className="icons" />
              <FontAwesomeIcon icon={faStar} className="icons" />
              <FontAwesomeIcon icon={faStar} className="icons" />
              <FontAwesomeIcon icon={faStarHalf} className="icons" />
              <label>{rating}</label>&nbsp;
              <span>GP</span>
              <label>{time}</label>
            </div>
            <p>{desc}</p>
            <div className="cast">
              <h4>
                <span>Starring</span>
                {starring}
              </h4>
              <h4>
                <span>Genres</span>
                {genres}
              </h4>
              <h4>
                <span>Tags</span>
                {tags}
              </h4>
            </div>
            <button className="primary-btn">
              <FontAwesomeIcon icon={faPlay} />
              &nbsp;&nbsp; PLAY NOW
            </button>
          </div>

          <div className="playButton row">
            <Link to={`./Singlepage/${id}`}>
              <button>
                <div className="img">
                  <img src="./images/play-button.png" alt=""  className="static"/>
                  <img src="./images/play.png" alt="" className="change" />
                </div>
                WATCH TRAILER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
