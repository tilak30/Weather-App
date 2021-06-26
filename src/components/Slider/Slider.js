import React, {useState} from "react";
import './Slider.css';
//import location from '../../images/my_location.svg';
import clouds from '../../images/Cloud-background.png';
import image from '../../images/Shower.png';
import { prepareDate } from "../../constants";
import location2 from '../../images/place.svg';
import {API_URL, COR_URL} from '../../constants';
import searchicon from '../../images/search.svg';
import ChooseCities from "./ChooseCities/ChooseCities";


function Slider ({data, setData}) {
    const [open,setOpen] = useState(false);
    const [location, setLocation] = useState(null);

        return(
            <div>
            {   open 
                ?<SideNavOpen setOpen={setOpen} setData={setData} data={data}/>
                :<SideNavClosed setOpen={setOpen} location={location} data={data}/>
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
            console.log(queryData);
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

function SideNavClosed({setOpen,data}){
    const today = prepareDate(new Date());
    return (
        <div className="aside">
            <nav className="aside-nav">
                <button onClick={() => setOpen(true)} className="btn btn-secondary button1">Search for places</button>
            </nav>
            <div className="background">
                <img className="clouds" alt="clouds" src={clouds}></img>
                <img className="sun" alt="weather" src={`https://www.metaweather.com/static/img/weather/${data.consolidated_weather[0].weather_state_abbr}.svg`}></img>
            </div>
            <div className="temperature">
                <span className="number">{Math.floor(data.consolidated_weather[0].the_temp)}</span>
                <span className="quan">℃</span>
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