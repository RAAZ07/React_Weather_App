

function Fcontainer ({list}){

    return <> <div className="forecast">
        <div className="forecast-header">
            <div className="day">Tuesday</div>
        </div> 
        <div className="forecast-content">
            <div className="forecast-icon">
                <img src="images/icons/icon-3.svg" alt="" width="48"/>
            </div>
            <div className="degree">{Math.round(list[1].temp)}<sup>o</sup>C</div>
            <small>18<sup>o</sup></small>
        </div>
    </div>
    <div className="forecast">
        <div className="forecast-header">
            <div className="day">Wednesday</div>
        </div> 
        <div className="forecast-content">
            <div className="forecast-icon">
                <img src="images/icons/icon-5.svg" alt="" width="48"/>
            </div>
            <div className="degree">{Math.round()}<sup>o</sup>C</div>
            <small>18<sup>o</sup></small>
        </div>
    </div>
    <div className="forecast">
        <div className="forecast-header">
            <div className="day">Thursday</div>
        </div> 
        <div className="forecast-content">
            <div className="forecast-icon">
                <img src="images/icons/icon-7.svg" alt="" width="48"/>
            </div>
            <div className="degree">{Math.round()}<sup>o</sup>C</div>
            <small>18<sup>o</sup></small>
        </div>
    </div>
    <div className="forecast">
        <div className="forecast-header">
            <div className="day">Friday</div>
        </div> 
        <div className="forecast-content">
            <div className="forecast-icon">
                <img src="images/icons/icon-12.svg" alt="" width="48"/>
            </div>
            <div className="degree">{Math.round()}<sup>o</sup>C</div>
            <small>18<sup>o</sup></small>
        </div>
    </div>
    <div className="forecast">
        <div className="forecast-header">
            <div className="day">Saturday</div>
        </div> 
        <div className="forecast-content">
            <div className="forecast-icon">
                <img src="images/icons/icon-13.svg" alt="" width="48"/>
            </div>
            <div className="degree">{Math.round()}<sup>o</sup>C</div>
            <small>18<sup>o</sup></small>
        </div>
    </div>
    <div className="forecast">
        <div className="forecast-header">
            <div className="day">Sunday</div>
        </div> 
        <div className="forecast-content">
            <div className="forecast-icon">
                <img src="images/icons/icon-14.svg" alt="" width="48"/>
            </div>
            <div className="degree">{Math.round()}<sup>o</sup>C</div>
            <small>18<sup>o</sup></small>
        </div>
    </div>


    </>
    




    
    
} 
export default Fcontainer;
