// import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import "./categories.css";
import "../CardsSection/cards.css";
import { db } from "../firebaseconfig";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";

export default function Categories() {
  const [allProduct, setAllProduct] = useState([]);
  const [categories, setCategories] = useState([]);

  const allProductsData = () => {
    let collectionRef = collection(db, "allProducts");
    let ordering = orderBy("time", "asc");
    let limiting = limit(10);
    const q = query(collectionRef, ordering, limiting);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const productData = [];
      const category = [];
      querySnapshot.forEach((doc) => {
        productData.push(doc.data());
        category.push(doc.data().category);
      });
      setAllProduct(productData);
      let getCategory = [...new Set(category)];
      setCategories(getCategory);
    });

    return () => unsubscribe();
  };

  useEffect(() => {
    allProductsData();
  }, []);

  const iterateData = (currentEl) => {
    let collectionRef = collection(db, "allProducts");
    let collectionQuery = where("category", "==", currentEl);
    const q = query(collectionRef, collectionQuery);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let setData = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        setData.push(data);
      });
      setAllProduct(setData);
    });
    return () => unsubscribe();
  };

  return (
    <>
      <div className="categories-main-div">
        <div className="categories-wrap">
          <div className="categUl ">
            {categories
              ? categories.map((currentEl, index) => {
                  return (
                    <button
                      className="categLi"
                      key={index}
                      onClick={() => {
                        iterateData(currentEl);
                      }}
                    >
                      {currentEl}
                    </button>
                  );
                })
              : null}
          </div>
        </div>
      </div>

      <div className="cards-wrap">
        <div className="cards-main">
          {allProduct
            ? allProduct.map((currentEl, index) => {
                return (
                  <div className="prod-box-wrap" key={index}>
                    <div className="prod-box">
                      <div className="box-img-wrap">
                        <img
                          src={currentEl.image[0]}
                          alt=""
                          className="prod-img"
                        />
                      </div>
                      <div className="box-text-wrap">
                        <h6 className="prod-title-text">{currentEl.name}</h6>
                        <button className="buy-btn-s">Buy Now</button>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}

          {/* <div className="prod-box-wrap">
            <div className="prod-box">
              <div className="box-img-wrap">
                <img
                  src="https://cdn11.bigcommerce.com/s-mj60b85l0a/images/stencil/1280x1280/products/9415/30479/GAZ-14-LIMOUSINE-NH35-560A604-Leather-Strap-Transparent-Background-600x793__76838.1668009370.png?c=2"
                  alt=""
                  className="prod-img"
                />
              </div>
              <div className="box-text-wrap">
                <h6 className="prod-title-text">PRODUCT TITLE</h6>
                <button className="buy-btn-s">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="prod-box-wrap">
            <div className="prod-box">
              <div className="box-img-wrap">
                <img
                  src="https://cdn11.bigcommerce.com/s-mj60b85l0a/images/stencil/1280x1280/products/9415/30479/GAZ-14-LIMOUSINE-NH35-560A604-Leather-Strap-Transparent-Background-600x793__76838.1668009370.png?c=2"
                  alt=""
                  className="prod-img"
                />
              </div>
              <div className="box-text-wrap">
                <h6 className="prod-title-text">PRODUCT TITLE</h6>
                <button className="buy-btn-s">Buy Now</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
