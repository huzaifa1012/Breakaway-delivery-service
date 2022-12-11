import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./indexwhite.png";
import "./nav.css";
import { Link } from "react-router-dom";
//

// import Hero from "../heroSection/hero"
function Header() {
  function GoToCompany() {
   }

  return (
    <>
      {/* bg="light" variant="light" */}
      <Navbar className="main-nav" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="w3-animate-left">
            <img src={Logo} alt="" className="mainLogo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="left-wrap"
          />
        </Container>
        <div className="heasder2 w3-animate-right">
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="nav-left-options"
          >
            <Nav className="me-auto">
              <Nav.Link>
                {" "}
                <li className="navbar-links">
                <Link to="/">Home</Link>
                </li>
                </Nav.Link>
              <Nav.Link>
                <li className="navbar-links" onClick={GoToCompany}>
                <Link to="/company">Company </Link>

                </li>
              </Nav.Link>
              <Nav>
                <Nav.Link>
                  <li className="navbar-links" > 

                  <Link to="/contact" color="Red">Contact </Link>

                  </li>
                  </Nav.Link>
                <Nav.Link eventKey={2}>
                  <li className="navbar-links">
                  <Link to="/about">About</Link>

                    </li>
                </Nav.Link>
              </Nav>

              {/* <NavDropdown title="Servive Provider" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Orders</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
