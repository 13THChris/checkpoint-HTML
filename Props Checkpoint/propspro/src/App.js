// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./PlayerList"; // Importation du composant PlayerList
import "./App.css";
import CustomNavbar from "./Navbar"; // importation le composant Navbar

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <PlayersList />
    </div>
  );
}

export default App;
