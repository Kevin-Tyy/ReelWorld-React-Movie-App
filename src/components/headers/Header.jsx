import {
  faBars,
  faBell,
  faSearch,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <img src="/images/logo.png" alt="" />
            </div>
            <ul className={Mobile ? "navMenu-list" : "flexSB"}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/series">Series</NavLink>
              <NavLink to="/movies">Movies</NavLink>
              <NavLink to="/pages">Pages</NavLink>
              <NavLink to="/pricing">Pricing</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </ul>
            <button
              className="toggle"
              onClick={() => {
                setMobile(!Mobile);
              }}
            >
              {Mobile ? (
                <FontAwesomeIcon icon={faTimes} className="icons" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="icons" />
              )}
            </button>
          </nav>
          <div className="account flexSB">
            <FontAwesomeIcon icon={faSearch} className="icons" />
            <FontAwesomeIcon icon={faBell} className="icons" />
            <FontAwesomeIcon icon={faUser} className="icons" />
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
