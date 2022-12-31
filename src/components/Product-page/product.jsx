import React from "react";
import "./the-product-style.css";
import Header from "../navbar/navbar";
export default function Product() {
  return (
    <>
      <Header />
      <div className="prod-wrap">
        <div className="container-prod">
          {/*   https://www.jerecho.com/codepen/nike-product-page/ */}
          <div className="product-image">
            <img
              src="http://co0kie.github.io/codepen/nike-product-page/nikeLogo.png"
              alt=""
              className="product-logo"
            />
            <img
              src="http://co0kie.github.io/codepen/nike-product-page/nikeShoe.png"
              alt=""
              className="product-pic"
            />
            <div className="dots">
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
            </div>
          </div>
          <div className="product-details">
            <header>
              <h1 className="title">Nike Roshe Run</h1>
              <span className="colorCat">mint green</span>
              <div className="price">
                <span className="before">$150</span>
                <span className="current">$144.99</span>
              </div>
              <div className="rate">
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
              </div>
            </header>
            <article>
              <h5>Description</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                <img
                  src="http://co0kie.github.io/codepen/nike-product-page/cart.png"
                  alt=""
                />
                <span>add to cart</span>
              </button>
              <a href="#!">
                <img
                  src="http://co0kie.github.io/codepen/nike-product-page/share.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <a
          href="https://www.youtube.com/watch?v=qGOxPVHfZuE"
          target="_blank"
          title="Watch me speed code this"
          style={{ position: "fixed", bottom: "10px", right: "10px" }}
        >
          <img src="http://co0kie.github.io/codepen/youtube.png" alt="" />
        </a>
      </div>

      
    </>
  );
}
