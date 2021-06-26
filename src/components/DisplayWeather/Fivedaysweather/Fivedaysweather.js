import React from 'react';
import './Fivedaysweather.css';
import image from '../../../images/Shower.png';
import { prepareDate } from '../../../constants';

export default function Fivedaysweather({data}){
    //const image1 = `https://www.metaweather.com/static/img/weather/${data.consolidated_weather[1].weather_state_abbr}.svg`;
    // const image2 = `https://www.metaweather.com/static/img/weather/${data.consolidated_weather[2].weather_state_abbr}.svg`;
    // const image3 = `https://www.metaweather.com/static/img/weather/${data.consolidated_weather[3].weather_state_abbr}.svg`;
    // const image4 = `https://www.metaweather.com/static/img/weather/${data.consolidated_weather[4].weather_state_abbr}.svg`;
    // const image5 = `https://www.metaweather.com/static/img/weather/${data.consolidated_weather[5].weather_state_abbr}.svg`;

    function addDays(dateObj, numDays) {
        dateObj.setDate(dateObj.getDate() + numDays);
        return dateObj;
     }

    var day2 = prepareDate(addDays(new Date(), 2));
    var day3 = prepareDate(addDays(new Date(), 3));
    var day4 = prepareDate(addDays(new Date(), 4));
    var day5 = prepareDate(addDays(new Date(), 5));
    return(
        <div className="container">
            <div className="mt-3 row">
                <div className="cards col-5 col-md-2">
                    <div className="mx-auto day">
                        Tommorrow
                    </div>
                    <img alt="image1" className="image" src={image}/>
                    <div className="low-high">
                        <div className="high">16°C</div>
                        <div className="low">11°C</div>
                    </div>
                </div>
                <div className="cards1 col-5 col-md-2">
                    <div className="mx-auto day">
                        {day2}
                    </div>
                    <img alt="image2" className="image" src={image}/>
                    <div className="low-high">
                        <div className="high">16°C</div>
                        <div className="low">11°C</div>
                    </div>
                </div>
                <div className="cards col-5 col-md-2">
                    <div className="mx-auto day">
                        {day3}
                    </div>
                    <img alt="image3" className="image" src={image}/>
                    <div className="low-high">
                        <div className="high">16°C</div>
                        <div className="low">11°C</div>
                    </div>
                </div>
                <div className="cards1 col-5 col-md-2">
                    <div className="mx-auto day">
                        {day4}
                    </div>
                    <img alt="image4" className="image" src={image}/>
                    <div className="low-high">
                        <div className="high">16°C</div>
                        <div className="low">11°C</div>
                    </div>
                </div>
                <div className="cards col-5 col-md-2">
                    <div className="mx-auto day">
                        {day5}
                    </div>
                    <img alt="image5" className="image" src={image}/>
                    <div className="low-high">
                        <div className="high">16°C</div>
                        <div className="low">11°C</div>
                    </div>
                </div>
            </div>
        </div>
    );
}