import "./index";
import React, { Component } from "react";
import Forms from "./components/Form";
import View from "./components/View";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    role: "",
    message: "",
  };

  formHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Forms />
        <View
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          role={this.state.role}
          message={this.state.message}
        />
        <Modal />
      </div>
    );
  }
}

export default App;
