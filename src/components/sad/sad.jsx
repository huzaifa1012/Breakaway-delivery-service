import React, { useEffect, useState } from "react";
import { db } from "../firebaseconfig";
import { collection, query, onSnapshot } from "firebase/firestore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const [photos, setPhotos] = useState("");

  const allPhotos = () => {
    let collectionRef = collection(db, "carousel");
    const q = query(collectionRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let allData = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data().allImages;
        allData.push(data);
      });
      setPhotos(allData[0]);
    });

    return () => unsubscribe();
  };

  useEffect(() => {
    allPhotos();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>
        {photos
          ? photos.map((data, index) => {
              return (
                <div key={index}>
                  <div className="shadow">
                    <img src={data} alt="carousel" className="carousel-image" />
                  </div>
                </div>
              );
            })
          : null}
      </Slider>
    </div>
  );
}
export default SimpleSlider;
