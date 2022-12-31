import Header from "../../navbar/navbar";
import React from "react";
import Categories from "../../categories/categories";
import Cards from "../../CardsSection/cards";
import GiftsBanner from "../../GiftsBanner/GiftsBanner";
import Carausal from "../../carausal/carausal"
import Spacer from "../../spacer-for-header/spacer";
export default function Gifts() {
  return (
    <>

      <Header />
      <Spacer/>
      <Carausal/>    
      <Categories />
      <Cards />
    </>
  );
}
