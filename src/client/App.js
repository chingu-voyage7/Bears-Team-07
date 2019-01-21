import React from "react";
import { Router } from "@reach/router";
import LandingPage from "./Components/LandingPage/Index";
import Demo from "./Components/demo/Demo";
import Notebook from "./Components/demo/Notebook";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <LandingPage path="/" />
          <Demo path="/demo" />
          <Notebook path="demo/notebook" />
        </Router>
      </div>
    );
  }
}

export default App;
