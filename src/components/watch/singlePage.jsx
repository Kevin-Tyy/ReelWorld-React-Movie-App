import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { homeData, recommended } from "../../DummyData";
import Footer from "../footer/footer";
import Upcoming from "../Upcoming/Upcoming";
import "./style.css";

const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = homeData.find((item) => (item.id = parseInt(id)));
    if (item) {
      setItem(item);
    }
  }, [id]);
  const [rec, setrec] = useState(recommended);

  return (
    <>
      {item ? (
        <>
          <section className="singlePage">
            <div className="singleHeading">
              <h1>{item.name}</h1>
              <span> | {item.time} | </span> <span>HD</span>
            </div>
            <div className="container">
              <video src={item.video} controls></video>

              <div className="para">
                <h3>Date: {item.date}</h3>
                <p>{item.desc}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                  explicabo voluptatum quaerat recusandae odit esse enim
                  consectetur dolores assumenda qui!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                  explicabo voluptatum quaerat recusandae odit esse enim
                  consectetur dolores assumenda qui!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                  explicabo voluptatum quaerat recusandae odit esse enim
                  consectetur dolores assumenda qui!
                </p>
              </div>
              <div className="social">
                <h3>Share : </h3>
                <FontAwesomeIcon icon={faFacebook} className="share-icons" />
                <FontAwesomeIcon icon={faTwitter} className="share-icons" />
                <FontAwesomeIcon icon={faLinkedin} className="share-icons" />
              </div>
            </div>
          </section>
          <Upcoming items={rec} title="Recommended Movies" />
        </>
      ) : null}
      <Footer/>
    </>
  );
};
export default SinglePage;
