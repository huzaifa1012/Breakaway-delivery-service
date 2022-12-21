import React from "react";
import "./facility.css";
export default function Facility() {
  return (
    <>
      <div className="facil-head-wrap">
    <div className="facil-head">
      <h1 className="comp-facil-h1">Services</h1>
      <p className="comp-facil-p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam a quis
        amet quibusdam, veritatis blanditiis saepe iste dolorum esse? Debitis ad
        omnis sunt illo nisi. Quae dolorum magnam expedita non.
      </p>

      </div>
    </div>
      <div className="facility-wrap">
        <div className="comp-facility">
          <div className="centerer">
            <div className="facility facb">
              <div className="face-img-wrap">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4766/4766874.png"
                  alt=""
                  className="fac-icon"
                />
              </div>

              <h2 className="comp-facl-h2">Cash on deliver</h2>
              <p className="faclit-p">
                Lorem ipsueniti asperiores iure consequuntur alias cupiditate
                eos electus vom dolor sit amet consectetur adip
              </p>
              <a href="#">Learn more.</a>
            </div>
            <div className="facility facw">
              <div className="face-img-wrap">
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_62163.png"
                  alt=""
                  className="fac-icon"
                />
              </div>
              <h2 className="comp-facl-h2">24 Hour Secvice</h2>
              <p className="faclit-p">
                Lorem ipsueniti asperiores iure consequuntur alias cupiditate
                eos electus vom dolor sit amet consectetur adipisici
              </p>
              <a href="#">Learn more.</a>
            </div>
            <div className="facility facb ">
              <div className="face-img-wrap">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/45/45880.png"
                  alt=""
                  className="fac-icon"
                />
              </div>
              <h2 className="comp-facl-h2">Huge Quantity</h2>
              <p className="faclit-p">
                Lorem ipsueniti asperiores iure consequuntur alias cupiditate
                eos electus vom dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="#">Learn more.</a>
            </div>
            <div className="facility facw">
              <div className="face-img-wrap">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/75/75746.png"
                  alt=""
                  className="fac-icon"
                />
              </div>

              <h2 className="comp-facl-h2">Door to Door</h2>
              <p className="faclit-p">
                Lorem ipsueniti asperiores iure consequuntur alias cupiditate
                eos electus vom dolor sit amet consectetur adipis
              </p>
              <a href="#">Learn more.</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
