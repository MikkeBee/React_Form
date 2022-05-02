import React, { Component } from "react";
import axios from "axios";

class Data extends Component {
  state = {
    notes: [],
    isLoading: true,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("http://localhost:3010/notes")
      .then((response) =>
        this.setState({ notes: response.data, isLoading: false })
      );
  }
  render() {
    return (
      <div className="dataDiv">
        {this.state.notes.map((note) => (
          <p>
            {note.id}. {note.firstname} {note.lastname} | {note.phone} |{" "}
            {note.role} | {note.message}
          </p>
        ))}
      </div>
    );
  }
}

export default Data;
