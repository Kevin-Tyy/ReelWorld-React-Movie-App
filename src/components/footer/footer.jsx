import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <ul className="flex">
              <li>Privacy Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Watch List</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              blanditiis minus natus perspiciatis nemo explicabo suscipit
              perferendis, culpa quae voluptates facere architecto ipsam nobis
              quos iusto modi officia repellendus sit!
            </p>
          </div>
          <div className="box">
            <h3>Follow Us</h3>
            <FontAwesomeIcon icon={faFacebookF} className="icons" />
            <FontAwesomeIcon icon={faTwitter} className="icons" />
            <FontAwesomeIcon icon={faInstagram} className="icons" />
            <FontAwesomeIcon icon={faGithub} className="icons" />
          </div>
          <div className="box">
            <h3>Netfilx clone App</h3>
            <div className="image flexSB">
              <img src="/images/app-store-png-logo-33112.png" alt="" />
              <span>App Store</span>

              <img src="/images/play-store-logo-33868.png" alt="" />
              <span>Google Play Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
