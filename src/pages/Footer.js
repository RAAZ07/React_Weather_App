import React from "react";

const Footer = () =>{
    return <footer className="site-footer">
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <div  className="subscribe-form">
                    <input type="text" placeholder="Enter your review..."/>
                    <input type="submit" value="Subscribe"/>
                </div>
            </div>
            <div className="col-md-3 col-md-offset-1">
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/rajendra-choungad-993bbb202/"><i className="fa fa-linkedin"></i></a>
                    <a href="https://github.com/RAAZ07" target="_blank"><i className="fa fa-github"></i></a>
                    <a href=""><i className="fa fa-google-plus"></i></a>
                    <a href="https://instagram.com/raazchoungad07?igshid=NTc4MTIwNjQ2YQ==" target="_blank"><i className="fa fa-instagram"></i></a>
                </div>
            </div>
        </div>

        <p className="colophon">Devoloped by - Raaz Choungad </p>
        <p className="colophon">Site dedveloped in react js</p>
    </div>
</footer> ;
}

export default Footer;