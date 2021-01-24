import React, {Component} from 'react';
import "./projects.css";  
import App from "../App"; 
import { Gear } from './floating_gear';
import gear from "../images/gear.svg";
import { render } from '@testing-library/react';

class Projects extends Component {          //const Projects = () =>
    state = {
        gear: {
            alt: "Spinning Gear",
            src: gear,
        },
    };

    render() {
        const {
            gear,
        } = this.state;

    return(
        <div className="projects">
            <h1></h1>
            <div className="dark-background">
            <h1>Projects Coming Soon!</h1>
            </div>
            <Gear alt={gear.alt} src={gear.src}/>
    
        </div>
    )};
}

export default Projects; 

