import React from "react";

const Data = (props) => {
  return (
    <ol className="dataDiv">
      {props.notes.map((note) => (
        <li key={note.id}>
          {note.firstname} {note.lastname} | {note.phone} | {note.role} |{" "}
          {note.message}
        </li>
      ))}
    </ol>
  );
};

export default Data;
