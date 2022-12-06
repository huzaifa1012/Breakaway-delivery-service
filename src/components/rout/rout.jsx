import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../navbar/navbar";
import Contact from "../contact/contact";
import { Link } from "react-router-dom";
export default function Rout() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/about" element={<h1>About Section</h1>} />
          <Route path="/" element={<h1>main</h1>} />
          <Route path="*" element={<h1>Wrong Data</h1>} />
        </Routes>

        <ul>
          <li> <Link to="contact"> Contact </Link></li>
          <li><Link to="about">About</Link></li>
          <li>Main 3</li>
        </ul>
      </BrowserRouter>
    </>
  );
}
