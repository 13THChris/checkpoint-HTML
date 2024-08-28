// src/Player.js
import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel"; // Permet de faire défilé les images des joueurs
import PropTypes from "prop-types";

const Player = ({ images, nom, nationalité, age, equipe, jerseyNumber }) => {
  //création des styles en ligne
  const cardStyle = {
    width: "15rem",
    height: "21.5rem",
    margin: "10px",
    textAlign: "start"
  };
  const carouselStyle = {
    width: "14.85rem",
    height: "11.65rem",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    overflow: "hidden"
  };
  const carouselItemStyle = {
    width: "14.9rem",
    height: "11.65rem"
  };
  const cardBody = {
    display: "flex",
    height: "3rem",
    flexDirection: "column",
    boxShadow: "0px 4px 8px rgba(0, 105, 255, 0.5)",
    cursor: "pointer"
  };
  const cardTitle = {
    color: "rgba(0, 105, 255, 0.5)",
    borderTop: "solid",
    fontFamily: "DM"
  };
  const imageStyle = {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    cursor: "pointer"
  };
  const jerseyStyle = { color: "red", fontFamily: "DM", fontSize: "19px" };

  return (
    <>
      <Card style={cardStyle}>
        <Carousel style={carouselStyle}>
          {images.map((image, index) => (
            <Carousel.Item key={index} style={carouselItemStyle}>
              <img
                style={imageStyle}
                src={image}
                alt={`${nom} - ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body style={cardBody}>
          <Card.Title style={cardTitle}>{nom}</Card.Title>
          <Card.Text>
            <strong>Equipe:</strong> {equipe} <br />
            <strong>Nationalité:</strong> {nationalité} <br />
            <strong>N° Maillot:</strong> {/*Création d'espace*/}
            <span style={jerseyStyle}>{jerseyNumber}</span> <br />
            <strong>Âge:</strong> {age}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

Player.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  nom: PropTypes.string,
  nationalité: PropTypes.string,
  age: PropTypes.string,
  equipe: PropTypes.string,
  jerseyNumber: PropTypes.string
};

Player.defaultProps = {
  images: [],
  nom: "Unknown Player",
  nationalité: "Unknown nationality",
  age: "Unknown Age",
  equipe: "Unknown Team",
  jerseyNumber: "#0"
};

export default Player;
