import React, {useEffect, useState} from "react";
import Slider from './components/Slider/Slider';
import DisplayWeather from "./components/DisplayWeather/DisplayWeather";
import './App.css';
import {API_URL} from './constants';

function App() {

  const [data,setData] = useState({});

  return (
    <div className="main container-fluid">
      <div className="row">
        <div className="slider col-sm col-md-4">
          <Slider data={data} setData={setData}/>
        </div>
        <div className="displayweather col-sm col-md-8">
          <DisplayWeather data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
