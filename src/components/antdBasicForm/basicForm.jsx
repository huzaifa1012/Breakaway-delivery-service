import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import FileMax3 from "../Upload max3/fileupload"
import "./antd-basic-form.css";
import carGif from "./Media/resized car.gif"

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from "antd";
import { useHref } from "react-router-dom";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
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
            <img src={carGif}  alt="Delivery Car" className="main-hero-gif" /><br />
            <div className="hero-button">
            <button className="helpline-btn">HELPLINE</button>
            <button className="whatsapp-btn">WHATSAPP</button>
            </div>
          </div>
          <div className="form-right">
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
            {/* <Form.Item label="Radio">
              <Radio.Group>
              <Radio value="apple"> Apple </Radio>
              <Radio value="pear"> Pear </Radio>
              </Radio.Group>
            </Form.Item> */}

            <Form.Item  >
              <Input placeholder="Your Name" />
            </Form.Item>

            <Form.Item  >
              <Input placeholder="Your Name" />
            </Form.Item>

            <Form.Item >
              <Input placeholder="Phone / Whatsapp" />
            </Form.Item>

            <Form.Item >
              <Input placeholder="Apartment 0123/ Street/ City/ state" />
            </Form.Item>
            
            <Form.Item >
              <Input placeholder="Apartment 0123/ Street/ City/ state" />
            </Form.Item>

            {/* <Form.Item >
          <DatePicker />
        </Form.Item>
        <Form.Item >
          <RangePicker />
        </Form.Item>
        <Form.Item >
          <InputNumber />
        </Form.Item> */}
            <Form.Item >
              <TextArea rows={3}  placeholder="(Optional) Adiitional Details "/>
            </Form.Item>
            {/* <Form.Item  valuePropName="checked">
              <Switch />
            </Form.Item> */}
            <Form.Item  valuePropName="fileList">
            
            {/* Coming from component */}
            <FileMax3/>


            </Form.Item>
            <Form.Item  className="submit-but">
              <Button>Submit Order</Button>
            </Form.Item>
          </Form>

          </div>
        </div>
      </div>
    </>
  );
};
export default () => <FormDisabledDemo />;
