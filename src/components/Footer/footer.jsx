import React from "react";

import "./footer.css";
import appSticker from "./media/download app.png";
export default function Footer() {
  return (
    <>
      <div className="main-footer-wrap">
        <div className="footer">
          <div className="left-details-footer every-footer-box">
            <h3>Breakaway</h3>
            <p>
              Lorem ipsum dolor rem rerum minima qui corporis ullam incidunt
              quae ti quisquam id, officia at.
            </p>
          </div>
          <div className="left-details-footer every-footer-box address">
            <h3>Office</h3>
            <p class='far fa-building'>  Abu Dhabi/ none/ #123/ street br address.</p>
            <br />
            <p class='fas'> &#xf095; +021 21 314 22</p>
            <br />
            <p class="glyphicon"> &#x2709; Breakaway@gmail.com</p>
          </div>

          <div className="center-social-footer every-footer-box bottom2">
            <h3>Follow</h3>
            <ul className="footer-ul " >
              <i class="fa fa-facebook" >  <span className="icons-social" style={{paddingLeft:"25px"}}>  Facebook </span></i><br />
              <i class="fa fa-twitter"> <span className="icons-social"> Twitter</span></i><br />
              <i class="fa fa-whatsapp"> <span className="icons-social"> Whatsapp </span></i><br />
              <i class="fa fa-instagram">  <span className="icons-social"> Instagram </span></i>
            </ul>
          </div>
          <div className="right-download-footer every-footer-box  bottom2">
            <h3>Download</h3>
            <img
              src={appSticker}
              width="120px"
              style={{ marginTop: "-25px",marginLeft:"-10px" }}
              alt=""
            />
          </div>
        </div>
        <div className="downBar">
          <p>&copy; Copyrigted 2022 by Breakaway </p>
          
          <i class="fas fa-tol" ></i>
        </div>
      </div>
    </>
  );
}
