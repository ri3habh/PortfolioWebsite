{/*import './App.css';
import React, {Component} from 'react';
import * as ReactBootstrap from "react-bootstrap";
import "survey-react/survey.css";
import About from './components/aboutus';
import * as Survey from "survey-react";

class Survey extends Component { 
    render(){
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
                        name: "Texture",
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


export default Survey;
    */}
    