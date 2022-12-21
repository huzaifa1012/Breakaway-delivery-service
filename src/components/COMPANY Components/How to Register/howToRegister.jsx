import React from "react";
import { Collapse } from "antd";
import "./howto-regist.css";
import howtosvg from "./media/steps.svg";
const { Panel } = Collapse;
const text = (
  <p
    style={{
      paddingLeft: 24,
    }}
  >
    By following these steps you can easily rigister your business with
    breakaway , Kindly follow all the instructions accurately to get connect
    with us. Incase if you can't apply for the register , So don't worry contact
    with us or give report about your issue . we'll fix it quickly.
  </p>
);
export default function HowToRegisterCompany() {
  return (
    <>
      <div className="comp-how-wrapper">
        <div className="comp-howRgs">
          <h1 className="comp-how-h1">How To <span className="patla-blue"> Register </span></h1>
        </div>
        <div className="comp-how-to-hero">
          <div className="comp-reg-steps">
            <Collapse bordered={true} defaultActiveKey={["2"]}>
              <Panel header="Instructions" key="1">
                {text}
              </Panel>
              <Panel header="Step 01" key="2">
                {text}
              </Panel>
              <Panel header="Step 02" key="3">
                {text}
              </Panel>
              <Panel header="Step 03" key="3">
                {text}
              </Panel>
            </Collapse>
          </div>

          <div className="comp-reg-right">
            <img src={howtosvg} alt="" className="steps-img" />
          </div>
        </div>
      </div>

    </>
  );
}
