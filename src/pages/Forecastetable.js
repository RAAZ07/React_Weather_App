import React from "react";
import { formatToLocalTime } from "../Weatherservice";

import ReactAnimatedWeather from "react-animated-weather";

const defaults = {
    icon:"CLEAR_DAY",
    color: "white",
    size: 60,
    animate:true,
  };
const date=new Date();
console.log(date);
const days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const n=days.length;
console.log(n);
const Iconssetter = (ic)=> {
    let icon1="CLEAR_DAY";
    switch (ic) {
        case "Haze":
           icon1="CLEAR_DAY" ;
          break;
        case "Clouds":
           icon1= "CLOUDY";
          break;
        case "Rain":
           icon1= "RAIN";
          break;
        case "Snow":
           icon1= "SNOW";
          break;
        case "Dust":
          icon1= "WIND" ;
          break;
        case "Drizzle":
          icon1= "SLEET" ;
          break;
        case "Fog":
           icon1= "FOG" ;
          break;
        case "Smoke":
          icon1= "FOG" ;
          break;
        case "Tornado":
           icon1= "WIND" ;
          break;
        default:
           icon1= "CLEAR_DAY" ;
        }
        return icon1;
};

const Forecastetable= ({weather})=>{
    return (<div className="forecast-table">
    <div className="container">
        <div className="forecast-container">
            <div className="today forecast">
                <div className="forecast-header">
                    <div className="day">{days[date.getDay(date)%n]}</div>
                    <div className="date">{date.toString().slice(4,15)}</div>
                </div> 
                <div className="forecast-content">
                    <div className="location">{weather.name} , {weather.country}</div>
                    <div className="degree">
                        <div className="num">{Math.round(weather.temp)}<sup>o</sup>C</div>
                        <div className="forecast-icon">
                            {/* <img src="imaages/icons/icon-1.svg" alt="" width="90"/> */}
                            <ReactAnimatedWeather
                                        icon={Iconssetter(weather.weather[0].main)}
                                        // icon={defaults.icon}
                                        color={defaults.color}
                                        size={120}
                                        animate={defaults.animate}
                                        />
                                          <b>{weather.weather[0].description}</b>
                        </div>	
                    </div>
                    <span><img src={require("./imaages/icon-umberella@2x.png")} alt=""/><b>{weather.humidity}</b></span>
                    <span><img src={require("./imaages/icon-wind@2x.png")} alt=""/><b>{weather.speed}</b></span>
                    <span><img src={require("./imaages/icon-compass@2x.png")} alt=""/><b>East </b></span>
                    
                </div>
            </div>
            
            <div className="forecast">
        <div className="forecast-header">
        <div className="day">{days[date.getDay(date)+1%n]}</div>
        </div> 
        <div className="forecast-content">
            <div className="forecast-icon">
                {/* <img src="images/icons/icon-3.svg" alt="" width="48"/> */}
                <ReactAnimatedWeather
                                        icon={Iconssetter(weather.list[0].weather.main)}
                                        // icon={defaults.icon}
                                        color={defaults.color}
                                        size={defaults.size}
                                        animate={defaults.animate}
                                        />
                                        <b>{weather.list[0].weather.description}</b>
            </div>
            <div className="degree">{Math.round(weather.list[0].temp)}<sup>o</sup>C</div>
            <small><b>{weather.list[0].weather.main}</b></small>
        </div>
    </div>
    <div className="forecast">
        <div className="forecast-header">
            <div className="day">{days[date.getDay(date)+2%n]}</div>
        </div> 
        <div className="forecast-content">
            <div className="forecast-icon">
                {/* <img src="images/icons/icon-5.svg" alt="" width="48"/> */}
                <ReactAnimatedWeather
                                        icon={Iconssetter(weather.list[7].weather.main)}
                                        // icon={defaults.icon}
                                        color={defaults.color}
                                        size={defaults.size}
                                        animate={defaults.animate}
                                        />
                                         <b>{weather.list[7].weather.description}</b>
            </div>
            <div className="degree">{Math.round(weather.list[7].temp)}<sup>o</sup>C</div>
            <small><b>{weather.list[7].weather.main}</b></small>
        </div>
    </div>
    <div className="forecast">
        <div className="forecast-header">
            <div className="day">{days[date.getDay(date)+3%n]}</div>
        </div> 
        <div className="forecast-content">
            <div className="forecast-icon">
                {/* <img src="images/icons/icon-7.svg" alt="" width="48"/> */}
                <ReactAnimatedWeather
                                        icon={Iconssetter(weather.list[14].weather.main)}
                                        // icon={defaults.icon}
                                        color={defaults.color}
                                        size={defaults.size}
                                        animate={defaults.animate}
                                        />
                                         <b>{weather.list[14].weather.description}</b>
            </div>
            <div className="degree">{Math.round(weather.list[14].temp)}<sup>o</sup>C</div>
            <small><b>{weather.list[14].weather.main}</b></small>
        </div>
    </div>
    <div className="forecast">
        <div className="forecast-header">
            <div className="day">{days[date.getDay(date)+4%n]}</div>
        </div> 
        <div className="forecast-content">
            <div className="forecast-icon">
                {/* <img src="images/icons/icon-12.svg" alt="" width="48"/> */}
                <ReactAnimatedWeather
                                        icon={Iconssetter(weather.list[21].weather.main)}
                                        // icon={defaults.icon}
                                        color={defaults.color}
                                        size={defaults.size}
                                        animate={defaults.animate}
                                        />
                                         <b>{weather.list[21].weather.description}</b>
            </div>
            <div className="degree">{Math.round(weather.list[21].temp)}<sup>o</sup>C</div>
            <small><b>{weather.list[21].weather.main}</b></small>
        </div>
    </div>
    <div className="forecast">
        <div className="forecast-header">
            <div className="day">{days[date.getDay(date)+5%n]}</div>
        </div> 
        <div className="forecast-content">
            <div className="forecast-icon">
                {/* <img src="images/icons/icon-13.svg" alt="" width="48"/> */}
                <ReactAnimatedWeather
                                        icon={Iconssetter(weather.list[28].weather.main)}
                                        // icon={defaults.icon}
                                        color={defaults.color}
                                        size={defaults.size}
                                        animate={defaults.animate}
                                        />
                                         <b>{weather.list[28].weather.description}</b>
            </div>
            <div className="degree">{Math.round(weather.list[28].temp)}<sup>o</sup>C</div>
            <small><b>{weather.list[28].weather.main}</b></small>
        </div>
    </div>
    <div className="forecast">
        <div className="forecast-header">
            <div className="day">{days[date.getDay(date)+6%n]}</div>
        </div> 
        <div className="forecast-content">
            <div className="forecast-icon">
                {/* <img src="images/icons/icon-14.svg" alt="" width="48"/> */}
                <ReactAnimatedWeather
                                        icon={Iconssetter(weather.list[39].weather.main)}
                                        // icon={defaults.icon}
                                        color={defaults.color}
                                        size={defaults.size}
                                        animate={defaults.animate}
                                        />
                                        <b> {weather.list[39].weather.description}</b>
            </div>
            <div className="degree">{Math.round(weather.list[39].temp)}<sup>o</sup>C</div>
            <small><b>{weather.list[39].weather.main}</b></small>
        </div>
    </div>

        </div>
    </div>
</div>)
}
export default Forecastetable;