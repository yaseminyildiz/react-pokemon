import React, { useState, useEffect } from 'react'
import gsap from 'gsap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, FormControl, Button} from 'react-bootstrap';

const Nav = styled.nav`
  .navbar-bg{
    transition: all .3s;
    background: rgb(0,0,0);
    background: -moz-linear-gradient(163deg, rgba(0,0,0,1) 53%, rgba(0,4,15,1) 61%, rgba(0,6,23,1) 65%, rgba(0,8,32,1) 70%, rgba(0,10,42,1) 75%, rgba(0,12,50,1) 79%, rgba(0,13,56,1) 82%, rgba(0,15,63,1) 86%, rgba(0,16,67,1) 88%, rgba(0,17,73,1) 91%, rgba(0,18,77,1) 93%, rgba(0,20,84,1) 97%, rgba(0,21,89,1) 100%);
    background: -webkit-linear-gradient(163deg, rgba(0,0,0,1) 53%, rgba(0,4,15,1) 61%, rgba(0,6,23,1) 65%, rgba(0,8,32,1) 70%, rgba(0,10,42,1) 75%, rgba(0,12,50,1) 79%, rgba(0,13,56,1) 82%, rgba(0,15,63,1) 86%, rgba(0,16,67,1) 88%, rgba(0,17,73,1) 91%, rgba(0,18,77,1) 93%, rgba(0,20,84,1) 97%, rgba(0,21,89,1) 100%);
    background: linear-gradient(163deg, rgba(0,0,0,1) 53%, rgba(0,4,15,1) 61%, rgba(0,6,23,1) 65%, rgba(0,8,32,1) 70%, rgba(0,10,42,1) 75%, rgba(0,12,50,1) 79%, rgba(0,13,56,1) 82%, rgba(0,15,63,1) 86%, rgba(0,16,67,1) 88%, rgba(0,17,73,1) 91%, rgba(0,18,77,1) 93%, rgba(0,20,84,1) 97%, rgba(0,21,89,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#001559",GradientType=1);  color: white;
  }
`

const Navbar = () => {
  const [navMenuActive, setnavMenuActive] = useState(false)
  const [navbarTransparent, setnavbarTransparent] = useState(true)

  const NavbarList = styled.div`
    z-index: 100;
    background: rgb(0,0,0);
    background: -moz-linear-gradient(163deg, rgba(0,0,0,1) 53%, rgba(0,4,15,1) 61%, rgba(0,6,23,1) 65%, rgba(0,8,32,1) 70%, rgba(0,10,42,1) 75%, rgba(0,12,50,1) 79%, rgba(0,13,56,1) 82%, rgba(0,15,63,1) 86%, rgba(0,16,67,1) 88%, rgba(0,17,73,1) 91%, rgba(0,18,77,1) 93%, rgba(0,20,84,1) 97%, rgba(0,21,89,1) 100%);
    background: -webkit-linear-gradient(163deg, rgba(0,0,0,1) 53%, rgba(0,4,15,1) 61%, rgba(0,6,23,1) 65%, rgba(0,8,32,1) 70%, rgba(0,10,42,1) 75%, rgba(0,12,50,1) 79%, rgba(0,13,56,1) 82%, rgba(0,15,63,1) 86%, rgba(0,16,67,1) 88%, rgba(0,17,73,1) 91%, rgba(0,18,77,1) 93%, rgba(0,20,84,1) 97%, rgba(0,21,89,1) 100%);
    background: linear-gradient(163deg, rgba(0,0,0,1) 53%, rgba(0,4,15,1) 61%, rgba(0,6,23,1) 65%, rgba(0,8,32,1) 70%, rgba(0,10,42,1) 75%, rgba(0,12,50,1) 79%, rgba(0,13,56,1) 82%, rgba(0,15,63,1) 86%, rgba(0,16,67,1) 88%, rgba(0,17,73,1) 91%, rgba(0,18,77,1) 93%, rgba(0,20,84,1) 97%, rgba(0,21,89,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#001559",GradientType=1);  color: white;
    position: fixed;
    width: 100%;
    top: 0;
    padding: 75px 1rem 1rem 1rem;
    transition: all 1s;
    ${!navMenuActive && "transform: translateY(-100%);"}
  `

  const changeNavBackground = () => {
    window.scrollY <= 50 ? setnavbarTransparent(true) : setnavbarTransparent(false)
  }

  window.addEventListener('scroll', changeNavBackground)

   useEffect(() => {
     gsap.from(".navbar", {
       y: -70,
       opacity: 0,
       duration: .5,
       ease: "linear",
     });
   }, [])
 
  return (
    <Nav>
     
     <Navbar bg="light" expand="lg">
  
  <Navbar.Brand href="#home">
      <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
  
    Navbar scroll
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Link</Nav.Link>
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    
    </Nav>
  )
}

export default Navbar