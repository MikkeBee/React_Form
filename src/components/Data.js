import React from "react";

const Data = (props) => {
  return (
    <ol className="dataDiv">
      {props.notes.map((note) => (
        <li key={note.id}>
          {note.firstname} {note.lastname} | {note.phonenumber} | {note.role} |{" "}
          {note.message}{" "}
          <button
            type="button"
            className="delButton"
            onClick={() => props.deleteHandler(note.id)}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
          <button
            type="button"
            className="delButton"
            onClick={() => props.opener(note)}
          >
            <i className="fa-solid fa-pencil"></i>
          </button>
        </li>
      ))}
    </ol>
  );
};

export default Data;
