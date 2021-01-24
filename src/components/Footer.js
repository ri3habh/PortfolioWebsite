import React, {Component} from 'react';
import "./aboutus.css";  
import "./Footer.css";
import App from "../App"
import { useParams } from 'react-router-dom';

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                
                <div className="row">
                    {/*
                    <div className="col">
                        <h4>Contact</h4>
                        <ul className="list-unstyled"> 
                        <li>Linkedin</li>
                        <li>Email</li>
                        <li>Github</li>
                        </ul>
                    </div>
                    
                    <div className="col">
                        <h4>STUFF</h4>
                        <ul className="list-unstyled"> 
                        <li>number</li>
                        <li>adress</li>
                        <li>street</li>
                        </ul>
                    </div>
                    
                    <div className="col">
                        <h4>STUFF</h4>
                        <ul className="list-unstyled"> 
                        <li>number</li>
                        <li>adress</li>
                        <li>street</li>
                        </ul>
                    </div>
                    
                */}
                </div>
                <hr/>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Rishabh Sharma | Created Using React.js 
                    </p>
                </div>
            </div>
        </div>
    )  
}

export default Footer; 
