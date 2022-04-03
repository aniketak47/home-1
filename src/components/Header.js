import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Discover your Perfect Business Nearby!</h3>
            <h4>Check Ratings, Read Reviews & Buy</h4>
            <div className="banner__btn">
            <input type="text" className="input" placeholder="     What are you looking for"/>
              <a href="" className="btn">
                Search
              </a>
            </div>
            <div className="mini">
              <div className="small">Shops</div>
              <div className="small">Home Stays</div>
              <div className="small">Restraunts</div>
              <div className="small">Music</div>
              <div className="small">More</div>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
