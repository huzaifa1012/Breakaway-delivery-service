import React, { useState, useEffect } from "react";
import Header from "../../navbar/navbar";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Button, Checkbox, Form, Input } from "antd";
import Footer from "../../Footer/footer";
import Swal from "sweetalert2";
import "./company.css";
import { Link } from "react-router-dom";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Company() {
  useEffect(() => {
    // Start From This
    // var user = firebase.auth().currentUser; if (user) { alert("Han he")}

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // alert("han he")
        navigate("/companyorder");
        
      } else {
        // User is signed out
    //     // ...
    //  alert("Nhi he")

      }
    });
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function SignIn() {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/companyorder");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const wrongEmaPasPopUp = () => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter correct email & password",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        };
        wrongEmaPasPopUp();
      });
    console.log(email);
    console.log(password);
  }
  const GoToSignup = () => {
    alert("signupPage");
  };

  return (
    <>
      <Header />
      <div className="sigin-form-wrap">
        <div className="sigin-form">
          <div className="login-notes-right">
            <div className="data-under">
              <h2 className="login-h1">Login</h2>
              <p className="company-p">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam rem explicabo ducimus necessitatibus quidem consequatur
                vel, incidunt esse aspernatur natus, distinctio voluptatibus
                aliquid. Reprehenderit in sapiente voluptatibus saepe nobis
                perspiciatis?
              </p>
            </div>
          </div>
            {/* <h1 className="left-login-hidden">Login</h1> */}
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
                <p
                  className="login-form-forgot"
                  onClick={() => {
                    GoToSignup();
                  }}
                >
                  Forgot password
                </p>
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
                Or <Link to="/signup"> Register now!</Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
