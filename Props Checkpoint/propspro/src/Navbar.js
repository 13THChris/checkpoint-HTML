// src/CustomNavbar.js
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img from "./Images/Logo FIFA.png";

const CustomNavbar = () => (
  <Navbar
    style={{
      fontFamily: "Roboto Serif",
      backgroundColor: "rgba(0, 175, 255, 1)"
    }}
    variant="dark"
  >
    <Container>
      <Navbar.Brand href="#home">
        <img src={img} alt="FIFA Logo" width="75px" height="30px" />
      </Navbar.Brand>
      <Nav>
        <Nav.Link href="#Accueil">Accueil</Nav.Link>
        <Nav.Link href="#Club">Club</Nav.Link>
        <Nav.Link href="#Joueurs">Joueurs</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default CustomNavbar;
