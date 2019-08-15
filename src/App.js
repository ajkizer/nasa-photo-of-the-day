import React from "react";
import "./App.scss";
import AstronomyPhoto from "./components/astronomyPhoto";
import "semantic-ui-css/semantic.min.css";
import Calendar from "react-calendar";

function App() {
  return (
    <div className="App">
      <div className="card-container">
        <AstronomyPhoto />
      </div>
      <div className="calendar-container">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
