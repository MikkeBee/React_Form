import React from "react";

const Modal = (props) => {
  return (
    <section className="overlay">
      <div className="modalWindow">
        <div className="modalContent">
          <h2>Your note:</h2>
          <p>
            First Name: <span>{props.firstname}</span>
          </p>
          <p>
            Last Name: <span>{props.lastname}</span>
          </p>
          <p>
            Phone Number: <span>{props.phonenumber}</span>
          </p>
          <p>
            Role: <span>{props.role}</span>
          </p>
          <p>
            Message: <span>{props.message}</span>
          </p>
          <div className="buttonArea">
            <button
              type="button"
              className="imSure"
              onClick={props.reloadHandler}
            >
              Yes, I am sure
            </button>
            <button
              type="button"
              className="notSure"
              onClick={props.reloadHandler}
            >
              Nope, don't want to post it
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
