import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./comp-hero.css";
import { useNavigate } from "react-router-dom";
import manwithcar from "./media/manwithcar.png"
import compTruck from "./media/compTruck.gif"
import transparent from "./media/myb.gif"
import gdsmn from "./media/goodsman.png"
export default function CompanyBanner() {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user);
      } else {
        console.log("User Succesfully Signed Out");
        navigate("/");
      }
    });
  });

  function logout() {
    alert("Logout CLicked");
    const auth = getAuth();
    auth.signOut();
  }

  return (
    <>
      <div className="comp-banner-wrapper">
        <div className="comp-main">
          <div className="comp-left">
        


          <h1 className="comp-hero-h1">
             Now Register Your Business With <span className="brk-blu">  Breakaway </span>
            </h1>
            <p className="comp-hero-p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              adipisci eum ipsum in nulla veniam dolorum ad veritatis eveniet
              debitis dolore, explicabo consectetur aut libero eos similique
              pariatur enim assumenda.
            </p>
            <button
            className="comp-hero-btn"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>


          </div>

          <div className="comp-right">

   
            <img src={transparent} className="hero-main-img" alt="" />


          </div>
        </div>
      </div>
    </>
  );
}
