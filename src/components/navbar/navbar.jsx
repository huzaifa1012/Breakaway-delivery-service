//  import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
// import { Layout } from "./Layout.js";
// import { AcmeLogo } from "./AcmeLogo.js";

// export default function Header01() {
//   const collapseItems = [
//     "Profile",
//     "Dashboard",
//     "Activity",
//     "Analytics",
//     "System",
//     "Deployments",
//     "My Settings",
//     "Team Settings",
//     "Help & Feedback",
//     "Log Out",
//   ];

//   return (
//     <Layout>
//       <Navbar isBordered variant="sticky">
//         <Navbar.Toggle showIn="xs" />
//         <Navbar.Brand
//           css={{
//             "@xs": {
//               w: "12%",
//             },
//           }}
//         >
//           <AcmeLogo />
//           <Text b color="inherit" hideIn="xs">
            
//           </Text>
//         </Navbar.Brand>
   
//         <Navbar.Content
//           css={{
//             "@xs": {
//               w: "12%",
//               jc: "flex-end",
//             },
//           }}
//         >
//                <Navbar.Content
//           enableCursorHighlight
//           activeColor="warning"
//           hideIn="xs"
//           variant="highlight"
//         >
//           <Navbar.Link href="#">Features</Navbar.Link>
//           <Navbar.Link isActive href="#">
//             Customers
//           </Navbar.Link>
//           <Navbar.Link href="#">Pricing</Navbar.Link>
//           <Navbar.Link href="#">Company</Navbar.Link>
//         </Navbar.Content>
//           {/* <Dropdown placement="bottom-right">
//             <Navbar.Item>
//               <Dropdown.Trigger>
//                 <Avatar
//                   bordered
//                   as="button"
//                   color="warning"
//                   size="md"
//                   src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
//                 />
//               </Dropdown.Trigger>
//             </Navbar.Item>
//             <Dropdown.Menu
//               aria-label="User menu actions"
//               color="warning"
//               onAction={(actionKey) => console.log({ actionKey })}
//             >
//               <Dropdown.Item key="profile" css={{ height: "$18" }}>
//                 <Text b color="inherit" css={{ d: "flex" }}>
//                   Signed in as
//                 </Text>
//                 <Text b color="inherit" css={{ d: "flex" }}>
//                   zoey@example.com
//                 </Text>
//               </Dropdown.Item>
//               <Dropdown.Item key="settings" withDivider>
//                 My Settings
//               </Dropdown.Item>
//               <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
//               <Dropdown.Item key="analytics" withDivider>
//                 Analytics
//               </Dropdown.Item>
//               <Dropdown.Item key="system">System</Dropdown.Item>
//               <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
//               <Dropdown.Item key="help_and_feedback" withDivider>
//                 Help & Feedback
//               </Dropdown.Item>
//               <Dropdown.Item key="logout" withDivider color="error">
//                 Log Out
//               </Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown> */}
//         </Navbar.Content>
//         <Navbar.Collapse disableAnimation>
//           {collapseItems.map((item, index) => (
//             <Navbar.CollapseItem
//               key={item}
//               activeColor="warning"
//               css={{
//                 color: index === collapseItems.length - 1 ? "$error" : "",
//               }}
//               isActive={index === 2}
//             >
//               <Link
//                 color="inherit"
//                 css={{
//                   minWidth: "100%",
//                 }}
//                 href="#"
//               >
//                 {item}
//               </Link>
//             </Navbar.CollapseItem>
//           ))}
//         </Navbar.Collapse>
//       </Navbar>
//     </Layout>
//   );
// }
















 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
 import NavDropdown from 'react-bootstrap/NavDropdown';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Logo from './indexwhite.png'
 import "./nav.css"
 import { Link } from 'react-router-dom';
 function Header() {
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
           <Nav className="me-auto">
             <Nav.Link > Home </Nav.Link>
             <Nav.Link href="#">Contact</Nav.Link>
           <Nav>
             <Nav.Link href="#deets">Complain</Nav.Link>
             <Nav.Link eventKey={2} href="#memes">
               About
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