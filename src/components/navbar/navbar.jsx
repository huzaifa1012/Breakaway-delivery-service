 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
 import NavDropdown from 'react-bootstrap/NavDropdown';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Logo from './indexwhite.png'
 import "./nav.css"
 import { Link } from 'react-router-dom';

import Company from '../CompanySection/company';
//  

// import Hero from "../heroSection/hero"
 function Header() {

  function GoToCompany(){
    // const ThisForComp =()=>{

    //    Swal.fire({
    //     title: 'This Section Is Only For Contracters & Companies',
    //     showClass: {
    //       popup: 'animate__animated animate__fadeInDown'
    //     },
    //     hideClass: {
    //       popup: 'animate__animated animate__fadeOutUp'
    //     } 
    //   })
    // }
    // ThisForComp()
    window.location.replace();

  }


   return (
     <>
     {/* bg="light" variant="light" */}
     <Navbar className='main-nav' collapseOnSelect expand="lg" >
       <Container>
         <Navbar.Brand href="#home" className='w3-animate-left'>
           <img src={Logo} alt=""  className='mainLogo'/>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" className='left-wrap'/>
       
       </Container>
       <div className="heasder2 w3-animate-right">
       <Navbar.Collapse id="responsive-navbar-nav" className='nav-left-options'>
           <Nav className="me-auto" >
             <Nav.Link> <a href="https://mdbootstrap.com/docs/react/getting-started/installation/" className="navbar-links"> Home </a> </Nav.Link>
             <Nav.Link to="contact" href="#">  <a href=""  className="navbar-links" onClick={GoToCompany}> Company  </a>  </Nav.Link>
           <Nav>
             <Nav.Link href="#"> <a href=""  className="navbar-links">Contact</a> </Nav.Link>
             <Nav.Link eventKey={2} href="#memes">
             <a href=""  className="navbar-links">
               About
               </a>
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