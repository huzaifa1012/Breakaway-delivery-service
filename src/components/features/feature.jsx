import React from "react";
import "./features.css";

import gift from "./media/gift.png";
import company from "./media/company.png";
import order from "./media/order.png";
export default function Features() {
  return (
    <>
      <div className="featuresWrap">
        <div className="features">
          <div className="featureOne featureBox">
            <div className="img-wrapfeatur">
              <img src={gift} width={"70px"} alt="" className="img-class" />
            </div>
            <h3>Send Gifts</h3>
            <hr className="features-hr" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              quas Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              quia nihil?
            </p>
          </div>

          <div className="featureTwo featureBox featHIghlightes">
            <div className="img-wrapfeatur">
              <img src={company} width={"70px"} alt="" />
            </div>
            <h3>Register Company</h3>
            <hr className="features-hr" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              quas Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              quia nihil?
            </p>
          </div>

          <div className="featureThree featureBox">
            <div className="img-wrapfeatur">
              <img src={order} width={"70px"} alt="" />
            </div>
            <h3>Custom Order</h3>
            <hr className="features-hr" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              quas Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              quia nihil?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
