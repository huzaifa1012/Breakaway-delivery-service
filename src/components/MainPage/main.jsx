import React from "react";
import Header from "../navbar/navbar";
import Carausal from "../carausal/carausal";
import Hero from "../heroSection/hero";
import FormDisabledDemo from "../antdBasicForm/basicForm";
import Footer from "../Footer/footer";
import Features from "../features/feature";
import Glimps from '../Glimps/glimps.jsx'
export default function Main() {
  return (
    <>
      <Header />
      {/* <Carausal /> */}
      <Hero />
      <Features/>
      {/* <FormDisabledDemo /> */}
      <Glimps/>
      <Footer />
    </>
  );
}
