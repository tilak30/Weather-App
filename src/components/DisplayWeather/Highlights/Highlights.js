import React from 'react';
import './Highlights.css';
import windarrow from '../../../images/wind_arrow.svg';

export default function Highlights({data}){
    return(
        <div className="highlight-card container">
            <div className=" row">
                <div className="wind col-10 col-md-5">
                    <div className="mx-auto windstatus">Wind status</div>
                    <div className="status">
                        <span className="amount">{Math.floor(data.consolidated_weather[0].wind_speed)}</span>
                        <span className="unit"> mph</span>
                    </div>
                    <div className="wind-indicator" /*style={{ transform: "rotate(${30}deg)" }}*/>
                        <div className="image1"><img alt="windarrow" src={windarrow} width="20px" height="20px" style={{position:"relative", left:"5px", bottom:"1px"}}/></div>
                        <span className="wind-direction">{data.consolidated_weather[0].wind_direction_compass}</span>
                    </div>
                </div>
                <div className="wind col-10 offset-md-1 col-md-5">
                    <div className="mx-auto windstatus">Humidity</div>
                    <div className="status">
                        <span className="amount">{data.consolidated_weather[0].humidity}</span>
                        <span className="unit"> %</span>
                    </div>
                    <div className="indicator">
                        <div className="indicator-scale">
                            <span>0</span>
                            <span>50</span>
                            <span>100</span>
                        </div>
                        <div className="line-container" style={{width: "180px"}}>
                            <div className="line line--back" style={{width: "180px"}}></div>
                            <div className="line line--front" style={{ width: `${data.consolidated_weather[0].humidity}%` }}></div>
                        </div>
                        <span className="indicator-unit">%</span>
                    </div>
                </div>
                <div className="wind1 col-10 col-md-5">
                    <div className=" mx-auto windstatus">Visibility</div>
                    <div className="status">
                        <span className="amount">{parseFloat(data.consolidated_weather[0].visibility).toFixed(2)}</span>
                        <span className="unit"> miles</span>
                    </div>
                </div>
                <div className="wind1 col-10 offset-md-1 col-md-5">
                    <div className=" mx-auto windstatus">Air Pressure</div>
                    <div className="status">
                        <span className="amount">{data.consolidated_weather[0].air_pressure}</span>
                        <span className="unit"> mb</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
