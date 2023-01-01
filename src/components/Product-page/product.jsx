import React, { useState } from "react";
import "./the-product-style.css";
import Header from "../navbar/navbar";
import Spacer from "../spacer-for-header/spacer";
// Import For Modal
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Product() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

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
          <Modal.Title id="example-modal-sizes-title-lg">Breakaway</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src="https://www.youtube.com/embed/DD9rjiQyV_M?start=4"
            title="Breakaway Player"
            frameborder="0"
            className="prod-iframe-vid"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
      <div className="prod-wrap">
        <div className="left-of-selected-prod">
          <div className="container-prod">
            {/*   https://www.jerecho.com/codepen/nike-product-page/ */}
            <div className="medias-wrap">
              <div className="product-image">
                <img
                  src="https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-PNG-Cutout.png"
                  alt=""
                  className="product-pic"
                />
              </div>
              {/* <div className="dots">
                <a href="#!" className="active">
                <i>1</i>
                </a>
                <a href="#!">
                <i>2</i>
                </a>
                <a href="#!">
                <i>3</i>
                </a>
                <a href="#!">
                <i>4</i>
                </a>
              </div> */}
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
                <h1 className="title">Nike Roshe Run</h1>
                {/* <span className="colorCat">mint green</span> */}
                <div className="price">
                  {/* <span className="before">$150</span> */}
                  <span className="current">$144.99</span>
                </div>
                {/* Stars */}
                {/* <div className="rate">
                <a href="#!" className="active">
                ★
                </a>
                <a href="#!" className="active">
                ★
                </a>
                <a href="#!" className="active">
                ★
                </a>
                <a href="#!">★</a>
                <a href="#!">★</a>
              </div> */}
              </header>
              <article>
                <h5>Description</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </article>
              <div className="controls">
                <div className="color">
                  <h5>color</h5>
                  <ul>
                    <li>
                      <a href="#!" className="colors color-bdot1 active" />
                    </li>
                    <li>
                      <a href="#!" className="colors color-bdot2" />
                    </li>
                    <li>
                      <a href="#!" className="colors color-bdot3" />
                    </li>
                    <li>
                      <a href="#!" className="colors color-bdot4" />
                    </li>
                    <li>
                      <a href="#!" className="colors color-bdot5" />
                    </li>
                  </ul>
                </div>
                <div className="size">
                  <h5>size</h5>
                  <a href="#!" className="option">
                    (UK 8)
                  </a>
                </div>
                <div className="qty">
                  <h5>qty</h5>
                  <a href="#!" className="option">
                    (1)
                  </a>
                </div>
              </div>
              <div className="footer">
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    class="bi bi-bag-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                  </svg>
                  <span>Order Now</span>
                </button>
                {/* <a href="#!">
                <img
                src="http://co0kie.github.io/codepen/nike-product-page/share.png"
                alt=""
                />
              </a> */}
              </div>
            </div>
          </div>
          {/* <a
          href="https://www.youtube.com/watch?v=qGOxPVHfZuE"
          target="_blank"
          title="Watch me speed code this"
          style={{ position: "fixed", bottom: "10px", right: "10px" }}
          >
          <img src="http://co0kie.github.io/codepen/youtube.png" alt="" />
        </a> */}
        </div>
        <div className="right-of-selected-prod"></div>
      </div>
    </>
  );
}
