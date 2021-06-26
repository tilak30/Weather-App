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

function prepareDate(date) {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const dayNames = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];
  var d = new Date(date);
  const day = d.getDate();
  const dayName = d.getDay();
  const month = d.getMonth();
  return `${dayNames[dayName]}, ${day} ${monthNames[month]}`;
}

//initial data
const initialData = {
  consolidated_weather: [
  {
  id: 5747073577123840,
  weather_state_name: "Light Rain",
  weather_state_abbr: "lr",
  wind_direction_compass: "S",
  created: "2021-06-26T12:32:43.265832Z",
  applicable_date: "2021-06-26",
  min_temp: 20.38,
  max_temp: 26.895,
  the_temp: 27.185000000000002,
  wind_speed: 8.251439453174791,
  wind_direction: 178.00356445429645,
  air_pressure: 1024,
  humidity: 76,
  visibility: 8.381676012089397,
  predictability: 75
  },
  {
  id: 6007530326065152,
  weather_state_name: "Showers",
  weather_state_abbr: "s",
  wind_direction_compass: "S",
  created: "2021-06-26T12:32:46.265493Z",
  applicable_date: "2021-06-27",
  min_temp: 22.240000000000002,
  max_temp: 29.36,
  the_temp: 30.205,
  wind_speed: 8.387378230623824,
  wind_direction: 186.8818960186822,
  air_pressure: 1022,
  humidity: 67,
  visibility: 12.024775312176887,
  predictability: 73
  },
  {
  id: 5625099794251776,
  weather_state_name: "Heavy Cloud",
  weather_state_abbr: "hc",
  wind_direction_compass: "SSW",
  created: "2021-06-26T12:32:49.456535Z",
  applicable_date: "2021-06-28",
  min_temp: 22.98,
  max_temp: 31.335,
  the_temp: 31.57,
  wind_speed: 7.255830340266179,
  wind_direction: 200.83403670945347,
  air_pressure: 1022.5,
  humidity: 63,
  visibility: 12.593329953074047,
  predictability: 71
  },
  {
  id: 6059640090525696,
  weather_state_name: "Heavy Cloud",
  weather_state_abbr: "hc",
  wind_direction_compass: "SW",
  created: "2021-06-26T12:32:52.267689Z",
  applicable_date: "2021-06-29",
  min_temp: 24.445,
  max_temp: 33.45,
  the_temp: 32.44,
  wind_speed: 6.103821883088099,
  wind_direction: 225.33261648812783,
  air_pressure: 1021.5,
  humidity: 58,
  visibility: 9.66076861130995,
  predictability: 71
  },
  {
  id: 6689845591146496,
  weather_state_name: "Heavy Rain",
  weather_state_abbr: "hr",
  wind_direction_compass: "WSW",
  created: "2021-06-26T12:32:55.263122Z",
  applicable_date: "2021-06-30",
  min_temp: 24.130000000000003,
  max_temp: 32.644999999999996,
  the_temp: 32.635000000000005,
  wind_speed: 6.6580882359845175,
  wind_direction: 247.39047319098017,
  air_pressure: 1016,
  humidity: 60,
  visibility: 10.737915573053368,
  predictability: 77
  },
  {
  id: 5994839972773888,
  weather_state_name: "Heavy Rain",
  weather_state_abbr: "hr",
  wind_direction_compass: "SSW",
  created: "2021-06-26T12:32:58.286333Z",
  applicable_date: "2021-07-01",
  min_temp: 23.384999999999998,
  max_temp: 30.57,
  the_temp: 29.6,
  wind_speed: 4.430901733874174,
  wind_direction: 209.5,
  air_pressure: 1011,
  humidity: 70,
  visibility: 9.643059532331186,
  predictability: 77
  }
  ],
  time: "2021-06-26T10:10:17.551988-04:00",
  sun_rise: "2021-06-26T05:26:33.333133-04:00",
  sun_set: "2021-06-26T20:31:17.702071-04:00",
  timezone_name: "LMT",
  parent: {
  title: "New York",
  location_type: "Region / State / Province",
  woeid: 2347591,
  latt_long: "42.855350,-76.501671"
  },
  sources: [
  {
  title: "BBC",
  slug: "bbc",
  url: "http://www.bbc.co.uk/weather/",
  crawl_rate: 360
  },
  {
  title: "Forecast.io",
  slug: "forecast-io",
  url: "http://forecast.io/",
  crawl_rate: 480
  },
  {
  title: "HAMweather",
  slug: "hamweather",
  url: "http://www.hamweather.com/",
  crawl_rate: 360
  },
  {
  title: "Met Office",
  slug: "met-office",
  url: "http://www.metoffice.gov.uk/",
  crawl_rate: 180
  },
  {
  title: "OpenWeatherMap",
  slug: "openweathermap",
  url: "http://openweathermap.org/",
  crawl_rate: 360
  },
  {
  title: "Weather Underground",
  slug: "wunderground",
  url: "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
  crawl_rate: 720
  },
  {
  title: "World Weather Online",
  slug: "world-weather-online",
  url: "http://www.worldweatheronline.com/",
  crawl_rate: 360
  }
  ],
  title: "New York",
  location_type: "City",
  woeid: 2459115,
  latt_long: "40.71455,-74.007118",
  timezone: "US/Eastern"
}

// Minsk
const DEFAULT_WOEID = 834463;

export {
  API_URL, COR_URL, WEATHER_STATES, SEARCH_QUERY_URL, DEFAULT_WOEID, prepareDate, initialData
};
