import '../App.css';
import React, {Component} from 'react';
import * as ReactBootstrap from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


const Navbar = () => {
    return (                                                       //dark is the default format
        <div className="App">
                <ReactBootstrap.Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
            
            <Link to="/Home">
            <ReactBootstrap.Navbar.Brand href="#home"><b>Rishabh Sharma</b></ReactBootstrap.Navbar.Brand>
            </Link>
            <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootstrap.Nav className="mr-auto">

                    <Link to="/Aboutme">
                <ReactBootstrap.Nav.Link href="#aboutme">Work and Volunteer Experience</ReactBootstrap.Nav.Link>
                </Link>
                
                <Link to="/Projects">
                <ReactBootstrap.Nav.Link href="#Projects">Projects</ReactBootstrap.Nav.Link>
                </Link>

                {/*<ReactBootstrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <ReactBootstrap.NavDropdown.Item href="#action/3.1">Work and Volunteer Experience</ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Divider />
                    <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
                </ReactBootstrap.NavDropdown>
                </ReactBootstrap.Nav>
                <ReactBootstrap.Nav>
                <ReactBootstrap.Nav.Link href="#filler">filler</ReactBootstrap.Nav.Link>
    <ReactBootstrap.Nav.Link eventKey={2} href="#memes">
    </ReactBootstrap.Nav.Link> */}
                </ReactBootstrap.Nav> 
            </ReactBootstrap.Navbar.Collapse> 
            </ReactBootstrap.Navbar> 
            
        </div>
            );
        }
    
    
export default Navbar;


