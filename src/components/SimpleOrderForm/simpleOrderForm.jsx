import React from "react";
import Checkout from "../Order Form/Checkout";
import "./simple order .css";
import leftImg from "./Media/blackman.png";
export default function simpleOrderForm() {
  return (
    <>
      <div className="mainOrder">
        <div className="leftImg">
          <img src={leftImg} className="blackImg"/>
        </div>
        <div className="rightForm>">
          <Checkout  className="rightForm"/>
        </div>
      </div>
    </>
  );
}
