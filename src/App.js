import React from "react";
import GithubState from "./context/github/GithubState";
import "./index.css";

const App = () => {
  return (
    <GithubState>
      <div className="App">
        <div className="container">Github Project</div>
      </div>
    </GithubState>
  );
};

export default App;
