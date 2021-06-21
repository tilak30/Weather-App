import React, {useState} from "react";
import './Slider.css';
//import location from '../../images/my_location.svg';
import clouds from '../../images/Cloud-background.png';
import sun from '../../images/Shower.png';
import location2 from '../../images/place.svg';
import close from '../../images/close.svg';
import searchicon from '../../images/search.svg';
import go from '../../images/chevron_right.svg'


function Slider () {
    const [open,setOpen] = useState(false);
    if(!open){
        return(
            <div className="aside">
                <nav className="aside-nav">
                    <button onClick={() => setOpen(true)} className="btn btn-secondary button1">Search for places</button>
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
        );
    }
    else{
        return (
            <div className="search-bar">
                <div className="cross-icon">
                    <button onClick={() => setOpen(false)}><img src={close} alt="close-icon"/></button>
                </div>
                <div class="search-container">
                    <img src={searchicon } alt="search" width="17.05" height="17.06" />
                    <input type="text" class="search-input" placeholder="search location" />
                    <input type="button" class="search-button" value="Search" />
                </div>
                <div className="allcities">
                    <div className="search-cities">
                        <span type="button" className="city-name">London</span>
                        <img src={go} alt="go"/>
                    </div>
                    <div className="search-cities">
                        <span type="button" className="city-name">New York</span>
                        <img src={go} alt="go"/>
                    </div>
                </div>
            </div>
        );
    }


    
}

export default Slider;