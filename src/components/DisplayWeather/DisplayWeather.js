import React from "react";
import './DisplayWeather.css';


function DisplayWeather () {
    return (
        <div class="navigation">
            <button class="celcius"><span class="cel">℃</span></button>
            <button class="farhenite"><span class="cel">℉</span></button>
        </div>
    );
}

export default DisplayWeather;