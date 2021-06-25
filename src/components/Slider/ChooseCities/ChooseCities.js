import React from 'react';
import go from '../../images/chevron_right.svg';
import {API_URL} from '../../../constants';
import './ChooseCities';

function ChooseCities({city,setData,setOpen}){
    
    const handleClick = e =>{
        e.preventDefault();
        fetch(`${API_URL}${city.woeid}`)
        .then(res => res.json())
        .then((res)=>{
            console.log(res);
            setData(res);
            setOpen(false);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
    return(
        <div className="search-cities" onClick={handleClick}>
            <span type="button" className="city-name">{city.title}</span>
            <img src={go} alt="go"/>
        </div>
    );
}
export default ChooseCities;