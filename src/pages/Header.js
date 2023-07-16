import React from "react";

const Header =()=> {
    return <div className="site-header">
    <div className="container">
        <a href="index.html" className="branding">
            <img src={require("./imaages/raining1.png")} alt="" className="logo"/>
            <div className="logo-type">
                <h1 className="site-title">Weatherservice.Com</h1>
                <small className="site-description">Here to deliver weather info.....</small>
            </div>
        </a>

        <div className="main-navigation">
            <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
            <ul className="menu">
                <li className="menu-item current-menu-item"><a href="#">Home</a></li>
                {/* <li className="menu-item"><a href="#">News</a></li>
                <li className="menu-item"><a href="#">Live cameras</a></li>
                <li className="menu-item"><a href="#">Photos</a></li> */}
                <li className="menu-item"><a href="#">Contact</a></li>
            </ul> 
        </div> 

        <div className="mobile-navigation"></div>

    </div>
</div> 
}
export default Header;