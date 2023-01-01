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
  startAt,
  startAfter,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";

export default function Categories() {
  const [allProduct, setAllProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [paginationNumber, setPaginationNumber] = useState("");
  const [orderingNo, setOrderingNo] = useState(5);
  const [productLength, setProductLength] = useState(0);
  const [showMoreProductQuery, setShowMoreProductQuery] = useState("");
  const [productCondtion, setProductCondtion] = useState(false);
  const [gettingDataQueryNo, setGettingDataQueryNo] = useState(0);

  const allProductsData = () => {
    let collectionRef = collection(db, "allProducts");
    let ordering = orderBy("time", "asc");
    let limiting = limit(orderingNo);

    const q = query(collectionRef, ordering, limiting);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setProductLength(querySnapshot.size);
      let lastInvisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      setPaginationNumber(lastInvisible);
      console.log(paginationNumber);
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

    // To stop realtime updates
    return () => unsubscribe();
  };

  const getAllCategories = () => {
    let collectionRef = collection(db, "allProducts");

    const q = query(collectionRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const category = [];
      querySnapshot.forEach((doc) => {
        category.push(doc.data().category);
      });
      let getCategory = [...new Set(category)];
      setCategories(getCategory);
    });

    // To stop realtime updates
    return () => unsubscribe();
  };

  useEffect(() => {
    allProductsData();
    getAllCategories();
  }, []);

  const iterateData = (currentEl) => {
    setGettingDataQueryNo(1);
    setShowMoreProductQuery(currentEl);

    let collectionRef = collection(db, "allProducts");
    let collectionQuery = where("category", "==", currentEl);
    let limitingQuery = limit(5);

    const q = query(collectionRef, collectionQuery, limitingQuery);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setProductLength(querySnapshot.size);
      let setData = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        setData.push(data);
      });
      setAllProduct(setData);
    });

    // To stop realtime updates
    return () => unsubscribe();
  };

  let navigate = useNavigate();
  const moveUser = (time, name) => {
    console.log(time, name);
    navigate("/selectedgift");
  };

  const showmoreProduct = () => {
    console.log(showMoreProductQuery);

    let collectionRef = collection(db, "allProducts");
    let collectionQuery = where("category", "==", showMoreProductQuery);
    let ordering = orderBy("time", "asc");
    let limiting = limit(orderingNo);
    let paginationQuery = startAfter(paginationNumber);
    const q = query(
      collectionRef,
      ordering,
      limiting,
      paginationQuery,
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setProductLength(querySnapshot.size);
      let lastInvisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      setPaginationNumber(lastInvisible);
      console.log(paginationNumber);
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
                  <div
                    className="prod-box-wrap"
                    key={index}
                    onClick={() => {
                      moveUser(currentEl.time, currentEl.name);
                    }}
                  >
                    <div className="prod-box">
                      <div className="box-img-wrap">
                        <img
                          src={currentEl.image[0]}
                          alt="product-image"
                          className="prod-img"
                        />
                      </div>
                      <div className="box-text-wrap">
                        <h6 className="prod-title-text">{currentEl.name}</h6>
                        <button className="buy-btn-s">Order</button>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      {productLength !== 0 ? (
        <div className="container-fluid my-3">
          <div className="row">
            <div className="col text-center">
              <button className="show-more" onClick={showmoreProduct}>
                Show More
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
