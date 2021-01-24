import React, {Component} from 'react';
import App from "../App"
import Gear from "./floating_gear";
import {Card, Button} from "react-bootstrap";
import "./box.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/linkedin-brands.svg";
import { FaGithub, FaEnvelope, FaLinkedin} from "react-icons/fa";
import Chart from "./barchart";

const Home = () => {
    {/*
   {/*  const cardInfo = [
        {title:"Rishabh Sharma", text: <ul className="list-unstyled"> 
        <li>Linkedin</li>
        <li>Email</li>
        <li>Github</li>
        </ul>},
        {title:"Bio", text:"High School Student learning computer science and its applications. Interested in React, machine learning and artificial intelligence"},
    ];
    

    const renderCard = (card, index) => { */}

        return (
            <>
            <div className="grid">
            <Card border="danger" style={{ width: '24rem' }} className="box2">
   {/* <Card.Img className="card-image" variant="top"/>*/}
    <Card.Body>
      <Card.Title>Rishabh Sharma</Card.Title>
      <Card.Text>
      <ul className="list-unstyled"> 
      <li><FaLinkedin/> Linkedin - <a href="https://www.linkedin.com/in/rishabh-sharma-945b06192/">https://www.linkedin.com/in/rishabh-sharma-945b06192/</a></li>
        <li><FaEnvelope/> Email - rishabh2003sharma@gmail.com</li>
        <li><FaGithub/> Github - <a href="https://github.com/ri3habh">https://github.com/ri3habh</a></li>
        </ul>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 2 days ago</small>
    </Card.Footer>
  </Card>
  <br />

  <Card border="danger" style={{ width: '62rem'}} className="box" >
    {/*<Card.Header>Bio</Card.Header>*/}
    <Card.Body>
      <Card.Title>About Me</Card.Title>
      <Card.Text>
      Grade 12 IB High School Student learning about computer science and its applications. I am passionate about data structures, algorithms, web design, and interpreting and utilizing data. I love molding abstract ideas into simple but nuanced real-world applications. I have experience creating websites with React, both with front-end and back-end developing. I also enjoy designing and creating games of my own through engines like Unity. 
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  
  </div>
  <div className="chart">
  <Chart />
  </div>
  
        </>
        )   
    {/*}*/}

        {/*  return(
        <div className="grid">
            {cardInfo.map(renderCard)}
        </div> */}
        
    
}

export default Home; 
