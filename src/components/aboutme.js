import React, {Component} from 'react';
import "./aboutus.css";  
import App from "../App"
import Chart from './barchart';

const Aboutme = () => {
    return(
        <div className="about">
            <h1 className="title-about"><u>Work and Volunteer Experience</u></h1>
            <h3>Swimming Instructor - City of Vaughan (Al Palladini Community Center)</h3>
            <h5><i>(March 2020-Present)</i></h5>
            <p>Worked as a swimming instructor for the City of Vaughan, teaching people of all ages and of all skill levels the crucical life skill of swimming.</p>
            <hr/>
            <h3>S.T.E.A.M Volunteer - City of Vaughan (Vellore Village Library) </h3>
            <h5><i>(June 2019-January 2020)</i></h5>
            <p>Taught a variety of classes on the basics of technology principles, holding classes on how to be creative and how to express oneself through science and art.</p>
            <hr/>
            <h3>Computer Science Club Executive - Maple High School </h3>
            <h5><i>(September 2020-Present)</i></h5>
            <p>Created and taught a variety of classes to high school students on basic coding and coding principles. Worked with other executives to create large-scale events, such as a school-wide hackathon.</p>
            <hr/>
            <h3>Freelancer for Real Estate Agents - Woodbridge, Ontario </h3>
            <h5><i>(September 2019-January 2020)</i></h5>
            <p>Helped a number of real estate agents with designing and creating their own flyers, cards and website. Played a role in the implementation and maintainance of these items as well. </p>
            <hr/>
        
        <hr/>
        </div>
    )
}

export default Aboutme; 