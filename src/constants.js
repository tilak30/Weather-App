import clear from './images/Clear.png';
import hail from './images/Hail.png';
import heavyCloud from './images/HeavyCloud.png';
import heavyRain from './images/HeavyRain.png';
import lightCloud from './images/LightCloud.png';
import lightRain from './images/LightRain.png';
import shower from './images/Shower.png';
import sleet from './images/Sleet.png';
import snow from './images/Snow.png';
import thunderstorm from './images/Thunderstorm.png';

// const COR_URL = '';
// const COR_URL = 'https://cors-anywhere.herokuapp.com/';
const COR_URL = 'https://api.allorigins.win/raw?url=';
const API_URL = `${COR_URL}https://www.metaweather.com/api/location/`;
const SEARCH_QUERY_URL = `${API_URL}search/?query=`;

const WEATHER_STATES = {
  c: clear,
  h: hail,
  hc: heavyCloud,
  hr: heavyRain,
  lc: lightCloud,
  lr: lightRain,
  s: shower,
  sn: snow,
  sl: sleet,
  t: thunderstorm,
};

// Minsk
const DEFAULT_WOEID = 834463;

export {
  API_URL, WEATHER_STATES, SEARCH_QUERY_URL, DEFAULT_WOEID,
};