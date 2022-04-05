import "./index";
import React, { Component } from "react";
import Forms from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Forms />
      <div>
        <div className="paperArea">
          <div className="vertical">
            <p className="firstP">Hello</p>
            <p>Test</p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
