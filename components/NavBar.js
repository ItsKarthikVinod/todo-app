import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [modalShow, setModalShow] = useState(false);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const onClickLogin = (value) => {
    setActiveLink(value);
    setModalShow(true);
  };

  return (
    <Navbar collapseOnSelect expand="md">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto kar">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              id={"link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#add"
              className={
                activeLink === "add" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("add")}
              id={"link"}
            >
              Add
            </Nav.Link>
            <Nav.Link
              href="#features"
              className={
                activeLink === "features" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("features")}
              id={"link"}
            >
              Features
            </Nav.Link>
            <Nav.Link
              href="#about-us"
              className={
                activeLink === "about-us" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about-us")}
              id={"link"}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="#login"
              className={
                activeLink === "login" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onClickLogin("login")}
              id={"link"}
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
