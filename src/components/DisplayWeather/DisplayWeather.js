import React from "react";
import './DisplayWeather.css';
import Fivedaysweather from "./Fivedaysweather/Fivedaysweather";
import Highlights from "./Highlights/Highlights";


function DisplayWeather ({data,temp,setTemp}) {
    return (
        <div className="navigation">
            <div className="container">
                <div className="row">
                    <div className="temp offset-9 col-sm-3 offset-md-10 col-md-2">
                        <button onClick={()=>setTemp(true)} className="celcius"><span className="cel">℃</span></button>
                        <button onClick={()=>setTemp(false)} className="farhenite"><span className="cel">℉</span></button>
                    </div>
                </div>
            </div>
            <Fivedaysweather data={data} temp={temp}/>
            <div className="heading">
                Today’s Hightlights 
            </div>
            <Highlights data={data} />
            <div className="mx-auto madeby">
                Created by Tilak Bhansali - devChallenges.io
            </div>
        </div>
    );
}

export default DisplayWeather;