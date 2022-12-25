import React from "react";
import { Button, Grid } from "@nextui-org/react";
import "./glimps.css";
export default function Glimps() {
  return (
    <>
      <div className="glimps-wrap">
        <div className="glimps">
          <div className="glimp-one ">
            <div className="glimp-left special-glimp-box">
              <h2 className="special-glimp-h">
                Only We Are Giving You Freehand
              </h2>
              <p>
                Lorem sit amet consectetur adipisicing elit. Laborum sapiente
                ipsa exercitationem, officia amet debitis sequi distinctio
                impedit commodi corrupti similique voluptas enim incidunt
                dolorem assumenda, nisi, qui quos esse.So we decided to eat all
                these goods that's why they are angry and we don't care
              </p>

              {/* <button >Learn More</button> */}
            </div>
            <div className="glimp-right">
              <img
                src="https://i0.wp.com/www.olakalauk.com/wp-content/uploads/2018/08/fb3c468a-olakala-deli-400px.png?fit=400%2C409&ssl=1"
                alt=""
                className="glimps-img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="others-wrap">
        <div className="other">
          <div className="box">
            <div className="left">
              <img
                src="https://www.fedex.com/content/dam/fedex/us-united-states/shipping/images/POD_fy20_dollargeneral_e1a3961_fdi.jpg"
                alt=""
                className="other-img"
              />
            </div>
            <div className="right">
              <div className="underMaterial">
                <h2>
                  <span className="heading-span">The Heading Text</span>
                </h2>
                <p className="other-p">
                  amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
                  Eligendi Lillum, odit porro numquam ex sit totam modi sunt
                  sint ad aliquam optio culpa natus laudantium nesciunt
                  recusandae tenetur.
                </p>
                <a href="#" className="link-a">
                  LETS SIGNUP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
