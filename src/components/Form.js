import React from "react";

const Forms = (props) => {
  return (
    <form className="formyform">
      <div className="inputArea">
        <label>First Name</label>
        <input type="text" className="firstname" onChange={props.formHandler} />
      </div>
      <div className="inputArea">
        <label>Last Name</label>
        <input type="text" className="lastname" onChange={props.formHandler} />
      </div>
      <div className="inputArea">
        <label>Phone Number</label>
        <input
          type="number"
          className="phonenumber"
          onChange={props.formHandler}
        />
      </div>
      <div className="inputArea">
        <label>Role</label>
        <select name="role" className="role">
          {/* <option value="" disabled selected>
            Select your role
          </option> Ask Margit about this*/}
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
        <input type="submit" value="Send" className="sendButton" />
      </div>
    </form>
  );
};

export default Forms;
