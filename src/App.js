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
    showModal: false,
  };

  formHandler = (event) => {
    this.setState({
      ...this.state, //copies the current object
      [event.target.name]: event.target.value, //overrides the object values for changed fields
    });
  };

  modalHandler = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, showModal: !this.state.showModal }); //changes boolean of showModal to opposite
  };

  reloadEventHandler = () => {
    window.location.reload();
  };

  render() {
    // const { firstname, lastname, phonenumber, role, message } = this.state;
    // destructuring format - with this, this.state.xxx can be shortened to just xxx
    return (
      <div className="App">
        <header className="App-header"></header>
        <Forms
          formHandler={this.formHandler}
          modalHandler={this.modalHandler}
        />
        <View
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          role={this.state.role}
          message={this.state.message}
        />
        {this.state.showModal && (
          <Modal
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            phonenumber={this.state.phonenumber}
            role={this.state.role}
            message={this.state.message}
            reloadHandler={this.reloadEventHandler}
            //showModal is initially false, and this will show the modal only when showModal is true
          />
        )}
      </div>
    );
  }
}

export default App;
