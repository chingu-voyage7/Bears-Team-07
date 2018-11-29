import React from "react";
import { Router, Link } from "@reach/router";
import './App.css';
import LandingPage from './Components/LandingPage/Index'


class App extends React.Component {
  render() {
    return (
      <div className='pink'>
        <Router>
          <LandingPage path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
