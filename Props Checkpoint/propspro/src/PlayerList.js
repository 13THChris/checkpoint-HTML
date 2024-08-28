// src/PlayersList.js
import React from "react";
import Player from "./player";
import players from "./Players";

const PlayersList = () => {
  //Création de style en ligne
  const playersListStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "end"
  };
  return (
    /*Utilisation du style en ligne*/
    <div style={playersListStyle}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
