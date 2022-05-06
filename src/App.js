import "./index";
// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import Forms from "./components/Form";
import View from "./components/View";
import Modal from "./components/Modal";
import Data from "./components/Data";
import Update from "./components/Update";
import axios from "axios";

// class App extends Component {
//   state = {
//     inputData: {
//       firstname: "",
//       lastname: "",
//       phonenumber: "",
//       role: "",
//       message: "",
//     },
//     showModal: false,
//     showModal2: false,
//     notes: [],
//     currentNote: {},
//   };

const App = () => {
  const [inputData, setInputData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    role: "",
    message: "",
  });
  const [showModal, setWindow1] = useState(false);
  const [showModal2, setWindow2] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({});

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:3010/notes")
  //     .then((response) => this.setState({ notes: response.data }));
  // }

  useEffect(() => {
    axios.get("http://localhost:3010/notes").then((res) => {
      setNotes(res.data);
    });
  }, []);

  // formHandler = (event) => {
  //   this.setState({
  //     inputData: {
  //       ...this.state.inputData, //copies the current object
  //       [event.target.name]: event.target.value,
  //     }, //overrides the object values for changed fields
  //   });
  // };

  const formHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  // modalHandler = (e) => {
  //   e.preventDefault();
  //   this.setState({ showModal: !this.state.showModal }); //changes boolean of showModal to opposite
  // };

  const modalHandler = (e) => {
    e.preventDefault();
    setWindow1(true); //changes boolean of showModal to opposite
  };

  // openHandler = (note) => {
  //   this.setState({ showModal2: true, currentNote: note });
  // };

  const openHandler = (note) => {
    setWindow2(true);
    setCurrentNote(note);
  };

  // submitHandler = () => {
  //   axios
  //     .post("http://localhost:3010/notes", this.state.inputData)
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error));

  //   window.location.reload();
  // };

  const submitHandler = () => {
    axios
      .post("http://localhost:3010/notes", inputData)
      .then(() => {
        reloadEventHandler();
      })
      .catch((error) => console.log(error));
  };

  // postHandler = (id) => {
  //   axios
  //     .put(`http://localhost:3010/notes/${id}`, this.state.currentNote)
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error));
  // };

  const postHandler = () => {
    axios
      .put(`http://localhost:3010/notes/${currentNote.id}`, currentNote)
      .then(() => {
        setInputData(currentNote);
        setWindow2(false);
      })
      .catch((error) => console.log(error));
  };

  // reloadEventHandler = () => {
  //   window.location.reload();
  // };
  //reloads page after modal close

  const reloadEventHandler = () => {
    window.location.reload();
  };
  //reloads page after modal close

  // inputUpdateHandler = (event) => {
  //   this.setState({
  //     currentNote: {
  //       ...this.state.currentNote,
  //       [event.target.name]: event.target.value,
  //     },
  //   });
  // };

  const inputUpdateHandler = (event) => {
    setCurrentNote({
      ...currentNote,
      [event.target.name]: event.target.value,
    });
  };

  // deleteHandler = (id) => {
  //   axios.delete(`http://localhost:3010/notes/${id}`).then((res) => {
  //     const items = this.state.notes.filter((item) => item.id !== id);
  //     console.log("delete mofo!");
  //     this.setState({ notes: items });
  //   });
  // };

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:3010/notes/${id}`).then(() => {
      const items = notes.filter((item) => item.id !== id);
      setNotes(items);
    });
  };

  /*
  popupHandler = (e) => {
  e.preventDefault();
  this.setState({showPopup: !this.state.showPopup});
  };
  */

  // render() {
  // const { firstname, lastname, phonenumber, role, message } = this.state;
  // destructuring format - with this, this.state.xxx can be shortened to just xxx
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="upperHalf">
        <Forms
          formHandler={formHandler}
          modalHandler={modalHandler}
          /*submit={this.popupHandler}
          on form page add this popupHandler, and add "submit" type to button
*/
        />
        {showModal2 && (
          <Update
            {...currentNote}
            poster={postHandler}
            // postHandler(...currentNote.id);

            input={inputUpdateHandler}
          />
        )}
        <View
          // {...this.state.inputData} using this no need to declare the below names
          // firstname={this.state.firstname}
          // lastname={this.state.lastname}
          // phonenumber={this.state.phonenumber}
          // role={this.state.role}
          // message={this.state.message}
          {...inputData}
        />
      </div>
      <Data notes={notes} deleteHandler={deleteHandler} opener={openHandler} />
      {showModal && (
        <Modal
          {...inputData}
          submitHandler={submitHandler}
          // reloadHandler={reloadEventHandler}
          // submitHandler={submitHandler} reuse this!!!
          //showModal is initially false, and this will show the modal only when showModal is true
        />
        /*
          {this.state.showModal && <Modal />} this will handle toggling the button on and off

        */
      )}
    </div>
  );
};
// }

export default App;
