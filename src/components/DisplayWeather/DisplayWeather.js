import React from "react";
import './DisplayWeather.css';
import Fivedaysweather from "./Fivedaysweather/Fivedaysweather";
import Highlights from "./Highlights/Highlights";


function DisplayWeather () {
    return (
        <div className="navigation">
            <div className="container">
                <div className="row">
                    <div className="temp offset-10 col">
                        <button className="celcius"><span className="cel">℃</span></button>
                        <button className="farhenite"><span className="cel">℉</span></button>
                    </div>
                </div>
            </div>
            <Fivedaysweather />
            <div className="heading">
                Today’s Hightlights 
            </div>
            <Highlights />
            <div className="mx-auto madeby">
                Created by Tilak Bhansali - devChallenges.io
            </div>
        </div>
    );
}

export default DisplayWeather;