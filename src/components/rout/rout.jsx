import React from "react";
import {  Route, Routes } from "react-router-dom";

import Main from "../MainPage/main";
import About from "../About/about.jsx"
import Contact from "../rout/Contact";
import Company from"../CompanySection/company"
import PageNotFound from "../../404/404"; 
import CompanyOrderPage from "../COMPANY Components/Company Order Form/companyOrderForm";
export default function Rout() {
  return (
    <>

<Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/" element={<Main/>} />
          <Route path="/company" element={<Company/>} />
          <Route path="*" element={<PageNotFound/>} />
          <Route path="/companyorder" element={<CompanyOrderPage/>} />
        </Routes>

        {/* <ul>
          <li> <Link to="contact"> Contact </Link></li>
          <li><Link to="about">About</Link></li>
          <li>Main 3</li>
        </ul> */}

    </>
  );
}
