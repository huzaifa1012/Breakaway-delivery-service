import React from "react";
import "./comp-banner.css";
export default function CompanyBanner() {
  return (
    <>
      <div className="comp-banner-wrapper">
        <div className="comp-banner">
          <h1 style={{fontWeight:"100",paddingBottom:"10px"}}>Sign Commercial Contracts</h1>
          <p style={{width:"60%" , fontSize:"12px"}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            adipisci eum ipsum in nulla veniam dolorum ad veritatis eveniet
            debitis dolore, explicabo consectetur aut libero eos similique
            pariatur enim assumenda.
          </p>
        </div>
      </div>
    </>
  );
}
