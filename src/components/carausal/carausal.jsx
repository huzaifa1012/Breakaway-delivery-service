import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./carausal.css";
function Carausal() {
  return (

    <Carousel className='mainCarausal'>
      <Carousel.Item>
        <a href="https://www.youtube.com">
        <img
        className="d-block w-100"
        src="https://www.loudmedia.com.au/wp-content/uploads/2016/12/banner-1000x350-one-way-vision.jpg"
        alt="First slide"
        
        />
        </a>
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.anytimeexpress.in/wp-content/uploads/2021/03/Air-Cargo-Agents.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.commerceplatform.services/images/vinyl-vs-fabric-which-banner-material-is-better.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carausal;