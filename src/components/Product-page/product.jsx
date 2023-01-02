import React, { useState, useEffect } from "react";
import "./the-product-style.css";
import Header from "../navbar/navbar";
import Spacer from "../spacer-for-header/spacer";
import { useLocation } from "react-router-dom";
import { db } from "../firebaseconfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
// Modal Imports
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function Product() {
  const [lgShow, setLgShow] = useState(false);
  const [getData, setGetData] = useState([]);
  const location = useLocation();
  const queryData = location.state;

  const getSelectedData = () => {
    let collectionRef = collection(db, "allProducts");
    let collectionQuery = where("time", "==", queryData.dataTime);
    const q = query(collectionRef, collectionQuery);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const alldata = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        alldata.push(data);
      });
      setGetData(alldata);
    });
  };

  useEffect(() => {
    getSelectedData();
  }, []);

  return (
    <>
      <Header />
      <Spacer />
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Order Data
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Email</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Phone</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Pick</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Drop</label>
          </div>
        </Modal.Body>
      </Modal>
      {getData.map((currentEl, index) => {
        return (
          <div className="prod-wrap">
            <div className="left-of-selected-prod">
              <div className="container-prod">
                <div className="medias-wrap">
                  <div className="product-image">
                    <img
                      src="https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-PNG-Cutout.png"
                      alt=""
                      className="product-pic"
                    />
                  </div>
                  <div className="product-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      onClick={() => setLgShow(true)}
                      className="bi bi-play-circle-fill play-yt-vid-icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg>
                  </div>
                </div>
                <div className="product-details">
                  <header>
                    <h1 className="title">{currentEl.name}</h1>
                    <div className="price">
                      <span className="current">{currentEl.price}</span>
                    </div>
                  </header>
                  <article>
                    <h5>Description</h5>
                    <p>{currentEl.detail}</p>
                  </article>
                  <div className="controls"></div>
                  <div className="footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setLgShow(true);
                      }}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-of-selected-prod"></div>
          </div>
        );
      })}
    </>
  );
}
