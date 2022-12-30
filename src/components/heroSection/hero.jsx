import React from "react";
import { Link } from "react-router-dom";

import "./hero.css";

export default function Hero() {
  return (
    <>
      <div className="ultra">
        <div className="hero-wrap">
          <div className="hero-main">
            <div className="fin-main w3-animate-bottom">
              <h1 className="hero-h1"> The Best Courier Service Ever</h1>

              <div className="heroHr"></div>
              <p className="hero-p">
                Lorem ipsum dolor, sit amet consectetur m dolor, sit amet
                consectetur adipisicing elit. Dicta animi quidem
              </p>
              {/* <span className="importedbtn">
                <a href="#id-for-navigate-to-hero" >
                </a>
              </span> */}
              <div className="hero-buttons-wrap">
                <Link to={"./order"}>
                  <button className="cr-btn"> ORDER NOW </button>
                </Link>
                <button className="tr-btn">CONTACT US</button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="sider">

        </div> */}
      </div>
      
    </>
  );
}
