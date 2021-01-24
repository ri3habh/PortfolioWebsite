import './App.css';
import React, {Component} from 'react';
import * as ReactBootstrap from "react-bootstrap";
import "survey-react/survey.css";
import Aboutme from './components/aboutme';
import Navbar from './components/navbar';
import * as Survey from "survey-react";
import { LinkContainer } from "react-router-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Projects from './components/Projects';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends Component { 
    render(){
    return (                                                     
        <div className="App">
          <div className="page-container">
            <div className="content-wrap">

            <Router>
               <Navbar/>
            
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/aboutme" component={Aboutme}>
            <Aboutme />
          </Route>
          <Route path="/Projects" component={Projects}>
            <Projects />
          </Route>
          <Route path="/" component={Home}>
            <Home />
          </Route>
        </Switch>
            </Router>
            </div>
           
            
          </div>
          <Footer/>
        </div>
                ); 
        }
    }
    
export default App;


