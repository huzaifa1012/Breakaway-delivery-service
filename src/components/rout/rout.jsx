import React from "react";
import {  Route, Routes } from "react-router-dom";

import Main from "../MainPage/main";
import About from "../About/about.jsx"
import Contact from "../rout/Contact";
import Company from"../COMPANY Components/Company Login/company"
import PageNotFound from "../../404/404"; 
import CompanyPage from "../COMPANY Components/CompanyPageFolder/companyPage";
import Register from "../COMPANY Components/Register/Register"
import Gifts from "../gifts/media/gift";
import Simpleorder from "../SimpleOrderForm/simpleOrderForm.jsx"
import ApplyRegistration from "../apply for registration/apply registration";
import Product from "../Product-page/product"
export default function Rout() {
  return (
    <>

<Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/" element={<Main/>} />
          <Route path="/company" element={<Company/>} />
          <Route path="*" element={<PageNotFound/>} />
          <Route path="/companyorder" element={<CompanyPage/>} />
          <Route path="/signup" element={<Register/>} />
          <Route path="/gifts" element={<Gifts/>} />
          <Route path="/order" element={<Simpleorder/>} />
          <Route path="/registration" element={<ApplyRegistration/>} />
          <Route path="/selectedgift" element={<Product/>} />
          
        </Routes>

        {/* <ul>
          <li> <Link to="contact"> Contact </Link></li>
          <li><Link to="about">About</Link></li>
          <li>Main 3</li>
        </ul> */}

    </>
  );
}
