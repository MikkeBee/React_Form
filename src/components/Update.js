import React from "react";
import Modal from "./Modal";

const Update = (props) => {
  return (
    <section className="overlay2">
      <div className="modalWindow2">
        <div className="modalContent2">
          <form
            className="formyformyform"
            onChange={props.input}
            onSubmit={props.poster}
          >
            <div className="inputArea2">
              <label>First Name</label>
              <input
                type="text"
                className="firstname"
                name="firstname"
                required
                defaultValue={props.firstname}
              />
            </div>
            <div className="inputArea2">
              <label>Last Name</label>
              <input
                type="text"
                className="lastname"
                name="lastname"
                required
                defaultValue={props.lastname}
              />
            </div>
            <div className="inputArea2">
              <label>Phone Number</label>
              <input
                type="number"
                className="phonenumber"
                name="phonenumber"
                required
                defaultValue={props.phonenumber}
              />
            </div>
            <div className="inputArea2">
              <label>Role</label>
              <select
                name="role"
                className="role"
                required
                defaultValue={props.role}
              >
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="inputArea2">
              <label>Message</label>
              <textarea
                name="message"
                className="messanger"
                required
                defaultValue={props.message}
              />
            </div>
            <div className="buttonBox">
              <button className="sendButton" type="submit">
                Send <i className="fa-regular fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Update;
