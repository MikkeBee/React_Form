import "./index";
import React, { Component } from "react";
import Forms from "./components/Form";
import View from "./components/View";
import Modal from "./components/Modal";
import Data from "./components/Data";
import axios from "axios";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    role: "",
    message: "",
    showModal: false,
  };

  /*
    using subclasses
    state = {
      inputData: {
      f
      l
      p
      r
      m
      },
      showPopup: false,
    }
    */

  formHandler = (event) => {
    this.setState({
      ...this.state, //copies the current object
      [event.target.name]: event.target.value, //overrides the object values for changed fields
    });
  };

  /*
  when using subclasses and making an event handler
  inputHandler = (e) => {
  this.setState({
  inputData: { ...this.state.inputData, [e.target.name]: e.target.value},
  });
  };
  for this calling in "view" would be firstname={this.state.inputData.firstname}
  */

  modalHandler = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, showModal: !this.state.showModal }); //changes boolean of showModal to opposite
  };

  /*
  popupHandler = (e) => {
  e.preventDefault();
  this.setState({showPopup: !this.state.showPopup});
  };
  */

  submitHandler = () => {
    axios
      .post("http://localhost:3010/notes", { data })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  reloadEventHandler = () => {
    window.location.reload();
  };
  //reloads page after modal close

  render() {
    // const { firstname, lastname, phonenumber, role, message } = this.state;
    // destructuring format - with this, this.state.xxx can be shortened to just xxx
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className="upperHalf">
          <Forms
            formHandler={this.formHandler}
            modalHandler={this.modalHandler}
            /*submit={this.popupHandler}
          on form page add this popupHandler, and add "submit" type to button
*/
          />
          <View
            // {...this.state.inputData} using this no need to declare the below names
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            phonenumber={this.state.phonenumber}
            role={this.state.role}
            message={this.state.message}
          />
        </div>
        <Data />
        {this.state.showModal && (
          <Modal
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            phonenumber={this.state.phonenumber}
            role={this.state.role}
            message={this.state.message}
            reloadHandler={this.reloadEventHandler}
            submitHandler={this.submitHandler}
            //showModal is initially false, and this will show the modal only when showModal is true
          />
          /*
          {this.state.showModal && <Modal />} this will handle toggling the button on and off

        */
        )}
      </div>
    );
  }
}

export default App;
