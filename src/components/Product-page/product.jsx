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

      {/* <div className="section-fluid-main">
        <div className="section">
          <div className="info-wrap mob-margin">
            <p className="title-up">Modern chair</p>
            <h2>Sella Gastro</h2>
            <h4>$174 <span>$237</span></h4>	
            <div className="section-fluid">
              <input className="desc-btn" type="radio" id="desc-1" name="desc-btn" defaultChecked />
              <label htmlFor="desc-1">Description</label> 
              <input className="desc-btn" type="radio" id="desc-2" name="desc-btn" />
              <label htmlFor="desc-2">Details</label> 
              <div className="section-fluid desc-sec accor-1">
                <p>The chair construction is made of ash tree. Upholstery and wood color at customer's request.</p>
              </div>	
              <div className="section-fluid desc-sec accor-2">
                <div className="section-inline">
                  <p><span>76</span>cm<br />Lenght</p>
                </div>	
                <div className="section-inline">
                  <p><span>68</span>cm<br />Width</p>
                </div>
                <div className="section-inline">
                  <p><span>87</span>cm<br />Height</p>
                </div>
                <div className="section-inline">
                  <p><span>10</span>kg<br />Weight</p>
                </div>
              </div>	
            </div>	
            <h5>Choose upholstery:</h5>
          </div>
          <div className="clearfix" />
          <input className="color-btn for-color-1" type="radio" id="color-1" name="color-btn" defaultChecked />
          <label className="first-color" htmlFor="color-1" /> 
          <input className="color-btn for-color-2" type="radio" id="color-2" name="color-btn" />
          <label className="color-2" htmlFor="color-2" /> 
          <input className="color-btn for-color-3" type="radio" id="color-3" name="color-btn" />
          <label className="color-3" htmlFor="color-3" /> 
          <input className="color-btn for-color-4" type="radio" id="color-4" name="color-btn" />
          <label className="color-4" htmlFor="color-4" /> 
          <input className="color-btn for-color-5" type="radio" id="color-5" name="color-btn" />
          <label className="color-5" htmlFor="color-5" /> 
          <input className="color-btn for-color-6" type="radio" id="color-6" name="color-btn" />
          <label className="color-6" htmlFor="color-6" /> 
          <div className="clearfix" />
          <div className="info-wrap">
            <a href="#" className="btn"><i className="uil uil-shopping-cart icon" /> Order Now</a>
          </div>
          <div className="img-wrap chair-1" />
          <div className="img-wrap chair-2" />	
          <div className="img-wrap chair-3" />
          <div className="img-wrap chair-4" />
          <div className="img-wrap chair-5" />
          <div className="img-wrap chair-6" />		
          <div className="back-color" />	
          <div className="back-color chair-2" />	
          <div className="back-color chair-3" />	
          <div className="back-color chair-4" />	
          <div className="back-color chair-5" />	
          <div className="back-color chair-6" />	
          <a href="https://front.codes/" className="logo" target="_blank">
            <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
          </a>	
        </div>
      </div> */}
    </>
  );
}
