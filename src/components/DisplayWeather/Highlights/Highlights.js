import React from 'react';
import './Highlights.css';
import windarrow from '../../../images/wind_arrow.svg';

export default function Highlights(){
    return(
        <div className="highlight-card container">
            <div className=" row">
                <div className="wind col-10 col-md-5">
                    <div className="mx-auto windstatus">Wind status</div>
                    <div className="status">
                        <span className="amount">7</span>
                        <span className="unit"> mph</span>
                    </div>
                    <div className="wind-indicator" /*style={{ transform: "30deg" }}*/>
                        <div className="image1"><img src={windarrow} width="20px" height="20px" style={{position:"relative", left:"5px", bottom:"1px"}}/></div>
                        <span className="wind-direction">NE</span>
                    </div>
                </div>
                <div className="wind col-10 offset-md-1 col-md-5">
                    <div className="mx-auto windstatus">Humidity</div>
                    <div className="status">
                        <span className="amount">84</span>
                        <span className="unit"> %</span>
                    </div>
                    <div class="indicator">
                        <div class="indicator-scale">
                            <span>0</span>
                            <span>50</span>
                            <span>100</span>
                        </div>
                        <div class="line-container">
                            <div class="line line--back"></div>
                            <div class="line line--front" style={{width: "62%"}}></div>
                        </div>
                        <span class="indicator-unit">%</span>
                    </div>
                </div>
                <div className="wind1 col-10 col-md-5">
                    <div className=" mx-auto windstatus">Visibility</div>
                    <div className="status">
                        <span className="amount">6,4</span>
                        <span className="unit"> miles</span>
                    </div>
                </div>
                <div className="wind1 col-10 offset-md-1 col-md-5">
                    <div className=" mx-auto windstatus">Air Pressure</div>
                    <div className="status">
                        <span className="amount">998</span>
                        <span className="unit"> mb</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
