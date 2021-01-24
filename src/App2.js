import './App.css';
import React, {Component} from 'react';
import * as ReactBootstrap from "react-bootstrap";
import "survey-react/survey.css";
import About from './components/aboutus';

import * as Survey from "survey-react"; 
class App extends Component { 
    constructor(props){
        super(props)
        this.state = {

        }
        this.onCompleteComponent = this.onCompleteComponent.bind(this)
    }
    onCompleteComponent = () =>{
        this.setState({
            isCompleted: true
        })
    }

    render() {
        var json = {
            questions: [
                {
                    type: "checkbox",
                    name: "pizza",
                    title: "Which pizzas have you eaten?",
                    isRequired: true,
                    colCount: 5,
                    "choicesOrder": "asc",
                    choices: [
                        "Cheese Pizza",
                        "Pepperoni Pizza",
                        "Meat Lover's Pizza",
                        "Hawaiian Pizza",
                        "Veggie Pizza"
                    ]     
                }, {
                    "type": "matrixdropdown", 
                    "name": "pizzarating",
                    isRequired: true,
                    "visibleIf": "{pizza.length} > 0",
                    "title": "Please rate these pizza(s)?",
                    "rowsVisibleIf": "{pizza} contains {item}",
                    cellType: "barrating",
                    choices: [
                        1, 2, 3, 4, 5
                    ],
                    "columns": [
                        {
                            name: "Taste",
                            isRequired: true
                        }, {
                            name: "Mouth Feel",
                            isRequired: true
                        }, {
                            name: "Overall Rating",
                            isRequired: true
                        }
                    ],
                    "rows": [
                        "Cheese Pizza",
                        "Pepperoni Pizza",
                        "Meat Lover's Pizza",
                        "Hawaiian Pizza",
                        "Veggie Pizza"
                    ]
                }
            ]
        };;
        
        var surveyRender = !this.state.isCompleted ? (
            <Survey.Survey
                json={json}
                showCompletedPage={false}
                onComplete={this.onCompleteComponent}
            />
        ) : null;  
        
        var onSurveyCompletion = this.state.isCompleted ? (
            <div> Thanks for completing the survey! </div>
        ) : null;

    return (                                                       //dark is the default format
        <div className="App">
                <ReactBootstrap.Navbar collapseOnSelect expand="md" bg="danger" variant="dark">
            <ReactBootstrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootstrap.Nav className="mr-auto">
                <ReactBootstrap.Nav.Link href="#aboutus">About Us</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link href="#pricing">Pricing</ReactBootstrap.Nav.Link>
                <ReactBootstrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <ReactBootstrap.NavDropdown.Item href="#action/3.1">Action</ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Divider />
                    <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
                </ReactBootstrap.NavDropdown>
                </ReactBootstrap.Nav>
                <ReactBootstrap.Nav>
                <ReactBootstrap.Nav.Link href="#deets">More stuff</ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link eventKey={2} href="#memes">
                </ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>  
            <div>
                {surveyRender}
                {onSurveyCompletion}
            </div> 
        </div>
            );
        }
}

export default App;


// import './App.css';
// import React from 'react';
// import * as ReactBootstrap from "react-bootstrap";
// import { Carousel } from 'bootstrap';


// function App() {
//   return (                                                       //dark is the default format
//       <ReactBootstrap.Navbar collapseOnSelect expand="md" bg="danger" variant="dark">
//   <ReactBootstrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootstrap.Navbar.Brand>
//   <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
//     <ReactBootstrap.Nav className="mr-auto">
//       <ReactBootstrap.Nav.Link href="#features">Features</ReactBootstrap.Nav.Link>
//       <ReactBootstrap.Nav.Link href="#pricing">Pricing</ReactBootstrap.Nav.Link>
//       <ReactBootstrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//         <ReactBootstrap.NavDropdown.Item href="#action/3.1">Action</ReactBootstrap.NavDropdown.Item>
//         <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
//         <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
//         <ReactBootstrap.NavDropdown.Divider />
//         <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
//       </ReactBootstrap.NavDropdown>
//     </ReactBootstrap.Nav>
//     <ReactBootstrap.Nav>
//       <ReactBootstrap.Nav.Link href="#deets">More stuff</ReactBootstrap.Nav.Link>
//       <ReactBootstrap.Nav.Link eventKey={2} href="#memes">
//         Even more stuff
//       </ReactBootstrap.Nav.Link>
//     </ReactBootstrap.Nav>
//   </ReactBootstrap.Navbar.Collapse>
// </ReactBootstrap.Navbar>
     
//   );
//   }
// export default App;
  
// <Carousel>BRUH</Carousel>

