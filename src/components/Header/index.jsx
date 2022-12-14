import { Link } from "react-router-dom"
import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import "./header.css"
import Logo from "../../png/MetaBeanieLogo.png"

const Header = () => {
  return (
    <header>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} >
          <Container fluid>
            <Navbar.Brand  as={Link} to="/" id="web-title">
              <img src={Logo} alt="The Meta Beanie logo" id="logo"/>
              <h1>Meta Beanie</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              // id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              id="side-bar"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    About
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </header>
  )
}

export default Header
