import React, { useState } from "react";
import { app, db } from "../firebaseconfig";
import { collection, addDoc } from "firebase/firestore";
import { PlusOutlined } from "@ant-design/icons";
import FileMax3 from "../Upload max3/fileupload";
import "./antd-basic-form.css";
import carGif from "./Media/resized car.gif";

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from "antd";

const { TextArea } = Input;
const FormDisabledDemo = () => {
  // All
  const [nameOfOrderPerson, setName] = useState("");
  const [email, getEmail] = useState("");
  const [phone, getPhone] = useState("");
  const [pickHere, getPickHere] = useState("");
  const [dropkHere, getDropkHere] = useState("");
  const [detail, getDetail] = useState("");

  const [componentDisabled, setComponentDisabled] = useState(false);
  const addOrderPersonData = async () => {
    const docRef = await addDoc(collection(db, "publicOrders"), {
      Name: nameOfOrderPerson,
      Email: email,
      Phone: phone,
      Pick: pickHere,
      Drop: dropkHere,
      AdditionalDetail: detail,
    });
    console.log("Document written with ID: ", docRef.id);

    return console.log(nameOfOrderPerson,email,phone,pickHere,dropkHere,detail);
  };
  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };
  return (
    <>
      <div className="form-antdwrap">
        <div className="form-antdwrap-wrap">
          <div className="left-of-form">
            <h1 className="h1-of-order">Here Order The Delivery </h1>
            <p className="p-of-order">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem fugiat hic sequi explicabo ipsam eius excepturi amet et
              animi expedita iste unde nostrum quasi, accusamus mollitia eos at
              tempore veritatis.
            </p>
            <img src={carGif} alt="Delivery Car" className="main-hero-gif" />
            <br />
            <div className="hero-button">
              <button className="helpline-btn">HELPLINE</button>
              <button className="whatsapp-btn">WHATSAPP</button>
            </div>
          </div>
          <div className="form-right w3-animate-right">
            <Form
              className="main-form"
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              onValuesChange={onFormLayoutChange}
              disabled={componentDisabled}
            >
              <Form.Item>
                <Input
                  placeholder="Your Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Item>

              <Form.Item>
                <Input placeholder="Your Email"  onChange={(e) => {
                    getEmail(e.target.value);
                  }} />
              </Form.Item>

              <Form.Item>
                <Input placeholder="Phone / Whatsapp"  onChange={(e) => {
                    getPhone(e.target.value);
                  }} />
              </Form.Item>

              <Form.Item>
                <Input placeholder="Apartment 0123/ Street/ City/ state"  onChange={(e) => {
                    getPickHere(e.target.value);
                  }}   />
              </Form.Item>

              <Form.Item>
                <Input placeholder="Apartment 0123/ Street/ City/ state"  onChange={(e) => {
                    getDropkHere(e.target.value);
                  }}   />
              </Form.Item>

                
              <Form.Item>
                <TextArea
                  rows={3}
                  placeholder="(Optional) Adiitional Details "
                  onChange={(e) => {
                    getDetail(e.target.value);
                  }
                } 
                />
              </Form.Item>
              {/* <Form.Item  valuePropName="checked">
              <Switch />
            </Form.Item> */}
              <Form.Item valuePropName="fileList" className="buton-ofform-botom">
                {/* Coming from component */}
                <FileMax3   />
              </Form.Item>
              <Form.Item className="submit-but">
                <Button id="form-button-test" className="buton-ofform-botom"
                  onClick={() => {
                    addOrderPersonData();
                  }}
                >
                  Submit Order
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default () => <FormDisabledDemo />;
