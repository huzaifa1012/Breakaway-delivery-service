import React, { useState, useEffect } from "react";
import Header from "../../navbar/navbar";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Button, Checkbox, Form, Input } from "antd";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseconfig";
import Swal from "sweetalert2";
// css
import "./register.css";
import { Link } from "react-router-dom";
import Footer from "../../Footer/footer";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";

export default function RegisterationForm() {
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        navigate("/companyorder");
      } else {
      }
    });
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setuserName] = useState("");
  
  const navigate = useNavigate();

  async function Register() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(
        async (userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...

          const docRef = await addDoc(collection(db, "Users"), {
            name: userName,
            email: email,
            password: password,
          });
        }

        // navigate("/companyorder");
      )
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        const wrongEmaPasPopUp = () => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please correctly fill out the registration details",
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
          <div className="register-notes-right">
            <div className="data-under">
              <h2 className="register-h1">Register As Company</h2>
              <p className="company-p">
                It's Good You are Registering Your Account Here But Must
                Remember You should be a company Otherwise Your account will be
                banned permanently and you would'nt be able to access again
              </p>
            </div>
          </div>
          <div className="register-form-left">
            <Form
              name="normal_register"
              className="register-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="Name"
                rules={[{ required: true, message: "Please Type your Name!" }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="text"
                  placeholder="Name"
                  onChange={(e) => {
                    setuserName(e.target.value);
                  }}
                />
              </Form.Item>
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
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Item>
              <Form.Item>
                <a
                  className="register-form-forgot"
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
                  className="register-form-button-custom"
                  onClick={Register}
                >
                  Log in
                </Button>
                <br />
                Or <Link to="/company"> Login </Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
