import React from 'react';
import go from '../../../images/chevron_right.svg';
import {API_URL} from '../../../constants';
import './ChooseCities.css';

function ChooseCities({key, city,setData,setOpen,data}){
    
    const handleClick = e =>{
        e.preventDefault();
        
        fetch(`${API_URL}${city.woeid}`)
        .then(res => res.json())
        .then((res)=>{
            setData(res);
            //(data);
            setOpen(false);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
    return(
        <div className="search-cities" onClick={handleClick}>
            <span type="button" className="city-name">{city.title}</span>
            <img alt="goicon" src={go} alt="go"/>
        </div>
    );
}
export default ChooseCities;