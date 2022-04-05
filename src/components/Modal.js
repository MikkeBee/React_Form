import React from "react";

const Modal = (props) => {
  return (
    <section className="overlay">
      <div className="modalWindow">
        <div className="modalContent">
          <h2>Your note:</h2>
          <p>First Name:</p>
          <p>Last Name:</p>
          <p>Phone Number:</p>
          <p>Role:</p>
          <p>Message:</p>
          <div className="buttonArea">
            <button type="button" className="imSure">
              Yes, I am sure
            </button>
            <button type="button" className="notSure">
              Nope, don't want to post it
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
