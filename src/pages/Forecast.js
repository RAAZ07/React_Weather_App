import React, { useEffect, useState } from "react";
import Footer from './Footer';
import Header from './Header';
import Forecastetable from "./Forecastetable";
import Inputcity from "./Inputcity";
//import Features from "./Features";
import './load.css';
import getFormatteddata from "../Weatherservice";



function Forecast  () {   
        const [city, setCity]= useState({q:"indore"});
        const [weather , setWeather]= useState(null);
        const units ="metric";
        const lang="hi";
        useEffect( () => {
            const fetchweather = async()=>{
                console.log(city);
                await getFormatteddata({...city,units,lang})
                .then((data)=>
                {
                    setWeather(data);
                    console.log("weather data");
                    console.log(data);
                } );
              };
              fetchweather();
        },[city] );
            
            return( <div className="site-content">
            <Header />  
              
             <Inputcity setCity={setCity}/>
            {weather!=null ? (
             <Forecastetable weather={weather} />        
            ):<div class="loader">
                <div class="inner one"></div>
            <h1>Searching..........</h1>
                 <div class="inner two"></div>
                 <div class="inner three"></div>
                </div>};
             <Footer/>
             
           
         </div>   
            // }
            // else{
            //     return <div class="loader">
            //     <div class="inner one"></div>
            //     <div class="inner two"></div>
            //     <div class="inner three"></div>
            //     </div>
            // }
    );
    
}
export default Forecast;