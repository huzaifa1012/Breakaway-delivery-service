import React, { useState } from "react";
import "./the-product-style.css";
import Header from "../navbar/navbar";
import Spacer from "../spacer-for-header/spacer";
// Import For Modal
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Product() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
<<<<<<< HEAD
  const [getData, setGetData] = useState([]);
  const location = useLocation();
  const queryData = location.state;
  const [modalName, setModalName] = useState("");
  const [modalEmail, setModalEmail] = useState("");
  const [modalPhone, setModalPhone] = useState("");
  const [modalPick, setModalPick] = useState("");
  const [modalDrop, setModalDrop] = useState("");
  const [modalSelect, setModalSelect] = useState("");
  const [modalAdditionalDetails, setModalAdditionalDetails] = useState("");

  const getSelectedData = () => {
    let collectionRef = collection(db, "allProducts");
    let collectionQuery = where("time", "==", queryData.dataTime);
    const q = query(collectionRef, collectionQuery);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const alldata = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        alldata.push(data);
      });
      setGetData(alldata);
    });
  };

  useEffect(() => {
    getSelectedData();
  }, []);
=======
>>>>>>> 85e6b3eae46ee921b75944a480e627bd00cbe90d

  const saveData = () => {
    setLgShow(false);
    console.log(
      modalName,
      modalEmail,
      modalPhone,
      modalDrop,
      modalPick,
      modalSelect,
      modalAdditionalDetails
    );
  };

  return (
    <>
      <Header />
      <Spacer />

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Breakaway</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<<<<<<< HEAD
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={modalName}
              onChange={(e) => {
                setModalName(e.target.value);
              }}
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={modalEmail}
              onChange={(e) => {
                setModalEmail(e.target.value);
              }}
            />
            <label htmlFor="floatingPassword">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={modalPhone}
              onChange={(e) => {
                setModalPhone(e.target.value);
              }}
            />
            <label htmlFor="floatingPassword">Phone</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={modalPick}
              onChange={(e) => {
                setModalPick(e.target.value);
              }}
            />
            <label htmlFor="floatingPassword">Pick</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={modalDrop}
              onChange={(e) => {
                setModalDrop(e.target.value);
              }}
            />
            <label htmlFor="floatingPassword">Drop</label>
          </div>
          <select
            className="form-select form-select-md mb-3"
            aria-label="Default select example"
            onChange={(e) => {
              setModalSelect(e.target.value);
            }}
          >
            <option value="Select Category">Select Category</option>
            <option value="Normal">Normal</option>
            <option value="Company">Company</option>
          </select>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={modalAdditionalDetails}
              onChange={(e) => {
                setModalAdditionalDetails(e.target.value);
              }}
            />
            <label htmlFor="floatingPassword">Additional Details</label>
          </div>
=======
          <iframe
            src="https://www.youtube.com/embed/DD9rjiQyV_M?start=4"
            title="Breakaway Player"
            frameborder="0"
            className="prod-iframe-vid"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
>>>>>>> 85e6b3eae46ee921b75944a480e627bd00cbe90d
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={saveData}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
<<<<<<< HEAD

      {getData.map((currentEl, index) => {
        return (
          <div className="prod-wrap">
            <div className="left-of-selected-prod">
              <div className="container-prod">
                <div className="medias-wrap">
                  <div className="product-image">
                    <img
                      src="https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-PNG-Cutout.png"
                      alt=""
                      className="product-pic"
                    />
                  </div>
                  <div className="product-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      onClick={() => setLgShow(true)}
                      className="bi bi-play-circle-fill play-yt-vid-icon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg>
                  </div>
                </div>
                <div className="product-details">
                  <header>
                    <h1 className="title">{currentEl.name}</h1>
                    <div className="price">
                      <span className="current">{currentEl.price}</span>
                    </div>
                  </header>
                  <article>
                    <h5>Description</h5>
                    <p>{currentEl.detail}</p>
                  </article>
                  <div className="controls"></div>
                  <div className="footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setLgShow(true);
                      }}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
=======
      <div className="prod-wrap">
        <div className="left-of-selected-prod">
          <div className="container-prod">
            {/*   https://www.jerecho.com/codepen/nike-product-page/ */}
            <div className="medias-wrap">
              <div className="product-image">
                <img
                  src="https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-PNG-Cutout.png"
                  alt=""
                  className="product-pic"
                />
              </div>
              {/* <div className="dots">
                <a href="#!" className="active">
                <i>1</i>
                </a>
                <a href="#!">
                <i>2</i>
                </a>
                <a href="#!">
                <i>3</i>
                </a>
                <a href="#!">
                <i>4</i>
                </a>
              </div> */}
              <div className="product-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  onClick={() => setLgShow(true)}
                  className="bi bi-play-circle-fill play-yt-vid-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                </svg>
              </div>
            </div>
            <div className="product-details">
              <header>
                <h1 className="title">Nike Roshe Run</h1>
                {/* <span className="colorCat">mint green</span> */}
                <div className="price">
                  {/* <span className="before">$150</span> */}
                  <span className="current">$144.99</span>
                </div>
                {/* Stars */}
                {/* <div className="rate">
                <a href="#!" className="active">
                ★
                </a>
                <a href="#!" className="active">
                ★
                </a>
                <a href="#!" className="active">
                ★
                </a>
                <a href="#!">★</a>
                <a href="#!">★</a>
              </div> */}
              </header>
              <article>
                <h5>Description</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </article>
              <div className="controls">
                <div className="color">
                  <h5>color</h5>
                  <ul>
                    <li>
                      <a href="#!" className="colors color-bdot1 active" />
                    </li>
                    <li>
                      <a href="#!" className="colors color-bdot2" />
                    </li>
                    <li>
                      <a href="#!" className="colors color-bdot3" />
                    </li>
                    <li>
                      <a href="#!" className="colors color-bdot4" />
                    </li>
                    <li>
                      <a href="#!" className="colors color-bdot5" />
                    </li>
                  </ul>
                </div>
                <div className="size">
                  <h5>size</h5>
                  <a href="#!" className="option">
                    (UK 8)
                  </a>
                </div>
                <div className="qty">
                  <h5>qty</h5>
                  <a href="#!" className="option">
                    (1)
                  </a>
                </div>
              </div>
              <div className="footer">
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    class="bi bi-bag-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                  </svg>
                  <span>Order Now</span>
                </button>
                {/* <a href="#!">
                <img
                src="http://co0kie.github.io/codepen/nike-product-page/share.png"
                alt=""
                />
              </a> */}
>>>>>>> 85e6b3eae46ee921b75944a480e627bd00cbe90d
              </div>
            </div>
          </div>
          {/* <a
          href="https://www.youtube.com/watch?v=qGOxPVHfZuE"
          target="_blank"
          title="Watch me speed code this"
          style={{ position: "fixed", bottom: "10px", right: "10px" }}
          >
          <img src="http://co0kie.github.io/codepen/youtube.png" alt="" />
        </a> */}
        </div>
        <div className="right-of-selected-prod"></div>
      </div>
    </>
  );
}
