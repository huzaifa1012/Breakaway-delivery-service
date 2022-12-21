import Header from "../../navbar/navbar";
import React from "react";
import Categories from "../../categories/categories";
import Cards from "../../CardsSection/cards";
import GiftsBanner from "../../GiftsBanner/GiftsBanner";
import Carausal from "../../carausal/carausal"
export default function Gifts() {
  return (
    <>

      <Header />
      <Carausal/>    
      <Categories />
      <Cards />
      <h1>Gifts Section</h1>
    </>
  );
}
