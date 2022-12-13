import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./comp-banner.css";
import { useNavigate } from "react-router-dom";
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
        <div className="comp-banner">
          <h1 style={{ fontWeight: "100", paddingBottom: "10px" }}>
            Sign Commercial Contracts
          </h1>
          <p style={{ width: "60%", fontSize: "12px" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            adipisci eum ipsum in nulla veniam dolorum ad veritatis eveniet
            debitis dolore, explicabo consectetur aut libero eos similique
            pariatur enim assumenda.
          </p>
          <button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
