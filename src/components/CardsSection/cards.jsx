import React, { useEffect, useState } from "react";
import { db } from "../firebaseconfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import "./cards.css";
export default function Cards() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const gettingRealtimeProducts = () => {
      const q = query(collection(db, "allProducts"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const products = [];
        querySnapshot.forEach((doc) => {
          //
        });
      });
    };
    gettingRealtimeProducts();
  }, []);
  // another

  return <>{/*  */}</>;
}
