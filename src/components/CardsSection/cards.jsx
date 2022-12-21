import React, { useEffect, useState } from "react";
import { db } from "../firebaseconfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import "./cards.css";
export default function Cards ()  {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const gettingRealtimeProducts = () => {
      const q = query(collection(db, "products"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push(doc.data());
          setProducts((products) => {
            let setToUSF = [...products, doc.data()];
            return setToUSF;
          });
        });
        console.log(products);
      });
    };
    gettingRealtimeProducts();
  }, []);

  return (
    <>
      <div className="cards-wrap">
        <div className="cards-main">
          
        {products.map((data,i)=>{
            return (
              <div className="prod-box-wrap" key={i}>
            <div className="prod-box">
              <div className="box-img-wrap">
                <img
                  src={data.img}
                  alt=""
                  className="prod-img"
                />
              </div>
              <div className="box-text-wrap">
                <h6 className="prod-title-text">{data.name}</h6>
                <button className="buy-btn-s">Buy Now</button>
              </div>
            </div>
          </div>
            )

})}
          <div className="prod-box-wrap">
            <div className="prod-box">
              <div className="box-img-wrap">
                <img
                  src="https://confluence.iconasys.com/download/attachments/1444305/PNG_transparency_demonstration_1.png?version=1&modificationDate=1490046294000&api=v2"
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
                  src="https://www.sellenis.com/wp-content/uploads/tobacco_header.png"
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
                  src="https://www.seekpng.com/png/detail/74-747933_free-macbook-pro-png-images-png-apple-laptop.png"
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
                  src="https://www.pngall.com/wp-content/uploads/2/Sports-Bike-PNG-HD-Image.png"
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
                  src="https://www.sellenis.com/wp-content/uploads/tobacco_header.png"
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
                  src="https://www.sellenis.com/wp-content/uploads/tobacco_header.png"
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgG8OFFZqtiVds6cSF7AuXLQwIziFCYHdsyed2IdtV-ZYArpW1EkCt841C43CdTHvaxNQ&usqp=CAU"
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
                  src="https://cdn11.bigcommerce.com/s-hkb12/images/stencil/1280x1280/products/1194/5862/cross_wing_6__87291.1564358672.350.350__50726.1641680398.png?c=2"
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
                  src="https://www.sellenis.com/wp-content/uploads/tobacco_header.png"
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
                  src="https://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/licensed/oreo/packaging/oreo-frozen-dessert-bars-multipack-5-ct-1500x1140.png"
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
                  src="https://images.ctfassets.net/qpo1z0ycuc50/3iWhkNRw5B4nfjemVVUtVd/f9f79c03df72be4e92d4757c55abeb7a/X3-Product-Picture-With-Peripherals.png?w=850&q=65"
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
                  src="https://cdn.dropspace.co/wp-content/uploads/2021/07/santhosh-kumar-RqYTuWkTdEs-unsplash_648f5b48-e1630071517641-768x696.png"
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
          </div>
        </div>
      </div>
    </>
  );
};
