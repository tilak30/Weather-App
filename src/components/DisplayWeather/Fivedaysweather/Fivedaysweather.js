import React from 'react';
import './Fivedaysweather.css';
import brightweather from "../../../images/Thunderstorm.png";

export default function Fivedaysweather(){
    return(
        <div className="container">
            <div className="mt-3 row">
                <div className="cards col-5 col-md-2">
                    <div className="mx-auto day">
                        Tommorrow
                    </div>
                    <img className="image" src={brightweather}/>
                    <div className="low-high">
                        <div className="high">16°C</div>
                        <div className="low">11°C</div>
                    </div>
                </div>
                <div className="cards1 col-5 col-md-2">
                    <div className="mx-auto day">
                        Tommorrow
                    </div>
                    <img className="image" src={brightweather}/>
                    <div className="low-high">
                        <div className="high">16°C</div>
                        <div className="low">11°C</div>
                    </div>
                </div>
                <div className="cards col-5 col-md-2">
                    <div className="mx-auto day">
                        Tommorrow
                    </div>
                    <img className="image" src={brightweather}/>
                    <div className="low-high">
                        <div className="high">16°C</div>
                        <div className="low">11°C</div>
                    </div>
                </div>
                <div className="cards1 col-5 col-md-2">
                    <div className="mx-auto day">
                        Tommorrow
                    </div>
                    <img className="image" src={brightweather}/>
                    <div className="low-high">
                        <div className="high">16°C</div>
                        <div className="low">11°C</div>
                    </div>
                </div>
                <div className="cards col-5 col-md-2">
                    <div className="mx-auto day">
                        Tommorrow
                    </div>
                    <img className="image" src={brightweather}/>
                    <div className="low-high">
                        <div className="high">16°C</div>
                        <div className="low">11°C</div>
                    </div>
                </div>
            </div>
        </div>
    );
}