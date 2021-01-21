import React, {Component} from 'react';

import './style/App.css';
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Contact from "./Contact";
import {Route,Switch} from "react-router-dom";
import Navbar from "./Navbar";


class App extends Component{
  render() {
    return (
      <div>
  
        <Navbar/>
  
        <Switch>
      
          <Route exact path="/" component={Home} />
          <Route exact  path="/about" component={About}/>
          <Route exact path="/shop" component={Shop}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </div>
    )
  }
  
  }
      
   
  export default App;


