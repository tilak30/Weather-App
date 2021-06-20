import React from "react";
import './Slider.css';
//import location from '../../images/my_location.svg';
import clouds from '../../images/Cloud-background.png';
import sun from '../../images/Shower.png';
import location2 from '../../images/place.svg';
function Slider () {
    return (
        <div className="main">
            <div className="aside">
                <nav className="aside_nav">
                    <button className="btn btn-secondary button1">Search for places</button>
                </nav>
                <div className="background">
                    <img className="clouds" src={clouds}></img>
                    <img className="sun" src={sun}></img>
                </div>
                <div className="temperature">
                    <span className="number">15</span>
                    <span className="quan">℃</span>
                </div>
                <h3 className="status">Clear</h3>
                <div className="bottom">
                    <div className="date">
                        <span>Today</span>
                        <span className="dot">•</span>
                        <span>Sat, 19 Jun</span>
                    </div>
                    <div className="location2">
                        <img src={location2} width="24" height="24" />
                        <span>New Delhi</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;