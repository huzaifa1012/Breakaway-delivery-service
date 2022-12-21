import React from "react";
import Header from "../../navbar/navbar";
import CompanyRegistForm from "../com-regist-how-to/comp-howto";
import Facility from "../comp facility/facility";
import CompanyBanner from "../company hero/comp-hero";
import HowToRegisterCompany from "../How to Register/howToRegister";

export default function CompanyOrderPage (){

return(
    <>
    <Header/>
    <CompanyBanner/>
    <Facility/>
    <HowToRegisterCompany/>
    {/* <CompanyRegistForm/> */}
    </>
)



}