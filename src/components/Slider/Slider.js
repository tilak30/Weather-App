import React, {useState} from "react";
import './Slider.css';
import locimg from '../../images/my_location.svg';
import clouds from '../../images/Cloud-background.png';
import { prepareDate } from "../../constants";
import location2 from '../../images/place.svg';
import {API_URL, COR_URL} from '../../constants';
import searchicon from '../../images/search.svg';
import ChooseCities from "./ChooseCities/ChooseCities";


function Slider ({data, setData, temp}) {
    const [open,setOpen] = useState(false);

        return(
            <div>
            {   open 
                ?<SideNavOpen setOpen={setOpen} setData={setData} data={data}/>
                :<SideNavClosed setOpen={setOpen} data={data} temp={temp} setData={setData}/>
        }    
        </div>
        );
}

export default Slider;

function SideNavOpen({setOpen, setData, data}){

    const [inputField,setInputField] = useState("");
    const [queryData,setQueryData] = useState([]);

    const handleChange = e =>{
        setInputField(e.target.value);
    }
    const handleSubmit = e =>{
        e.preventDefault();
        if(inputField==="")
            return;

        const URL=`${API_URL}search/?query=${inputField}`;
        fetch(URL)
        .then(res => res.json())
        .then((res)=>{
            setQueryData(res);
            //console.log(queryData);
        })
        .catch((err)=>{
            console.log(err);
        })
        
    }

    return (
        <div className="search-bar">
            <a href="#" onClick={() => setOpen(false)} className="close cross-icon"></a>
            <div className="search-container">
                <img src={searchicon } alt="search" width="17.05" height="17.06" />
                <input type="text" onChange={handleChange} className="search-input" placeholder="search location" />
                <input type="button" onClick={handleSubmit} className="search-button" value="Search" />
            </div>
            <div className="allcities">
                {queryData.map((city)=>(
                        <ChooseCities
                            key={city.woeid}
                            city={city}
                            setData={setData}
                            setOpen={setOpen}
                            data={data}
                        />
                    ))
                }
            </div>
        </div>
    );
}

function SideNavClosed({setOpen,data,temp,setData}){
    const today = prepareDate(new Date());
    const celcius = Math.floor(data.consolidated_weather[0].the_temp);
    const farhenite = Math.floor((celcius *1.8) + 32);

    const fetcher = (latitude,longitude) =>{     
        fetch(`${API_URL}search/?lattlong=${latitude},${longitude}`)
        .then(res => res.json())
        .then((res)=>{
            //console.log(res);
            fetch(`${API_URL}${res[0].woeid}`)
            .then(res => res.json())
            .then((res)=>{
                setData(res);
                //console.log(data);
            })
            .catch((err)=>{
                console.log(err);
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const getLocation = () =>{
        navigator.geolocation.getCurrentPosition(success,failure);
        function success(position){
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetcher(latitude,longitude);
        }

        function failure(){
           return;
        }
    }

    return (
        <div className="aside">
            <nav className="aside-nav">
                <button onClick={() => setOpen(true)} className="btn btn-secondary button1">Search for places</button>
                <button className="location" onClick={getLocation}><img src={locimg} alt="location" width="24" height="24"/></button>
            </nav>
            <div className="background">
                <img className="clouds" alt="clouds" src={clouds}></img>
                <img className="sun" alt="weather" src={`https://www.metaweather.com/static/img/weather/${data.consolidated_weather[0].weather_state_abbr}.svg`}></img>
            </div>
            <div className="temperature">
                <span className="number">{temp ? celcius : farhenite }</span>
                <span className="quan">{temp ? '℃' : '℉'}</span>
            </div>
            <h3 className="status">{data.consolidated_weather[0].weather_state_name}</h3>
            <div className="bottom">
                <div className="date">
                    <span>Today</span>
                    <span className="dot">•</span>
                    <span>{today}</span>
                </div>
                <div className="location2">
                    <img src={location2} alt="location" width="24" height="24" />
                    <span>{ data.title }</span>
                </div>
            </div>
        </div>
    );
}//}