import React, {useEffect, useState} from "react";
import Slider from './components/Slider/Slider';
import DisplayWeather from "./components/DisplayWeather/DisplayWeather";
import './App.css';
import {initialData} from './constants';

function App() {

  const [data,setData] = useState(initialData);
  const [temp, setTemp] = useState(true);
  // useEffect(()=>{
  //   const URL = `${API_URL}44418/`//https://www.metaweather.com/api/location/
  //   fetch(URL)
  //     .then(res => res.json())
  //     .then((res)=>{
  //         setQueryData(res);
  //         console.log(queryData);
  //     })
  //     .catch((err)=>{
  //         console.log(err);
  //     })
  // })
  return (
    <div className="main container-fluid">
      <div className="row">
        <div className="slider col-sm col-md-4">
          <Slider data={data} setData={setData} temp={temp}/>
        </div>
        <div className="displayweather col-sm col-md-8">
          <DisplayWeather data={data} temp={temp} setTemp={setTemp}/>
        </div>
      </div>
    </div>
  );
}

export default App;
