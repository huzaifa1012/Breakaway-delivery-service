import React from "react";
import Checkout from "../Order Form/Checkout";
import "./simple order .css";

// images
import leftImg from "./Media/blackman.png";
import rider from "./Media/right.png";

import Header from "../navbar/navbar";
import Spacer from "../spacer-for-header/spacer";

export default function simpleOrderForm() {
  return (
    <>
      <Header />
      <Spacer/>


      <div className="mainOrder">
        <div className="leftImg">
          <img src={leftImg} className="blackImg" />
        </div>
        <div className="CenterForm>">
          <Checkout className="rightForm" />
        </div>
        <div className="rightForm">
          {/* <img src={rider} alt="" className="riderImg" /> */}
        </div>
      </div>
    </>
  );
}
