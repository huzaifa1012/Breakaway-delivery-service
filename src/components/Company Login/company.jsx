import React, { useState } from "react";

import Header from "../navbar/navbar";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Footer from "../Footer/footer";
import "./company.css";
import app from "../firebaseconfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";



export default function Company() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  function SignIn() {
    const auth = getAuth();
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      navigate("/companyorder")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("we can't Logged You in ");
        // navigate=("/contact")

      });
    console.log(email);
    console.log(password);
  }
  const GoToSignup = () => {};

  return (
    <>
      <Header />
      <div className="sigin-form-wrap">
        <div className="sigin-form">
          <div className="login-notes-right">
            <div className="data-under">
              <h2 className="login-h1">Login As Company</h2>
              <p className="company-p">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam rem explicabo ducimus necessitatibus quidem consequatur
                vel, incidunt esse aspernatur natus, distinctio voluptatibus
                aliquid. Reprehenderit in sapiente voluptatibus saepe nobis
                perspiciatis?
              </p>
            </div>
          </div>
          <div className="login-form-left">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Item>
              <Form.Item>
                <a
                  className="login-form-forgot"
                  href="#"
                  onClick={() => {
                    GoToSignup();
                  }}
                >
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button-custom"
                  onClick={SignIn}
                >
                  Log in
                </Button>
                <br />
                Or <a href="https://web.whatsapp.com/">register now!</a>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
