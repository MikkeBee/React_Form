import "./index";
import React, { Component } from "react";
import Forms from "./components/Form";
import View from "./components/View";
import Modal from "./components/Modal";
import Data from "./components/Data";
import Update from "./components/Update";
import axios from "axios";

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      role: "",
      message: "",
    },
    showModal: false,
    showModal2: false,
    notes: [],
    currentNote: {},
  };

  componentDidMount() {
    axios
      .get("http://localhost:3010/notes")
      .then((response) => this.setState({ notes: response.data }));
  }

  deleteHandler = (id) => {
    axios.delete(`http://localhost:3010/notes/${id}`).then((res) => {
      const items = this.state.notes.filter((item) => item.id !== id);
      console.log("delete mofo!");
      this.setState({ notes: items });
    });
  };

  openHandler = (note) => {
    this.setState({ showModal2: true, currentNote: note });
  };

  inputUpdateHandler = (event) => {
    this.setState({
      currentNote: {
        ...this.state.currentNote,
        [event.target.name]: event.target.value,
      },
    });
  };

  postHandler = (id) => {
    axios
      .put(`http://localhost:3010/notes/${id}`, this.state.currentNote)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  formHandler = (event) => {
    this.setState({
      inputData: {
        ...this.state.inputData, //copies the current object
        [event.target.name]: event.target.value,
      }, //overrides the object values for changed fields
    });
  };

  modalHandler = (e) => {
    e.preventDefault();
    this.setState({ showModal: !this.state.showModal }); //changes boolean of showModal to opposite
  };

  /*
  popupHandler = (e) => {
  e.preventDefault();
  this.setState({showPopup: !this.state.showPopup});
  };
  */

  submitHandler = () => {
    axios
      .post("http://localhost:3010/notes", this.state.inputData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    window.location.reload();
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
          {this.state.showModal2 && (
            <Update
              {...this.state.currentNote}
              poster={() => this.postHandler(this.state.currentNote.id)}
              input={this.inputUpdateHandler}
            />
          )}
          <View
            // {...this.state.inputData} using this no need to declare the below names
            // firstname={this.state.firstname}
            // lastname={this.state.lastname}
            // phonenumber={this.state.phonenumber}
            // role={this.state.role}
            // message={this.state.message}
            {...this.state.inputData}
          />
        </div>
        <Data
          notes={this.state.notes}
          deleteHandler={this.deleteHandler}
          opener={this.openHandler}
        />
        {this.state.showModal && (
          <Modal
            {...this.state.inputData}
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
