import { DateTime } from "luxon";


const getWeatherData =  (infotype, searchparams)=>{

    const url = new URL(process.env.REACT_APP_API_URL+"/"+infotype);
    url.search = new URLSearchParams({...searchparams,appid:process.env.REACT_APP_API_KEY});
    console.log(url);
    return fetch(url)
        .then((res) => res.json()
        .then((data) => data) );
};

const Formatcurrentweather = (data)=>{
    const {
        coord,
        main:{temp,humidity},
        name, 
        dt,
        timezone,
        sys:{country,},
        weather,
        wind:{speed},

    }=data;

    return{coord,temp,humidity,name,dt,country, weather,speed,timezone};

};


const Formatforecastweather = (data)=> {
    
        let {list} = data;
        list=list.map((d) => {
                return {
                    dat:d.dt,
                    temp: d.main.temp,
                    weather:{
                        main:d.weather[0].main,
                        description: d.weather[0].description,
                    },
                    wind:{speed:d.wind.speed,},
                    
                    dt_txt:d.dt_txt,
                };
        });
        
     return {list} ;

};



const getFormatteddata = async (searchparams)=> {
    const Formattedcurrentweather=await getWeatherData("weather",searchparams)
    .then(Formatcurrentweather);
    

    const Formattedforecastweather=await getWeatherData("forecast",searchparams)
    .then(Formatforecastweather);
    return { ...Formattedcurrentweather,...Formattedforecastweather};

}
const date=new Date();
console.log(Date);

// format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
const formatToLocalTime = (
    secs,
    zone,
    format = "dd LLL yyyy"
  ) => DateTime.fromJSDate(secs).setZone(zone).toFormat(format);

//   const formatToDay = (
//     secs,
//     zone,
//     format = "cccc"
//   ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);


export default getFormatteddata;
export {formatToLocalTime};