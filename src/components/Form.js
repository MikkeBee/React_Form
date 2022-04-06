import React from "react";
//in order for this to work, name has to be given, not just className
const Forms = (props) => {
  return (
    <form className="formyform">
      <div className="inputArea">
        <label>First Name</label>
        <input
          type="text"
          className="firstname"
          name="firstname"
          onChange={props.formHandler}
        />
      </div>
      <div className="inputArea">
        <label>Last Name</label>
        <input
          type="text"
          className="lastname"
          name="lastname"
          onChange={props.formHandler}
        />
      </div>
      <div className="inputArea">
        <label>Phone Number</label>
        <input
          type="number"
          className="phonenumber"
          name="phonenumber"
          onChange={props.formHandler}
        />
      </div>
      <div className="inputArea">
        <label>Role</label>
        <select
          defaultValue="default"
          name="role"
          className="role"
          onChange={props.formHandler}
        >
          <option value="default" hidden>
            Select your role
          </option>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="inputArea">
        <label>Message</label>
        <textarea
          name="message"
          className="messanger"
          form="formyform"
          onChange={props.formHandler}
        ></textarea>
      </div>
      <div className="buttonBox">
        <button className="sendButton" onClick={props.modalHandler}>
          Send
        </button>
      </div>
    </form>
  );
};

export default Forms;
