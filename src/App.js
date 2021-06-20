import React from "react";
import Slider from './components/Slider/Slider';
import DisplayWeather from "./components/DisplayWeather/DisplayWeather";
import './App.css';


function App() {
  return (
    <div className="main container-fluid">
      <div className="row">
        <div className="slider col-sm col-md-4">
          <Slider />
        </div>
        <div className="displayweather col-sm col-md-8">
          <DisplayWeather />
        </div>
      </div>
    </div>
  );
}

export default App;
