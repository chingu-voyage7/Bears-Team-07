import React from "react";
import { Router, Link } from "@reach/router";
import SecondPage from "./SecondPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hey there!!</h1>
        <Router>
          <SecondPage path="second" />
        </Router>
        <Link to="second">
          <p>Second Page</p>
        </Link>
      </div>
    );
  }
}

export default App;
