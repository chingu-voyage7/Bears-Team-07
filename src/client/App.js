import React from "react";
import { Router, Link } from "@reach/router";
import LandingPage from './Components/LandingPage/Index'


class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <LandingPage path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
