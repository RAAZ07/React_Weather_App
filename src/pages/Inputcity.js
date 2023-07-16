import React, {  useState } from "react";





function Inputcity({setCity}){

    const [cityname ,setcityname]= useState("");
    
    const handleonsubmit =() =>{
        if(cityname !== ""){ 
            setcityname("");
            setCity({q:cityname});
            console.log(cityname);

    }};

    return ( <div className="hero" data-bg-image="images/banner.png">
    <div className="container">
         <div className="find-location farm"> 
            <input 
                    type="text"
                    placeholder="Find your location..."
                    name="city"
                    value={cityname}
                    onChange={(e)=>setcityname(e.target.value)}
                    />
            <input 
                    type="submit" 
                    value="Find"
                    onClick={handleonsubmit}
                    />
            </div>
       
        
    </div>
</div>
);

}

export default Inputcity;